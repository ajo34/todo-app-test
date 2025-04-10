(ns main)

(require '[next.jdbc :as jdbc] '[config :as config])
;(def db {:dbtype "h2" :dbname "example"})
;(def db "postgresql://localhost:5432/tododb")
;(clojure.core/refer 'config)






;jdbc stuff
(comment
  (def ds (jdbc/get-datasource config/db-config))
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