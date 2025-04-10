(ns main
  (:require [io.pedestal.http :as http]
            [io.pedestal.http.route :as route]))

(require '[next.jdbc :as jdbc] '[config :as config])
;(def db {:dbtype "h2" :dbname "example"})
;(def db "postgresql://localhost:5432/tododb")
;(clojure.core/refer 'config)
(def ds (jdbc/get-datasource config/db-config))

(defn ok [body]
  {:status 200 :body body})



(defn greeting-for [nm]
  (println "name " nm)
  (cond
    (= nil nm) "Hello, person!\n"
    (= "" nm) "Bad request"
    :else (str "Hello, " nm "\n")))


(defn respond-hello [request]
  (let [nm (get-in request [:query-params :name])
        resp (greeting-for nm)]
    (ok resp)))

(defn respond-fetch [req]
  {:status 200
   :headers {"Content-Type" "application/json"}
   :body (jdbc/execute! ds ["SELECT * FROM users"])})

(map :users/username (jdbc/execute! ds ["SELECT * FROM users"]))

(def routes
  (route/expand-routes
   #{["/greet" :get respond-hello :route-name :greet]
     ["/fet" :get respond-fetch :route-name :fet]}))

(def service-map {::http/routes routes
                  ::http/type :jetty
                  ::http/port 8890})

(defn start []
  (http/start (http/create-server service-map)))


;for interactive development
(defonce server (atom nil))

(defn start-dev []
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