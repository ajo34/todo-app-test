(ns clojs.app
  (:require [clojure.string :as str]
            [clojure.walk :as walk]
            [replicant.dom :as r-dom]
            [cognitect.transit :as t]))

(defonce !state (atom nil))

(def default-state {:list/todo-items {}
                    :list/filter "All"})
(def storage-key "todo")
(def persist-keys [:list/todo-items
                   :list/filter])

(defn- load-persisted! []
  (or (->> (.getItem js/localStorage storage-key)
           (t/read (t/reader :json)))
      default-state))

(defn- persist! [state]
  (.setItem js/localStorage storage-key (t/write (t/writer :json) (select-keys state persist-keys))))


(defn watch! [render!]
  (add-watch !state :persist (fn [_ _ old-state new-state]
                               (when (not= old-state new-state)
                                 (render! new-state)
                                 (when (not= (select-keys old-state persist-keys)
                                             (select-keys new-state persist-keys))
                                   (persist! new-state))))))



(defn maybe-add [coll s]
  (let [trimmed (str/trim s)]
    (if (empty? s)
      coll
      (assoc coll (random-uuid) {:item/title trimmed
                                 :item/completed? false
                                 :item/editing? false}))))


(defn filter-items [todo-items filter-type]
  (case filter-type
    "All" todo-items
    "Completed" (into {} (filter (fn [[_key val]] (:item/completed? val)) todo-items))
    "Active" (into {} (filter (fn [[_key val]] (not (:item/completed? val))) todo-items))
    todo-items))

(defn mark-all-as [items completed?]
  (into {} (map (fn [[id item]] [id (assoc item :item/completed? completed?)]) items)))


(defn all-complete? [items]
  (every? true? (map #(:item/completed? %) (vals items))))




(comment (defn- display-view [{:something/keys [draft saved]}]
           [:div
            [:h2 "On display"]
            [:ul
             [:li {:replicant/key "draft"} "Draft: " draft]
             [:li {:replicant/key "saved"} "Saved: " saved]]]))


(defn- item-view [item]

  (if (:item/editing? (last item))
    [:li {:on {:dblclick [[:actions/assoc-in [:list/todo-items (first item) :item/title] :event/target.value]
                          [:actions/assoc-in [:list/todo-items (first item) :item/editing?] false]]}}
     [:input {:value (:item/title (last item))
              :class "edit"}]]

    [:li {:key (first item)
          :on {:dblclick [[:actions/assoc-in [:list/todo-items (first item) :item/editing?] true]]}}
     [:input {:type :checkbox
              :class "checkbox"
              :checked (:item/completed? (last item))
              :on {:click [[:actions/assoc-in [:list/todo-items (first item) :item/completed?] :event/target.checked]]}}]
     [:p
      (:item/title (last item))]
     [:button {:class "x"
               :on {:click [[:actions/delete :list/todo-items [(first item)]]]}} "X"]]))


(defn- todo-list-view [{:keys [list/todo-items list/filter]}]
  [:div#list-container
   [:ul.todo-list
    (map item-view (filter-items todo-items filter))]

   [:div#mark-all-container [:input#complete-all-box {:type "checkbox"
                                                      :checked (all-complete? todo-items)
                                                      :on {:click [[:actions/mark-all-as :list/todo-items :event/target.checked]]}}]
    [:label "Mark all"]]
   [:div#list-footer


    [:p (let [n (count (filter-items todo-items "Active"))] (str n " Item" (if (= n 1) "" "s") " left"))]
    [:select {:value filter
              :on {:change [[:actions/assoc-in [:list/filter] :event/target.value]]}}
     [:option {:value "All" :selected (= filter "All")} "All"]
     [:option {:value "Active" :selected (= filter "Active")} "Active"]
     [:option {:value "Completed" :selected (= filter "Completed")} "Completed"]]

    [:button {:on {:click [[:actions/reset]]}} "RESET!"]

    [:button {:on {:click [[:actions/delete :list/todo-items (keys (filter-items todo-items "Completed"))]]}}
     "Clear completed"]]])



(defn- main-view [state]
  [:div.appapp
   [:h1 "List"]

   [:input.adder {:on {:keyup [[:actions/add-on-enter :list/todo-items :event/target.value :event/key]]}}]

   ;(display-view state)
   (todo-list-view state)])

(defn- render! [state]
  (r-dom/render
   (js/document.getElementById "app")
   (main-view state)))









(defn- enrich-action-from-event [{:replicant/keys [js-event node]} actions]
  (walk/postwalk
   (fn [x]
     (cond
       (keyword? x) (case x
                      :event/target.value (-> js-event .-target .-value)
                      :event/target.checked (-> js-event .-target .-checked)
                      :event/key (-> js-event .-key)
                      :dom/node node
                      x)
       :else x))
   actions))

(defn- enrich-action-from-state "s" [state action]

  (walk/postwalk
   (fn [x]
     (cond
       (and (vector? x)
            (= :actions/get (first x))) (get state (second x))
       :else x))
   action))


(defn event-handler "Handles events and actions, and performs effects"
  [{:replicant/keys [^js js-event] :as replicant-data} actions]
  (doseq [action actions] ;Iterates over every action
    (prn "action" action)
    ;Formats into [action-name, arguments]
    (let [enriched-action (->> action
                               (enrich-action-from-event replicant-data)
                               (enrich-action-from-state @!state))
          [action-name & args] enriched-action]
      (prn "rich: " enriched-action  "event: " js-event "args: " args)
      ;performs effects by action-name
      (case action-name
        :actions/add-on-enter (when (= (last args) "Enter")
                                (swap! !state update (first args) maybe-add (second args)))
        :actions/reset (reset! !state default-state)
        :actions/delete (swap! !state update-in [(first args)] #(apply dissoc % (second args)))
        :actions/assoc-in (swap! !state assoc-in (first args) (second args))
        :actions/mark-all-as (swap! !state update (first args) mark-all-as (last args)))))
  (prn "newstate" @!state)
  (render! @!state))






(defn ^{:dev/after-load true :export true} start! []
  (render! @!state))


(defn ^:export init! []
  (reset! !state (load-persisted!))
  (r-dom/set-dispatch! event-handler)
  (watch! render!)
  (start!))









(comment

  (def example
    {#uuid "d2f5fed7-d78b-4849-a912-328096052ca5" {:item/title "fghf", :item/completed? true},
     #uuid "833fccd0-2030-4555-88bb-7c598100b13d" {:item/title "fghfd", :item/completed? true},
     #uuid "6743cad2-d9df-4a02-b479-ed60f795714b" {:item/title "fghfdgds", :item/completed? true}})


  '(:actions/add (swap! !state update (first args) maybe-add (second args))
                 :actions/filter (swap! !state assoc (first args) (second args))
                 :actions/edit (swap! !state assoc-in [(first args) (second args) :item/editing?] (last args))
                 :actions/completeedit (swap! !state assoc-in [(first args) (second args) :item/title] (last args))
                 :actions/assoc (apply swap! !state assoc args)
                 :actions/newcomplete (swap! !state assoc-in [(first args) (second args) :item/completed?] (last args)))



  (def testmap {:rand "rand"
                :list {0 {:item/title "title"
                          :item/completed? "false"
                          :item/id "2"}
                       1 {:item/title "title3"
                          :item/completed? "falser"
                          :item/id "3"}}})
  (example)
  (testmap))