(ns clojs.app
  (:require [clojure.string :as str]
            [clojure.walk :as walk]
            [replicant.dom :as r-dom]))

(def default-state {:list/todo-items {}})

(defonce !state (atom default-state))

(defn maybe-add [coll s]
  (let [trimmed (str/trim s)]
    (if (empty? s)
      coll
      (assoc coll (random-uuid) {:item/title trimmed
                                 :item/completed? false}))))



(defn- display-view [{:something/keys [draft saved]}]
  [:div
   [:h2 "On display"]
   [:ul
    [:li {:replicant/key "draft"} "Draft: " draft]
    [:li {:replicant/key "saved"} "Saved: " saved]]])


(defn- item-view [item]
  (println "item:" item)
  [:li {:key (first item)
        :on {:click [[:db/newcomplete :list/todo-items (first item)]]}}
   (str "item " (:item/title (last item)))])


(def exap
  {#uuid "d2f5fed7-d78b-4849-a912-328096052ca5" {:item/title "fghf", :item/completed? false},
   #uuid "833fccd0-2030-4555-88bb-7c598100b13d" {:item/title "fghfd", :item/completed? false},
   #uuid "6743cad2-d9df-4a02-b479-ed60f795714b" {:item/title "fghfdgds", :item/completed? false}})



(defn- todo-list-view [{:keys [list/todo-items]}]
  [:ul.todo-list
   (map item-view todo-items)])

(defn- main-view [state]
  [:div
   [:h1 "A tiny (and silly) Replicant example"]
   [:input {:on {:click [[:db/add :list/todo-items :event/target.value]
                         [:db/assoc :something/draft :event/target.value]]}}]
   [:button {:on {:click [[:db/reset]]}} "RESET!"]
   (display-view state)
   [:h2 "list (real)"]
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
                      :dom/node node
                      x)
       :else x))
   actions))

(defn- enrich-action-from-state "s" [state action]

  (walk/postwalk
   (fn [x]
     (cond
       (and (vector? x)
            (= :db/get (first x))) (get state (second x))
       :else x))
   action))

(defn getter [list id]
  (filter #(= id (% :item/id)) list))

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


(defn event-handler "Handles events and actions, and performs effects"
  [{:replicant/keys [^js js-event] :as replicant-data} actions]
  (doseq [action actions] ;Iterates over every action
    (prn "action" action)
    ;Formats into [action-name, arguments]
    (let [enriched-action (->> action
                               (enrich-action-from-event replicant-data)
                               (enrich-action-from-state @!state))
          [action-name & args] enriched-action]
      (prn "rich: " enriched-action "event: " js-event "state: " @!state)
      ;performs effects by action-name
      (case action-name
        :db/add (swap! !state update (first args) maybe-add (second args))
        :db/reset (reset! !state default-state)
        :db/delete (swap! !state remove   (first args))
        :db/complete (swap! !state update (first args)
                            (fn [list id]
                              (println "AAA" list id (getter list id))
                              (assoc (first (getter list id)) :item/completed? "true"))
                            (second args))
        :db/newcomplete (swap! !state assoc-in [(first args) (second args) :item/completed?] "true")
        :db/assoc (apply swap! !state assoc args)
        :db/dissoc (apply swap! !state dissoc args))))
  (prn "newstate" @!state)
  (render! @!state))

(remove #(= % 2) (range 10))


(defn ^:export init! []

  ;(inspector/inspect "App state" db/!state)
  (r-dom/set-dispatch! event-handler)
  ;(router/start! router/routes event-handler)
           ;(db/watch! render!)
  (start!))

