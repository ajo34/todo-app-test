(ns clojs.app
  (:require [clojure.string :as str]
            [clojure.walk :as walk]
            [replicant.dom :as r-dom]))

(def default-state {:list/todo-items {}
                    :list/filter "All"})

(defonce !state (atom default-state))

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



(comment (defn- display-view [{:something/keys [draft saved]}]
           [:div
            [:h2 "On display"]
            [:ul
             [:li {:replicant/key "draft"} "Draft: " draft]
             [:li {:replicant/key "saved"} "Saved: " saved]]]))


(defn- item-view [item]
  (println "item:" item)
  (if (:item/editing? (last item))
    [:li {:on {:dblclick [[:actions/edit :list/todo-items (first item) false]]}}
     [:input {:value (:item/title (last item))
              :class "edit"}]]
    [:li {:key (first item)
          :on {:dblclick [[:actions/edit :list/todo-items (first item) true]]}}
     [:input {:type :checkbox
              :class "checkbox"
              :checked (:item/completed? (last item))
              :on {:click [[:actions/newcomplete :list/todo-items (first item) :event/target.checked]]}}]
     [:p
      (:item/title (last item))]
     [:button {:class "x"
               :on {:click [[:actions/delete :list/todo-items (first item)]]}} "X"]]))


(defn- todo-list-view [{:keys [list/todo-items list/filter]}]
  [:div
   [:ul.todo-list
    (map item-view (filter-items todo-items filter))]
   [:div [:p (let [n (count (filter-items todo-items "Active"))] (str n " Item" (if (= n 1) "" "s") " left"))]
    [:select {:value filter
              :on {:change [[:actions/filter :list/filter :event/target.value]]}}
     [:option "All"]
     [:option "Active"]
     [:option "Completed"]]
    [:button {:on {:click [[:actions/reset]]}} "RESET!"]]])

(comment (let [completed-tasks (filter-items todo-items "Completed")]
           (if (completed-tasks)
             [:button {:on {:click [[:actions/delete :list/todo-items completed-tasks]]}} "Clear Completed"]
             nil)))

(defn- main-view [state]
  [:div.appapp
   [:h1 "List"]
   [:input.adder {:on {:click [[:actions/add :list/todo-items :event/target.value]
                         ;[:actions/assoc :something/draft :event/target.value]
                               ]}}]


   ;(display-view state)

   (todo-list-view state)])

(defn- render! [state]
  (r-dom/render
   (js/document.getElementById "app")
   (main-view state)))





(defn ^{:dev/after-load true :export true} start! []
  (render! @!state))




(defn- enrich-action-from-event [{:replicant/keys [js-event node]} actions]
  (walk/postwalk
   (fn [x]
     (cond
       (keyword? x) (case x
                      :event/target.value (-> js-event .-target .-value)
                      :event/target.checked (-> js-event .-target .-checked)
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
      (prn "rich: " enriched-action  "event: " js-event "state: " @!state "args: " args)
      ;performs effects by action-name
      (case action-name
        :actions/add (swap! !state update (first args) maybe-add (second args))
        :actions/reset (reset! !state default-state)

        :actions/assoc (apply swap! !state assoc args)
        :actions/newcomplete (swap! !state assoc-in [(first args) (second args) :item/completed?] (last args))

        :actions/filter (swap! !state assoc (first args) (second args))
        :actions/edit (swap! !state assoc-in [(first args) (second args) :item/editing?] (last args))
        :actions/delete (swap! !state update-in [(first args)] dissoc (second args)))))
  (prn "newstate" @!state)
  (render! @!state))

(defn ^:export init! []
  ;(inspector/inspect "App state" actions/!state)
  (r-dom/set-dispatch! event-handler)
  ;(router/start! router/routes event-handler)
  ;(actions/watch! render!)
  (start!))

(comment
  (def exap
    {#uuid "d2f5fed7-d78b-4849-a912-328096052ca5" {:item/title "fghf", :item/completed? false},
     #uuid "833fccd0-2030-4555-88bb-7c598100b13d" {:item/title "fghfd", :item/completed? false},
     #uuid "6743cad2-d9df-4a02-b479-ed60f795714b" {:item/title "fghfdgds", :item/completed? false}})
  (def testmap {:rand "rand"
                :list [{:item/title "title"
                        :item/completed? "false"
                        :item/id "2"}
                       {:item/title "title3"
                        :item/completed? "falser"
                        :item/id "3"}]})


  (assoc (first (getter [{:item/title "title"
                          :item/completed? "false"
                          :item/id "2"}
                         {:item/title "title3"
                          :item/completed? "falser"
                          :item/id "3"}] "2")) :item/completed? "tru")

  (defn getter [list id]
    (filter #(= id (% :item/id)) list))

  (fn [args] :actions/complete (swap! !state update (first args)
                                      (fn [list id]
                                        (println "AAA" list id (getter list id))
                                        (assoc (first (getter list id)) :item/completed? "true"))
                                      (second args))))