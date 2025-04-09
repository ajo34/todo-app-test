(ns main
  (:require [config :as config]))
(require '[next.jdbc :as jdbc])
;(def db {:dbtype "h2" :dbname "example"})
;(def db "postgresql://localhost:5432/tododb")
;(clojure.core/refer 'config)


(def ds (jdbc/get-datasource config/db-config))
(jdbc/execute! ds ["
                    CREATE TABLE usersu (
                    id SERIAL PRIMARY KEY,
                    username VARCHAR(50) NOT NULL,
                    email VARCHAR(100) UNIQUE NOT NULL,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                    )
                    "])

(jdbc/execute! ds
               ["select * from users"])

(jdbc/execute! ds ["INSERT INTO users (username, email) VALUES ('Per', 'Per@gmail.com')"])

(jdbc/execute! ds ["DROP TABLE usersu"])