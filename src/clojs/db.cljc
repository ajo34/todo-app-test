(ns clojs.db
  (:require [cognitect.transit :as t]))



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


(defn init! []
  (reset! !state (load-persisted!)))