(ns clojs.actions
  (:require [clojure.string :as str]
            [clojure.walk :as walk]))



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

(defn- enrich-action-from-state  [state action]
  (walk/postwalk
   (fn [x]
     (cond
       (and (vector? x)
            (= :actions/get (first x)))
       (get state (second x))
       :else x))
   action))



(defn handle-action  "Handles events and performs actions"
  [state replicant-data actions]
  (doseq [action actions] ;Iterates over every action
    (prn "action" action)
    ;Formats into [action-name, arguments]
    (let [enriched-action (->> action
                               (enrich-action-from-event replicant-data)
                               (enrich-action-from-state @state))
          [action-name & args] enriched-action]
      (prn "rich: " enriched-action  "args: " args)
      ;performs effects by action-name
      (case action-name
        :actions/add-on-enter (when (= (last args) "Enter")
                                (swap! state update (first args) maybe-add (second args)))
        :actions/reset (reset! state {:list/todo-items {} :list/filter "All"})
        :actions/delete (swap! state update-in [(first args)] #(apply dissoc % (second args)))
        :actions/assoc-in (swap! state assoc-in (first args) (second args))
        :actions/mark-all-as (swap! state update (first args) mark-all-as (last args))))))
