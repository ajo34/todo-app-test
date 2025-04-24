(ns main
  (:require [io.pedestal.http :as http]
            [io.pedestal.http.route :as route]
            ;[shadow.cljs.devtools.api :as shadow]
            ))



(require '[next.jdbc :as jdbc] '[config :as config])

(def ds (jdbc/get-datasource config/db-config))

(defn ok [body]
  {:status 200 :body body :headers {"Content-Type" "text/html"}})


(defn greeting-for [nm]
  (cond
    (= nil nm) "Hello, person!\n"
    (= "" nm) "Bad request"
    :else (str "Hello, " nm "\n")))


(defn respond-hello [request]
  (let [nm (get-in request [:query-params :name])
        resp (greeting-for nm)]
    (ok resp)))

(defn respond-fetch [req]
  (println req)
  {:status 200
   :headers {"Content-Type" "application/json"}
   :body (jdbc/execute! ds ["SELECT * FROM users"])})

(defn res-html [req]
  (println req)
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body (slurp "public/index.html")})


(defn js-handler [req]
  (let [path "public/js/main.js"
        file (java.io.File. path)]
    (println "Serving file:" path)
    (try
      (if (.exists file)
        {:status 200
         :headers {"Content-Type" "application/javascript"}
         :body (slurp file)}
        {:status 404 :body "Not found"})
      (catch Exception e
        (println "Error reading file:" (.getMessage e))
        {:status 500
         :body "Internal server error"}))))

(map :users/username (jdbc/execute! ds ["SELECT * FROM users"]))

(def routes
  (route/expand-routes
   #{["/greet" :get respond-hello :route-name :greet]
     ["/fet" :get respond-fetch :route-name :fet]
     ["/html" :get res-html :route-name :html]
     ["/h" :get (fn [request] {:status 200 :body "Hello Pedestal"}) :route-name :h]
     ["/js/*" :get js-handler :route-name :static-files]}))


(def service-map {::http/routes routes
                  ::http/type :jetty
                  ::http/port 8890
                  ::http/host "0.0.0.0"
                  ;secure headers should be defined before prod
                  ::http/secure-headers nil})


(defn start []
  ;(shadow/watch :frontend)
  (http/start (http/create-server service-map)))


;for interactive development
(defonce server (atom nil))

(defn start-dev []
  ;(shadow/watch :frontend)
  (reset! server
          (http/start (http/create-server (assoc service-map
                                                 ::http/join? false)))))
(start-dev)
(defn stop-dev []
  (http/stop @server))

(defn restart []
  (stop-dev)
  (start-dev))
(restart)

;jdbc stuff
(comment

  (jdbc/execute! ds ["
                    CREATE TABLE users (
                    id SERIAL PRIMARY KEY,
                    username VARCHAR(50) NOT NULL,
                    email VARCHAR(100) UNIQUE NOT NULL,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                    )
                    "])

  (jdbc/execute! ds
                 ["select * from users"])

  (jdbc/execute! ds ["INSERT INTO users (username, email) VALUES ('Per', 'Per@gmail.com')"])

  (jdbc/execute! ds ["DROP TABLE users"]))