(ns clojs.app
  (:require [replicant.dom :as r-dom]
            [cognitect.transit :as t]
            [clojs.views :as views]
            [clojs.actions :as actions]
            [clojs.db :as db]))




(defn- render! [state]
  (r-dom/render
   (js/document.getElementById "app")
   (views/main-view state)))





(defn event-handler [{:replicant/keys [^js js-event] :as replicant-data} actions]
  (actions/handle-action db/!state replicant-data actions))



(defn ^{:dev/after-load true :export true} start! []
  (render! @db/!state))


(defn ^:export init! []
  (db/init!)
  (r-dom/set-dispatch! event-handler)
  (db/watch! render!)
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