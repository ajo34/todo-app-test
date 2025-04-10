(ns hello-world.core)

(println "Hello world!")

(def box (js/document.getElementById "box"))

;(set! box -innerHTML "<button>click me!</button>")

(def btn (js/document.createElement "button"))
(set! btn -innerHTML "click me!")
(.addEventListener btn "click"
                   (fn []
                     (js/console.log "clicked!")))

(.appendChild box (doto btn))