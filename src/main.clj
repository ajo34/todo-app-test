(ns main)
(require '[next.jdbc :as jdbc])
;(def db {:dbtype "h2" :dbname "example"})
;(def db "postgresql://localhost:5432/tododb")
(clojure.core/refer 'config)


(def ds (jdbc/get-datasource db-config))
(jdbc/execute! ds ["
                    CREATE TABLE usersu (
                    id SERIAL PRIMARY KEY,
                    username VARCHAR(50) NOT NULL,
                    email VARCHAR(100) UNIQUE NOT NULL,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                    )
                    "])

(jdbc/execute! ds
               ["select * from usersu"])

(jdbc/execute! ds ["INSERT INTO usersu (username, email) VALUES ('Per', 'Per@gmail.com')"])

