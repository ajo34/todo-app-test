(ns main)
(require '[next.jdbc :as jdbc])
(def db {:dbtype "h2" :dbname "example"})
(def ds (jdbc/get-datasource db))
(jdbc/execute! ds ["
create table address (
  id int auto_increment primary key,
  name varchar(32),
  email varchar(255)
)"])

(jdbc/execute! ds
               ["select * from address"])

(jdbc/execute! ds ["INSERT INTO address (name, email) VALUES ('Per', 'Per@gmail.com')"])