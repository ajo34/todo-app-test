(ns hello-world.core)

(println "Hello world!")

(def numbers [1 2 4 5 7 43 223])

(doseq [n numbers]
  (println "The number is" n))