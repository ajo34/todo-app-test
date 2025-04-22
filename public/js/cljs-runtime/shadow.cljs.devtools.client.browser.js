goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5772__auto__ = [];
var len__5766__auto___43368 = arguments.length;
var i__5767__auto___43369 = (0);
while(true){
if((i__5767__auto___43369 < len__5766__auto___43368)){
args__5772__auto__.push((arguments[i__5767__auto___43369]));

var G__43370 = (i__5767__auto___43369 + (1));
i__5767__auto___43369 = G__43370;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq43077){
var G__43078 = cljs.core.first(seq43077);
var seq43077__$1 = cljs.core.next(seq43077);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43078,seq43077__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__43082 = cljs.core.seq(sources);
var chunk__43083 = null;
var count__43084 = (0);
var i__43085 = (0);
while(true){
if((i__43085 < count__43084)){
var map__43092 = chunk__43083.cljs$core$IIndexed$_nth$arity$2(null,i__43085);
var map__43092__$1 = cljs.core.__destructure_map(map__43092);
var src = map__43092__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43092__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43092__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43092__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43092__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e43093){var e_43371 = e43093;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_43371);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_43371.message)].join('')));
}

var G__43372 = seq__43082;
var G__43373 = chunk__43083;
var G__43374 = count__43084;
var G__43375 = (i__43085 + (1));
seq__43082 = G__43372;
chunk__43083 = G__43373;
count__43084 = G__43374;
i__43085 = G__43375;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__43082);
if(temp__5823__auto__){
var seq__43082__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43082__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__43082__$1);
var G__43376 = cljs.core.chunk_rest(seq__43082__$1);
var G__43377 = c__5565__auto__;
var G__43378 = cljs.core.count(c__5565__auto__);
var G__43379 = (0);
seq__43082 = G__43376;
chunk__43083 = G__43377;
count__43084 = G__43378;
i__43085 = G__43379;
continue;
} else {
var map__43096 = cljs.core.first(seq__43082__$1);
var map__43096__$1 = cljs.core.__destructure_map(map__43096);
var src = map__43096__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43096__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43096__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43096__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43096__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e43097){var e_43380 = e43097;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_43380);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_43380.message)].join('')));
}

var G__43381 = cljs.core.next(seq__43082__$1);
var G__43382 = null;
var G__43383 = (0);
var G__43384 = (0);
seq__43082 = G__43381;
chunk__43083 = G__43382;
count__43084 = G__43383;
i__43085 = G__43384;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__43098 = cljs.core.seq(js_requires);
var chunk__43099 = null;
var count__43100 = (0);
var i__43101 = (0);
while(true){
if((i__43101 < count__43100)){
var js_ns = chunk__43099.cljs$core$IIndexed$_nth$arity$2(null,i__43101);
var require_str_43385 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_43385);


var G__43386 = seq__43098;
var G__43387 = chunk__43099;
var G__43388 = count__43100;
var G__43389 = (i__43101 + (1));
seq__43098 = G__43386;
chunk__43099 = G__43387;
count__43100 = G__43388;
i__43101 = G__43389;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__43098);
if(temp__5823__auto__){
var seq__43098__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43098__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__43098__$1);
var G__43390 = cljs.core.chunk_rest(seq__43098__$1);
var G__43391 = c__5565__auto__;
var G__43392 = cljs.core.count(c__5565__auto__);
var G__43393 = (0);
seq__43098 = G__43390;
chunk__43099 = G__43391;
count__43100 = G__43392;
i__43101 = G__43393;
continue;
} else {
var js_ns = cljs.core.first(seq__43098__$1);
var require_str_43394 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_43394);


var G__43395 = cljs.core.next(seq__43098__$1);
var G__43396 = null;
var G__43397 = (0);
var G__43398 = (0);
seq__43098 = G__43395;
chunk__43099 = G__43396;
count__43100 = G__43397;
i__43101 = G__43398;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__43103){
var map__43104 = p__43103;
var map__43104__$1 = cljs.core.__destructure_map(map__43104);
var msg = map__43104__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43104__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43104__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__43105(s__43106){
return (new cljs.core.LazySeq(null,(function (){
var s__43106__$1 = s__43106;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__43106__$1);
if(temp__5823__auto__){
var xs__6383__auto__ = temp__5823__auto__;
var map__43111 = cljs.core.first(xs__6383__auto__);
var map__43111__$1 = cljs.core.__destructure_map(map__43111);
var src = map__43111__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43111__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43111__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5516__auto__ = ((function (s__43106__$1,map__43111,map__43111__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__43104,map__43104__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__43105_$_iter__43107(s__43108){
return (new cljs.core.LazySeq(null,((function (s__43106__$1,map__43111,map__43111__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__43104,map__43104__$1,msg,info,reload_info){
return (function (){
var s__43108__$1 = s__43108;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__43108__$1);
if(temp__5823__auto____$1){
var s__43108__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__43108__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__43108__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__43110 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__43109 = (0);
while(true){
if((i__43109 < size__5519__auto__)){
var warning = cljs.core._nth(c__5518__auto__,i__43109);
cljs.core.chunk_append(b__43110,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__43399 = (i__43109 + (1));
i__43109 = G__43399;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43110),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__43105_$_iter__43107(cljs.core.chunk_rest(s__43108__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43110),null);
}
} else {
var warning = cljs.core.first(s__43108__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__43105_$_iter__43107(cljs.core.rest(s__43108__$2)));
}
} else {
return null;
}
break;
}
});})(s__43106__$1,map__43111,map__43111__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__43104,map__43104__$1,msg,info,reload_info))
,null,null));
});})(s__43106__$1,map__43111,map__43111__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__43104,map__43104__$1,msg,info,reload_info))
;
var fs__5517__auto__ = cljs.core.seq(iterys__5516__auto__(warnings));
if(fs__5517__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5517__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__43105(cljs.core.rest(s__43106__$1)));
} else {
var G__43400 = cljs.core.rest(s__43106__$1);
s__43106__$1 = G__43400;
continue;
}
} else {
var G__43401 = cljs.core.rest(s__43106__$1);
s__43106__$1 = G__43401;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__43112_43402 = cljs.core.seq(warnings);
var chunk__43113_43403 = null;
var count__43114_43404 = (0);
var i__43115_43405 = (0);
while(true){
if((i__43115_43405 < count__43114_43404)){
var map__43118_43406 = chunk__43113_43403.cljs$core$IIndexed$_nth$arity$2(null,i__43115_43405);
var map__43118_43407__$1 = cljs.core.__destructure_map(map__43118_43406);
var w_43408 = map__43118_43407__$1;
var msg_43409__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43118_43407__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_43410 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43118_43407__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_43411 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43118_43407__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_43412 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43118_43407__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_43412)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_43410),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_43411),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_43409__$1)].join(''));


var G__43413 = seq__43112_43402;
var G__43414 = chunk__43113_43403;
var G__43415 = count__43114_43404;
var G__43416 = (i__43115_43405 + (1));
seq__43112_43402 = G__43413;
chunk__43113_43403 = G__43414;
count__43114_43404 = G__43415;
i__43115_43405 = G__43416;
continue;
} else {
var temp__5823__auto___43417 = cljs.core.seq(seq__43112_43402);
if(temp__5823__auto___43417){
var seq__43112_43418__$1 = temp__5823__auto___43417;
if(cljs.core.chunked_seq_QMARK_(seq__43112_43418__$1)){
var c__5565__auto___43419 = cljs.core.chunk_first(seq__43112_43418__$1);
var G__43420 = cljs.core.chunk_rest(seq__43112_43418__$1);
var G__43421 = c__5565__auto___43419;
var G__43422 = cljs.core.count(c__5565__auto___43419);
var G__43423 = (0);
seq__43112_43402 = G__43420;
chunk__43113_43403 = G__43421;
count__43114_43404 = G__43422;
i__43115_43405 = G__43423;
continue;
} else {
var map__43119_43424 = cljs.core.first(seq__43112_43418__$1);
var map__43119_43425__$1 = cljs.core.__destructure_map(map__43119_43424);
var w_43426 = map__43119_43425__$1;
var msg_43427__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43119_43425__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_43428 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43119_43425__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_43429 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43119_43425__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_43430 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43119_43425__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_43430)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_43428),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_43429),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_43427__$1)].join(''));


var G__43431 = cljs.core.next(seq__43112_43418__$1);
var G__43432 = null;
var G__43433 = (0);
var G__43434 = (0);
seq__43112_43402 = G__43431;
chunk__43113_43403 = G__43432;
count__43114_43404 = G__43433;
i__43115_43405 = G__43434;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__43102_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__43102_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5041__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5041__auto__){
var and__5041__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5041__auto____$1){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__43121 = node_uri;
G__43121.setQuery(null);

G__43121.setPath(new$);

return G__43121;
})());
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__43122){
var map__43123 = p__43122;
var map__43123__$1 = cljs.core.__destructure_map(map__43123);
var msg = map__43123__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43123__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43123__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__43124 = cljs.core.seq(updates);
var chunk__43126 = null;
var count__43127 = (0);
var i__43128 = (0);
while(true){
if((i__43128 < count__43127)){
var path = chunk__43126.cljs$core$IIndexed$_nth$arity$2(null,i__43128);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__43238_43435 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__43242_43436 = null;
var count__43243_43437 = (0);
var i__43244_43438 = (0);
while(true){
if((i__43244_43438 < count__43243_43437)){
var node_43439 = chunk__43242_43436.cljs$core$IIndexed$_nth$arity$2(null,i__43244_43438);
if(cljs.core.not(node_43439.shadow$old)){
var path_match_43440 = shadow.cljs.devtools.client.browser.match_paths(node_43439.getAttribute("href"),path);
if(cljs.core.truth_(path_match_43440)){
var new_link_43441 = (function (){var G__43270 = node_43439.cloneNode(true);
G__43270.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_43440),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__43270;
})();
(node_43439.shadow$old = true);

(new_link_43441.onload = ((function (seq__43238_43435,chunk__43242_43436,count__43243_43437,i__43244_43438,seq__43124,chunk__43126,count__43127,i__43128,new_link_43441,path_match_43440,node_43439,path,map__43123,map__43123__$1,msg,updates,reload_info){
return (function (e){
var seq__43271_43442 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__43273_43443 = null;
var count__43274_43444 = (0);
var i__43275_43445 = (0);
while(true){
if((i__43275_43445 < count__43274_43444)){
var map__43279_43446 = chunk__43273_43443.cljs$core$IIndexed$_nth$arity$2(null,i__43275_43445);
var map__43279_43447__$1 = cljs.core.__destructure_map(map__43279_43446);
var task_43448 = map__43279_43447__$1;
var fn_str_43449 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43279_43447__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_43450 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43279_43447__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_43451 = goog.getObjectByName(fn_str_43449,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_43450)].join(''));

(fn_obj_43451.cljs$core$IFn$_invoke$arity$2 ? fn_obj_43451.cljs$core$IFn$_invoke$arity$2(path,new_link_43441) : fn_obj_43451.call(null,path,new_link_43441));


var G__43452 = seq__43271_43442;
var G__43453 = chunk__43273_43443;
var G__43454 = count__43274_43444;
var G__43455 = (i__43275_43445 + (1));
seq__43271_43442 = G__43452;
chunk__43273_43443 = G__43453;
count__43274_43444 = G__43454;
i__43275_43445 = G__43455;
continue;
} else {
var temp__5823__auto___43456 = cljs.core.seq(seq__43271_43442);
if(temp__5823__auto___43456){
var seq__43271_43457__$1 = temp__5823__auto___43456;
if(cljs.core.chunked_seq_QMARK_(seq__43271_43457__$1)){
var c__5565__auto___43458 = cljs.core.chunk_first(seq__43271_43457__$1);
var G__43459 = cljs.core.chunk_rest(seq__43271_43457__$1);
var G__43460 = c__5565__auto___43458;
var G__43461 = cljs.core.count(c__5565__auto___43458);
var G__43462 = (0);
seq__43271_43442 = G__43459;
chunk__43273_43443 = G__43460;
count__43274_43444 = G__43461;
i__43275_43445 = G__43462;
continue;
} else {
var map__43280_43463 = cljs.core.first(seq__43271_43457__$1);
var map__43280_43464__$1 = cljs.core.__destructure_map(map__43280_43463);
var task_43465 = map__43280_43464__$1;
var fn_str_43466 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43280_43464__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_43467 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43280_43464__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_43468 = goog.getObjectByName(fn_str_43466,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_43467)].join(''));

(fn_obj_43468.cljs$core$IFn$_invoke$arity$2 ? fn_obj_43468.cljs$core$IFn$_invoke$arity$2(path,new_link_43441) : fn_obj_43468.call(null,path,new_link_43441));


var G__43469 = cljs.core.next(seq__43271_43457__$1);
var G__43470 = null;
var G__43471 = (0);
var G__43472 = (0);
seq__43271_43442 = G__43469;
chunk__43273_43443 = G__43470;
count__43274_43444 = G__43471;
i__43275_43445 = G__43472;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_43439);
});})(seq__43238_43435,chunk__43242_43436,count__43243_43437,i__43244_43438,seq__43124,chunk__43126,count__43127,i__43128,new_link_43441,path_match_43440,node_43439,path,map__43123,map__43123__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_43440], 0));

goog.dom.insertSiblingAfter(new_link_43441,node_43439);


var G__43473 = seq__43238_43435;
var G__43474 = chunk__43242_43436;
var G__43475 = count__43243_43437;
var G__43476 = (i__43244_43438 + (1));
seq__43238_43435 = G__43473;
chunk__43242_43436 = G__43474;
count__43243_43437 = G__43475;
i__43244_43438 = G__43476;
continue;
} else {
var G__43477 = seq__43238_43435;
var G__43478 = chunk__43242_43436;
var G__43479 = count__43243_43437;
var G__43480 = (i__43244_43438 + (1));
seq__43238_43435 = G__43477;
chunk__43242_43436 = G__43478;
count__43243_43437 = G__43479;
i__43244_43438 = G__43480;
continue;
}
} else {
var G__43481 = seq__43238_43435;
var G__43482 = chunk__43242_43436;
var G__43483 = count__43243_43437;
var G__43484 = (i__43244_43438 + (1));
seq__43238_43435 = G__43481;
chunk__43242_43436 = G__43482;
count__43243_43437 = G__43483;
i__43244_43438 = G__43484;
continue;
}
} else {
var temp__5823__auto___43485 = cljs.core.seq(seq__43238_43435);
if(temp__5823__auto___43485){
var seq__43238_43486__$1 = temp__5823__auto___43485;
if(cljs.core.chunked_seq_QMARK_(seq__43238_43486__$1)){
var c__5565__auto___43487 = cljs.core.chunk_first(seq__43238_43486__$1);
var G__43488 = cljs.core.chunk_rest(seq__43238_43486__$1);
var G__43489 = c__5565__auto___43487;
var G__43490 = cljs.core.count(c__5565__auto___43487);
var G__43491 = (0);
seq__43238_43435 = G__43488;
chunk__43242_43436 = G__43489;
count__43243_43437 = G__43490;
i__43244_43438 = G__43491;
continue;
} else {
var node_43492 = cljs.core.first(seq__43238_43486__$1);
if(cljs.core.not(node_43492.shadow$old)){
var path_match_43493 = shadow.cljs.devtools.client.browser.match_paths(node_43492.getAttribute("href"),path);
if(cljs.core.truth_(path_match_43493)){
var new_link_43494 = (function (){var G__43281 = node_43492.cloneNode(true);
G__43281.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_43493),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__43281;
})();
(node_43492.shadow$old = true);

(new_link_43494.onload = ((function (seq__43238_43435,chunk__43242_43436,count__43243_43437,i__43244_43438,seq__43124,chunk__43126,count__43127,i__43128,new_link_43494,path_match_43493,node_43492,seq__43238_43486__$1,temp__5823__auto___43485,path,map__43123,map__43123__$1,msg,updates,reload_info){
return (function (e){
var seq__43282_43495 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__43284_43496 = null;
var count__43285_43497 = (0);
var i__43286_43498 = (0);
while(true){
if((i__43286_43498 < count__43285_43497)){
var map__43290_43499 = chunk__43284_43496.cljs$core$IIndexed$_nth$arity$2(null,i__43286_43498);
var map__43290_43500__$1 = cljs.core.__destructure_map(map__43290_43499);
var task_43501 = map__43290_43500__$1;
var fn_str_43502 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43290_43500__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_43503 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43290_43500__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_43504 = goog.getObjectByName(fn_str_43502,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_43503)].join(''));

(fn_obj_43504.cljs$core$IFn$_invoke$arity$2 ? fn_obj_43504.cljs$core$IFn$_invoke$arity$2(path,new_link_43494) : fn_obj_43504.call(null,path,new_link_43494));


var G__43505 = seq__43282_43495;
var G__43506 = chunk__43284_43496;
var G__43507 = count__43285_43497;
var G__43508 = (i__43286_43498 + (1));
seq__43282_43495 = G__43505;
chunk__43284_43496 = G__43506;
count__43285_43497 = G__43507;
i__43286_43498 = G__43508;
continue;
} else {
var temp__5823__auto___43509__$1 = cljs.core.seq(seq__43282_43495);
if(temp__5823__auto___43509__$1){
var seq__43282_43510__$1 = temp__5823__auto___43509__$1;
if(cljs.core.chunked_seq_QMARK_(seq__43282_43510__$1)){
var c__5565__auto___43511 = cljs.core.chunk_first(seq__43282_43510__$1);
var G__43512 = cljs.core.chunk_rest(seq__43282_43510__$1);
var G__43513 = c__5565__auto___43511;
var G__43514 = cljs.core.count(c__5565__auto___43511);
var G__43515 = (0);
seq__43282_43495 = G__43512;
chunk__43284_43496 = G__43513;
count__43285_43497 = G__43514;
i__43286_43498 = G__43515;
continue;
} else {
var map__43291_43516 = cljs.core.first(seq__43282_43510__$1);
var map__43291_43517__$1 = cljs.core.__destructure_map(map__43291_43516);
var task_43518 = map__43291_43517__$1;
var fn_str_43519 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43291_43517__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_43520 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43291_43517__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_43521 = goog.getObjectByName(fn_str_43519,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_43520)].join(''));

(fn_obj_43521.cljs$core$IFn$_invoke$arity$2 ? fn_obj_43521.cljs$core$IFn$_invoke$arity$2(path,new_link_43494) : fn_obj_43521.call(null,path,new_link_43494));


var G__43522 = cljs.core.next(seq__43282_43510__$1);
var G__43523 = null;
var G__43524 = (0);
var G__43525 = (0);
seq__43282_43495 = G__43522;
chunk__43284_43496 = G__43523;
count__43285_43497 = G__43524;
i__43286_43498 = G__43525;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_43492);
});})(seq__43238_43435,chunk__43242_43436,count__43243_43437,i__43244_43438,seq__43124,chunk__43126,count__43127,i__43128,new_link_43494,path_match_43493,node_43492,seq__43238_43486__$1,temp__5823__auto___43485,path,map__43123,map__43123__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_43493], 0));

goog.dom.insertSiblingAfter(new_link_43494,node_43492);


var G__43526 = cljs.core.next(seq__43238_43486__$1);
var G__43527 = null;
var G__43528 = (0);
var G__43529 = (0);
seq__43238_43435 = G__43526;
chunk__43242_43436 = G__43527;
count__43243_43437 = G__43528;
i__43244_43438 = G__43529;
continue;
} else {
var G__43530 = cljs.core.next(seq__43238_43486__$1);
var G__43531 = null;
var G__43532 = (0);
var G__43533 = (0);
seq__43238_43435 = G__43530;
chunk__43242_43436 = G__43531;
count__43243_43437 = G__43532;
i__43244_43438 = G__43533;
continue;
}
} else {
var G__43534 = cljs.core.next(seq__43238_43486__$1);
var G__43535 = null;
var G__43536 = (0);
var G__43537 = (0);
seq__43238_43435 = G__43534;
chunk__43242_43436 = G__43535;
count__43243_43437 = G__43536;
i__43244_43438 = G__43537;
continue;
}
}
} else {
}
}
break;
}


var G__43538 = seq__43124;
var G__43539 = chunk__43126;
var G__43540 = count__43127;
var G__43541 = (i__43128 + (1));
seq__43124 = G__43538;
chunk__43126 = G__43539;
count__43127 = G__43540;
i__43128 = G__43541;
continue;
} else {
var G__43542 = seq__43124;
var G__43543 = chunk__43126;
var G__43544 = count__43127;
var G__43545 = (i__43128 + (1));
seq__43124 = G__43542;
chunk__43126 = G__43543;
count__43127 = G__43544;
i__43128 = G__43545;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__43124);
if(temp__5823__auto__){
var seq__43124__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43124__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__43124__$1);
var G__43546 = cljs.core.chunk_rest(seq__43124__$1);
var G__43547 = c__5565__auto__;
var G__43548 = cljs.core.count(c__5565__auto__);
var G__43549 = (0);
seq__43124 = G__43546;
chunk__43126 = G__43547;
count__43127 = G__43548;
i__43128 = G__43549;
continue;
} else {
var path = cljs.core.first(seq__43124__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__43292_43550 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__43296_43551 = null;
var count__43297_43552 = (0);
var i__43298_43553 = (0);
while(true){
if((i__43298_43553 < count__43297_43552)){
var node_43554 = chunk__43296_43551.cljs$core$IIndexed$_nth$arity$2(null,i__43298_43553);
if(cljs.core.not(node_43554.shadow$old)){
var path_match_43555 = shadow.cljs.devtools.client.browser.match_paths(node_43554.getAttribute("href"),path);
if(cljs.core.truth_(path_match_43555)){
var new_link_43556 = (function (){var G__43324 = node_43554.cloneNode(true);
G__43324.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_43555),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__43324;
})();
(node_43554.shadow$old = true);

(new_link_43556.onload = ((function (seq__43292_43550,chunk__43296_43551,count__43297_43552,i__43298_43553,seq__43124,chunk__43126,count__43127,i__43128,new_link_43556,path_match_43555,node_43554,path,seq__43124__$1,temp__5823__auto__,map__43123,map__43123__$1,msg,updates,reload_info){
return (function (e){
var seq__43325_43557 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__43327_43558 = null;
var count__43328_43559 = (0);
var i__43329_43560 = (0);
while(true){
if((i__43329_43560 < count__43328_43559)){
var map__43333_43561 = chunk__43327_43558.cljs$core$IIndexed$_nth$arity$2(null,i__43329_43560);
var map__43333_43562__$1 = cljs.core.__destructure_map(map__43333_43561);
var task_43563 = map__43333_43562__$1;
var fn_str_43564 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43333_43562__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_43565 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43333_43562__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_43566 = goog.getObjectByName(fn_str_43564,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_43565)].join(''));

(fn_obj_43566.cljs$core$IFn$_invoke$arity$2 ? fn_obj_43566.cljs$core$IFn$_invoke$arity$2(path,new_link_43556) : fn_obj_43566.call(null,path,new_link_43556));


var G__43567 = seq__43325_43557;
var G__43568 = chunk__43327_43558;
var G__43569 = count__43328_43559;
var G__43570 = (i__43329_43560 + (1));
seq__43325_43557 = G__43567;
chunk__43327_43558 = G__43568;
count__43328_43559 = G__43569;
i__43329_43560 = G__43570;
continue;
} else {
var temp__5823__auto___43571__$1 = cljs.core.seq(seq__43325_43557);
if(temp__5823__auto___43571__$1){
var seq__43325_43572__$1 = temp__5823__auto___43571__$1;
if(cljs.core.chunked_seq_QMARK_(seq__43325_43572__$1)){
var c__5565__auto___43573 = cljs.core.chunk_first(seq__43325_43572__$1);
var G__43574 = cljs.core.chunk_rest(seq__43325_43572__$1);
var G__43575 = c__5565__auto___43573;
var G__43576 = cljs.core.count(c__5565__auto___43573);
var G__43577 = (0);
seq__43325_43557 = G__43574;
chunk__43327_43558 = G__43575;
count__43328_43559 = G__43576;
i__43329_43560 = G__43577;
continue;
} else {
var map__43334_43578 = cljs.core.first(seq__43325_43572__$1);
var map__43334_43579__$1 = cljs.core.__destructure_map(map__43334_43578);
var task_43580 = map__43334_43579__$1;
var fn_str_43581 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43334_43579__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_43582 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43334_43579__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_43583 = goog.getObjectByName(fn_str_43581,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_43582)].join(''));

(fn_obj_43583.cljs$core$IFn$_invoke$arity$2 ? fn_obj_43583.cljs$core$IFn$_invoke$arity$2(path,new_link_43556) : fn_obj_43583.call(null,path,new_link_43556));


var G__43584 = cljs.core.next(seq__43325_43572__$1);
var G__43585 = null;
var G__43586 = (0);
var G__43587 = (0);
seq__43325_43557 = G__43584;
chunk__43327_43558 = G__43585;
count__43328_43559 = G__43586;
i__43329_43560 = G__43587;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_43554);
});})(seq__43292_43550,chunk__43296_43551,count__43297_43552,i__43298_43553,seq__43124,chunk__43126,count__43127,i__43128,new_link_43556,path_match_43555,node_43554,path,seq__43124__$1,temp__5823__auto__,map__43123,map__43123__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_43555], 0));

goog.dom.insertSiblingAfter(new_link_43556,node_43554);


var G__43588 = seq__43292_43550;
var G__43589 = chunk__43296_43551;
var G__43590 = count__43297_43552;
var G__43591 = (i__43298_43553 + (1));
seq__43292_43550 = G__43588;
chunk__43296_43551 = G__43589;
count__43297_43552 = G__43590;
i__43298_43553 = G__43591;
continue;
} else {
var G__43592 = seq__43292_43550;
var G__43593 = chunk__43296_43551;
var G__43594 = count__43297_43552;
var G__43595 = (i__43298_43553 + (1));
seq__43292_43550 = G__43592;
chunk__43296_43551 = G__43593;
count__43297_43552 = G__43594;
i__43298_43553 = G__43595;
continue;
}
} else {
var G__43596 = seq__43292_43550;
var G__43597 = chunk__43296_43551;
var G__43598 = count__43297_43552;
var G__43599 = (i__43298_43553 + (1));
seq__43292_43550 = G__43596;
chunk__43296_43551 = G__43597;
count__43297_43552 = G__43598;
i__43298_43553 = G__43599;
continue;
}
} else {
var temp__5823__auto___43600__$1 = cljs.core.seq(seq__43292_43550);
if(temp__5823__auto___43600__$1){
var seq__43292_43601__$1 = temp__5823__auto___43600__$1;
if(cljs.core.chunked_seq_QMARK_(seq__43292_43601__$1)){
var c__5565__auto___43602 = cljs.core.chunk_first(seq__43292_43601__$1);
var G__43603 = cljs.core.chunk_rest(seq__43292_43601__$1);
var G__43604 = c__5565__auto___43602;
var G__43605 = cljs.core.count(c__5565__auto___43602);
var G__43606 = (0);
seq__43292_43550 = G__43603;
chunk__43296_43551 = G__43604;
count__43297_43552 = G__43605;
i__43298_43553 = G__43606;
continue;
} else {
var node_43607 = cljs.core.first(seq__43292_43601__$1);
if(cljs.core.not(node_43607.shadow$old)){
var path_match_43608 = shadow.cljs.devtools.client.browser.match_paths(node_43607.getAttribute("href"),path);
if(cljs.core.truth_(path_match_43608)){
var new_link_43609 = (function (){var G__43335 = node_43607.cloneNode(true);
G__43335.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_43608),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__43335;
})();
(node_43607.shadow$old = true);

(new_link_43609.onload = ((function (seq__43292_43550,chunk__43296_43551,count__43297_43552,i__43298_43553,seq__43124,chunk__43126,count__43127,i__43128,new_link_43609,path_match_43608,node_43607,seq__43292_43601__$1,temp__5823__auto___43600__$1,path,seq__43124__$1,temp__5823__auto__,map__43123,map__43123__$1,msg,updates,reload_info){
return (function (e){
var seq__43336_43610 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__43338_43611 = null;
var count__43339_43612 = (0);
var i__43340_43613 = (0);
while(true){
if((i__43340_43613 < count__43339_43612)){
var map__43344_43614 = chunk__43338_43611.cljs$core$IIndexed$_nth$arity$2(null,i__43340_43613);
var map__43344_43615__$1 = cljs.core.__destructure_map(map__43344_43614);
var task_43616 = map__43344_43615__$1;
var fn_str_43617 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43344_43615__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_43618 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43344_43615__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_43619 = goog.getObjectByName(fn_str_43617,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_43618)].join(''));

(fn_obj_43619.cljs$core$IFn$_invoke$arity$2 ? fn_obj_43619.cljs$core$IFn$_invoke$arity$2(path,new_link_43609) : fn_obj_43619.call(null,path,new_link_43609));


var G__43620 = seq__43336_43610;
var G__43621 = chunk__43338_43611;
var G__43622 = count__43339_43612;
var G__43623 = (i__43340_43613 + (1));
seq__43336_43610 = G__43620;
chunk__43338_43611 = G__43621;
count__43339_43612 = G__43622;
i__43340_43613 = G__43623;
continue;
} else {
var temp__5823__auto___43624__$2 = cljs.core.seq(seq__43336_43610);
if(temp__5823__auto___43624__$2){
var seq__43336_43625__$1 = temp__5823__auto___43624__$2;
if(cljs.core.chunked_seq_QMARK_(seq__43336_43625__$1)){
var c__5565__auto___43626 = cljs.core.chunk_first(seq__43336_43625__$1);
var G__43627 = cljs.core.chunk_rest(seq__43336_43625__$1);
var G__43628 = c__5565__auto___43626;
var G__43629 = cljs.core.count(c__5565__auto___43626);
var G__43630 = (0);
seq__43336_43610 = G__43627;
chunk__43338_43611 = G__43628;
count__43339_43612 = G__43629;
i__43340_43613 = G__43630;
continue;
} else {
var map__43345_43631 = cljs.core.first(seq__43336_43625__$1);
var map__43345_43632__$1 = cljs.core.__destructure_map(map__43345_43631);
var task_43633 = map__43345_43632__$1;
var fn_str_43634 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43345_43632__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_43635 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43345_43632__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_43636 = goog.getObjectByName(fn_str_43634,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_43635)].join(''));

(fn_obj_43636.cljs$core$IFn$_invoke$arity$2 ? fn_obj_43636.cljs$core$IFn$_invoke$arity$2(path,new_link_43609) : fn_obj_43636.call(null,path,new_link_43609));


var G__43637 = cljs.core.next(seq__43336_43625__$1);
var G__43638 = null;
var G__43639 = (0);
var G__43640 = (0);
seq__43336_43610 = G__43637;
chunk__43338_43611 = G__43638;
count__43339_43612 = G__43639;
i__43340_43613 = G__43640;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_43607);
});})(seq__43292_43550,chunk__43296_43551,count__43297_43552,i__43298_43553,seq__43124,chunk__43126,count__43127,i__43128,new_link_43609,path_match_43608,node_43607,seq__43292_43601__$1,temp__5823__auto___43600__$1,path,seq__43124__$1,temp__5823__auto__,map__43123,map__43123__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_43608], 0));

goog.dom.insertSiblingAfter(new_link_43609,node_43607);


var G__43641 = cljs.core.next(seq__43292_43601__$1);
var G__43642 = null;
var G__43643 = (0);
var G__43644 = (0);
seq__43292_43550 = G__43641;
chunk__43296_43551 = G__43642;
count__43297_43552 = G__43643;
i__43298_43553 = G__43644;
continue;
} else {
var G__43645 = cljs.core.next(seq__43292_43601__$1);
var G__43646 = null;
var G__43647 = (0);
var G__43648 = (0);
seq__43292_43550 = G__43645;
chunk__43296_43551 = G__43646;
count__43297_43552 = G__43647;
i__43298_43553 = G__43648;
continue;
}
} else {
var G__43649 = cljs.core.next(seq__43292_43601__$1);
var G__43650 = null;
var G__43651 = (0);
var G__43652 = (0);
seq__43292_43550 = G__43649;
chunk__43296_43551 = G__43650;
count__43297_43552 = G__43651;
i__43298_43553 = G__43652;
continue;
}
}
} else {
}
}
break;
}


var G__43653 = cljs.core.next(seq__43124__$1);
var G__43654 = null;
var G__43655 = (0);
var G__43656 = (0);
seq__43124 = G__43653;
chunk__43126 = G__43654;
count__43127 = G__43655;
i__43128 = G__43656;
continue;
} else {
var G__43657 = cljs.core.next(seq__43124__$1);
var G__43658 = null;
var G__43659 = (0);
var G__43660 = (0);
seq__43124 = G__43657;
chunk__43126 = G__43658;
count__43127 = G__43659;
i__43128 = G__43660;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__43347 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__43347) : success.call(null,G__43347));
}catch (e43346){var e = e43346;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__43348,success,fail){
var map__43349 = p__43348;
var map__43349__$1 = cljs.core.__destructure_map(map__43349);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43349__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__43351 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__43351) : success.call(null,G__43351));
}catch (e43350){var e = e43350;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__43352,done,error){
var map__43353 = p__43352;
var map__43353__$1 = cljs.core.__destructure_map(map__43353);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43353__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__43354,done,error){
var map__43355 = p__43354;
var map__43355__$1 = cljs.core.__destructure_map(map__43355);
var msg = map__43355__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43355__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43355__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43355__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__43356){
var map__43357 = p__43356;
var map__43357__$1 = cljs.core.__destructure_map(map__43357);
var src = map__43357__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43357__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5041__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5041__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__43358 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__43358) : done.call(null,G__43358));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__43359){
var map__43360 = p__43359;
var map__43360__$1 = cljs.core.__destructure_map(map__43360);
var msg__$1 = map__43360__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43360__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e43361){var ex = e43361;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__43362){
var map__43363 = p__43362;
var map__43363__$1 = cljs.core.__destructure_map(map__43363);
var env = map__43363__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43363__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__43364){
var map__43365 = p__43364;
var map__43365__$1 = cljs.core.__destructure_map(map__43365);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43365__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43365__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__43366){
var map__43367 = p__43366;
var map__43367__$1 = cljs.core.__destructure_map(map__43367);
var svc = map__43367__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43367__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
