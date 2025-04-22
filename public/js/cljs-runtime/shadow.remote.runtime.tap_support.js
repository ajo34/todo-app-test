goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__42515,p__42516){
var map__42517 = p__42515;
var map__42517__$1 = cljs.core.__destructure_map(map__42517);
var svc = map__42517__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42517__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42517__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42517__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__42518 = p__42516;
var map__42518__$1 = cljs.core.__destructure_map(map__42518);
var msg = map__42518__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42518__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42518__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42518__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42518__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__42527,p__42528){
var map__42529 = p__42527;
var map__42529__$1 = cljs.core.__destructure_map(map__42529);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42529__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__42530 = p__42528;
var map__42530__$1 = cljs.core.__destructure_map(map__42530);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42530__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__42538,p__42539){
var map__42540 = p__42538;
var map__42540__$1 = cljs.core.__destructure_map(map__42540);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42540__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42540__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__42541 = p__42539;
var map__42541__$1 = cljs.core.__destructure_map(map__42541);
var msg = map__42541__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42541__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__42547,tid){
var map__42548 = p__42547;
var map__42548__$1 = cljs.core.__destructure_map(map__42548);
var svc = map__42548__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42548__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__42560 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__42561 = null;
var count__42562 = (0);
var i__42563 = (0);
while(true){
if((i__42563 < count__42562)){
var vec__42580 = chunk__42561.cljs$core$IIndexed$_nth$arity$2(null,i__42563);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42580,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42580,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__42601 = seq__42560;
var G__42602 = chunk__42561;
var G__42603 = count__42562;
var G__42604 = (i__42563 + (1));
seq__42560 = G__42601;
chunk__42561 = G__42602;
count__42562 = G__42603;
i__42563 = G__42604;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__42560);
if(temp__5823__auto__){
var seq__42560__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42560__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__42560__$1);
var G__42605 = cljs.core.chunk_rest(seq__42560__$1);
var G__42606 = c__5565__auto__;
var G__42607 = cljs.core.count(c__5565__auto__);
var G__42608 = (0);
seq__42560 = G__42605;
chunk__42561 = G__42606;
count__42562 = G__42607;
i__42563 = G__42608;
continue;
} else {
var vec__42583 = cljs.core.first(seq__42560__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42583,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42583,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__42610 = cljs.core.next(seq__42560__$1);
var G__42611 = null;
var G__42612 = (0);
var G__42613 = (0);
seq__42560 = G__42610;
chunk__42561 = G__42611;
count__42562 = G__42612;
i__42563 = G__42613;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__42553_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__42553_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__42554_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__42554_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__42555_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__42555_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__42556_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__42556_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__42596){
var map__42598 = p__42596;
var map__42598__$1 = cljs.core.__destructure_map(map__42598);
var svc = map__42598__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42598__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42598__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
