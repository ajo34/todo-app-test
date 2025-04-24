(ns clojs.core)

(defn init []
  (js/console.log "running"))

(println "Hello world!")

(def box (js/document.getElementById "box"))

;(set! box -innerHTML "<button>click me!</button>")

(def btn (js/document.createElement "button"))
(set! btn -innerHTML "click me!")
(.addEventListener btn "click"
                   (fn []
                     (println "clocked")
                     (js/console.log "clucked!")
                     (js/console.log "clacked!")))

(.appendChild box (doto btn))