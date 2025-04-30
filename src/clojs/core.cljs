(ns clojs.core
  (:require [replicant.dom :as r]
            [main :as server]))

(defn init []
  (js/console.log "running"))
(str 1 1)
(println "Hello world!")

(def box (js/document.getElementById "box"))

;(set! box -innerHTML "<button>click me!</button>")

(def btn (js/document.createElement "button"))
(set! btn -innerHTML "click me!")
(.addEventListener btn "click"
                   (fn []
                     (println "clocked")
                     (js/console.log "clacked!")))

(.appendChild box (doto btn))


