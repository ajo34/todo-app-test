goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__36451){
var map__36457 = p__36451;
var map__36457__$1 = cljs.core.__destructure_map(map__36457);
var runtime = map__36457__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36457__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5043__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_36684 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_36684)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__36460 = runtime;
var G__36461 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_36684);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__36460,G__36461) : shadow.remote.runtime.shared.process.call(null,G__36460,G__36461));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__36466,res){
var map__36467 = p__36466;
var map__36467__$1 = cljs.core.__destructure_map(map__36467);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36467__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36467__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__36469 = res;
var G__36469__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36469,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__36469);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36469__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__36469__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__36473 = arguments.length;
switch (G__36473) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__36474,msg,handlers,timeout_after_ms){
var map__36475 = p__36474;
var map__36475__$1 = cljs.core.__destructure_map(map__36475);
var runtime = map__36475__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36475__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___36719 = arguments.length;
var i__5767__auto___36720 = (0);
while(true){
if((i__5767__auto___36720 < len__5766__auto___36719)){
args__5772__auto__.push((arguments[i__5767__auto___36720]));

var G__36721 = (i__5767__auto___36720 + (1));
i__5767__auto___36720 = G__36721;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__36494,ev,args){
var map__36495 = p__36494;
var map__36495__$1 = cljs.core.__destructure_map(map__36495);
var runtime = map__36495__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36495__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__36496 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__36499 = null;
var count__36500 = (0);
var i__36501 = (0);
while(true){
if((i__36501 < count__36500)){
var ext = chunk__36499.cljs$core$IIndexed$_nth$arity$2(null,i__36501);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__36728 = seq__36496;
var G__36729 = chunk__36499;
var G__36730 = count__36500;
var G__36731 = (i__36501 + (1));
seq__36496 = G__36728;
chunk__36499 = G__36729;
count__36500 = G__36730;
i__36501 = G__36731;
continue;
} else {
var G__36732 = seq__36496;
var G__36733 = chunk__36499;
var G__36734 = count__36500;
var G__36735 = (i__36501 + (1));
seq__36496 = G__36732;
chunk__36499 = G__36733;
count__36500 = G__36734;
i__36501 = G__36735;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__36496);
if(temp__5823__auto__){
var seq__36496__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36496__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__36496__$1);
var G__36737 = cljs.core.chunk_rest(seq__36496__$1);
var G__36738 = c__5565__auto__;
var G__36739 = cljs.core.count(c__5565__auto__);
var G__36740 = (0);
seq__36496 = G__36737;
chunk__36499 = G__36738;
count__36500 = G__36739;
i__36501 = G__36740;
continue;
} else {
var ext = cljs.core.first(seq__36496__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__36741 = cljs.core.next(seq__36496__$1);
var G__36742 = null;
var G__36743 = (0);
var G__36744 = (0);
seq__36496 = G__36741;
chunk__36499 = G__36742;
count__36500 = G__36743;
i__36501 = G__36744;
continue;
} else {
var G__36746 = cljs.core.next(seq__36496__$1);
var G__36747 = null;
var G__36748 = (0);
var G__36749 = (0);
seq__36496 = G__36746;
chunk__36499 = G__36747;
count__36500 = G__36748;
i__36501 = G__36749;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq36480){
var G__36481 = cljs.core.first(seq36480);
var seq36480__$1 = cljs.core.next(seq36480);
var G__36482 = cljs.core.first(seq36480__$1);
var seq36480__$2 = cljs.core.next(seq36480__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36481,G__36482,seq36480__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__36538,p__36539){
var map__36541 = p__36538;
var map__36541__$1 = cljs.core.__destructure_map(map__36541);
var runtime = map__36541__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36541__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__36542 = p__36539;
var map__36542__$1 = cljs.core.__destructure_map(map__36542);
var msg = map__36542__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36542__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__36543 = cljs.core.deref(state_ref);
var map__36543__$1 = cljs.core.__destructure_map(map__36543);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36543__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36543__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__36551,msg){
var map__36552 = p__36551;
var map__36552__$1 = cljs.core.__destructure_map(map__36552);
var runtime = map__36552__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36552__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__36554,key,p__36555){
var map__36556 = p__36554;
var map__36556__$1 = cljs.core.__destructure_map(map__36556);
var state = map__36556__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36556__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__36557 = p__36555;
var map__36557__$1 = cljs.core.__destructure_map(map__36557);
var spec = map__36557__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36557__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36557__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__36561,key,spec){
var map__36562 = p__36561;
var map__36562__$1 = cljs.core.__destructure_map(map__36562);
var runtime = map__36562__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36562__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5827__auto___36770 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5827__auto___36770 == null)){
} else {
var on_welcome_36771 = temp__5827__auto___36770;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_36771.cljs$core$IFn$_invoke$arity$0 ? on_welcome_36771.cljs$core$IFn$_invoke$arity$0() : on_welcome_36771.call(null));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__36563_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__36563_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__36564_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__36564_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__36565_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__36565_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__36566_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__36566_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__36567_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__36567_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__36584,key){
var map__36585 = p__36584;
var map__36585__$1 = cljs.core.__destructure_map(map__36585);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36585__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__36591,msg){
var map__36592 = p__36591;
var map__36592__$1 = cljs.core.__destructure_map(map__36592);
var runtime = map__36592__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36592__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__36602,p__36603){
var map__36604 = p__36602;
var map__36604__$1 = cljs.core.__destructure_map(map__36604);
var runtime = map__36604__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36604__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__36605 = p__36603;
var map__36605__$1 = cljs.core.__destructure_map(map__36605);
var msg = map__36605__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36605__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36605__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__36612 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__36615 = null;
var count__36616 = (0);
var i__36617 = (0);
while(true){
if((i__36617 < count__36616)){
var map__36636 = chunk__36615.cljs$core$IIndexed$_nth$arity$2(null,i__36617);
var map__36636__$1 = cljs.core.__destructure_map(map__36636);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36636__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__36790 = seq__36612;
var G__36791 = chunk__36615;
var G__36792 = count__36616;
var G__36793 = (i__36617 + (1));
seq__36612 = G__36790;
chunk__36615 = G__36791;
count__36616 = G__36792;
i__36617 = G__36793;
continue;
} else {
var G__36794 = seq__36612;
var G__36795 = chunk__36615;
var G__36796 = count__36616;
var G__36797 = (i__36617 + (1));
seq__36612 = G__36794;
chunk__36615 = G__36795;
count__36616 = G__36796;
i__36617 = G__36797;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__36612);
if(temp__5823__auto__){
var seq__36612__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36612__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__36612__$1);
var G__36798 = cljs.core.chunk_rest(seq__36612__$1);
var G__36799 = c__5565__auto__;
var G__36800 = cljs.core.count(c__5565__auto__);
var G__36801 = (0);
seq__36612 = G__36798;
chunk__36615 = G__36799;
count__36616 = G__36800;
i__36617 = G__36801;
continue;
} else {
var map__36642 = cljs.core.first(seq__36612__$1);
var map__36642__$1 = cljs.core.__destructure_map(map__36642);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36642__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__36802 = cljs.core.next(seq__36612__$1);
var G__36803 = null;
var G__36804 = (0);
var G__36805 = (0);
seq__36612 = G__36802;
chunk__36615 = G__36803;
count__36616 = G__36804;
i__36617 = G__36805;
continue;
} else {
var G__36806 = cljs.core.next(seq__36612__$1);
var G__36807 = null;
var G__36808 = (0);
var G__36809 = (0);
seq__36612 = G__36806;
chunk__36615 = G__36807;
count__36616 = G__36808;
i__36617 = G__36809;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
