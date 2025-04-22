goog.provide('hello_world.core');
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Hello world!"], 0));
hello_world.core.box = document.getElementById("box");
hello_world.core.btn = document.createElement("button");
(hello_world.core.btn.innerHTML = "click me!");
hello_world.core.btn.addEventListener("click",(function (){
return console.log("clicked!");
}));
hello_world.core.box.appendChild((function (){var G__42372 = hello_world.core.btn;
return G__42372;
})());

//# sourceMappingURL=hello_world.core.js.map
