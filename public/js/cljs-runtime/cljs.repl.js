goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__41006){
var map__41007 = p__41006;
var map__41007__$1 = cljs.core.__destructure_map(map__41007);
var m = map__41007__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41007__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41007__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5043__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return [(function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__41015_41457 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41016_41458 = null;
var count__41017_41459 = (0);
var i__41018_41460 = (0);
while(true){
if((i__41018_41460 < count__41017_41459)){
var f_41461 = chunk__41016_41458.cljs$core$IIndexed$_nth$arity$2(null,i__41018_41460);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_41461], 0));


var G__41462 = seq__41015_41457;
var G__41463 = chunk__41016_41458;
var G__41464 = count__41017_41459;
var G__41465 = (i__41018_41460 + (1));
seq__41015_41457 = G__41462;
chunk__41016_41458 = G__41463;
count__41017_41459 = G__41464;
i__41018_41460 = G__41465;
continue;
} else {
var temp__5823__auto___41466 = cljs.core.seq(seq__41015_41457);
if(temp__5823__auto___41466){
var seq__41015_41467__$1 = temp__5823__auto___41466;
if(cljs.core.chunked_seq_QMARK_(seq__41015_41467__$1)){
var c__5565__auto___41468 = cljs.core.chunk_first(seq__41015_41467__$1);
var G__41469 = cljs.core.chunk_rest(seq__41015_41467__$1);
var G__41470 = c__5565__auto___41468;
var G__41471 = cljs.core.count(c__5565__auto___41468);
var G__41472 = (0);
seq__41015_41457 = G__41469;
chunk__41016_41458 = G__41470;
count__41017_41459 = G__41471;
i__41018_41460 = G__41472;
continue;
} else {
var f_41473 = cljs.core.first(seq__41015_41467__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_41473], 0));


var G__41474 = cljs.core.next(seq__41015_41467__$1);
var G__41475 = null;
var G__41476 = (0);
var G__41477 = (0);
seq__41015_41457 = G__41474;
chunk__41016_41458 = G__41475;
count__41017_41459 = G__41476;
i__41018_41460 = G__41477;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_41478 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_41478], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_41478)))?cljs.core.second(arglists_41478):arglists_41478)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__41055_41479 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41056_41480 = null;
var count__41057_41481 = (0);
var i__41058_41482 = (0);
while(true){
if((i__41058_41482 < count__41057_41481)){
var vec__41091_41483 = chunk__41056_41480.cljs$core$IIndexed$_nth$arity$2(null,i__41058_41482);
var name_41484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41091_41483,(0),null);
var map__41094_41485 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41091_41483,(1),null);
var map__41094_41486__$1 = cljs.core.__destructure_map(map__41094_41485);
var doc_41487 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41094_41486__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_41488 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41094_41486__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_41484], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_41488], 0));

if(cljs.core.truth_(doc_41487)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_41487], 0));
} else {
}


var G__41499 = seq__41055_41479;
var G__41500 = chunk__41056_41480;
var G__41501 = count__41057_41481;
var G__41502 = (i__41058_41482 + (1));
seq__41055_41479 = G__41499;
chunk__41056_41480 = G__41500;
count__41057_41481 = G__41501;
i__41058_41482 = G__41502;
continue;
} else {
var temp__5823__auto___41503 = cljs.core.seq(seq__41055_41479);
if(temp__5823__auto___41503){
var seq__41055_41504__$1 = temp__5823__auto___41503;
if(cljs.core.chunked_seq_QMARK_(seq__41055_41504__$1)){
var c__5565__auto___41505 = cljs.core.chunk_first(seq__41055_41504__$1);
var G__41506 = cljs.core.chunk_rest(seq__41055_41504__$1);
var G__41507 = c__5565__auto___41505;
var G__41508 = cljs.core.count(c__5565__auto___41505);
var G__41509 = (0);
seq__41055_41479 = G__41506;
chunk__41056_41480 = G__41507;
count__41057_41481 = G__41508;
i__41058_41482 = G__41509;
continue;
} else {
var vec__41104_41510 = cljs.core.first(seq__41055_41504__$1);
var name_41511 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41104_41510,(0),null);
var map__41107_41512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41104_41510,(1),null);
var map__41107_41513__$1 = cljs.core.__destructure_map(map__41107_41512);
var doc_41514 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41107_41513__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_41515 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41107_41513__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_41511], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_41515], 0));

if(cljs.core.truth_(doc_41514)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_41514], 0));
} else {
}


var G__41517 = cljs.core.next(seq__41055_41504__$1);
var G__41518 = null;
var G__41519 = (0);
var G__41520 = (0);
seq__41055_41479 = G__41517;
chunk__41056_41480 = G__41518;
count__41057_41481 = G__41519;
i__41058_41482 = G__41520;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5823__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5823__auto__)){
var fnspec = temp__5823__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__41117 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__41118 = null;
var count__41119 = (0);
var i__41120 = (0);
while(true){
if((i__41120 < count__41119)){
var role = chunk__41118.cljs$core$IIndexed$_nth$arity$2(null,i__41120);
var temp__5823__auto___41526__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___41526__$1)){
var spec_41528 = temp__5823__auto___41526__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_41528)], 0));
} else {
}


var G__41531 = seq__41117;
var G__41532 = chunk__41118;
var G__41533 = count__41119;
var G__41534 = (i__41120 + (1));
seq__41117 = G__41531;
chunk__41118 = G__41532;
count__41119 = G__41533;
i__41120 = G__41534;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq(seq__41117);
if(temp__5823__auto____$1){
var seq__41117__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__41117__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__41117__$1);
var G__41535 = cljs.core.chunk_rest(seq__41117__$1);
var G__41536 = c__5565__auto__;
var G__41537 = cljs.core.count(c__5565__auto__);
var G__41538 = (0);
seq__41117 = G__41535;
chunk__41118 = G__41536;
count__41119 = G__41537;
i__41120 = G__41538;
continue;
} else {
var role = cljs.core.first(seq__41117__$1);
var temp__5823__auto___41541__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___41541__$2)){
var spec_41542 = temp__5823__auto___41541__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_41542)], 0));
} else {
}


var G__41543 = cljs.core.next(seq__41117__$1);
var G__41544 = null;
var G__41545 = (0);
var G__41546 = (0);
seq__41117 = G__41543;
chunk__41118 = G__41544;
count__41119 = G__41545;
i__41120 = G__41546;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5823__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5823__auto__)){
var msg = temp__5823__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5823__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5823__auto__)){
var ed = temp__5823__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__41556 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__41557 = cljs.core.ex_cause(t);
via = G__41556;
t = G__41557;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5823__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5823__auto__)){
var root_msg = temp__5823__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5823__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5823__auto__)){
var data = temp__5823__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5823__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5823__auto__)){
var phase = temp__5823__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__41275 = datafied_throwable;
var map__41275__$1 = cljs.core.__destructure_map(map__41275);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41275__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41275__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41275__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__41279 = cljs.core.last(via);
var map__41279__$1 = cljs.core.__destructure_map(map__41279);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41279__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41279__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41279__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__41283 = data;
var map__41283__$1 = cljs.core.__destructure_map(map__41283);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41283__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41283__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41283__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__41284 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__41284__$1 = cljs.core.__destructure_map(map__41284);
var top_data = map__41284__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41284__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__41292 = phase;
var G__41292__$1 = (((G__41292 instanceof cljs.core.Keyword))?G__41292.fqn:null);
switch (G__41292__$1) {
case "read-source":
var map__41293 = data;
var map__41293__$1 = cljs.core.__destructure_map(map__41293);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41293__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41293__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__41295 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__41295__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41295,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__41295);
var G__41295__$2 = (cljs.core.truth_((function (){var fexpr__41297 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__41297.cljs$core$IFn$_invoke$arity$1 ? fexpr__41297.cljs$core$IFn$_invoke$arity$1(source) : fexpr__41297.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__41295__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__41295__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41295__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__41295__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__41299 = top_data;
var G__41299__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41299,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__41299);
var G__41299__$2 = (cljs.core.truth_((function (){var fexpr__41301 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__41301.cljs$core$IFn$_invoke$arity$1 ? fexpr__41301.cljs$core$IFn$_invoke$arity$1(source) : fexpr__41301.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__41299__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__41299__$1);
var G__41299__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41299__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__41299__$2);
var G__41299__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41299__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__41299__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41299__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__41299__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__41313 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41313,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41313,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41313,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41313,(3),null);
var G__41318 = top_data;
var G__41318__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41318,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__41318);
var G__41318__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41318__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__41318__$1);
var G__41318__$3 = (cljs.core.truth_((function (){var and__5041__auto__ = source__$1;
if(cljs.core.truth_(and__5041__auto__)){
return method;
} else {
return and__5041__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41318__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__41318__$2);
var G__41318__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41318__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__41318__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41318__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__41318__$4;
}

break;
case "execution":
var vec__41332 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41332,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41332,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41332,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41332,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__41269_SHARP_){
var or__5043__auto__ = (p1__41269_SHARP_ == null);
if(or__5043__auto__){
return or__5043__auto__;
} else {
var fexpr__41341 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__41341.cljs$core$IFn$_invoke$arity$1 ? fexpr__41341.cljs$core$IFn$_invoke$arity$1(p1__41269_SHARP_) : fexpr__41341.call(null,p1__41269_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return line;
}
})();
var G__41346 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__41346__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41346,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__41346);
var G__41346__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41346__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__41346__$1);
var G__41346__$3 = (cljs.core.truth_((function (){var or__5043__auto__ = fn;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var and__5041__auto__ = source__$1;
if(cljs.core.truth_(and__5041__auto__)){
return method;
} else {
return and__5041__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41346__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5043__auto__ = fn;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__41346__$2);
var G__41346__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41346__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__41346__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41346__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__41346__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41292__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__41360){
var map__41361 = p__41360;
var map__41361__$1 = cljs.core.__destructure_map(map__41361);
var triage_data = map__41361__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41361__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41361__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41361__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41361__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41361__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41361__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41361__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41361__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = source;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = line;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5043__auto__ = class$;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__41383 = phase;
var G__41383__$1 = (((G__41383 instanceof cljs.core.Keyword))?G__41383.fqn:null);
switch (G__41383__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__41385 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__41386 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41387 = loc;
var G__41388 = (cljs.core.truth_(spec)?(function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__41389_41609 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__41390_41610 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__41391_41611 = true;
var _STAR_print_fn_STAR__temp_val__41392_41612 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__41391_41611);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__41392_41612);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__41356_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__41356_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__41390_41610);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__41389_41609);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__41385,G__41386,G__41387,G__41388) : format.call(null,G__41385,G__41386,G__41387,G__41388));

break;
case "macroexpansion":
var G__41398 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__41399 = cause_type;
var G__41400 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41401 = loc;
var G__41402 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__41398,G__41399,G__41400,G__41401,G__41402) : format.call(null,G__41398,G__41399,G__41400,G__41401,G__41402));

break;
case "compile-syntax-check":
var G__41404 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__41405 = cause_type;
var G__41406 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41407 = loc;
var G__41408 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__41404,G__41405,G__41406,G__41407,G__41408) : format.call(null,G__41404,G__41405,G__41406,G__41407,G__41408));

break;
case "compilation":
var G__41411 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__41412 = cause_type;
var G__41413 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41414 = loc;
var G__41415 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__41411,G__41412,G__41413,G__41414,G__41415) : format.call(null,G__41411,G__41412,G__41413,G__41414,G__41415));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__41426 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__41427 = symbol;
var G__41428 = loc;
var G__41429 = (function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__41430_41625 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__41431_41626 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__41432_41627 = true;
var _STAR_print_fn_STAR__temp_val__41433_41628 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__41432_41627);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__41433_41628);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__41357_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__41357_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__41431_41626);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__41430_41625);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__41426,G__41427,G__41428,G__41429) : format.call(null,G__41426,G__41427,G__41428,G__41429));
} else {
var G__41443 = "Execution error%s at %s(%s).\n%s\n";
var G__41444 = cause_type;
var G__41445 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41446 = loc;
var G__41447 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__41443,G__41444,G__41445,G__41446,G__41447) : format.call(null,G__41443,G__41444,G__41445,G__41446,G__41447));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41383__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
