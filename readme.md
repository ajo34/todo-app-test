### To-Do list app

This is a project that will contain a simple to-do list style application made in Clojure and the clojure environment. This will serve as a way for me to learn how to use clojure in a fullstack setting with some relevant libraries as well as using deps.edn to set up my project and using PostgreSQL as my database. 

Some of the libraries I plan on using are: jdbc and pedestal

# adding clojurescript
I am currently in the proccess of integrating clojurescript through shadow-cljs in order to use replicant and have my stuff look neat.
At the moment my output file won't update unless I run my program with the following command:
```sh
clj -M --main cljs.main --repl-opts "{:launch-browser false}" --compile hello-world.core --repl
```
I also get a weird but seemingly harmless continous loading issue with the message: Waiting for shadow-cljs runtimes...: Please start your ClojureScript app...