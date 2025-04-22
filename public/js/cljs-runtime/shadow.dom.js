goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_34946 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_34946(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_34951 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_34951(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__33828 = coll;
var G__33829 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33828,G__33829) : shadow.dom.lazy_native_coll_seq.call(null,G__33828,G__33829));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5043__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__33852 = arguments.length;
switch (G__33852) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__33872 = arguments.length;
switch (G__33872) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__33884 = arguments.length;
switch (G__33884) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__33893 = arguments.length;
switch (G__33893) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__33897 = arguments.length;
switch (G__33897) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__33912 = arguments.length;
switch (G__33912) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5043__auto__ = (!((typeof document !== 'undefined')));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e33929){if((e33929 instanceof Object)){
var e = e33929;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33929;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5043__auto__ = (!((typeof document !== 'undefined')));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__33943 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33944 = null;
var count__33945 = (0);
var i__33946 = (0);
while(true){
if((i__33946 < count__33945)){
var el = chunk__33944.cljs$core$IIndexed$_nth$arity$2(null,i__33946);
var handler_34987__$1 = ((function (seq__33943,chunk__33944,count__33945,i__33946,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33943,chunk__33944,count__33945,i__33946,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34987__$1);


var G__34990 = seq__33943;
var G__34991 = chunk__33944;
var G__34992 = count__33945;
var G__34993 = (i__33946 + (1));
seq__33943 = G__34990;
chunk__33944 = G__34991;
count__33945 = G__34992;
i__33946 = G__34993;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__33943);
if(temp__5823__auto__){
var seq__33943__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33943__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__33943__$1);
var G__34994 = cljs.core.chunk_rest(seq__33943__$1);
var G__34995 = c__5565__auto__;
var G__34996 = cljs.core.count(c__5565__auto__);
var G__34997 = (0);
seq__33943 = G__34994;
chunk__33944 = G__34995;
count__33945 = G__34996;
i__33946 = G__34997;
continue;
} else {
var el = cljs.core.first(seq__33943__$1);
var handler_34998__$1 = ((function (seq__33943,chunk__33944,count__33945,i__33946,el,seq__33943__$1,temp__5823__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33943,chunk__33944,count__33945,i__33946,el,seq__33943__$1,temp__5823__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34998__$1);


var G__35000 = cljs.core.next(seq__33943__$1);
var G__35001 = null;
var G__35002 = (0);
var G__35003 = (0);
seq__33943 = G__35000;
chunk__33944 = G__35001;
count__33945 = G__35002;
i__33946 = G__35003;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__33962 = arguments.length;
switch (G__33962) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__33973 = cljs.core.seq(events);
var chunk__33974 = null;
var count__33975 = (0);
var i__33976 = (0);
while(true){
if((i__33976 < count__33975)){
var vec__33986 = chunk__33974.cljs$core$IIndexed$_nth$arity$2(null,i__33976);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33986,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33986,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35017 = seq__33973;
var G__35018 = chunk__33974;
var G__35019 = count__33975;
var G__35020 = (i__33976 + (1));
seq__33973 = G__35017;
chunk__33974 = G__35018;
count__33975 = G__35019;
i__33976 = G__35020;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__33973);
if(temp__5823__auto__){
var seq__33973__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33973__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__33973__$1);
var G__35021 = cljs.core.chunk_rest(seq__33973__$1);
var G__35022 = c__5565__auto__;
var G__35023 = cljs.core.count(c__5565__auto__);
var G__35024 = (0);
seq__33973 = G__35021;
chunk__33974 = G__35022;
count__33975 = G__35023;
i__33976 = G__35024;
continue;
} else {
var vec__33990 = cljs.core.first(seq__33973__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33990,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33990,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35025 = cljs.core.next(seq__33973__$1);
var G__35026 = null;
var G__35027 = (0);
var G__35028 = (0);
seq__33973 = G__35025;
chunk__33974 = G__35026;
count__33975 = G__35027;
i__33976 = G__35028;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__33999 = cljs.core.seq(styles);
var chunk__34000 = null;
var count__34001 = (0);
var i__34002 = (0);
while(true){
if((i__34002 < count__34001)){
var vec__34019 = chunk__34000.cljs$core$IIndexed$_nth$arity$2(null,i__34002);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34019,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34019,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35031 = seq__33999;
var G__35032 = chunk__34000;
var G__35033 = count__34001;
var G__35034 = (i__34002 + (1));
seq__33999 = G__35031;
chunk__34000 = G__35032;
count__34001 = G__35033;
i__34002 = G__35034;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__33999);
if(temp__5823__auto__){
var seq__33999__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33999__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__33999__$1);
var G__35035 = cljs.core.chunk_rest(seq__33999__$1);
var G__35036 = c__5565__auto__;
var G__35037 = cljs.core.count(c__5565__auto__);
var G__35038 = (0);
seq__33999 = G__35035;
chunk__34000 = G__35036;
count__34001 = G__35037;
i__34002 = G__35038;
continue;
} else {
var vec__34038 = cljs.core.first(seq__33999__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34038,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34038,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35040 = cljs.core.next(seq__33999__$1);
var G__35041 = null;
var G__35042 = (0);
var G__35043 = (0);
seq__33999 = G__35040;
chunk__34000 = G__35041;
count__34001 = G__35042;
i__34002 = G__35043;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__34057_35046 = key;
var G__34057_35047__$1 = (((G__34057_35046 instanceof cljs.core.Keyword))?G__34057_35046.fqn:null);
switch (G__34057_35047__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_35054 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5043__auto__ = goog.string.startsWith(ks_35054,"data-");
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return goog.string.startsWith(ks_35054,"aria-");
}
})())){
el.setAttribute(ks_35054,value);
} else {
(el[ks_35054] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__34121){
var map__34123 = p__34121;
var map__34123__$1 = cljs.core.__destructure_map(map__34123);
var props = map__34123__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34123__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__34125 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34125,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34125,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34125,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__34131 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__34131,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__34131;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__34135 = arguments.length;
switch (G__34135) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__34162){
var vec__34169 = p__34162;
var seq__34170 = cljs.core.seq(vec__34169);
var first__34171 = cljs.core.first(seq__34170);
var seq__34170__$1 = cljs.core.next(seq__34170);
var nn = first__34171;
var first__34171__$1 = cljs.core.first(seq__34170__$1);
var seq__34170__$2 = cljs.core.next(seq__34170__$1);
var np = first__34171__$1;
var nc = seq__34170__$2;
var node = vec__34169;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34175 = nn;
var G__34176 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34175,G__34176) : create_fn.call(null,G__34175,G__34176));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34187 = nn;
var G__34188 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34187,G__34188) : create_fn.call(null,G__34187,G__34188));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__34192 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34192,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34192,(1),null);
var seq__34197_35086 = cljs.core.seq(node_children);
var chunk__34198_35087 = null;
var count__34199_35088 = (0);
var i__34200_35089 = (0);
while(true){
if((i__34200_35089 < count__34199_35088)){
var child_struct_35090 = chunk__34198_35087.cljs$core$IIndexed$_nth$arity$2(null,i__34200_35089);
var children_35091 = shadow.dom.dom_node(child_struct_35090);
if(cljs.core.seq_QMARK_(children_35091)){
var seq__34289_35093 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35091));
var chunk__34291_35094 = null;
var count__34292_35095 = (0);
var i__34293_35096 = (0);
while(true){
if((i__34293_35096 < count__34292_35095)){
var child_35104 = chunk__34291_35094.cljs$core$IIndexed$_nth$arity$2(null,i__34293_35096);
if(cljs.core.truth_(child_35104)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35104);


var G__35106 = seq__34289_35093;
var G__35107 = chunk__34291_35094;
var G__35108 = count__34292_35095;
var G__35109 = (i__34293_35096 + (1));
seq__34289_35093 = G__35106;
chunk__34291_35094 = G__35107;
count__34292_35095 = G__35108;
i__34293_35096 = G__35109;
continue;
} else {
var G__35110 = seq__34289_35093;
var G__35111 = chunk__34291_35094;
var G__35112 = count__34292_35095;
var G__35113 = (i__34293_35096 + (1));
seq__34289_35093 = G__35110;
chunk__34291_35094 = G__35111;
count__34292_35095 = G__35112;
i__34293_35096 = G__35113;
continue;
}
} else {
var temp__5823__auto___35115 = cljs.core.seq(seq__34289_35093);
if(temp__5823__auto___35115){
var seq__34289_35116__$1 = temp__5823__auto___35115;
if(cljs.core.chunked_seq_QMARK_(seq__34289_35116__$1)){
var c__5565__auto___35117 = cljs.core.chunk_first(seq__34289_35116__$1);
var G__35118 = cljs.core.chunk_rest(seq__34289_35116__$1);
var G__35119 = c__5565__auto___35117;
var G__35120 = cljs.core.count(c__5565__auto___35117);
var G__35121 = (0);
seq__34289_35093 = G__35118;
chunk__34291_35094 = G__35119;
count__34292_35095 = G__35120;
i__34293_35096 = G__35121;
continue;
} else {
var child_35122 = cljs.core.first(seq__34289_35116__$1);
if(cljs.core.truth_(child_35122)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35122);


var G__35124 = cljs.core.next(seq__34289_35116__$1);
var G__35125 = null;
var G__35126 = (0);
var G__35127 = (0);
seq__34289_35093 = G__35124;
chunk__34291_35094 = G__35125;
count__34292_35095 = G__35126;
i__34293_35096 = G__35127;
continue;
} else {
var G__35129 = cljs.core.next(seq__34289_35116__$1);
var G__35130 = null;
var G__35131 = (0);
var G__35132 = (0);
seq__34289_35093 = G__35129;
chunk__34291_35094 = G__35130;
count__34292_35095 = G__35131;
i__34293_35096 = G__35132;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35091);
}


var G__35140 = seq__34197_35086;
var G__35141 = chunk__34198_35087;
var G__35142 = count__34199_35088;
var G__35144 = (i__34200_35089 + (1));
seq__34197_35086 = G__35140;
chunk__34198_35087 = G__35141;
count__34199_35088 = G__35142;
i__34200_35089 = G__35144;
continue;
} else {
var temp__5823__auto___35145 = cljs.core.seq(seq__34197_35086);
if(temp__5823__auto___35145){
var seq__34197_35148__$1 = temp__5823__auto___35145;
if(cljs.core.chunked_seq_QMARK_(seq__34197_35148__$1)){
var c__5565__auto___35149 = cljs.core.chunk_first(seq__34197_35148__$1);
var G__35151 = cljs.core.chunk_rest(seq__34197_35148__$1);
var G__35152 = c__5565__auto___35149;
var G__35153 = cljs.core.count(c__5565__auto___35149);
var G__35154 = (0);
seq__34197_35086 = G__35151;
chunk__34198_35087 = G__35152;
count__34199_35088 = G__35153;
i__34200_35089 = G__35154;
continue;
} else {
var child_struct_35156 = cljs.core.first(seq__34197_35148__$1);
var children_35157 = shadow.dom.dom_node(child_struct_35156);
if(cljs.core.seq_QMARK_(children_35157)){
var seq__34317_35159 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35157));
var chunk__34319_35160 = null;
var count__34320_35161 = (0);
var i__34321_35162 = (0);
while(true){
if((i__34321_35162 < count__34320_35161)){
var child_35163 = chunk__34319_35160.cljs$core$IIndexed$_nth$arity$2(null,i__34321_35162);
if(cljs.core.truth_(child_35163)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35163);


var G__35164 = seq__34317_35159;
var G__35165 = chunk__34319_35160;
var G__35166 = count__34320_35161;
var G__35167 = (i__34321_35162 + (1));
seq__34317_35159 = G__35164;
chunk__34319_35160 = G__35165;
count__34320_35161 = G__35166;
i__34321_35162 = G__35167;
continue;
} else {
var G__35169 = seq__34317_35159;
var G__35170 = chunk__34319_35160;
var G__35171 = count__34320_35161;
var G__35172 = (i__34321_35162 + (1));
seq__34317_35159 = G__35169;
chunk__34319_35160 = G__35170;
count__34320_35161 = G__35171;
i__34321_35162 = G__35172;
continue;
}
} else {
var temp__5823__auto___35176__$1 = cljs.core.seq(seq__34317_35159);
if(temp__5823__auto___35176__$1){
var seq__34317_35178__$1 = temp__5823__auto___35176__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34317_35178__$1)){
var c__5565__auto___35180 = cljs.core.chunk_first(seq__34317_35178__$1);
var G__35181 = cljs.core.chunk_rest(seq__34317_35178__$1);
var G__35182 = c__5565__auto___35180;
var G__35183 = cljs.core.count(c__5565__auto___35180);
var G__35184 = (0);
seq__34317_35159 = G__35181;
chunk__34319_35160 = G__35182;
count__34320_35161 = G__35183;
i__34321_35162 = G__35184;
continue;
} else {
var child_35191 = cljs.core.first(seq__34317_35178__$1);
if(cljs.core.truth_(child_35191)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35191);


var G__35193 = cljs.core.next(seq__34317_35178__$1);
var G__35194 = null;
var G__35195 = (0);
var G__35196 = (0);
seq__34317_35159 = G__35193;
chunk__34319_35160 = G__35194;
count__34320_35161 = G__35195;
i__34321_35162 = G__35196;
continue;
} else {
var G__35197 = cljs.core.next(seq__34317_35178__$1);
var G__35198 = null;
var G__35199 = (0);
var G__35200 = (0);
seq__34317_35159 = G__35197;
chunk__34319_35160 = G__35198;
count__34320_35161 = G__35199;
i__34321_35162 = G__35200;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35157);
}


var G__35201 = cljs.core.next(seq__34197_35148__$1);
var G__35202 = null;
var G__35203 = (0);
var G__35204 = (0);
seq__34197_35086 = G__35201;
chunk__34198_35087 = G__35202;
count__34199_35088 = G__35203;
i__34200_35089 = G__35204;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__34360 = cljs.core.seq(node);
var chunk__34361 = null;
var count__34362 = (0);
var i__34363 = (0);
while(true){
if((i__34363 < count__34362)){
var n = chunk__34361.cljs$core$IIndexed$_nth$arity$2(null,i__34363);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35231 = seq__34360;
var G__35232 = chunk__34361;
var G__35233 = count__34362;
var G__35234 = (i__34363 + (1));
seq__34360 = G__35231;
chunk__34361 = G__35232;
count__34362 = G__35233;
i__34363 = G__35234;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__34360);
if(temp__5823__auto__){
var seq__34360__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34360__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__34360__$1);
var G__35237 = cljs.core.chunk_rest(seq__34360__$1);
var G__35238 = c__5565__auto__;
var G__35239 = cljs.core.count(c__5565__auto__);
var G__35240 = (0);
seq__34360 = G__35237;
chunk__34361 = G__35238;
count__34362 = G__35239;
i__34363 = G__35240;
continue;
} else {
var n = cljs.core.first(seq__34360__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35243 = cljs.core.next(seq__34360__$1);
var G__35244 = null;
var G__35245 = (0);
var G__35246 = (0);
seq__34360 = G__35243;
chunk__34361 = G__35244;
count__34362 = G__35245;
i__34363 = G__35246;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__34377 = arguments.length;
switch (G__34377) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__34386 = arguments.length;
switch (G__34386) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__34396 = arguments.length;
switch (G__34396) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5043__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5772__auto__ = [];
var len__5766__auto___35328 = arguments.length;
var i__5767__auto___35329 = (0);
while(true){
if((i__5767__auto___35329 < len__5766__auto___35328)){
args__5772__auto__.push((arguments[i__5767__auto___35329]));

var G__35330 = (i__5767__auto___35329 + (1));
i__5767__auto___35329 = G__35330;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__34423_35332 = cljs.core.seq(nodes);
var chunk__34424_35333 = null;
var count__34425_35334 = (0);
var i__34426_35335 = (0);
while(true){
if((i__34426_35335 < count__34425_35334)){
var node_35340 = chunk__34424_35333.cljs$core$IIndexed$_nth$arity$2(null,i__34426_35335);
fragment.appendChild(shadow.dom._to_dom(node_35340));


var G__35341 = seq__34423_35332;
var G__35342 = chunk__34424_35333;
var G__35343 = count__34425_35334;
var G__35344 = (i__34426_35335 + (1));
seq__34423_35332 = G__35341;
chunk__34424_35333 = G__35342;
count__34425_35334 = G__35343;
i__34426_35335 = G__35344;
continue;
} else {
var temp__5823__auto___35347 = cljs.core.seq(seq__34423_35332);
if(temp__5823__auto___35347){
var seq__34423_35348__$1 = temp__5823__auto___35347;
if(cljs.core.chunked_seq_QMARK_(seq__34423_35348__$1)){
var c__5565__auto___35349 = cljs.core.chunk_first(seq__34423_35348__$1);
var G__35350 = cljs.core.chunk_rest(seq__34423_35348__$1);
var G__35351 = c__5565__auto___35349;
var G__35352 = cljs.core.count(c__5565__auto___35349);
var G__35353 = (0);
seq__34423_35332 = G__35350;
chunk__34424_35333 = G__35351;
count__34425_35334 = G__35352;
i__34426_35335 = G__35353;
continue;
} else {
var node_35355 = cljs.core.first(seq__34423_35348__$1);
fragment.appendChild(shadow.dom._to_dom(node_35355));


var G__35357 = cljs.core.next(seq__34423_35348__$1);
var G__35358 = null;
var G__35359 = (0);
var G__35360 = (0);
seq__34423_35332 = G__35357;
chunk__34424_35333 = G__35358;
count__34425_35334 = G__35359;
i__34426_35335 = G__35360;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq34418){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34418));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__34443_35365 = cljs.core.seq(scripts);
var chunk__34444_35366 = null;
var count__34445_35367 = (0);
var i__34446_35368 = (0);
while(true){
if((i__34446_35368 < count__34445_35367)){
var vec__34458_35369 = chunk__34444_35366.cljs$core$IIndexed$_nth$arity$2(null,i__34446_35368);
var script_tag_35370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34458_35369,(0),null);
var script_body_35371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34458_35369,(1),null);
eval(script_body_35371);


var G__35373 = seq__34443_35365;
var G__35374 = chunk__34444_35366;
var G__35375 = count__34445_35367;
var G__35376 = (i__34446_35368 + (1));
seq__34443_35365 = G__35373;
chunk__34444_35366 = G__35374;
count__34445_35367 = G__35375;
i__34446_35368 = G__35376;
continue;
} else {
var temp__5823__auto___35377 = cljs.core.seq(seq__34443_35365);
if(temp__5823__auto___35377){
var seq__34443_35378__$1 = temp__5823__auto___35377;
if(cljs.core.chunked_seq_QMARK_(seq__34443_35378__$1)){
var c__5565__auto___35379 = cljs.core.chunk_first(seq__34443_35378__$1);
var G__35380 = cljs.core.chunk_rest(seq__34443_35378__$1);
var G__35381 = c__5565__auto___35379;
var G__35382 = cljs.core.count(c__5565__auto___35379);
var G__35383 = (0);
seq__34443_35365 = G__35380;
chunk__34444_35366 = G__35381;
count__34445_35367 = G__35382;
i__34446_35368 = G__35383;
continue;
} else {
var vec__34466_35384 = cljs.core.first(seq__34443_35378__$1);
var script_tag_35385 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34466_35384,(0),null);
var script_body_35386 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34466_35384,(1),null);
eval(script_body_35386);


var G__35387 = cljs.core.next(seq__34443_35378__$1);
var G__35388 = null;
var G__35389 = (0);
var G__35390 = (0);
seq__34443_35365 = G__35387;
chunk__34444_35366 = G__35388;
count__34445_35367 = G__35389;
i__34446_35368 = G__35390;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__34470){
var vec__34471 = p__34470;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34471,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34471,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__34492 = arguments.length;
switch (G__34492) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__34515 = cljs.core.seq(style_keys);
var chunk__34516 = null;
var count__34517 = (0);
var i__34518 = (0);
while(true){
if((i__34518 < count__34517)){
var it = chunk__34516.cljs$core$IIndexed$_nth$arity$2(null,i__34518);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35418 = seq__34515;
var G__35419 = chunk__34516;
var G__35420 = count__34517;
var G__35421 = (i__34518 + (1));
seq__34515 = G__35418;
chunk__34516 = G__35419;
count__34517 = G__35420;
i__34518 = G__35421;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__34515);
if(temp__5823__auto__){
var seq__34515__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34515__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__34515__$1);
var G__35423 = cljs.core.chunk_rest(seq__34515__$1);
var G__35424 = c__5565__auto__;
var G__35425 = cljs.core.count(c__5565__auto__);
var G__35426 = (0);
seq__34515 = G__35423;
chunk__34516 = G__35424;
count__34517 = G__35425;
i__34518 = G__35426;
continue;
} else {
var it = cljs.core.first(seq__34515__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35428 = cljs.core.next(seq__34515__$1);
var G__35429 = null;
var G__35430 = (0);
var G__35431 = (0);
seq__34515 = G__35428;
chunk__34516 = G__35429;
count__34517 = G__35430;
i__34518 = G__35431;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k34526,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__34539 = k34526;
var G__34539__$1 = (((G__34539 instanceof cljs.core.Keyword))?G__34539.fqn:null);
switch (G__34539__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34526,else__5343__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__34543){
var vec__34545 = p__34543;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34545,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34545,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34525){
var self__ = this;
var G__34525__$1 = this;
return (new cljs.core.RecordIter((0),G__34525__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34527,other34528){
var self__ = this;
var this34527__$1 = this;
return (((!((other34528 == null)))) && ((((this34527__$1.constructor === other34528.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34527__$1.x,other34528.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34527__$1.y,other34528.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34527__$1.__extmap,other34528.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k34526){
var self__ = this;
var this__5347__auto____$1 = this;
var G__34582 = k34526;
var G__34582__$1 = (((G__34582 instanceof cljs.core.Keyword))?G__34582.fqn:null);
switch (G__34582__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k34526);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__34525){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__34585 = cljs.core.keyword_identical_QMARK_;
var expr__34586 = k__5349__auto__;
if(cljs.core.truth_((pred__34585.cljs$core$IFn$_invoke$arity$2 ? pred__34585.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__34586) : pred__34585.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__34586)))){
return (new shadow.dom.Coordinate(G__34525,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34585.cljs$core$IFn$_invoke$arity$2 ? pred__34585.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__34586) : pred__34585.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__34586)))){
return (new shadow.dom.Coordinate(self__.x,G__34525,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__34525),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__34525){
var self__ = this;
var this__5339__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__34525,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__34534){
var extmap__5382__auto__ = (function (){var G__34600 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34534,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__34534)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34600);
} else {
return G__34600;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__34534),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__34534),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k34620,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__34633 = k34620;
var G__34633__$1 = (((G__34633 instanceof cljs.core.Keyword))?G__34633.fqn:null);
switch (G__34633__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34620,else__5343__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__34638){
var vec__34639 = p__34638;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34639,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34639,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#shadow.dom.Size{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34619){
var self__ = this;
var G__34619__$1 = this;
return (new cljs.core.RecordIter((0),G__34619__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34621,other34622){
var self__ = this;
var this34621__$1 = this;
return (((!((other34622 == null)))) && ((((this34621__$1.constructor === other34622.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34621__$1.w,other34622.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34621__$1.h,other34622.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34621__$1.__extmap,other34622.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k34620){
var self__ = this;
var this__5347__auto____$1 = this;
var G__34673 = k34620;
var G__34673__$1 = (((G__34673 instanceof cljs.core.Keyword))?G__34673.fqn:null);
switch (G__34673__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k34620);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__34619){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__34676 = cljs.core.keyword_identical_QMARK_;
var expr__34677 = k__5349__auto__;
if(cljs.core.truth_((pred__34676.cljs$core$IFn$_invoke$arity$2 ? pred__34676.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__34677) : pred__34676.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__34677)))){
return (new shadow.dom.Size(G__34619,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34676.cljs$core$IFn$_invoke$arity$2 ? pred__34676.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__34677) : pred__34676.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__34677)))){
return (new shadow.dom.Size(self__.w,G__34619,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__34619),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__34619){
var self__ = this;
var this__5339__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__34619,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__34627){
var extmap__5382__auto__ = (function (){var G__34691 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34627,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__34627)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34691);
} else {
return G__34691;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__34627),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__34627),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5630__auto__ = opts;
var l__5631__auto__ = a__5630__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5631__auto__)){
var G__35569 = (i + (1));
var G__35570 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__35569;
ret = G__35570;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34721){
var vec__34723 = p__34721;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34723,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34723,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__34740 = arguments.length;
switch (G__34740) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5821__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5821__auto__)){
var child = temp__5821__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__35580 = ps;
var G__35581 = (i + (1));
el__$1 = G__35580;
i = G__35581;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__34779 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34779,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34779,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34779,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__34784_35590 = cljs.core.seq(props);
var chunk__34785_35591 = null;
var count__34786_35592 = (0);
var i__34787_35593 = (0);
while(true){
if((i__34787_35593 < count__34786_35592)){
var vec__34805_35594 = chunk__34785_35591.cljs$core$IIndexed$_nth$arity$2(null,i__34787_35593);
var k_35595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34805_35594,(0),null);
var v_35596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34805_35594,(1),null);
el.setAttributeNS((function (){var temp__5823__auto__ = cljs.core.namespace(k_35595);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35595),v_35596);


var G__35598 = seq__34784_35590;
var G__35599 = chunk__34785_35591;
var G__35600 = count__34786_35592;
var G__35601 = (i__34787_35593 + (1));
seq__34784_35590 = G__35598;
chunk__34785_35591 = G__35599;
count__34786_35592 = G__35600;
i__34787_35593 = G__35601;
continue;
} else {
var temp__5823__auto___35602 = cljs.core.seq(seq__34784_35590);
if(temp__5823__auto___35602){
var seq__34784_35603__$1 = temp__5823__auto___35602;
if(cljs.core.chunked_seq_QMARK_(seq__34784_35603__$1)){
var c__5565__auto___35604 = cljs.core.chunk_first(seq__34784_35603__$1);
var G__35605 = cljs.core.chunk_rest(seq__34784_35603__$1);
var G__35606 = c__5565__auto___35604;
var G__35607 = cljs.core.count(c__5565__auto___35604);
var G__35608 = (0);
seq__34784_35590 = G__35605;
chunk__34785_35591 = G__35606;
count__34786_35592 = G__35607;
i__34787_35593 = G__35608;
continue;
} else {
var vec__34816_35609 = cljs.core.first(seq__34784_35603__$1);
var k_35610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34816_35609,(0),null);
var v_35611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34816_35609,(1),null);
el.setAttributeNS((function (){var temp__5823__auto____$1 = cljs.core.namespace(k_35610);
if(cljs.core.truth_(temp__5823__auto____$1)){
var ns = temp__5823__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35610),v_35611);


var G__35612 = cljs.core.next(seq__34784_35603__$1);
var G__35613 = null;
var G__35614 = (0);
var G__35615 = (0);
seq__34784_35590 = G__35612;
chunk__34785_35591 = G__35613;
count__34786_35592 = G__35614;
i__34787_35593 = G__35615;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__34826 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34826,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34826,(1),null);
var seq__34829_35673 = cljs.core.seq(node_children);
var chunk__34831_35674 = null;
var count__34832_35675 = (0);
var i__34833_35676 = (0);
while(true){
if((i__34833_35676 < count__34832_35675)){
var child_struct_35678 = chunk__34831_35674.cljs$core$IIndexed$_nth$arity$2(null,i__34833_35676);
if((!((child_struct_35678 == null)))){
if(typeof child_struct_35678 === 'string'){
var text_35679 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35679),child_struct_35678].join(''));
} else {
var children_35681 = shadow.dom.svg_node(child_struct_35678);
if(cljs.core.seq_QMARK_(children_35681)){
var seq__34883_35682 = cljs.core.seq(children_35681);
var chunk__34885_35683 = null;
var count__34886_35684 = (0);
var i__34887_35685 = (0);
while(true){
if((i__34887_35685 < count__34886_35684)){
var child_35686 = chunk__34885_35683.cljs$core$IIndexed$_nth$arity$2(null,i__34887_35685);
if(cljs.core.truth_(child_35686)){
node.appendChild(child_35686);


var G__35688 = seq__34883_35682;
var G__35689 = chunk__34885_35683;
var G__35690 = count__34886_35684;
var G__35691 = (i__34887_35685 + (1));
seq__34883_35682 = G__35688;
chunk__34885_35683 = G__35689;
count__34886_35684 = G__35690;
i__34887_35685 = G__35691;
continue;
} else {
var G__35692 = seq__34883_35682;
var G__35693 = chunk__34885_35683;
var G__35694 = count__34886_35684;
var G__35695 = (i__34887_35685 + (1));
seq__34883_35682 = G__35692;
chunk__34885_35683 = G__35693;
count__34886_35684 = G__35694;
i__34887_35685 = G__35695;
continue;
}
} else {
var temp__5823__auto___35723 = cljs.core.seq(seq__34883_35682);
if(temp__5823__auto___35723){
var seq__34883_35724__$1 = temp__5823__auto___35723;
if(cljs.core.chunked_seq_QMARK_(seq__34883_35724__$1)){
var c__5565__auto___35726 = cljs.core.chunk_first(seq__34883_35724__$1);
var G__35727 = cljs.core.chunk_rest(seq__34883_35724__$1);
var G__35728 = c__5565__auto___35726;
var G__35729 = cljs.core.count(c__5565__auto___35726);
var G__35730 = (0);
seq__34883_35682 = G__35727;
chunk__34885_35683 = G__35728;
count__34886_35684 = G__35729;
i__34887_35685 = G__35730;
continue;
} else {
var child_35732 = cljs.core.first(seq__34883_35724__$1);
if(cljs.core.truth_(child_35732)){
node.appendChild(child_35732);


var G__35733 = cljs.core.next(seq__34883_35724__$1);
var G__35734 = null;
var G__35735 = (0);
var G__35736 = (0);
seq__34883_35682 = G__35733;
chunk__34885_35683 = G__35734;
count__34886_35684 = G__35735;
i__34887_35685 = G__35736;
continue;
} else {
var G__35738 = cljs.core.next(seq__34883_35724__$1);
var G__35739 = null;
var G__35740 = (0);
var G__35741 = (0);
seq__34883_35682 = G__35738;
chunk__34885_35683 = G__35739;
count__34886_35684 = G__35740;
i__34887_35685 = G__35741;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35681);
}
}


var G__35742 = seq__34829_35673;
var G__35743 = chunk__34831_35674;
var G__35744 = count__34832_35675;
var G__35745 = (i__34833_35676 + (1));
seq__34829_35673 = G__35742;
chunk__34831_35674 = G__35743;
count__34832_35675 = G__35744;
i__34833_35676 = G__35745;
continue;
} else {
var G__35746 = seq__34829_35673;
var G__35747 = chunk__34831_35674;
var G__35748 = count__34832_35675;
var G__35749 = (i__34833_35676 + (1));
seq__34829_35673 = G__35746;
chunk__34831_35674 = G__35747;
count__34832_35675 = G__35748;
i__34833_35676 = G__35749;
continue;
}
} else {
var temp__5823__auto___35750 = cljs.core.seq(seq__34829_35673);
if(temp__5823__auto___35750){
var seq__34829_35752__$1 = temp__5823__auto___35750;
if(cljs.core.chunked_seq_QMARK_(seq__34829_35752__$1)){
var c__5565__auto___35753 = cljs.core.chunk_first(seq__34829_35752__$1);
var G__35754 = cljs.core.chunk_rest(seq__34829_35752__$1);
var G__35755 = c__5565__auto___35753;
var G__35756 = cljs.core.count(c__5565__auto___35753);
var G__35757 = (0);
seq__34829_35673 = G__35754;
chunk__34831_35674 = G__35755;
count__34832_35675 = G__35756;
i__34833_35676 = G__35757;
continue;
} else {
var child_struct_35758 = cljs.core.first(seq__34829_35752__$1);
if((!((child_struct_35758 == null)))){
if(typeof child_struct_35758 === 'string'){
var text_35759 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35759),child_struct_35758].join(''));
} else {
var children_35760 = shadow.dom.svg_node(child_struct_35758);
if(cljs.core.seq_QMARK_(children_35760)){
var seq__34898_35761 = cljs.core.seq(children_35760);
var chunk__34900_35762 = null;
var count__34901_35763 = (0);
var i__34902_35764 = (0);
while(true){
if((i__34902_35764 < count__34901_35763)){
var child_35765 = chunk__34900_35762.cljs$core$IIndexed$_nth$arity$2(null,i__34902_35764);
if(cljs.core.truth_(child_35765)){
node.appendChild(child_35765);


var G__35766 = seq__34898_35761;
var G__35767 = chunk__34900_35762;
var G__35768 = count__34901_35763;
var G__35769 = (i__34902_35764 + (1));
seq__34898_35761 = G__35766;
chunk__34900_35762 = G__35767;
count__34901_35763 = G__35768;
i__34902_35764 = G__35769;
continue;
} else {
var G__35771 = seq__34898_35761;
var G__35772 = chunk__34900_35762;
var G__35773 = count__34901_35763;
var G__35774 = (i__34902_35764 + (1));
seq__34898_35761 = G__35771;
chunk__34900_35762 = G__35772;
count__34901_35763 = G__35773;
i__34902_35764 = G__35774;
continue;
}
} else {
var temp__5823__auto___35777__$1 = cljs.core.seq(seq__34898_35761);
if(temp__5823__auto___35777__$1){
var seq__34898_35779__$1 = temp__5823__auto___35777__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34898_35779__$1)){
var c__5565__auto___35781 = cljs.core.chunk_first(seq__34898_35779__$1);
var G__35782 = cljs.core.chunk_rest(seq__34898_35779__$1);
var G__35783 = c__5565__auto___35781;
var G__35784 = cljs.core.count(c__5565__auto___35781);
var G__35785 = (0);
seq__34898_35761 = G__35782;
chunk__34900_35762 = G__35783;
count__34901_35763 = G__35784;
i__34902_35764 = G__35785;
continue;
} else {
var child_35786 = cljs.core.first(seq__34898_35779__$1);
if(cljs.core.truth_(child_35786)){
node.appendChild(child_35786);


var G__35787 = cljs.core.next(seq__34898_35779__$1);
var G__35788 = null;
var G__35789 = (0);
var G__35790 = (0);
seq__34898_35761 = G__35787;
chunk__34900_35762 = G__35788;
count__34901_35763 = G__35789;
i__34902_35764 = G__35790;
continue;
} else {
var G__35791 = cljs.core.next(seq__34898_35779__$1);
var G__35792 = null;
var G__35793 = (0);
var G__35794 = (0);
seq__34898_35761 = G__35791;
chunk__34900_35762 = G__35792;
count__34901_35763 = G__35793;
i__34902_35764 = G__35794;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35760);
}
}


var G__35796 = cljs.core.next(seq__34829_35752__$1);
var G__35797 = null;
var G__35798 = (0);
var G__35799 = (0);
seq__34829_35673 = G__35796;
chunk__34831_35674 = G__35797;
count__34832_35675 = G__35798;
i__34833_35676 = G__35799;
continue;
} else {
var G__35803 = cljs.core.next(seq__34829_35752__$1);
var G__35804 = null;
var G__35805 = (0);
var G__35806 = (0);
seq__34829_35673 = G__35803;
chunk__34831_35674 = G__35804;
count__34832_35675 = G__35805;
i__34833_35676 = G__35806;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5772__auto__ = [];
var len__5766__auto___35810 = arguments.length;
var i__5767__auto___35811 = (0);
while(true){
if((i__5767__auto___35811 < len__5766__auto___35810)){
args__5772__auto__.push((arguments[i__5767__auto___35811]));

var G__35815 = (i__5767__auto___35811 + (1));
i__5767__auto___35811 = G__35815;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq34913){
var G__34914 = cljs.core.first(seq34913);
var seq34913__$1 = cljs.core.next(seq34913);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34914,seq34913__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
