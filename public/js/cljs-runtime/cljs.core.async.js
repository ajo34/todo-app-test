goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37208 = (function (f,blockable,meta37209){
this.f = f;
this.blockable = blockable;
this.meta37209 = meta37209;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37208.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37210,meta37209__$1){
var self__ = this;
var _37210__$1 = this;
return (new cljs.core.async.t_cljs$core$async37208(self__.f,self__.blockable,meta37209__$1));
}));

(cljs.core.async.t_cljs$core$async37208.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37210){
var self__ = this;
var _37210__$1 = this;
return self__.meta37209;
}));

(cljs.core.async.t_cljs$core$async37208.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37208.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37208.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async37208.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async37208.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta37209","meta37209",544848655,null)], null);
}));

(cljs.core.async.t_cljs$core$async37208.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37208.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37208");

(cljs.core.async.t_cljs$core$async37208.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async37208");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37208.
 */
cljs.core.async.__GT_t_cljs$core$async37208 = (function cljs$core$async$__GT_t_cljs$core$async37208(f,blockable,meta37209){
return (new cljs.core.async.t_cljs$core$async37208(f,blockable,meta37209));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__37204 = arguments.length;
switch (G__37204) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async37208(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__37247 = arguments.length;
switch (G__37247) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__37278 = arguments.length;
switch (G__37278) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__37303 = arguments.length;
switch (G__37303) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_40584 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_40584) : fn1.call(null,val_40584));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_40584) : fn1.call(null,val_40584));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__37317 = arguments.length;
switch (G__37317) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5821__auto__)){
var ret = temp__5821__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5821__auto__)){
var retb = temp__5821__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5633__auto___40586 = n;
var x_40587 = (0);
while(true){
if((x_40587 < n__5633__auto___40586)){
(a[x_40587] = x_40587);

var G__40588 = (x_40587 + (1));
x_40587 = G__40588;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37332 = (function (flag,meta37333){
this.flag = flag;
this.meta37333 = meta37333;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37332.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37334,meta37333__$1){
var self__ = this;
var _37334__$1 = this;
return (new cljs.core.async.t_cljs$core$async37332(self__.flag,meta37333__$1));
}));

(cljs.core.async.t_cljs$core$async37332.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37334){
var self__ = this;
var _37334__$1 = this;
return self__.meta37333;
}));

(cljs.core.async.t_cljs$core$async37332.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37332.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async37332.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37332.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async37332.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta37333","meta37333",1415872021,null)], null);
}));

(cljs.core.async.t_cljs$core$async37332.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37332.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37332");

(cljs.core.async.t_cljs$core$async37332.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async37332");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37332.
 */
cljs.core.async.__GT_t_cljs$core$async37332 = (function cljs$core$async$__GT_t_cljs$core$async37332(flag,meta37333){
return (new cljs.core.async.t_cljs$core$async37332(flag,meta37333));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async37332(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37352 = (function (flag,cb,meta37353){
this.flag = flag;
this.cb = cb;
this.meta37353 = meta37353;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37354,meta37353__$1){
var self__ = this;
var _37354__$1 = this;
return (new cljs.core.async.t_cljs$core$async37352(self__.flag,self__.cb,meta37353__$1));
}));

(cljs.core.async.t_cljs$core$async37352.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37354){
var self__ = this;
var _37354__$1 = this;
return self__.meta37353;
}));

(cljs.core.async.t_cljs$core$async37352.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37352.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async37352.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37352.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async37352.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta37353","meta37353",594000621,null)], null);
}));

(cljs.core.async.t_cljs$core$async37352.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37352.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37352");

(cljs.core.async.t_cljs$core$async37352.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async37352");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37352.
 */
cljs.core.async.__GT_t_cljs$core$async37352 = (function cljs$core$async$__GT_t_cljs$core$async37352(flag,cb,meta37353){
return (new cljs.core.async.t_cljs$core$async37352(flag,cb,meta37353));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async37352(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__37376_SHARP_){
var G__37388 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37376_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__37388) : fret.call(null,G__37388));
});})(i,val,idx,port,wport,flag,ports__$1,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__37377_SHARP_){
var G__37392 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37377_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__37392) : fret.call(null,G__37392));
});})(i,idx,port,wport,flag,ports__$1,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5043__auto__ = wport;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return port;
}
})()], null));
} else {
var G__40593 = (i + (1));
i = G__40593;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5043__auto__ = ret;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5823__auto__ = (function (){var and__5041__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5041__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var got = temp__5823__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___40597 = arguments.length;
var i__5767__auto___40598 = (0);
while(true){
if((i__5767__auto___40598 < len__5766__auto___40597)){
args__5772__auto__.push((arguments[i__5767__auto___40598]));

var G__40599 = (i__5767__auto___40598 + (1));
i__5767__auto___40598 = G__40599;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__37416){
var map__37417 = p__37416;
var map__37417__$1 = cljs.core.__destructure_map(map__37417);
var opts = map__37417__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq37404){
var G__37405 = cljs.core.first(seq37404);
var seq37404__$1 = cljs.core.next(seq37404);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37405,seq37404__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__37422 = arguments.length;
switch (G__37422) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__37058__auto___40601 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37059__auto__ = (function (){var switch__36257__auto__ = (function (state_37470){
var state_val_37471 = (state_37470[(1)]);
if((state_val_37471 === (7))){
var inst_37458 = (state_37470[(2)]);
var state_37470__$1 = state_37470;
var statearr_37475_40602 = state_37470__$1;
(statearr_37475_40602[(2)] = inst_37458);

(statearr_37475_40602[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37471 === (1))){
var state_37470__$1 = state_37470;
var statearr_37476_40603 = state_37470__$1;
(statearr_37476_40603[(2)] = null);

(statearr_37476_40603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37471 === (4))){
var inst_37436 = (state_37470[(7)]);
var inst_37436__$1 = (state_37470[(2)]);
var inst_37439 = (inst_37436__$1 == null);
var state_37470__$1 = (function (){var statearr_37477 = state_37470;
(statearr_37477[(7)] = inst_37436__$1);

return statearr_37477;
})();
if(cljs.core.truth_(inst_37439)){
var statearr_37478_40611 = state_37470__$1;
(statearr_37478_40611[(1)] = (5));

} else {
var statearr_37479_40612 = state_37470__$1;
(statearr_37479_40612[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37471 === (13))){
var state_37470__$1 = state_37470;
var statearr_37485_40613 = state_37470__$1;
(statearr_37485_40613[(2)] = null);

(statearr_37485_40613[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37471 === (6))){
var inst_37436 = (state_37470[(7)]);
var state_37470__$1 = state_37470;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37470__$1,(11),to,inst_37436);
} else {
if((state_val_37471 === (3))){
var inst_37461 = (state_37470[(2)]);
var state_37470__$1 = state_37470;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37470__$1,inst_37461);
} else {
if((state_val_37471 === (12))){
var state_37470__$1 = state_37470;
var statearr_37489_40617 = state_37470__$1;
(statearr_37489_40617[(2)] = null);

(statearr_37489_40617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37471 === (2))){
var state_37470__$1 = state_37470;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37470__$1,(4),from);
} else {
if((state_val_37471 === (11))){
var inst_37450 = (state_37470[(2)]);
var state_37470__$1 = state_37470;
if(cljs.core.truth_(inst_37450)){
var statearr_37495_40618 = state_37470__$1;
(statearr_37495_40618[(1)] = (12));

} else {
var statearr_37496_40619 = state_37470__$1;
(statearr_37496_40619[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37471 === (9))){
var state_37470__$1 = state_37470;
var statearr_37499_40620 = state_37470__$1;
(statearr_37499_40620[(2)] = null);

(statearr_37499_40620[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37471 === (5))){
var state_37470__$1 = state_37470;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37501_40621 = state_37470__$1;
(statearr_37501_40621[(1)] = (8));

} else {
var statearr_37502_40622 = state_37470__$1;
(statearr_37502_40622[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37471 === (14))){
var inst_37456 = (state_37470[(2)]);
var state_37470__$1 = state_37470;
var statearr_37504_40623 = state_37470__$1;
(statearr_37504_40623[(2)] = inst_37456);

(statearr_37504_40623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37471 === (10))){
var inst_37447 = (state_37470[(2)]);
var state_37470__$1 = state_37470;
var statearr_37506_40624 = state_37470__$1;
(statearr_37506_40624[(2)] = inst_37447);

(statearr_37506_40624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37471 === (8))){
var inst_37443 = cljs.core.async.close_BANG_(to);
var state_37470__$1 = state_37470;
var statearr_37512_40625 = state_37470__$1;
(statearr_37512_40625[(2)] = inst_37443);

(statearr_37512_40625[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36258__auto__ = null;
var cljs$core$async$state_machine__36258__auto____0 = (function (){
var statearr_37515 = [null,null,null,null,null,null,null,null];
(statearr_37515[(0)] = cljs$core$async$state_machine__36258__auto__);

(statearr_37515[(1)] = (1));

return statearr_37515;
});
var cljs$core$async$state_machine__36258__auto____1 = (function (state_37470){
while(true){
var ret_value__36259__auto__ = (function (){try{while(true){
var result__36260__auto__ = switch__36257__auto__(state_37470);
if(cljs.core.keyword_identical_QMARK_(result__36260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36260__auto__;
}
break;
}
}catch (e37516){var ex__36261__auto__ = e37516;
var statearr_37517_40629 = state_37470;
(statearr_37517_40629[(2)] = ex__36261__auto__);


if(cljs.core.seq((state_37470[(4)]))){
var statearr_37519_40630 = state_37470;
(statearr_37519_40630[(1)] = cljs.core.first((state_37470[(4)])));

} else {
throw ex__36261__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40631 = state_37470;
state_37470 = G__40631;
continue;
} else {
return ret_value__36259__auto__;
}
break;
}
});
cljs$core$async$state_machine__36258__auto__ = function(state_37470){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36258__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36258__auto____1.call(this,state_37470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36258__auto____0;
cljs$core$async$state_machine__36258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36258__auto____1;
return cljs$core$async$state_machine__36258__auto__;
})()
})();
var state__37061__auto__ = (function (){var statearr_37521 = f__37059__auto__();
(statearr_37521[(6)] = c__37058__auto___40601);

return statearr_37521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37061__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__37532){
var vec__37533 = p__37532;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37533,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37533,(1),null);
var job = vec__37533;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__37058__auto___40632 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37059__auto__ = (function (){var switch__36257__auto__ = (function (state_37540){
var state_val_37541 = (state_37540[(1)]);
if((state_val_37541 === (1))){
var state_37540__$1 = state_37540;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37540__$1,(2),res,v);
} else {
if((state_val_37541 === (2))){
var inst_37537 = (state_37540[(2)]);
var inst_37538 = cljs.core.async.close_BANG_(res);
var state_37540__$1 = (function (){var statearr_37546 = state_37540;
(statearr_37546[(7)] = inst_37537);

return statearr_37546;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37540__$1,inst_37538);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36258__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36258__auto____0 = (function (){
var statearr_37550 = [null,null,null,null,null,null,null,null];
(statearr_37550[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36258__auto__);

(statearr_37550[(1)] = (1));

return statearr_37550;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36258__auto____1 = (function (state_37540){
while(true){
var ret_value__36259__auto__ = (function (){try{while(true){
var result__36260__auto__ = switch__36257__auto__(state_37540);
if(cljs.core.keyword_identical_QMARK_(result__36260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36260__auto__;
}
break;
}
}catch (e37552){var ex__36261__auto__ = e37552;
var statearr_37553_40633 = state_37540;
(statearr_37553_40633[(2)] = ex__36261__auto__);


if(cljs.core.seq((state_37540[(4)]))){
var statearr_37554_40634 = state_37540;
(statearr_37554_40634[(1)] = cljs.core.first((state_37540[(4)])));

} else {
throw ex__36261__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40635 = state_37540;
state_37540 = G__40635;
continue;
} else {
return ret_value__36259__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36258__auto__ = function(state_37540){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36258__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36258__auto____1.call(this,state_37540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36258__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36258__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36258__auto__;
})()
})();
var state__37061__auto__ = (function (){var statearr_37558 = f__37059__auto__();
(statearr_37558[(6)] = c__37058__auto___40632);

return statearr_37558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37061__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__37564){
var vec__37566 = p__37564;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37566,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37566,(1),null);
var job = vec__37566;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5633__auto___40636 = n;
var __40637 = (0);
while(true){
if((__40637 < n__5633__auto___40636)){
var G__37571_40638 = type;
var G__37571_40639__$1 = (((G__37571_40638 instanceof cljs.core.Keyword))?G__37571_40638.fqn:null);
switch (G__37571_40639__$1) {
case "compute":
var c__37058__auto___40641 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__40637,c__37058__auto___40641,G__37571_40638,G__37571_40639__$1,n__5633__auto___40636,jobs,results,process__$1,async){
return (function (){
var f__37059__auto__ = (function (){var switch__36257__auto__ = ((function (__40637,c__37058__auto___40641,G__37571_40638,G__37571_40639__$1,n__5633__auto___40636,jobs,results,process__$1,async){
return (function (state_37590){
var state_val_37591 = (state_37590[(1)]);
if((state_val_37591 === (1))){
var state_37590__$1 = state_37590;
var statearr_37597_40642 = state_37590__$1;
(statearr_37597_40642[(2)] = null);

(statearr_37597_40642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37591 === (2))){
var state_37590__$1 = state_37590;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37590__$1,(4),jobs);
} else {
if((state_val_37591 === (3))){
var inst_37586 = (state_37590[(2)]);
var state_37590__$1 = state_37590;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37590__$1,inst_37586);
} else {
if((state_val_37591 === (4))){
var inst_37576 = (state_37590[(2)]);
var inst_37578 = process__$1(inst_37576);
var state_37590__$1 = state_37590;
if(cljs.core.truth_(inst_37578)){
var statearr_37600_40643 = state_37590__$1;
(statearr_37600_40643[(1)] = (5));

} else {
var statearr_37604_40644 = state_37590__$1;
(statearr_37604_40644[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37591 === (5))){
var state_37590__$1 = state_37590;
var statearr_37606_40645 = state_37590__$1;
(statearr_37606_40645[(2)] = null);

(statearr_37606_40645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37591 === (6))){
var state_37590__$1 = state_37590;
var statearr_37610_40646 = state_37590__$1;
(statearr_37610_40646[(2)] = null);

(statearr_37610_40646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37591 === (7))){
var inst_37583 = (state_37590[(2)]);
var state_37590__$1 = state_37590;
var statearr_37611_40647 = state_37590__$1;
(statearr_37611_40647[(2)] = inst_37583);

(statearr_37611_40647[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__40637,c__37058__auto___40641,G__37571_40638,G__37571_40639__$1,n__5633__auto___40636,jobs,results,process__$1,async))
;
return ((function (__40637,switch__36257__auto__,c__37058__auto___40641,G__37571_40638,G__37571_40639__$1,n__5633__auto___40636,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36258__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36258__auto____0 = (function (){
var statearr_37613 = [null,null,null,null,null,null,null];
(statearr_37613[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36258__auto__);

(statearr_37613[(1)] = (1));

return statearr_37613;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36258__auto____1 = (function (state_37590){
while(true){
var ret_value__36259__auto__ = (function (){try{while(true){
var result__36260__auto__ = switch__36257__auto__(state_37590);
if(cljs.core.keyword_identical_QMARK_(result__36260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36260__auto__;
}
break;
}
}catch (e37614){var ex__36261__auto__ = e37614;
var statearr_37615_40650 = state_37590;
(statearr_37615_40650[(2)] = ex__36261__auto__);


if(cljs.core.seq((state_37590[(4)]))){
var statearr_37616_40654 = state_37590;
(statearr_37616_40654[(1)] = cljs.core.first((state_37590[(4)])));

} else {
throw ex__36261__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40655 = state_37590;
state_37590 = G__40655;
continue;
} else {
return ret_value__36259__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36258__auto__ = function(state_37590){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36258__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36258__auto____1.call(this,state_37590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36258__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36258__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36258__auto__;
})()
;})(__40637,switch__36257__auto__,c__37058__auto___40641,G__37571_40638,G__37571_40639__$1,n__5633__auto___40636,jobs,results,process__$1,async))
})();
var state__37061__auto__ = (function (){var statearr_37621 = f__37059__auto__();
(statearr_37621[(6)] = c__37058__auto___40641);

return statearr_37621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37061__auto__);
});})(__40637,c__37058__auto___40641,G__37571_40638,G__37571_40639__$1,n__5633__auto___40636,jobs,results,process__$1,async))
);


break;
case "async":
var c__37058__auto___40662 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__40637,c__37058__auto___40662,G__37571_40638,G__37571_40639__$1,n__5633__auto___40636,jobs,results,process__$1,async){
return (function (){
var f__37059__auto__ = (function (){var switch__36257__auto__ = ((function (__40637,c__37058__auto___40662,G__37571_40638,G__37571_40639__$1,n__5633__auto___40636,jobs,results,process__$1,async){
return (function (state_37634){
var state_val_37635 = (state_37634[(1)]);
if((state_val_37635 === (1))){
var state_37634__$1 = state_37634;
var statearr_37637_40663 = state_37634__$1;
(statearr_37637_40663[(2)] = null);

(statearr_37637_40663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37635 === (2))){
var state_37634__$1 = state_37634;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37634__$1,(4),jobs);
} else {
if((state_val_37635 === (3))){
var inst_37632 = (state_37634[(2)]);
var state_37634__$1 = state_37634;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37634__$1,inst_37632);
} else {
if((state_val_37635 === (4))){
var inst_37624 = (state_37634[(2)]);
var inst_37625 = async(inst_37624);
var state_37634__$1 = state_37634;
if(cljs.core.truth_(inst_37625)){
var statearr_37640_40665 = state_37634__$1;
(statearr_37640_40665[(1)] = (5));

} else {
var statearr_37644_40666 = state_37634__$1;
(statearr_37644_40666[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37635 === (5))){
var state_37634__$1 = state_37634;
var statearr_37647_40667 = state_37634__$1;
(statearr_37647_40667[(2)] = null);

(statearr_37647_40667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37635 === (6))){
var state_37634__$1 = state_37634;
var statearr_37651_40668 = state_37634__$1;
(statearr_37651_40668[(2)] = null);

(statearr_37651_40668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37635 === (7))){
var inst_37630 = (state_37634[(2)]);
var state_37634__$1 = state_37634;
var statearr_37653_40672 = state_37634__$1;
(statearr_37653_40672[(2)] = inst_37630);

(statearr_37653_40672[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__40637,c__37058__auto___40662,G__37571_40638,G__37571_40639__$1,n__5633__auto___40636,jobs,results,process__$1,async))
;
return ((function (__40637,switch__36257__auto__,c__37058__auto___40662,G__37571_40638,G__37571_40639__$1,n__5633__auto___40636,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36258__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36258__auto____0 = (function (){
var statearr_37654 = [null,null,null,null,null,null,null];
(statearr_37654[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36258__auto__);

(statearr_37654[(1)] = (1));

return statearr_37654;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36258__auto____1 = (function (state_37634){
while(true){
var ret_value__36259__auto__ = (function (){try{while(true){
var result__36260__auto__ = switch__36257__auto__(state_37634);
if(cljs.core.keyword_identical_QMARK_(result__36260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36260__auto__;
}
break;
}
}catch (e37655){var ex__36261__auto__ = e37655;
var statearr_37656_40673 = state_37634;
(statearr_37656_40673[(2)] = ex__36261__auto__);


if(cljs.core.seq((state_37634[(4)]))){
var statearr_37657_40674 = state_37634;
(statearr_37657_40674[(1)] = cljs.core.first((state_37634[(4)])));

} else {
throw ex__36261__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40678 = state_37634;
state_37634 = G__40678;
continue;
} else {
return ret_value__36259__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36258__auto__ = function(state_37634){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36258__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36258__auto____1.call(this,state_37634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36258__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36258__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36258__auto__;
})()
;})(__40637,switch__36257__auto__,c__37058__auto___40662,G__37571_40638,G__37571_40639__$1,n__5633__auto___40636,jobs,results,process__$1,async))
})();
var state__37061__auto__ = (function (){var statearr_37659 = f__37059__auto__();
(statearr_37659[(6)] = c__37058__auto___40662);

return statearr_37659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37061__auto__);
});})(__40637,c__37058__auto___40662,G__37571_40638,G__37571_40639__$1,n__5633__auto___40636,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37571_40639__$1)].join('')));

}

var G__40680 = (__40637 + (1));
__40637 = G__40680;
continue;
} else {
}
break;
}

var c__37058__auto___40681 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37059__auto__ = (function (){var switch__36257__auto__ = (function (state_37688){
var state_val_37689 = (state_37688[(1)]);
if((state_val_37689 === (7))){
var inst_37683 = (state_37688[(2)]);
var state_37688__$1 = state_37688;
var statearr_37694_40682 = state_37688__$1;
(statearr_37694_40682[(2)] = inst_37683);

(statearr_37694_40682[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37689 === (1))){
var state_37688__$1 = state_37688;
var statearr_37696_40683 = state_37688__$1;
(statearr_37696_40683[(2)] = null);

(statearr_37696_40683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37689 === (4))){
var inst_37666 = (state_37688[(7)]);
var inst_37666__$1 = (state_37688[(2)]);
var inst_37667 = (inst_37666__$1 == null);
var state_37688__$1 = (function (){var statearr_37701 = state_37688;
(statearr_37701[(7)] = inst_37666__$1);

return statearr_37701;
})();
if(cljs.core.truth_(inst_37667)){
var statearr_37702_40684 = state_37688__$1;
(statearr_37702_40684[(1)] = (5));

} else {
var statearr_37704_40685 = state_37688__$1;
(statearr_37704_40685[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37689 === (6))){
var inst_37666 = (state_37688[(7)]);
var inst_37671 = (state_37688[(8)]);
var inst_37671__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_37673 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37675 = [inst_37666,inst_37671__$1];
var inst_37676 = (new cljs.core.PersistentVector(null,2,(5),inst_37673,inst_37675,null));
var state_37688__$1 = (function (){var statearr_37705 = state_37688;
(statearr_37705[(8)] = inst_37671__$1);

return statearr_37705;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37688__$1,(8),jobs,inst_37676);
} else {
if((state_val_37689 === (3))){
var inst_37685 = (state_37688[(2)]);
var state_37688__$1 = state_37688;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37688__$1,inst_37685);
} else {
if((state_val_37689 === (2))){
var state_37688__$1 = state_37688;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37688__$1,(4),from);
} else {
if((state_val_37689 === (9))){
var inst_37680 = (state_37688[(2)]);
var state_37688__$1 = (function (){var statearr_37711 = state_37688;
(statearr_37711[(9)] = inst_37680);

return statearr_37711;
})();
var statearr_37713_40688 = state_37688__$1;
(statearr_37713_40688[(2)] = null);

(statearr_37713_40688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37689 === (5))){
var inst_37669 = cljs.core.async.close_BANG_(jobs);
var state_37688__$1 = state_37688;
var statearr_37717_40689 = state_37688__$1;
(statearr_37717_40689[(2)] = inst_37669);

(statearr_37717_40689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37689 === (8))){
var inst_37671 = (state_37688[(8)]);
var inst_37678 = (state_37688[(2)]);
var state_37688__$1 = (function (){var statearr_37722 = state_37688;
(statearr_37722[(10)] = inst_37678);

return statearr_37722;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37688__$1,(9),results,inst_37671);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36258__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36258__auto____0 = (function (){
var statearr_37724 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37724[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36258__auto__);

(statearr_37724[(1)] = (1));

return statearr_37724;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36258__auto____1 = (function (state_37688){
while(true){
var ret_value__36259__auto__ = (function (){try{while(true){
var result__36260__auto__ = switch__36257__auto__(state_37688);
if(cljs.core.keyword_identical_QMARK_(result__36260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36260__auto__;
}
break;
}
}catch (e37725){var ex__36261__auto__ = e37725;
var statearr_37726_40691 = state_37688;
(statearr_37726_40691[(2)] = ex__36261__auto__);


if(cljs.core.seq((state_37688[(4)]))){
var statearr_37727_40692 = state_37688;
(statearr_37727_40692[(1)] = cljs.core.first((state_37688[(4)])));

} else {
throw ex__36261__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40693 = state_37688;
state_37688 = G__40693;
continue;
} else {
return ret_value__36259__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36258__auto__ = function(state_37688){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36258__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36258__auto____1.call(this,state_37688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36258__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36258__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36258__auto__;
})()
})();
var state__37061__auto__ = (function (){var statearr_37728 = f__37059__auto__();
(statearr_37728[(6)] = c__37058__auto___40681);

return statearr_37728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37061__auto__);
}));


var c__37058__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37059__auto__ = (function (){var switch__36257__auto__ = (function (state_37772){
var state_val_37774 = (state_37772[(1)]);
if((state_val_37774 === (7))){
var inst_37768 = (state_37772[(2)]);
var state_37772__$1 = state_37772;
var statearr_37776_40697 = state_37772__$1;
(statearr_37776_40697[(2)] = inst_37768);

(statearr_37776_40697[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37774 === (20))){
var state_37772__$1 = state_37772;
var statearr_37778_40698 = state_37772__$1;
(statearr_37778_40698[(2)] = null);

(statearr_37778_40698[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37774 === (1))){
var state_37772__$1 = state_37772;
var statearr_37779_40699 = state_37772__$1;
(statearr_37779_40699[(2)] = null);

(statearr_37779_40699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37774 === (4))){
var inst_37734 = (state_37772[(7)]);
var inst_37734__$1 = (state_37772[(2)]);
var inst_37735 = (inst_37734__$1 == null);
var state_37772__$1 = (function (){var statearr_37780 = state_37772;
(statearr_37780[(7)] = inst_37734__$1);

return statearr_37780;
})();
if(cljs.core.truth_(inst_37735)){
var statearr_37781_40703 = state_37772__$1;
(statearr_37781_40703[(1)] = (5));

} else {
var statearr_37782_40704 = state_37772__$1;
(statearr_37782_40704[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37774 === (15))){
var inst_37750 = (state_37772[(8)]);
var state_37772__$1 = state_37772;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37772__$1,(18),to,inst_37750);
} else {
if((state_val_37774 === (21))){
var inst_37763 = (state_37772[(2)]);
var state_37772__$1 = state_37772;
var statearr_37783_40705 = state_37772__$1;
(statearr_37783_40705[(2)] = inst_37763);

(statearr_37783_40705[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37774 === (13))){
var inst_37765 = (state_37772[(2)]);
var state_37772__$1 = (function (){var statearr_37784 = state_37772;
(statearr_37784[(9)] = inst_37765);

return statearr_37784;
})();
var statearr_37785_40706 = state_37772__$1;
(statearr_37785_40706[(2)] = null);

(statearr_37785_40706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37774 === (6))){
var inst_37734 = (state_37772[(7)]);
var state_37772__$1 = state_37772;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37772__$1,(11),inst_37734);
} else {
if((state_val_37774 === (17))){
var inst_37758 = (state_37772[(2)]);
var state_37772__$1 = state_37772;
if(cljs.core.truth_(inst_37758)){
var statearr_37788_40708 = state_37772__$1;
(statearr_37788_40708[(1)] = (19));

} else {
var statearr_37789_40709 = state_37772__$1;
(statearr_37789_40709[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37774 === (3))){
var inst_37770 = (state_37772[(2)]);
var state_37772__$1 = state_37772;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37772__$1,inst_37770);
} else {
if((state_val_37774 === (12))){
var inst_37745 = (state_37772[(10)]);
var state_37772__$1 = state_37772;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37772__$1,(14),inst_37745);
} else {
if((state_val_37774 === (2))){
var state_37772__$1 = state_37772;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37772__$1,(4),results);
} else {
if((state_val_37774 === (19))){
var state_37772__$1 = state_37772;
var statearr_37794_40714 = state_37772__$1;
(statearr_37794_40714[(2)] = null);

(statearr_37794_40714[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37774 === (11))){
var inst_37745 = (state_37772[(2)]);
var state_37772__$1 = (function (){var statearr_37795 = state_37772;
(statearr_37795[(10)] = inst_37745);

return statearr_37795;
})();
var statearr_37797_40715 = state_37772__$1;
(statearr_37797_40715[(2)] = null);

(statearr_37797_40715[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37774 === (9))){
var state_37772__$1 = state_37772;
var statearr_37799_40716 = state_37772__$1;
(statearr_37799_40716[(2)] = null);

(statearr_37799_40716[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37774 === (5))){
var state_37772__$1 = state_37772;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37800_40717 = state_37772__$1;
(statearr_37800_40717[(1)] = (8));

} else {
var statearr_37801_40718 = state_37772__$1;
(statearr_37801_40718[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37774 === (14))){
var inst_37750 = (state_37772[(8)]);
var inst_37752 = (state_37772[(11)]);
var inst_37750__$1 = (state_37772[(2)]);
var inst_37751 = (inst_37750__$1 == null);
var inst_37752__$1 = cljs.core.not(inst_37751);
var state_37772__$1 = (function (){var statearr_37805 = state_37772;
(statearr_37805[(8)] = inst_37750__$1);

(statearr_37805[(11)] = inst_37752__$1);

return statearr_37805;
})();
if(inst_37752__$1){
var statearr_37806_40724 = state_37772__$1;
(statearr_37806_40724[(1)] = (15));

} else {
var statearr_37808_40725 = state_37772__$1;
(statearr_37808_40725[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37774 === (16))){
var inst_37752 = (state_37772[(11)]);
var state_37772__$1 = state_37772;
var statearr_37809_40727 = state_37772__$1;
(statearr_37809_40727[(2)] = inst_37752);

(statearr_37809_40727[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37774 === (10))){
var inst_37741 = (state_37772[(2)]);
var state_37772__$1 = state_37772;
var statearr_37810_40728 = state_37772__$1;
(statearr_37810_40728[(2)] = inst_37741);

(statearr_37810_40728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37774 === (18))){
var inst_37755 = (state_37772[(2)]);
var state_37772__$1 = state_37772;
var statearr_37811_40730 = state_37772__$1;
(statearr_37811_40730[(2)] = inst_37755);

(statearr_37811_40730[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37774 === (8))){
var inst_37738 = cljs.core.async.close_BANG_(to);
var state_37772__$1 = state_37772;
var statearr_37813_40734 = state_37772__$1;
(statearr_37813_40734[(2)] = inst_37738);

(statearr_37813_40734[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36258__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36258__auto____0 = (function (){
var statearr_37814 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37814[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36258__auto__);

(statearr_37814[(1)] = (1));

return statearr_37814;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36258__auto____1 = (function (state_37772){
while(true){
var ret_value__36259__auto__ = (function (){try{while(true){
var result__36260__auto__ = switch__36257__auto__(state_37772);
if(cljs.core.keyword_identical_QMARK_(result__36260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36260__auto__;
}
break;
}
}catch (e37815){var ex__36261__auto__ = e37815;
var statearr_37816_40735 = state_37772;
(statearr_37816_40735[(2)] = ex__36261__auto__);


if(cljs.core.seq((state_37772[(4)]))){
var statearr_37817_40736 = state_37772;
(statearr_37817_40736[(1)] = cljs.core.first((state_37772[(4)])));

} else {
throw ex__36261__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40738 = state_37772;
state_37772 = G__40738;
continue;
} else {
return ret_value__36259__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36258__auto__ = function(state_37772){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36258__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36258__auto____1.call(this,state_37772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36258__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36258__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36258__auto__;
})()
})();
var state__37061__auto__ = (function (){var statearr_37819 = f__37059__auto__();
(statearr_37819[(6)] = c__37058__auto__);

return statearr_37819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37061__auto__);
}));

return c__37058__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__37827 = arguments.length;
switch (G__37827) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__37841 = arguments.length;
switch (G__37841) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__37846 = arguments.length;
switch (G__37846) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__37058__auto___40753 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37059__auto__ = (function (){var switch__36257__auto__ = (function (state_37872){
var state_val_37873 = (state_37872[(1)]);
if((state_val_37873 === (7))){
var inst_37868 = (state_37872[(2)]);
var state_37872__$1 = state_37872;
var statearr_37876_40754 = state_37872__$1;
(statearr_37876_40754[(2)] = inst_37868);

(statearr_37876_40754[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37873 === (1))){
var state_37872__$1 = state_37872;
var statearr_37877_40755 = state_37872__$1;
(statearr_37877_40755[(2)] = null);

(statearr_37877_40755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37873 === (4))){
var inst_37849 = (state_37872[(7)]);
var inst_37849__$1 = (state_37872[(2)]);
var inst_37850 = (inst_37849__$1 == null);
var state_37872__$1 = (function (){var statearr_37878 = state_37872;
(statearr_37878[(7)] = inst_37849__$1);

return statearr_37878;
})();
if(cljs.core.truth_(inst_37850)){
var statearr_37880_40756 = state_37872__$1;
(statearr_37880_40756[(1)] = (5));

} else {
var statearr_37881_40757 = state_37872__$1;
(statearr_37881_40757[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37873 === (13))){
var state_37872__$1 = state_37872;
var statearr_37882_40758 = state_37872__$1;
(statearr_37882_40758[(2)] = null);

(statearr_37882_40758[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37873 === (6))){
var inst_37849 = (state_37872[(7)]);
var inst_37855 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_37849) : p.call(null,inst_37849));
var state_37872__$1 = state_37872;
if(cljs.core.truth_(inst_37855)){
var statearr_37886_40759 = state_37872__$1;
(statearr_37886_40759[(1)] = (9));

} else {
var statearr_37887_40760 = state_37872__$1;
(statearr_37887_40760[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37873 === (3))){
var inst_37870 = (state_37872[(2)]);
var state_37872__$1 = state_37872;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37872__$1,inst_37870);
} else {
if((state_val_37873 === (12))){
var state_37872__$1 = state_37872;
var statearr_37889_40761 = state_37872__$1;
(statearr_37889_40761[(2)] = null);

(statearr_37889_40761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37873 === (2))){
var state_37872__$1 = state_37872;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37872__$1,(4),ch);
} else {
if((state_val_37873 === (11))){
var inst_37849 = (state_37872[(7)]);
var inst_37859 = (state_37872[(2)]);
var state_37872__$1 = state_37872;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37872__$1,(8),inst_37859,inst_37849);
} else {
if((state_val_37873 === (9))){
var state_37872__$1 = state_37872;
var statearr_37892_40762 = state_37872__$1;
(statearr_37892_40762[(2)] = tc);

(statearr_37892_40762[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37873 === (5))){
var inst_37852 = cljs.core.async.close_BANG_(tc);
var inst_37853 = cljs.core.async.close_BANG_(fc);
var state_37872__$1 = (function (){var statearr_37893 = state_37872;
(statearr_37893[(8)] = inst_37852);

return statearr_37893;
})();
var statearr_37894_40764 = state_37872__$1;
(statearr_37894_40764[(2)] = inst_37853);

(statearr_37894_40764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37873 === (14))){
var inst_37866 = (state_37872[(2)]);
var state_37872__$1 = state_37872;
var statearr_37895_40768 = state_37872__$1;
(statearr_37895_40768[(2)] = inst_37866);

(statearr_37895_40768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37873 === (10))){
var state_37872__$1 = state_37872;
var statearr_37896_40769 = state_37872__$1;
(statearr_37896_40769[(2)] = fc);

(statearr_37896_40769[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37873 === (8))){
var inst_37861 = (state_37872[(2)]);
var state_37872__$1 = state_37872;
if(cljs.core.truth_(inst_37861)){
var statearr_37897_40770 = state_37872__$1;
(statearr_37897_40770[(1)] = (12));

} else {
var statearr_37898_40771 = state_37872__$1;
(statearr_37898_40771[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36258__auto__ = null;
var cljs$core$async$state_machine__36258__auto____0 = (function (){
var statearr_37900 = [null,null,null,null,null,null,null,null,null];
(statearr_37900[(0)] = cljs$core$async$state_machine__36258__auto__);

(statearr_37900[(1)] = (1));

return statearr_37900;
});
var cljs$core$async$state_machine__36258__auto____1 = (function (state_37872){
while(true){
var ret_value__36259__auto__ = (function (){try{while(true){
var result__36260__auto__ = switch__36257__auto__(state_37872);
if(cljs.core.keyword_identical_QMARK_(result__36260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36260__auto__;
}
break;
}
}catch (e37903){var ex__36261__auto__ = e37903;
var statearr_37905_40772 = state_37872;
(statearr_37905_40772[(2)] = ex__36261__auto__);


if(cljs.core.seq((state_37872[(4)]))){
var statearr_37906_40773 = state_37872;
(statearr_37906_40773[(1)] = cljs.core.first((state_37872[(4)])));

} else {
throw ex__36261__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40774 = state_37872;
state_37872 = G__40774;
continue;
} else {
return ret_value__36259__auto__;
}
break;
}
});
cljs$core$async$state_machine__36258__auto__ = function(state_37872){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36258__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36258__auto____1.call(this,state_37872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36258__auto____0;
cljs$core$async$state_machine__36258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36258__auto____1;
return cljs$core$async$state_machine__36258__auto__;
})()
})();
var state__37061__auto__ = (function (){var statearr_37907 = f__37059__auto__();
(statearr_37907[(6)] = c__37058__auto___40753);

return statearr_37907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37061__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__37058__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37059__auto__ = (function (){var switch__36257__auto__ = (function (state_37936){
var state_val_37939 = (state_37936[(1)]);
if((state_val_37939 === (7))){
var inst_37932 = (state_37936[(2)]);
var state_37936__$1 = state_37936;
var statearr_37946_40775 = state_37936__$1;
(statearr_37946_40775[(2)] = inst_37932);

(statearr_37946_40775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37939 === (1))){
var inst_37908 = init;
var inst_37914 = inst_37908;
var state_37936__$1 = (function (){var statearr_37947 = state_37936;
(statearr_37947[(7)] = inst_37914);

return statearr_37947;
})();
var statearr_37948_40776 = state_37936__$1;
(statearr_37948_40776[(2)] = null);

(statearr_37948_40776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37939 === (4))){
var inst_37917 = (state_37936[(8)]);
var inst_37917__$1 = (state_37936[(2)]);
var inst_37918 = (inst_37917__$1 == null);
var state_37936__$1 = (function (){var statearr_37954 = state_37936;
(statearr_37954[(8)] = inst_37917__$1);

return statearr_37954;
})();
if(cljs.core.truth_(inst_37918)){
var statearr_37955_40777 = state_37936__$1;
(statearr_37955_40777[(1)] = (5));

} else {
var statearr_37957_40778 = state_37936__$1;
(statearr_37957_40778[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37939 === (6))){
var inst_37914 = (state_37936[(7)]);
var inst_37917 = (state_37936[(8)]);
var inst_37922 = (state_37936[(9)]);
var inst_37922__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_37914,inst_37917) : f.call(null,inst_37914,inst_37917));
var inst_37923 = cljs.core.reduced_QMARK_(inst_37922__$1);
var state_37936__$1 = (function (){var statearr_37958 = state_37936;
(statearr_37958[(9)] = inst_37922__$1);

return statearr_37958;
})();
if(inst_37923){
var statearr_37959_40782 = state_37936__$1;
(statearr_37959_40782[(1)] = (8));

} else {
var statearr_37960_40783 = state_37936__$1;
(statearr_37960_40783[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37939 === (3))){
var inst_37934 = (state_37936[(2)]);
var state_37936__$1 = state_37936;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37936__$1,inst_37934);
} else {
if((state_val_37939 === (2))){
var state_37936__$1 = state_37936;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37936__$1,(4),ch);
} else {
if((state_val_37939 === (9))){
var inst_37922 = (state_37936[(9)]);
var inst_37914 = inst_37922;
var state_37936__$1 = (function (){var statearr_37963 = state_37936;
(statearr_37963[(7)] = inst_37914);

return statearr_37963;
})();
var statearr_37964_40784 = state_37936__$1;
(statearr_37964_40784[(2)] = null);

(statearr_37964_40784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37939 === (5))){
var inst_37914 = (state_37936[(7)]);
var state_37936__$1 = state_37936;
var statearr_37965_40785 = state_37936__$1;
(statearr_37965_40785[(2)] = inst_37914);

(statearr_37965_40785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37939 === (10))){
var inst_37930 = (state_37936[(2)]);
var state_37936__$1 = state_37936;
var statearr_37966_40786 = state_37936__$1;
(statearr_37966_40786[(2)] = inst_37930);

(statearr_37966_40786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37939 === (8))){
var inst_37922 = (state_37936[(9)]);
var inst_37926 = cljs.core.deref(inst_37922);
var state_37936__$1 = state_37936;
var statearr_37967_40787 = state_37936__$1;
(statearr_37967_40787[(2)] = inst_37926);

(statearr_37967_40787[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__36258__auto__ = null;
var cljs$core$async$reduce_$_state_machine__36258__auto____0 = (function (){
var statearr_37968 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37968[(0)] = cljs$core$async$reduce_$_state_machine__36258__auto__);

(statearr_37968[(1)] = (1));

return statearr_37968;
});
var cljs$core$async$reduce_$_state_machine__36258__auto____1 = (function (state_37936){
while(true){
var ret_value__36259__auto__ = (function (){try{while(true){
var result__36260__auto__ = switch__36257__auto__(state_37936);
if(cljs.core.keyword_identical_QMARK_(result__36260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36260__auto__;
}
break;
}
}catch (e37971){var ex__36261__auto__ = e37971;
var statearr_37973_40793 = state_37936;
(statearr_37973_40793[(2)] = ex__36261__auto__);


if(cljs.core.seq((state_37936[(4)]))){
var statearr_37976_40798 = state_37936;
(statearr_37976_40798[(1)] = cljs.core.first((state_37936[(4)])));

} else {
throw ex__36261__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40799 = state_37936;
state_37936 = G__40799;
continue;
} else {
return ret_value__36259__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__36258__auto__ = function(state_37936){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__36258__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__36258__auto____1.call(this,state_37936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__36258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__36258__auto____0;
cljs$core$async$reduce_$_state_machine__36258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__36258__auto____1;
return cljs$core$async$reduce_$_state_machine__36258__auto__;
})()
})();
var state__37061__auto__ = (function (){var statearr_37979 = f__37059__auto__();
(statearr_37979[(6)] = c__37058__auto__);

return statearr_37979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37061__auto__);
}));

return c__37058__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__37058__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37059__auto__ = (function (){var switch__36257__auto__ = (function (state_37989){
var state_val_37991 = (state_37989[(1)]);
if((state_val_37991 === (1))){
var inst_37984 = cljs.core.async.reduce(f__$1,init,ch);
var state_37989__$1 = state_37989;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37989__$1,(2),inst_37984);
} else {
if((state_val_37991 === (2))){
var inst_37986 = (state_37989[(2)]);
var inst_37987 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_37986) : f__$1.call(null,inst_37986));
var state_37989__$1 = state_37989;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37989__$1,inst_37987);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__36258__auto__ = null;
var cljs$core$async$transduce_$_state_machine__36258__auto____0 = (function (){
var statearr_37996 = [null,null,null,null,null,null,null];
(statearr_37996[(0)] = cljs$core$async$transduce_$_state_machine__36258__auto__);

(statearr_37996[(1)] = (1));

return statearr_37996;
});
var cljs$core$async$transduce_$_state_machine__36258__auto____1 = (function (state_37989){
while(true){
var ret_value__36259__auto__ = (function (){try{while(true){
var result__36260__auto__ = switch__36257__auto__(state_37989);
if(cljs.core.keyword_identical_QMARK_(result__36260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36260__auto__;
}
break;
}
}catch (e37997){var ex__36261__auto__ = e37997;
var statearr_37998_40804 = state_37989;
(statearr_37998_40804[(2)] = ex__36261__auto__);


if(cljs.core.seq((state_37989[(4)]))){
var statearr_37999_40805 = state_37989;
(statearr_37999_40805[(1)] = cljs.core.first((state_37989[(4)])));

} else {
throw ex__36261__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40806 = state_37989;
state_37989 = G__40806;
continue;
} else {
return ret_value__36259__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__36258__auto__ = function(state_37989){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__36258__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__36258__auto____1.call(this,state_37989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__36258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__36258__auto____0;
cljs$core$async$transduce_$_state_machine__36258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__36258__auto____1;
return cljs$core$async$transduce_$_state_machine__36258__auto__;
})()
})();
var state__37061__auto__ = (function (){var statearr_38002 = f__37059__auto__();
(statearr_38002[(6)] = c__37058__auto__);

return statearr_38002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37061__auto__);
}));

return c__37058__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__38005 = arguments.length;
switch (G__38005) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__37058__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37059__auto__ = (function (){var switch__36257__auto__ = (function (state_38033){
var state_val_38034 = (state_38033[(1)]);
if((state_val_38034 === (7))){
var inst_38015 = (state_38033[(2)]);
var state_38033__$1 = state_38033;
var statearr_38037_40815 = state_38033__$1;
(statearr_38037_40815[(2)] = inst_38015);

(statearr_38037_40815[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38034 === (1))){
var inst_38008 = cljs.core.seq(coll);
var inst_38009 = inst_38008;
var state_38033__$1 = (function (){var statearr_38039 = state_38033;
(statearr_38039[(7)] = inst_38009);

return statearr_38039;
})();
var statearr_38040_40816 = state_38033__$1;
(statearr_38040_40816[(2)] = null);

(statearr_38040_40816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38034 === (4))){
var inst_38009 = (state_38033[(7)]);
var inst_38013 = cljs.core.first(inst_38009);
var state_38033__$1 = state_38033;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38033__$1,(7),ch,inst_38013);
} else {
if((state_val_38034 === (13))){
var inst_38027 = (state_38033[(2)]);
var state_38033__$1 = state_38033;
var statearr_38046_40817 = state_38033__$1;
(statearr_38046_40817[(2)] = inst_38027);

(statearr_38046_40817[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38034 === (6))){
var inst_38018 = (state_38033[(2)]);
var state_38033__$1 = state_38033;
if(cljs.core.truth_(inst_38018)){
var statearr_38050_40824 = state_38033__$1;
(statearr_38050_40824[(1)] = (8));

} else {
var statearr_38051_40825 = state_38033__$1;
(statearr_38051_40825[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38034 === (3))){
var inst_38031 = (state_38033[(2)]);
var state_38033__$1 = state_38033;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38033__$1,inst_38031);
} else {
if((state_val_38034 === (12))){
var state_38033__$1 = state_38033;
var statearr_38061_40826 = state_38033__$1;
(statearr_38061_40826[(2)] = null);

(statearr_38061_40826[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38034 === (2))){
var inst_38009 = (state_38033[(7)]);
var state_38033__$1 = state_38033;
if(cljs.core.truth_(inst_38009)){
var statearr_38066_40827 = state_38033__$1;
(statearr_38066_40827[(1)] = (4));

} else {
var statearr_38067_40828 = state_38033__$1;
(statearr_38067_40828[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38034 === (11))){
var inst_38024 = cljs.core.async.close_BANG_(ch);
var state_38033__$1 = state_38033;
var statearr_38070_40834 = state_38033__$1;
(statearr_38070_40834[(2)] = inst_38024);

(statearr_38070_40834[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38034 === (9))){
var state_38033__$1 = state_38033;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38072_40840 = state_38033__$1;
(statearr_38072_40840[(1)] = (11));

} else {
var statearr_38073_40841 = state_38033__$1;
(statearr_38073_40841[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38034 === (5))){
var inst_38009 = (state_38033[(7)]);
var state_38033__$1 = state_38033;
var statearr_38077_40842 = state_38033__$1;
(statearr_38077_40842[(2)] = inst_38009);

(statearr_38077_40842[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38034 === (10))){
var inst_38029 = (state_38033[(2)]);
var state_38033__$1 = state_38033;
var statearr_38078_40843 = state_38033__$1;
(statearr_38078_40843[(2)] = inst_38029);

(statearr_38078_40843[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38034 === (8))){
var inst_38009 = (state_38033[(7)]);
var inst_38020 = cljs.core.next(inst_38009);
var inst_38009__$1 = inst_38020;
var state_38033__$1 = (function (){var statearr_38081 = state_38033;
(statearr_38081[(7)] = inst_38009__$1);

return statearr_38081;
})();
var statearr_38082_40845 = state_38033__$1;
(statearr_38082_40845[(2)] = null);

(statearr_38082_40845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36258__auto__ = null;
var cljs$core$async$state_machine__36258__auto____0 = (function (){
var statearr_38086 = [null,null,null,null,null,null,null,null];
(statearr_38086[(0)] = cljs$core$async$state_machine__36258__auto__);

(statearr_38086[(1)] = (1));

return statearr_38086;
});
var cljs$core$async$state_machine__36258__auto____1 = (function (state_38033){
while(true){
var ret_value__36259__auto__ = (function (){try{while(true){
var result__36260__auto__ = switch__36257__auto__(state_38033);
if(cljs.core.keyword_identical_QMARK_(result__36260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36260__auto__;
}
break;
}
}catch (e38090){var ex__36261__auto__ = e38090;
var statearr_38093_40846 = state_38033;
(statearr_38093_40846[(2)] = ex__36261__auto__);


if(cljs.core.seq((state_38033[(4)]))){
var statearr_38094_40847 = state_38033;
(statearr_38094_40847[(1)] = cljs.core.first((state_38033[(4)])));

} else {
throw ex__36261__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40848 = state_38033;
state_38033 = G__40848;
continue;
} else {
return ret_value__36259__auto__;
}
break;
}
});
cljs$core$async$state_machine__36258__auto__ = function(state_38033){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36258__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36258__auto____1.call(this,state_38033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36258__auto____0;
cljs$core$async$state_machine__36258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36258__auto____1;
return cljs$core$async$state_machine__36258__auto__;
})()
})();
var state__37061__auto__ = (function (){var statearr_38101 = f__37059__auto__();
(statearr_38101[(6)] = c__37058__auto__);

return statearr_38101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37061__auto__);
}));

return c__37058__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__38125 = arguments.length;
switch (G__38125) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_40862 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_40862(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_40869 = (function (m,ch,close_QMARK_){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5391__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5389__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5389__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_40869(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_40871 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null,m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_40871(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_40872 = (function (m){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5391__auto__.call(null,m));
} else {
var m__5389__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5389__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_40872(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38205 = (function (ch,cs,meta38206){
this.ch = ch;
this.cs = cs;
this.meta38206 = meta38206;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38205.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38207,meta38206__$1){
var self__ = this;
var _38207__$1 = this;
return (new cljs.core.async.t_cljs$core$async38205(self__.ch,self__.cs,meta38206__$1));
}));

(cljs.core.async.t_cljs$core$async38205.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38207){
var self__ = this;
var _38207__$1 = this;
return self__.meta38206;
}));

(cljs.core.async.t_cljs$core$async38205.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38205.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async38205.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38205.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async38205.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async38205.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async38205.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta38206","meta38206",366338041,null)], null);
}));

(cljs.core.async.t_cljs$core$async38205.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38205.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38205");

(cljs.core.async.t_cljs$core$async38205.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async38205");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38205.
 */
cljs.core.async.__GT_t_cljs$core$async38205 = (function cljs$core$async$__GT_t_cljs$core$async38205(ch,cs,meta38206){
return (new cljs.core.async.t_cljs$core$async38205(ch,cs,meta38206));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async38205(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__37058__auto___40876 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37059__auto__ = (function (){var switch__36257__auto__ = (function (state_38403){
var state_val_38406 = (state_38403[(1)]);
if((state_val_38406 === (7))){
var inst_38398 = (state_38403[(2)]);
var state_38403__$1 = state_38403;
var statearr_38415_40877 = state_38403__$1;
(statearr_38415_40877[(2)] = inst_38398);

(statearr_38415_40877[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (20))){
var inst_38276 = (state_38403[(7)]);
var inst_38292 = cljs.core.first(inst_38276);
var inst_38293 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38292,(0),null);
var inst_38294 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38292,(1),null);
var state_38403__$1 = (function (){var statearr_38428 = state_38403;
(statearr_38428[(8)] = inst_38293);

return statearr_38428;
})();
if(cljs.core.truth_(inst_38294)){
var statearr_38430_40878 = state_38403__$1;
(statearr_38430_40878[(1)] = (22));

} else {
var statearr_38431_40879 = state_38403__$1;
(statearr_38431_40879[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (27))){
var inst_38327 = (state_38403[(9)]);
var inst_38329 = (state_38403[(10)]);
var inst_38337 = (state_38403[(11)]);
var inst_38235 = (state_38403[(12)]);
var inst_38337__$1 = cljs.core._nth(inst_38327,inst_38329);
var inst_38339 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_38337__$1,inst_38235,done);
var state_38403__$1 = (function (){var statearr_38437 = state_38403;
(statearr_38437[(11)] = inst_38337__$1);

return statearr_38437;
})();
if(cljs.core.truth_(inst_38339)){
var statearr_38438_40880 = state_38403__$1;
(statearr_38438_40880[(1)] = (30));

} else {
var statearr_38440_40881 = state_38403__$1;
(statearr_38440_40881[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (1))){
var state_38403__$1 = state_38403;
var statearr_38442_40882 = state_38403__$1;
(statearr_38442_40882[(2)] = null);

(statearr_38442_40882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (24))){
var inst_38276 = (state_38403[(7)]);
var inst_38300 = (state_38403[(2)]);
var inst_38301 = cljs.core.next(inst_38276);
var inst_38247 = inst_38301;
var inst_38249 = null;
var inst_38250 = (0);
var inst_38251 = (0);
var state_38403__$1 = (function (){var statearr_38450 = state_38403;
(statearr_38450[(13)] = inst_38300);

(statearr_38450[(14)] = inst_38247);

(statearr_38450[(15)] = inst_38249);

(statearr_38450[(16)] = inst_38250);

(statearr_38450[(17)] = inst_38251);

return statearr_38450;
})();
var statearr_38451_40883 = state_38403__$1;
(statearr_38451_40883[(2)] = null);

(statearr_38451_40883[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (39))){
var state_38403__$1 = state_38403;
var statearr_38468_40884 = state_38403__$1;
(statearr_38468_40884[(2)] = null);

(statearr_38468_40884[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (4))){
var inst_38235 = (state_38403[(12)]);
var inst_38235__$1 = (state_38403[(2)]);
var inst_38236 = (inst_38235__$1 == null);
var state_38403__$1 = (function (){var statearr_38470 = state_38403;
(statearr_38470[(12)] = inst_38235__$1);

return statearr_38470;
})();
if(cljs.core.truth_(inst_38236)){
var statearr_38471_40888 = state_38403__$1;
(statearr_38471_40888[(1)] = (5));

} else {
var statearr_38474_40889 = state_38403__$1;
(statearr_38474_40889[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (15))){
var inst_38251 = (state_38403[(17)]);
var inst_38247 = (state_38403[(14)]);
var inst_38249 = (state_38403[(15)]);
var inst_38250 = (state_38403[(16)]);
var inst_38271 = (state_38403[(2)]);
var inst_38273 = (inst_38251 + (1));
var tmp38462 = inst_38247;
var tmp38463 = inst_38250;
var tmp38464 = inst_38249;
var inst_38247__$1 = tmp38462;
var inst_38249__$1 = tmp38464;
var inst_38250__$1 = tmp38463;
var inst_38251__$1 = inst_38273;
var state_38403__$1 = (function (){var statearr_38478 = state_38403;
(statearr_38478[(18)] = inst_38271);

(statearr_38478[(14)] = inst_38247__$1);

(statearr_38478[(15)] = inst_38249__$1);

(statearr_38478[(16)] = inst_38250__$1);

(statearr_38478[(17)] = inst_38251__$1);

return statearr_38478;
})();
var statearr_38480_40893 = state_38403__$1;
(statearr_38480_40893[(2)] = null);

(statearr_38480_40893[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (21))){
var inst_38304 = (state_38403[(2)]);
var state_38403__$1 = state_38403;
var statearr_38487_40894 = state_38403__$1;
(statearr_38487_40894[(2)] = inst_38304);

(statearr_38487_40894[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (31))){
var inst_38337 = (state_38403[(11)]);
var inst_38344 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_38337);
var state_38403__$1 = state_38403;
var statearr_38490_40895 = state_38403__$1;
(statearr_38490_40895[(2)] = inst_38344);

(statearr_38490_40895[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (32))){
var inst_38329 = (state_38403[(10)]);
var inst_38326 = (state_38403[(19)]);
var inst_38327 = (state_38403[(9)]);
var inst_38328 = (state_38403[(20)]);
var inst_38346 = (state_38403[(2)]);
var inst_38349 = (inst_38329 + (1));
var tmp38483 = inst_38328;
var tmp38484 = inst_38326;
var tmp38485 = inst_38327;
var inst_38326__$1 = tmp38484;
var inst_38327__$1 = tmp38485;
var inst_38328__$1 = tmp38483;
var inst_38329__$1 = inst_38349;
var state_38403__$1 = (function (){var statearr_38494 = state_38403;
(statearr_38494[(21)] = inst_38346);

(statearr_38494[(19)] = inst_38326__$1);

(statearr_38494[(9)] = inst_38327__$1);

(statearr_38494[(20)] = inst_38328__$1);

(statearr_38494[(10)] = inst_38329__$1);

return statearr_38494;
})();
var statearr_38499_40898 = state_38403__$1;
(statearr_38499_40898[(2)] = null);

(statearr_38499_40898[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (40))){
var inst_38367 = (state_38403[(22)]);
var inst_38372 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_38367);
var state_38403__$1 = state_38403;
var statearr_38503_40900 = state_38403__$1;
(statearr_38503_40900[(2)] = inst_38372);

(statearr_38503_40900[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (33))){
var inst_38354 = (state_38403[(23)]);
var inst_38357 = cljs.core.chunked_seq_QMARK_(inst_38354);
var state_38403__$1 = state_38403;
if(inst_38357){
var statearr_38506_40901 = state_38403__$1;
(statearr_38506_40901[(1)] = (36));

} else {
var statearr_38507_40902 = state_38403__$1;
(statearr_38507_40902[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (13))){
var inst_38265 = (state_38403[(24)]);
var inst_38268 = cljs.core.async.close_BANG_(inst_38265);
var state_38403__$1 = state_38403;
var statearr_38511_40903 = state_38403__$1;
(statearr_38511_40903[(2)] = inst_38268);

(statearr_38511_40903[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (22))){
var inst_38293 = (state_38403[(8)]);
var inst_38297 = cljs.core.async.close_BANG_(inst_38293);
var state_38403__$1 = state_38403;
var statearr_38516_40904 = state_38403__$1;
(statearr_38516_40904[(2)] = inst_38297);

(statearr_38516_40904[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (36))){
var inst_38354 = (state_38403[(23)]);
var inst_38361 = cljs.core.chunk_first(inst_38354);
var inst_38362 = cljs.core.chunk_rest(inst_38354);
var inst_38363 = cljs.core.count(inst_38361);
var inst_38326 = inst_38362;
var inst_38327 = inst_38361;
var inst_38328 = inst_38363;
var inst_38329 = (0);
var state_38403__$1 = (function (){var statearr_38517 = state_38403;
(statearr_38517[(19)] = inst_38326);

(statearr_38517[(9)] = inst_38327);

(statearr_38517[(20)] = inst_38328);

(statearr_38517[(10)] = inst_38329);

return statearr_38517;
})();
var statearr_38519_40905 = state_38403__$1;
(statearr_38519_40905[(2)] = null);

(statearr_38519_40905[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (41))){
var inst_38354 = (state_38403[(23)]);
var inst_38374 = (state_38403[(2)]);
var inst_38375 = cljs.core.next(inst_38354);
var inst_38326 = inst_38375;
var inst_38327 = null;
var inst_38328 = (0);
var inst_38329 = (0);
var state_38403__$1 = (function (){var statearr_38521 = state_38403;
(statearr_38521[(25)] = inst_38374);

(statearr_38521[(19)] = inst_38326);

(statearr_38521[(9)] = inst_38327);

(statearr_38521[(20)] = inst_38328);

(statearr_38521[(10)] = inst_38329);

return statearr_38521;
})();
var statearr_38522_40906 = state_38403__$1;
(statearr_38522_40906[(2)] = null);

(statearr_38522_40906[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (43))){
var state_38403__$1 = state_38403;
var statearr_38527_40907 = state_38403__$1;
(statearr_38527_40907[(2)] = null);

(statearr_38527_40907[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (29))){
var inst_38383 = (state_38403[(2)]);
var state_38403__$1 = state_38403;
var statearr_38528_40909 = state_38403__$1;
(statearr_38528_40909[(2)] = inst_38383);

(statearr_38528_40909[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (44))){
var inst_38395 = (state_38403[(2)]);
var state_38403__$1 = (function (){var statearr_38529 = state_38403;
(statearr_38529[(26)] = inst_38395);

return statearr_38529;
})();
var statearr_38530_40913 = state_38403__$1;
(statearr_38530_40913[(2)] = null);

(statearr_38530_40913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (6))){
var inst_38316 = (state_38403[(27)]);
var inst_38315 = cljs.core.deref(cs);
var inst_38316__$1 = cljs.core.keys(inst_38315);
var inst_38318 = cljs.core.count(inst_38316__$1);
var inst_38319 = cljs.core.reset_BANG_(dctr,inst_38318);
var inst_38325 = cljs.core.seq(inst_38316__$1);
var inst_38326 = inst_38325;
var inst_38327 = null;
var inst_38328 = (0);
var inst_38329 = (0);
var state_38403__$1 = (function (){var statearr_38532 = state_38403;
(statearr_38532[(27)] = inst_38316__$1);

(statearr_38532[(28)] = inst_38319);

(statearr_38532[(19)] = inst_38326);

(statearr_38532[(9)] = inst_38327);

(statearr_38532[(20)] = inst_38328);

(statearr_38532[(10)] = inst_38329);

return statearr_38532;
})();
var statearr_38533_40920 = state_38403__$1;
(statearr_38533_40920[(2)] = null);

(statearr_38533_40920[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (28))){
var inst_38326 = (state_38403[(19)]);
var inst_38354 = (state_38403[(23)]);
var inst_38354__$1 = cljs.core.seq(inst_38326);
var state_38403__$1 = (function (){var statearr_38536 = state_38403;
(statearr_38536[(23)] = inst_38354__$1);

return statearr_38536;
})();
if(inst_38354__$1){
var statearr_38538_40921 = state_38403__$1;
(statearr_38538_40921[(1)] = (33));

} else {
var statearr_38539_40922 = state_38403__$1;
(statearr_38539_40922[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (25))){
var inst_38329 = (state_38403[(10)]);
var inst_38328 = (state_38403[(20)]);
var inst_38334 = (inst_38329 < inst_38328);
var inst_38335 = inst_38334;
var state_38403__$1 = state_38403;
if(cljs.core.truth_(inst_38335)){
var statearr_38541_40923 = state_38403__$1;
(statearr_38541_40923[(1)] = (27));

} else {
var statearr_38542_40924 = state_38403__$1;
(statearr_38542_40924[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (34))){
var state_38403__$1 = state_38403;
var statearr_38543_40925 = state_38403__$1;
(statearr_38543_40925[(2)] = null);

(statearr_38543_40925[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (17))){
var state_38403__$1 = state_38403;
var statearr_38544_40926 = state_38403__$1;
(statearr_38544_40926[(2)] = null);

(statearr_38544_40926[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (3))){
var inst_38400 = (state_38403[(2)]);
var state_38403__$1 = state_38403;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38403__$1,inst_38400);
} else {
if((state_val_38406 === (12))){
var inst_38309 = (state_38403[(2)]);
var state_38403__$1 = state_38403;
var statearr_38545_40927 = state_38403__$1;
(statearr_38545_40927[(2)] = inst_38309);

(statearr_38545_40927[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (2))){
var state_38403__$1 = state_38403;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38403__$1,(4),ch);
} else {
if((state_val_38406 === (23))){
var state_38403__$1 = state_38403;
var statearr_38546_40928 = state_38403__$1;
(statearr_38546_40928[(2)] = null);

(statearr_38546_40928[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (35))){
var inst_38381 = (state_38403[(2)]);
var state_38403__$1 = state_38403;
var statearr_38548_40929 = state_38403__$1;
(statearr_38548_40929[(2)] = inst_38381);

(statearr_38548_40929[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (19))){
var inst_38276 = (state_38403[(7)]);
var inst_38284 = cljs.core.chunk_first(inst_38276);
var inst_38285 = cljs.core.chunk_rest(inst_38276);
var inst_38286 = cljs.core.count(inst_38284);
var inst_38247 = inst_38285;
var inst_38249 = inst_38284;
var inst_38250 = inst_38286;
var inst_38251 = (0);
var state_38403__$1 = (function (){var statearr_38552 = state_38403;
(statearr_38552[(14)] = inst_38247);

(statearr_38552[(15)] = inst_38249);

(statearr_38552[(16)] = inst_38250);

(statearr_38552[(17)] = inst_38251);

return statearr_38552;
})();
var statearr_38554_40930 = state_38403__$1;
(statearr_38554_40930[(2)] = null);

(statearr_38554_40930[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (11))){
var inst_38247 = (state_38403[(14)]);
var inst_38276 = (state_38403[(7)]);
var inst_38276__$1 = cljs.core.seq(inst_38247);
var state_38403__$1 = (function (){var statearr_38555 = state_38403;
(statearr_38555[(7)] = inst_38276__$1);

return statearr_38555;
})();
if(inst_38276__$1){
var statearr_38556_40931 = state_38403__$1;
(statearr_38556_40931[(1)] = (16));

} else {
var statearr_38560_40934 = state_38403__$1;
(statearr_38560_40934[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (9))){
var inst_38311 = (state_38403[(2)]);
var state_38403__$1 = state_38403;
var statearr_38561_40935 = state_38403__$1;
(statearr_38561_40935[(2)] = inst_38311);

(statearr_38561_40935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (5))){
var inst_38244 = cljs.core.deref(cs);
var inst_38245 = cljs.core.seq(inst_38244);
var inst_38247 = inst_38245;
var inst_38249 = null;
var inst_38250 = (0);
var inst_38251 = (0);
var state_38403__$1 = (function (){var statearr_38566 = state_38403;
(statearr_38566[(14)] = inst_38247);

(statearr_38566[(15)] = inst_38249);

(statearr_38566[(16)] = inst_38250);

(statearr_38566[(17)] = inst_38251);

return statearr_38566;
})();
var statearr_38567_40936 = state_38403__$1;
(statearr_38567_40936[(2)] = null);

(statearr_38567_40936[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (14))){
var state_38403__$1 = state_38403;
var statearr_38572_40937 = state_38403__$1;
(statearr_38572_40937[(2)] = null);

(statearr_38572_40937[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (45))){
var inst_38391 = (state_38403[(2)]);
var state_38403__$1 = state_38403;
var statearr_38574_40939 = state_38403__$1;
(statearr_38574_40939[(2)] = inst_38391);

(statearr_38574_40939[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (26))){
var inst_38316 = (state_38403[(27)]);
var inst_38386 = (state_38403[(2)]);
var inst_38388 = cljs.core.seq(inst_38316);
var state_38403__$1 = (function (){var statearr_38579 = state_38403;
(statearr_38579[(29)] = inst_38386);

return statearr_38579;
})();
if(inst_38388){
var statearr_38584_40941 = state_38403__$1;
(statearr_38584_40941[(1)] = (42));

} else {
var statearr_38588_40942 = state_38403__$1;
(statearr_38588_40942[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (16))){
var inst_38276 = (state_38403[(7)]);
var inst_38279 = cljs.core.chunked_seq_QMARK_(inst_38276);
var state_38403__$1 = state_38403;
if(inst_38279){
var statearr_38593_40943 = state_38403__$1;
(statearr_38593_40943[(1)] = (19));

} else {
var statearr_38594_40944 = state_38403__$1;
(statearr_38594_40944[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (38))){
var inst_38378 = (state_38403[(2)]);
var state_38403__$1 = state_38403;
var statearr_38595_40945 = state_38403__$1;
(statearr_38595_40945[(2)] = inst_38378);

(statearr_38595_40945[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (30))){
var state_38403__$1 = state_38403;
var statearr_38600_40946 = state_38403__$1;
(statearr_38600_40946[(2)] = null);

(statearr_38600_40946[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (10))){
var inst_38249 = (state_38403[(15)]);
var inst_38251 = (state_38403[(17)]);
var inst_38264 = cljs.core._nth(inst_38249,inst_38251);
var inst_38265 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38264,(0),null);
var inst_38266 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38264,(1),null);
var state_38403__$1 = (function (){var statearr_38604 = state_38403;
(statearr_38604[(24)] = inst_38265);

return statearr_38604;
})();
if(cljs.core.truth_(inst_38266)){
var statearr_38606_40949 = state_38403__$1;
(statearr_38606_40949[(1)] = (13));

} else {
var statearr_38607_40950 = state_38403__$1;
(statearr_38607_40950[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (18))){
var inst_38307 = (state_38403[(2)]);
var state_38403__$1 = state_38403;
var statearr_38608_40951 = state_38403__$1;
(statearr_38608_40951[(2)] = inst_38307);

(statearr_38608_40951[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (42))){
var state_38403__$1 = state_38403;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38403__$1,(45),dchan);
} else {
if((state_val_38406 === (37))){
var inst_38354 = (state_38403[(23)]);
var inst_38367 = (state_38403[(22)]);
var inst_38235 = (state_38403[(12)]);
var inst_38367__$1 = cljs.core.first(inst_38354);
var inst_38368 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_38367__$1,inst_38235,done);
var state_38403__$1 = (function (){var statearr_38609 = state_38403;
(statearr_38609[(22)] = inst_38367__$1);

return statearr_38609;
})();
if(cljs.core.truth_(inst_38368)){
var statearr_38613_40960 = state_38403__$1;
(statearr_38613_40960[(1)] = (39));

} else {
var statearr_38614_40961 = state_38403__$1;
(statearr_38614_40961[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38406 === (8))){
var inst_38251 = (state_38403[(17)]);
var inst_38250 = (state_38403[(16)]);
var inst_38255 = (inst_38251 < inst_38250);
var inst_38256 = inst_38255;
var state_38403__$1 = state_38403;
if(cljs.core.truth_(inst_38256)){
var statearr_38616_40970 = state_38403__$1;
(statearr_38616_40970[(1)] = (10));

} else {
var statearr_38617_40971 = state_38403__$1;
(statearr_38617_40971[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__36258__auto__ = null;
var cljs$core$async$mult_$_state_machine__36258__auto____0 = (function (){
var statearr_38622 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38622[(0)] = cljs$core$async$mult_$_state_machine__36258__auto__);

(statearr_38622[(1)] = (1));

return statearr_38622;
});
var cljs$core$async$mult_$_state_machine__36258__auto____1 = (function (state_38403){
while(true){
var ret_value__36259__auto__ = (function (){try{while(true){
var result__36260__auto__ = switch__36257__auto__(state_38403);
if(cljs.core.keyword_identical_QMARK_(result__36260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36260__auto__;
}
break;
}
}catch (e38623){var ex__36261__auto__ = e38623;
var statearr_38624_40975 = state_38403;
(statearr_38624_40975[(2)] = ex__36261__auto__);


if(cljs.core.seq((state_38403[(4)]))){
var statearr_38627_40976 = state_38403;
(statearr_38627_40976[(1)] = cljs.core.first((state_38403[(4)])));

} else {
throw ex__36261__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40977 = state_38403;
state_38403 = G__40977;
continue;
} else {
return ret_value__36259__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__36258__auto__ = function(state_38403){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__36258__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__36258__auto____1.call(this,state_38403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__36258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__36258__auto____0;
cljs$core$async$mult_$_state_machine__36258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__36258__auto____1;
return cljs$core$async$mult_$_state_machine__36258__auto__;
})()
})();
var state__37061__auto__ = (function (){var statearr_38629 = f__37059__auto__();
(statearr_38629[(6)] = c__37058__auto___40876);

return statearr_38629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37061__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__38635 = arguments.length;
switch (G__38635) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_40979 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null,m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_40979(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_40984 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null,m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_40984(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_40986 = (function (m){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5391__auto__.call(null,m));
} else {
var m__5389__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5389__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_40986(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_40987 = (function (m,state_map){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5391__auto__.call(null,m,state_map));
} else {
var m__5389__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5389__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_40987(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_40988 = (function (m,mode){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5391__auto__.call(null,m,mode));
} else {
var m__5389__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5389__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_40988(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___40994 = arguments.length;
var i__5767__auto___40995 = (0);
while(true){
if((i__5767__auto___40995 < len__5766__auto___40994)){
args__5772__auto__.push((arguments[i__5767__auto___40995]));

var G__40996 = (i__5767__auto___40995 + (1));
i__5767__auto___40995 = G__40996;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__38698){
var map__38700 = p__38698;
var map__38700__$1 = cljs.core.__destructure_map(map__38700);
var opts = map__38700__$1;
var statearr_38701_40997 = state;
(statearr_38701_40997[(1)] = cont_block);


var temp__5823__auto__ = cljs.core.async.do_alts((function (val){
var statearr_38706_40998 = state;
(statearr_38706_40998[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5823__auto__)){
var cb = temp__5823__auto__;
var statearr_38708_41005 = state;
(statearr_38708_41005[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq38687){
var G__38688 = cljs.core.first(seq38687);
var seq38687__$1 = cljs.core.next(seq38687);
var G__38689 = cljs.core.first(seq38687__$1);
var seq38687__$2 = cljs.core.next(seq38687__$1);
var G__38690 = cljs.core.first(seq38687__$2);
var seq38687__$3 = cljs.core.next(seq38687__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38688,G__38689,G__38690,seq38687__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38748 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta38749){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta38749 = meta38749;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38750,meta38749__$1){
var self__ = this;
var _38750__$1 = this;
return (new cljs.core.async.t_cljs$core$async38748(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta38749__$1));
}));

(cljs.core.async.t_cljs$core$async38748.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38750){
var self__ = this;
var _38750__$1 = this;
return self__.meta38749;
}));

(cljs.core.async.t_cljs$core$async38748.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38748.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async38748.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38748.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async38748.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async38748.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async38748.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async38748.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async38748.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta38749","meta38749",-269966668,null)], null);
}));

(cljs.core.async.t_cljs$core$async38748.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38748.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38748");

(cljs.core.async.t_cljs$core$async38748.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async38748");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38748.
 */
cljs.core.async.__GT_t_cljs$core$async38748 = (function cljs$core$async$__GT_t_cljs$core$async38748(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta38749){
return (new cljs.core.async.t_cljs$core$async38748(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta38749));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async38748(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__37058__auto___41028 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37059__auto__ = (function (){var switch__36257__auto__ = (function (state_38847){
var state_val_38848 = (state_38847[(1)]);
if((state_val_38848 === (7))){
var inst_38807 = (state_38847[(2)]);
var state_38847__$1 = state_38847;
if(cljs.core.truth_(inst_38807)){
var statearr_38849_41030 = state_38847__$1;
(statearr_38849_41030[(1)] = (8));

} else {
var statearr_38850_41031 = state_38847__$1;
(statearr_38850_41031[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38848 === (20))){
var inst_38800 = (state_38847[(7)]);
var state_38847__$1 = state_38847;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38847__$1,(23),out,inst_38800);
} else {
if((state_val_38848 === (1))){
var inst_38780 = calc_state();
var inst_38783 = cljs.core.__destructure_map(inst_38780);
var inst_38784 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38783,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38785 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38783,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38786 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38783,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_38787 = inst_38780;
var state_38847__$1 = (function (){var statearr_38851 = state_38847;
(statearr_38851[(8)] = inst_38784);

(statearr_38851[(9)] = inst_38785);

(statearr_38851[(10)] = inst_38786);

(statearr_38851[(11)] = inst_38787);

return statearr_38851;
})();
var statearr_38852_41033 = state_38847__$1;
(statearr_38852_41033[(2)] = null);

(statearr_38852_41033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38848 === (24))){
var inst_38790 = (state_38847[(12)]);
var inst_38787 = inst_38790;
var state_38847__$1 = (function (){var statearr_38855 = state_38847;
(statearr_38855[(11)] = inst_38787);

return statearr_38855;
})();
var statearr_38856_41034 = state_38847__$1;
(statearr_38856_41034[(2)] = null);

(statearr_38856_41034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38848 === (4))){
var inst_38800 = (state_38847[(7)]);
var inst_38802 = (state_38847[(13)]);
var inst_38799 = (state_38847[(2)]);
var inst_38800__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38799,(0),null);
var inst_38801 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38799,(1),null);
var inst_38802__$1 = (inst_38800__$1 == null);
var state_38847__$1 = (function (){var statearr_38861 = state_38847;
(statearr_38861[(7)] = inst_38800__$1);

(statearr_38861[(14)] = inst_38801);

(statearr_38861[(13)] = inst_38802__$1);

return statearr_38861;
})();
if(cljs.core.truth_(inst_38802__$1)){
var statearr_38866_41036 = state_38847__$1;
(statearr_38866_41036[(1)] = (5));

} else {
var statearr_38871_41037 = state_38847__$1;
(statearr_38871_41037[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38848 === (15))){
var inst_38791 = (state_38847[(15)]);
var inst_38821 = (state_38847[(16)]);
var inst_38821__$1 = cljs.core.empty_QMARK_(inst_38791);
var state_38847__$1 = (function (){var statearr_38872 = state_38847;
(statearr_38872[(16)] = inst_38821__$1);

return statearr_38872;
})();
if(inst_38821__$1){
var statearr_38873_41038 = state_38847__$1;
(statearr_38873_41038[(1)] = (17));

} else {
var statearr_38876_41039 = state_38847__$1;
(statearr_38876_41039[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38848 === (21))){
var inst_38790 = (state_38847[(12)]);
var inst_38787 = inst_38790;
var state_38847__$1 = (function (){var statearr_38877 = state_38847;
(statearr_38877[(11)] = inst_38787);

return statearr_38877;
})();
var statearr_38881_41040 = state_38847__$1;
(statearr_38881_41040[(2)] = null);

(statearr_38881_41040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38848 === (13))){
var inst_38814 = (state_38847[(2)]);
var inst_38815 = calc_state();
var inst_38787 = inst_38815;
var state_38847__$1 = (function (){var statearr_38882 = state_38847;
(statearr_38882[(17)] = inst_38814);

(statearr_38882[(11)] = inst_38787);

return statearr_38882;
})();
var statearr_38883_41042 = state_38847__$1;
(statearr_38883_41042[(2)] = null);

(statearr_38883_41042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38848 === (22))){
var inst_38841 = (state_38847[(2)]);
var state_38847__$1 = state_38847;
var statearr_38884_41043 = state_38847__$1;
(statearr_38884_41043[(2)] = inst_38841);

(statearr_38884_41043[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38848 === (6))){
var inst_38801 = (state_38847[(14)]);
var inst_38805 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38801,change);
var state_38847__$1 = state_38847;
var statearr_38885_41044 = state_38847__$1;
(statearr_38885_41044[(2)] = inst_38805);

(statearr_38885_41044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38848 === (25))){
var state_38847__$1 = state_38847;
var statearr_38886_41045 = state_38847__$1;
(statearr_38886_41045[(2)] = null);

(statearr_38886_41045[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38848 === (17))){
var inst_38792 = (state_38847[(18)]);
var inst_38801 = (state_38847[(14)]);
var inst_38823 = (inst_38792.cljs$core$IFn$_invoke$arity$1 ? inst_38792.cljs$core$IFn$_invoke$arity$1(inst_38801) : inst_38792.call(null,inst_38801));
var inst_38824 = cljs.core.not(inst_38823);
var state_38847__$1 = state_38847;
var statearr_38890_41046 = state_38847__$1;
(statearr_38890_41046[(2)] = inst_38824);

(statearr_38890_41046[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38848 === (3))){
var inst_38845 = (state_38847[(2)]);
var state_38847__$1 = state_38847;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38847__$1,inst_38845);
} else {
if((state_val_38848 === (12))){
var state_38847__$1 = state_38847;
var statearr_38891_41047 = state_38847__$1;
(statearr_38891_41047[(2)] = null);

(statearr_38891_41047[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38848 === (2))){
var inst_38787 = (state_38847[(11)]);
var inst_38790 = (state_38847[(12)]);
var inst_38790__$1 = cljs.core.__destructure_map(inst_38787);
var inst_38791 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38790__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38792 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38790__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38793 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38790__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_38847__$1 = (function (){var statearr_38904 = state_38847;
(statearr_38904[(12)] = inst_38790__$1);

(statearr_38904[(15)] = inst_38791);

(statearr_38904[(18)] = inst_38792);

return statearr_38904;
})();
return cljs.core.async.ioc_alts_BANG_(state_38847__$1,(4),inst_38793);
} else {
if((state_val_38848 === (23))){
var inst_38832 = (state_38847[(2)]);
var state_38847__$1 = state_38847;
if(cljs.core.truth_(inst_38832)){
var statearr_38906_41048 = state_38847__$1;
(statearr_38906_41048[(1)] = (24));

} else {
var statearr_38907_41049 = state_38847__$1;
(statearr_38907_41049[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38848 === (19))){
var inst_38827 = (state_38847[(2)]);
var state_38847__$1 = state_38847;
var statearr_38911_41054 = state_38847__$1;
(statearr_38911_41054[(2)] = inst_38827);

(statearr_38911_41054[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38848 === (11))){
var inst_38801 = (state_38847[(14)]);
var inst_38811 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_38801);
var state_38847__$1 = state_38847;
var statearr_38913_41059 = state_38847__$1;
(statearr_38913_41059[(2)] = inst_38811);

(statearr_38913_41059[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38848 === (9))){
var inst_38791 = (state_38847[(15)]);
var inst_38801 = (state_38847[(14)]);
var inst_38818 = (state_38847[(19)]);
var inst_38818__$1 = (inst_38791.cljs$core$IFn$_invoke$arity$1 ? inst_38791.cljs$core$IFn$_invoke$arity$1(inst_38801) : inst_38791.call(null,inst_38801));
var state_38847__$1 = (function (){var statearr_38918 = state_38847;
(statearr_38918[(19)] = inst_38818__$1);

return statearr_38918;
})();
if(cljs.core.truth_(inst_38818__$1)){
var statearr_38920_41065 = state_38847__$1;
(statearr_38920_41065[(1)] = (14));

} else {
var statearr_38921_41066 = state_38847__$1;
(statearr_38921_41066[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38848 === (5))){
var inst_38802 = (state_38847[(13)]);
var state_38847__$1 = state_38847;
var statearr_38926_41067 = state_38847__$1;
(statearr_38926_41067[(2)] = inst_38802);

(statearr_38926_41067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38848 === (14))){
var inst_38818 = (state_38847[(19)]);
var state_38847__$1 = state_38847;
var statearr_38930_41068 = state_38847__$1;
(statearr_38930_41068[(2)] = inst_38818);

(statearr_38930_41068[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38848 === (26))){
var inst_38837 = (state_38847[(2)]);
var state_38847__$1 = state_38847;
var statearr_38933_41069 = state_38847__$1;
(statearr_38933_41069[(2)] = inst_38837);

(statearr_38933_41069[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38848 === (16))){
var inst_38829 = (state_38847[(2)]);
var state_38847__$1 = state_38847;
if(cljs.core.truth_(inst_38829)){
var statearr_38935_41070 = state_38847__$1;
(statearr_38935_41070[(1)] = (20));

} else {
var statearr_38936_41072 = state_38847__$1;
(statearr_38936_41072[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38848 === (10))){
var inst_38843 = (state_38847[(2)]);
var state_38847__$1 = state_38847;
var statearr_38940_41076 = state_38847__$1;
(statearr_38940_41076[(2)] = inst_38843);

(statearr_38940_41076[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38848 === (18))){
var inst_38821 = (state_38847[(16)]);
var state_38847__$1 = state_38847;
var statearr_38943_41077 = state_38847__$1;
(statearr_38943_41077[(2)] = inst_38821);

(statearr_38943_41077[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38848 === (8))){
var inst_38800 = (state_38847[(7)]);
var inst_38809 = (inst_38800 == null);
var state_38847__$1 = state_38847;
if(cljs.core.truth_(inst_38809)){
var statearr_38944_41078 = state_38847__$1;
(statearr_38944_41078[(1)] = (11));

} else {
var statearr_38948_41079 = state_38847__$1;
(statearr_38948_41079[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__36258__auto__ = null;
var cljs$core$async$mix_$_state_machine__36258__auto____0 = (function (){
var statearr_38953 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38953[(0)] = cljs$core$async$mix_$_state_machine__36258__auto__);

(statearr_38953[(1)] = (1));

return statearr_38953;
});
var cljs$core$async$mix_$_state_machine__36258__auto____1 = (function (state_38847){
while(true){
var ret_value__36259__auto__ = (function (){try{while(true){
var result__36260__auto__ = switch__36257__auto__(state_38847);
if(cljs.core.keyword_identical_QMARK_(result__36260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36260__auto__;
}
break;
}
}catch (e38954){var ex__36261__auto__ = e38954;
var statearr_38955_41088 = state_38847;
(statearr_38955_41088[(2)] = ex__36261__auto__);


if(cljs.core.seq((state_38847[(4)]))){
var statearr_38957_41089 = state_38847;
(statearr_38957_41089[(1)] = cljs.core.first((state_38847[(4)])));

} else {
throw ex__36261__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41090 = state_38847;
state_38847 = G__41090;
continue;
} else {
return ret_value__36259__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__36258__auto__ = function(state_38847){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__36258__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__36258__auto____1.call(this,state_38847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__36258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__36258__auto____0;
cljs$core$async$mix_$_state_machine__36258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__36258__auto____1;
return cljs$core$async$mix_$_state_machine__36258__auto__;
})()
})();
var state__37061__auto__ = (function (){var statearr_38960 = f__37059__auto__();
(statearr_38960[(6)] = c__37058__auto___41028);

return statearr_38960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37061__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_41096 = (function (p,v,ch,close_QMARK_){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5391__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5389__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5389__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_41096(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_41103 = (function (p,v,ch){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5391__auto__.call(null,p,v,ch));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5389__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_41103(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_41110 = (function() {
var G__41111 = null;
var G__41111__1 = (function (p){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5391__auto__.call(null,p));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5389__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__41111__2 = (function (p,v){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5391__auto__.call(null,p,v));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5389__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__41111 = function(p,v){
switch(arguments.length){
case 1:
return G__41111__1.call(this,p);
case 2:
return G__41111__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__41111.cljs$core$IFn$_invoke$arity$1 = G__41111__1;
G__41111.cljs$core$IFn$_invoke$arity$2 = G__41111__2;
return G__41111;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__38984 = arguments.length;
switch (G__38984) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_41110(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_41110(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39019 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta39020){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta39020 = meta39020;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39019.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39021,meta39020__$1){
var self__ = this;
var _39021__$1 = this;
return (new cljs.core.async.t_cljs$core$async39019(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta39020__$1));
}));

(cljs.core.async.t_cljs$core$async39019.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39021){
var self__ = this;
var _39021__$1 = this;
return self__.meta39020;
}));

(cljs.core.async.t_cljs$core$async39019.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39019.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async39019.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39019.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async39019.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async39019.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async39019.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async39019.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta39020","meta39020",-928475161,null)], null);
}));

(cljs.core.async.t_cljs$core$async39019.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39019.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39019");

(cljs.core.async.t_cljs$core$async39019.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async39019");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39019.
 */
cljs.core.async.__GT_t_cljs$core$async39019 = (function cljs$core$async$__GT_t_cljs$core$async39019(ch,topic_fn,buf_fn,mults,ensure_mult,meta39020){
return (new cljs.core.async.t_cljs$core$async39019(ch,topic_fn,buf_fn,mults,ensure_mult,meta39020));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__39006 = arguments.length;
switch (G__39006) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__38993_SHARP_){
if(cljs.core.truth_((p1__38993_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__38993_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__38993_SHARP_.call(null,topic)))){
return p1__38993_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__38993_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async39019(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__37058__auto___41148 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37059__auto__ = (function (){var switch__36257__auto__ = (function (state_39159){
var state_val_39160 = (state_39159[(1)]);
if((state_val_39160 === (7))){
var inst_39154 = (state_39159[(2)]);
var state_39159__$1 = state_39159;
var statearr_39166_41150 = state_39159__$1;
(statearr_39166_41150[(2)] = inst_39154);

(statearr_39166_41150[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (20))){
var state_39159__$1 = state_39159;
var statearr_39170_41151 = state_39159__$1;
(statearr_39170_41151[(2)] = null);

(statearr_39170_41151[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (1))){
var state_39159__$1 = state_39159;
var statearr_39178_41152 = state_39159__$1;
(statearr_39178_41152[(2)] = null);

(statearr_39178_41152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (24))){
var inst_39136 = (state_39159[(7)]);
var inst_39146 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_39136);
var state_39159__$1 = state_39159;
var statearr_39182_41159 = state_39159__$1;
(statearr_39182_41159[(2)] = inst_39146);

(statearr_39182_41159[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (4))){
var inst_39072 = (state_39159[(8)]);
var inst_39072__$1 = (state_39159[(2)]);
var inst_39073 = (inst_39072__$1 == null);
var state_39159__$1 = (function (){var statearr_39188 = state_39159;
(statearr_39188[(8)] = inst_39072__$1);

return statearr_39188;
})();
if(cljs.core.truth_(inst_39073)){
var statearr_39190_41174 = state_39159__$1;
(statearr_39190_41174[(1)] = (5));

} else {
var statearr_39191_41177 = state_39159__$1;
(statearr_39191_41177[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (15))){
var inst_39130 = (state_39159[(2)]);
var state_39159__$1 = state_39159;
var statearr_39193_41182 = state_39159__$1;
(statearr_39193_41182[(2)] = inst_39130);

(statearr_39193_41182[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (21))){
var inst_39151 = (state_39159[(2)]);
var state_39159__$1 = (function (){var statearr_39196 = state_39159;
(statearr_39196[(9)] = inst_39151);

return statearr_39196;
})();
var statearr_39198_41194 = state_39159__$1;
(statearr_39198_41194[(2)] = null);

(statearr_39198_41194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (13))){
var inst_39112 = (state_39159[(10)]);
var inst_39114 = cljs.core.chunked_seq_QMARK_(inst_39112);
var state_39159__$1 = state_39159;
if(inst_39114){
var statearr_39201_41205 = state_39159__$1;
(statearr_39201_41205[(1)] = (16));

} else {
var statearr_39202_41207 = state_39159__$1;
(statearr_39202_41207[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (22))){
var inst_39143 = (state_39159[(2)]);
var state_39159__$1 = state_39159;
if(cljs.core.truth_(inst_39143)){
var statearr_39206_41208 = state_39159__$1;
(statearr_39206_41208[(1)] = (23));

} else {
var statearr_39207_41209 = state_39159__$1;
(statearr_39207_41209[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (6))){
var inst_39072 = (state_39159[(8)]);
var inst_39136 = (state_39159[(7)]);
var inst_39138 = (state_39159[(11)]);
var inst_39136__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_39072) : topic_fn.call(null,inst_39072));
var inst_39137 = cljs.core.deref(mults);
var inst_39138__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39137,inst_39136__$1);
var state_39159__$1 = (function (){var statearr_39215 = state_39159;
(statearr_39215[(7)] = inst_39136__$1);

(statearr_39215[(11)] = inst_39138__$1);

return statearr_39215;
})();
if(cljs.core.truth_(inst_39138__$1)){
var statearr_39217_41217 = state_39159__$1;
(statearr_39217_41217[(1)] = (19));

} else {
var statearr_39224_41218 = state_39159__$1;
(statearr_39224_41218[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (25))){
var inst_39148 = (state_39159[(2)]);
var state_39159__$1 = state_39159;
var statearr_39231_41219 = state_39159__$1;
(statearr_39231_41219[(2)] = inst_39148);

(statearr_39231_41219[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (17))){
var inst_39112 = (state_39159[(10)]);
var inst_39121 = cljs.core.first(inst_39112);
var inst_39122 = cljs.core.async.muxch_STAR_(inst_39121);
var inst_39123 = cljs.core.async.close_BANG_(inst_39122);
var inst_39124 = cljs.core.next(inst_39112);
var inst_39086 = inst_39124;
var inst_39087 = null;
var inst_39088 = (0);
var inst_39089 = (0);
var state_39159__$1 = (function (){var statearr_39233 = state_39159;
(statearr_39233[(12)] = inst_39123);

(statearr_39233[(13)] = inst_39086);

(statearr_39233[(14)] = inst_39087);

(statearr_39233[(15)] = inst_39088);

(statearr_39233[(16)] = inst_39089);

return statearr_39233;
})();
var statearr_39235_41234 = state_39159__$1;
(statearr_39235_41234[(2)] = null);

(statearr_39235_41234[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (3))){
var inst_39156 = (state_39159[(2)]);
var state_39159__$1 = state_39159;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39159__$1,inst_39156);
} else {
if((state_val_39160 === (12))){
var inst_39132 = (state_39159[(2)]);
var state_39159__$1 = state_39159;
var statearr_39240_41240 = state_39159__$1;
(statearr_39240_41240[(2)] = inst_39132);

(statearr_39240_41240[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (2))){
var state_39159__$1 = state_39159;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39159__$1,(4),ch);
} else {
if((state_val_39160 === (23))){
var state_39159__$1 = state_39159;
var statearr_39243_41246 = state_39159__$1;
(statearr_39243_41246[(2)] = null);

(statearr_39243_41246[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (19))){
var inst_39138 = (state_39159[(11)]);
var inst_39072 = (state_39159[(8)]);
var inst_39141 = cljs.core.async.muxch_STAR_(inst_39138);
var state_39159__$1 = state_39159;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39159__$1,(22),inst_39141,inst_39072);
} else {
if((state_val_39160 === (11))){
var inst_39086 = (state_39159[(13)]);
var inst_39112 = (state_39159[(10)]);
var inst_39112__$1 = cljs.core.seq(inst_39086);
var state_39159__$1 = (function (){var statearr_39249 = state_39159;
(statearr_39249[(10)] = inst_39112__$1);

return statearr_39249;
})();
if(inst_39112__$1){
var statearr_39250_41251 = state_39159__$1;
(statearr_39250_41251[(1)] = (13));

} else {
var statearr_39251_41252 = state_39159__$1;
(statearr_39251_41252[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (9))){
var inst_39134 = (state_39159[(2)]);
var state_39159__$1 = state_39159;
var statearr_39252_41256 = state_39159__$1;
(statearr_39252_41256[(2)] = inst_39134);

(statearr_39252_41256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (5))){
var inst_39083 = cljs.core.deref(mults);
var inst_39084 = cljs.core.vals(inst_39083);
var inst_39085 = cljs.core.seq(inst_39084);
var inst_39086 = inst_39085;
var inst_39087 = null;
var inst_39088 = (0);
var inst_39089 = (0);
var state_39159__$1 = (function (){var statearr_39254 = state_39159;
(statearr_39254[(13)] = inst_39086);

(statearr_39254[(14)] = inst_39087);

(statearr_39254[(15)] = inst_39088);

(statearr_39254[(16)] = inst_39089);

return statearr_39254;
})();
var statearr_39255_41258 = state_39159__$1;
(statearr_39255_41258[(2)] = null);

(statearr_39255_41258[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (14))){
var state_39159__$1 = state_39159;
var statearr_39263_41261 = state_39159__$1;
(statearr_39263_41261[(2)] = null);

(statearr_39263_41261[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (16))){
var inst_39112 = (state_39159[(10)]);
var inst_39116 = cljs.core.chunk_first(inst_39112);
var inst_39117 = cljs.core.chunk_rest(inst_39112);
var inst_39118 = cljs.core.count(inst_39116);
var inst_39086 = inst_39117;
var inst_39087 = inst_39116;
var inst_39088 = inst_39118;
var inst_39089 = (0);
var state_39159__$1 = (function (){var statearr_39264 = state_39159;
(statearr_39264[(13)] = inst_39086);

(statearr_39264[(14)] = inst_39087);

(statearr_39264[(15)] = inst_39088);

(statearr_39264[(16)] = inst_39089);

return statearr_39264;
})();
var statearr_39265_41262 = state_39159__$1;
(statearr_39265_41262[(2)] = null);

(statearr_39265_41262[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (10))){
var inst_39087 = (state_39159[(14)]);
var inst_39089 = (state_39159[(16)]);
var inst_39086 = (state_39159[(13)]);
var inst_39088 = (state_39159[(15)]);
var inst_39098 = cljs.core._nth(inst_39087,inst_39089);
var inst_39103 = cljs.core.async.muxch_STAR_(inst_39098);
var inst_39104 = cljs.core.async.close_BANG_(inst_39103);
var inst_39105 = (inst_39089 + (1));
var tmp39257 = inst_39087;
var tmp39258 = inst_39088;
var tmp39259 = inst_39086;
var inst_39086__$1 = tmp39259;
var inst_39087__$1 = tmp39257;
var inst_39088__$1 = tmp39258;
var inst_39089__$1 = inst_39105;
var state_39159__$1 = (function (){var statearr_39267 = state_39159;
(statearr_39267[(17)] = inst_39104);

(statearr_39267[(13)] = inst_39086__$1);

(statearr_39267[(14)] = inst_39087__$1);

(statearr_39267[(15)] = inst_39088__$1);

(statearr_39267[(16)] = inst_39089__$1);

return statearr_39267;
})();
var statearr_39268_41264 = state_39159__$1;
(statearr_39268_41264[(2)] = null);

(statearr_39268_41264[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (18))){
var inst_39127 = (state_39159[(2)]);
var state_39159__$1 = state_39159;
var statearr_39269_41265 = state_39159__$1;
(statearr_39269_41265[(2)] = inst_39127);

(statearr_39269_41265[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39160 === (8))){
var inst_39089 = (state_39159[(16)]);
var inst_39088 = (state_39159[(15)]);
var inst_39095 = (inst_39089 < inst_39088);
var inst_39096 = inst_39095;
var state_39159__$1 = state_39159;
if(cljs.core.truth_(inst_39096)){
var statearr_39270_41266 = state_39159__$1;
(statearr_39270_41266[(1)] = (10));

} else {
var statearr_39271_41267 = state_39159__$1;
(statearr_39271_41267[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36258__auto__ = null;
var cljs$core$async$state_machine__36258__auto____0 = (function (){
var statearr_39272 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39272[(0)] = cljs$core$async$state_machine__36258__auto__);

(statearr_39272[(1)] = (1));

return statearr_39272;
});
var cljs$core$async$state_machine__36258__auto____1 = (function (state_39159){
while(true){
var ret_value__36259__auto__ = (function (){try{while(true){
var result__36260__auto__ = switch__36257__auto__(state_39159);
if(cljs.core.keyword_identical_QMARK_(result__36260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36260__auto__;
}
break;
}
}catch (e39275){var ex__36261__auto__ = e39275;
var statearr_39276_41271 = state_39159;
(statearr_39276_41271[(2)] = ex__36261__auto__);


if(cljs.core.seq((state_39159[(4)]))){
var statearr_39277_41272 = state_39159;
(statearr_39277_41272[(1)] = cljs.core.first((state_39159[(4)])));

} else {
throw ex__36261__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41273 = state_39159;
state_39159 = G__41273;
continue;
} else {
return ret_value__36259__auto__;
}
break;
}
});
cljs$core$async$state_machine__36258__auto__ = function(state_39159){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36258__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36258__auto____1.call(this,state_39159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36258__auto____0;
cljs$core$async$state_machine__36258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36258__auto____1;
return cljs$core$async$state_machine__36258__auto__;
})()
})();
var state__37061__auto__ = (function (){var statearr_39279 = f__37059__auto__();
(statearr_39279[(6)] = c__37058__auto___41148);

return statearr_39279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37061__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__39282 = arguments.length;
switch (G__39282) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__39298 = arguments.length;
switch (G__39298) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__39305 = arguments.length;
switch (G__39305) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__37058__auto___41298 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37059__auto__ = (function (){var switch__36257__auto__ = (function (state_39363){
var state_val_39364 = (state_39363[(1)]);
if((state_val_39364 === (7))){
var state_39363__$1 = state_39363;
var statearr_39367_41300 = state_39363__$1;
(statearr_39367_41300[(2)] = null);

(statearr_39367_41300[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39364 === (1))){
var state_39363__$1 = state_39363;
var statearr_39368_41302 = state_39363__$1;
(statearr_39368_41302[(2)] = null);

(statearr_39368_41302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39364 === (4))){
var inst_39317 = (state_39363[(7)]);
var inst_39316 = (state_39363[(8)]);
var inst_39319 = (inst_39317 < inst_39316);
var state_39363__$1 = state_39363;
if(cljs.core.truth_(inst_39319)){
var statearr_39369_41306 = state_39363__$1;
(statearr_39369_41306[(1)] = (6));

} else {
var statearr_39370_41308 = state_39363__$1;
(statearr_39370_41308[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39364 === (15))){
var inst_39349 = (state_39363[(9)]);
var inst_39354 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_39349);
var state_39363__$1 = state_39363;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39363__$1,(17),out,inst_39354);
} else {
if((state_val_39364 === (13))){
var inst_39349 = (state_39363[(9)]);
var inst_39349__$1 = (state_39363[(2)]);
var inst_39350 = cljs.core.some(cljs.core.nil_QMARK_,inst_39349__$1);
var state_39363__$1 = (function (){var statearr_39375 = state_39363;
(statearr_39375[(9)] = inst_39349__$1);

return statearr_39375;
})();
if(cljs.core.truth_(inst_39350)){
var statearr_39376_41316 = state_39363__$1;
(statearr_39376_41316[(1)] = (14));

} else {
var statearr_39377_41317 = state_39363__$1;
(statearr_39377_41317[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39364 === (6))){
var state_39363__$1 = state_39363;
var statearr_39378_41319 = state_39363__$1;
(statearr_39378_41319[(2)] = null);

(statearr_39378_41319[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39364 === (17))){
var inst_39356 = (state_39363[(2)]);
var state_39363__$1 = (function (){var statearr_39387 = state_39363;
(statearr_39387[(10)] = inst_39356);

return statearr_39387;
})();
var statearr_39388_41327 = state_39363__$1;
(statearr_39388_41327[(2)] = null);

(statearr_39388_41327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39364 === (3))){
var inst_39361 = (state_39363[(2)]);
var state_39363__$1 = state_39363;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39363__$1,inst_39361);
} else {
if((state_val_39364 === (12))){
var _ = (function (){var statearr_39389 = state_39363;
(statearr_39389[(4)] = cljs.core.rest((state_39363[(4)])));

return statearr_39389;
})();
var state_39363__$1 = state_39363;
var ex39385 = (state_39363__$1[(2)]);
var statearr_39391_41328 = state_39363__$1;
(statearr_39391_41328[(5)] = ex39385);


if((ex39385 instanceof Object)){
var statearr_39395_41329 = state_39363__$1;
(statearr_39395_41329[(1)] = (11));

(statearr_39395_41329[(5)] = null);

} else {
throw ex39385;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39364 === (2))){
var inst_39315 = cljs.core.reset_BANG_(dctr,cnt);
var inst_39316 = cnt;
var inst_39317 = (0);
var state_39363__$1 = (function (){var statearr_39403 = state_39363;
(statearr_39403[(11)] = inst_39315);

(statearr_39403[(8)] = inst_39316);

(statearr_39403[(7)] = inst_39317);

return statearr_39403;
})();
var statearr_39404_41340 = state_39363__$1;
(statearr_39404_41340[(2)] = null);

(statearr_39404_41340[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39364 === (11))){
var inst_39327 = (state_39363[(2)]);
var inst_39328 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_39363__$1 = (function (){var statearr_39405 = state_39363;
(statearr_39405[(12)] = inst_39327);

return statearr_39405;
})();
var statearr_39407_41342 = state_39363__$1;
(statearr_39407_41342[(2)] = inst_39328);

(statearr_39407_41342[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39364 === (9))){
var inst_39317 = (state_39363[(7)]);
var _ = (function (){var statearr_39410 = state_39363;
(statearr_39410[(4)] = cljs.core.cons((12),(state_39363[(4)])));

return statearr_39410;
})();
var inst_39334 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_39317) : chs__$1.call(null,inst_39317));
var inst_39335 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_39317) : done.call(null,inst_39317));
var inst_39336 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_39334,inst_39335);
var ___$1 = (function (){var statearr_39414 = state_39363;
(statearr_39414[(4)] = cljs.core.rest((state_39363[(4)])));

return statearr_39414;
})();
var state_39363__$1 = state_39363;
var statearr_39415_41343 = state_39363__$1;
(statearr_39415_41343[(2)] = inst_39336);

(statearr_39415_41343[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39364 === (5))){
var inst_39346 = (state_39363[(2)]);
var state_39363__$1 = (function (){var statearr_39416 = state_39363;
(statearr_39416[(13)] = inst_39346);

return statearr_39416;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39363__$1,(13),dchan);
} else {
if((state_val_39364 === (14))){
var inst_39352 = cljs.core.async.close_BANG_(out);
var state_39363__$1 = state_39363;
var statearr_39419_41344 = state_39363__$1;
(statearr_39419_41344[(2)] = inst_39352);

(statearr_39419_41344[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39364 === (16))){
var inst_39359 = (state_39363[(2)]);
var state_39363__$1 = state_39363;
var statearr_39423_41345 = state_39363__$1;
(statearr_39423_41345[(2)] = inst_39359);

(statearr_39423_41345[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39364 === (10))){
var inst_39317 = (state_39363[(7)]);
var inst_39339 = (state_39363[(2)]);
var inst_39340 = (inst_39317 + (1));
var inst_39317__$1 = inst_39340;
var state_39363__$1 = (function (){var statearr_39428 = state_39363;
(statearr_39428[(14)] = inst_39339);

(statearr_39428[(7)] = inst_39317__$1);

return statearr_39428;
})();
var statearr_39429_41347 = state_39363__$1;
(statearr_39429_41347[(2)] = null);

(statearr_39429_41347[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39364 === (8))){
var inst_39344 = (state_39363[(2)]);
var state_39363__$1 = state_39363;
var statearr_39431_41348 = state_39363__$1;
(statearr_39431_41348[(2)] = inst_39344);

(statearr_39431_41348[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36258__auto__ = null;
var cljs$core$async$state_machine__36258__auto____0 = (function (){
var statearr_39436 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39436[(0)] = cljs$core$async$state_machine__36258__auto__);

(statearr_39436[(1)] = (1));

return statearr_39436;
});
var cljs$core$async$state_machine__36258__auto____1 = (function (state_39363){
while(true){
var ret_value__36259__auto__ = (function (){try{while(true){
var result__36260__auto__ = switch__36257__auto__(state_39363);
if(cljs.core.keyword_identical_QMARK_(result__36260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36260__auto__;
}
break;
}
}catch (e39438){var ex__36261__auto__ = e39438;
var statearr_39439_41349 = state_39363;
(statearr_39439_41349[(2)] = ex__36261__auto__);


if(cljs.core.seq((state_39363[(4)]))){
var statearr_39441_41350 = state_39363;
(statearr_39441_41350[(1)] = cljs.core.first((state_39363[(4)])));

} else {
throw ex__36261__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41351 = state_39363;
state_39363 = G__41351;
continue;
} else {
return ret_value__36259__auto__;
}
break;
}
});
cljs$core$async$state_machine__36258__auto__ = function(state_39363){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36258__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36258__auto____1.call(this,state_39363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36258__auto____0;
cljs$core$async$state_machine__36258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36258__auto____1;
return cljs$core$async$state_machine__36258__auto__;
})()
})();
var state__37061__auto__ = (function (){var statearr_39445 = f__37059__auto__();
(statearr_39445[(6)] = c__37058__auto___41298);

return statearr_39445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37061__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__39448 = arguments.length;
switch (G__39448) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37058__auto___41355 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37059__auto__ = (function (){var switch__36257__auto__ = (function (state_39500){
var state_val_39501 = (state_39500[(1)]);
if((state_val_39501 === (7))){
var inst_39469 = (state_39500[(7)]);
var inst_39470 = (state_39500[(8)]);
var inst_39469__$1 = (state_39500[(2)]);
var inst_39470__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39469__$1,(0),null);
var inst_39471 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39469__$1,(1),null);
var inst_39472 = (inst_39470__$1 == null);
var state_39500__$1 = (function (){var statearr_39511 = state_39500;
(statearr_39511[(7)] = inst_39469__$1);

(statearr_39511[(8)] = inst_39470__$1);

(statearr_39511[(9)] = inst_39471);

return statearr_39511;
})();
if(cljs.core.truth_(inst_39472)){
var statearr_39512_41358 = state_39500__$1;
(statearr_39512_41358[(1)] = (8));

} else {
var statearr_39513_41359 = state_39500__$1;
(statearr_39513_41359[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39501 === (1))){
var inst_39454 = cljs.core.vec(chs);
var inst_39455 = inst_39454;
var state_39500__$1 = (function (){var statearr_39517 = state_39500;
(statearr_39517[(10)] = inst_39455);

return statearr_39517;
})();
var statearr_39518_41362 = state_39500__$1;
(statearr_39518_41362[(2)] = null);

(statearr_39518_41362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39501 === (4))){
var inst_39455 = (state_39500[(10)]);
var state_39500__$1 = state_39500;
return cljs.core.async.ioc_alts_BANG_(state_39500__$1,(7),inst_39455);
} else {
if((state_val_39501 === (6))){
var inst_39492 = (state_39500[(2)]);
var state_39500__$1 = state_39500;
var statearr_39519_41372 = state_39500__$1;
(statearr_39519_41372[(2)] = inst_39492);

(statearr_39519_41372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39501 === (3))){
var inst_39494 = (state_39500[(2)]);
var state_39500__$1 = state_39500;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39500__$1,inst_39494);
} else {
if((state_val_39501 === (2))){
var inst_39455 = (state_39500[(10)]);
var inst_39459 = cljs.core.count(inst_39455);
var inst_39460 = (inst_39459 > (0));
var state_39500__$1 = state_39500;
if(cljs.core.truth_(inst_39460)){
var statearr_39524_41374 = state_39500__$1;
(statearr_39524_41374[(1)] = (4));

} else {
var statearr_39525_41375 = state_39500__$1;
(statearr_39525_41375[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39501 === (11))){
var inst_39455 = (state_39500[(10)]);
var inst_39485 = (state_39500[(2)]);
var tmp39520 = inst_39455;
var inst_39455__$1 = tmp39520;
var state_39500__$1 = (function (){var statearr_39527 = state_39500;
(statearr_39527[(11)] = inst_39485);

(statearr_39527[(10)] = inst_39455__$1);

return statearr_39527;
})();
var statearr_39528_41376 = state_39500__$1;
(statearr_39528_41376[(2)] = null);

(statearr_39528_41376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39501 === (9))){
var inst_39470 = (state_39500[(8)]);
var state_39500__$1 = state_39500;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39500__$1,(11),out,inst_39470);
} else {
if((state_val_39501 === (5))){
var inst_39490 = cljs.core.async.close_BANG_(out);
var state_39500__$1 = state_39500;
var statearr_39532_41381 = state_39500__$1;
(statearr_39532_41381[(2)] = inst_39490);

(statearr_39532_41381[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39501 === (10))){
var inst_39488 = (state_39500[(2)]);
var state_39500__$1 = state_39500;
var statearr_39533_41382 = state_39500__$1;
(statearr_39533_41382[(2)] = inst_39488);

(statearr_39533_41382[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39501 === (8))){
var inst_39455 = (state_39500[(10)]);
var inst_39469 = (state_39500[(7)]);
var inst_39470 = (state_39500[(8)]);
var inst_39471 = (state_39500[(9)]);
var inst_39478 = (function (){var cs = inst_39455;
var vec__39463 = inst_39469;
var v = inst_39470;
var c = inst_39471;
return (function (p1__39446_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__39446_SHARP_);
});
})();
var inst_39480 = cljs.core.filterv(inst_39478,inst_39455);
var inst_39455__$1 = inst_39480;
var state_39500__$1 = (function (){var statearr_39556 = state_39500;
(statearr_39556[(10)] = inst_39455__$1);

return statearr_39556;
})();
var statearr_39557_41384 = state_39500__$1;
(statearr_39557_41384[(2)] = null);

(statearr_39557_41384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36258__auto__ = null;
var cljs$core$async$state_machine__36258__auto____0 = (function (){
var statearr_39562 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39562[(0)] = cljs$core$async$state_machine__36258__auto__);

(statearr_39562[(1)] = (1));

return statearr_39562;
});
var cljs$core$async$state_machine__36258__auto____1 = (function (state_39500){
while(true){
var ret_value__36259__auto__ = (function (){try{while(true){
var result__36260__auto__ = switch__36257__auto__(state_39500);
if(cljs.core.keyword_identical_QMARK_(result__36260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36260__auto__;
}
break;
}
}catch (e39564){var ex__36261__auto__ = e39564;
var statearr_39565_41393 = state_39500;
(statearr_39565_41393[(2)] = ex__36261__auto__);


if(cljs.core.seq((state_39500[(4)]))){
var statearr_39569_41394 = state_39500;
(statearr_39569_41394[(1)] = cljs.core.first((state_39500[(4)])));

} else {
throw ex__36261__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41395 = state_39500;
state_39500 = G__41395;
continue;
} else {
return ret_value__36259__auto__;
}
break;
}
});
cljs$core$async$state_machine__36258__auto__ = function(state_39500){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36258__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36258__auto____1.call(this,state_39500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36258__auto____0;
cljs$core$async$state_machine__36258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36258__auto____1;
return cljs$core$async$state_machine__36258__auto__;
})()
})();
var state__37061__auto__ = (function (){var statearr_39576 = f__37059__auto__();
(statearr_39576[(6)] = c__37058__auto___41355);

return statearr_39576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37061__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__39585 = arguments.length;
switch (G__39585) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37058__auto___41403 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37059__auto__ = (function (){var switch__36257__auto__ = (function (state_39622){
var state_val_39623 = (state_39622[(1)]);
if((state_val_39623 === (7))){
var inst_39604 = (state_39622[(7)]);
var inst_39604__$1 = (state_39622[(2)]);
var inst_39605 = (inst_39604__$1 == null);
var inst_39606 = cljs.core.not(inst_39605);
var state_39622__$1 = (function (){var statearr_39635 = state_39622;
(statearr_39635[(7)] = inst_39604__$1);

return statearr_39635;
})();
if(inst_39606){
var statearr_39636_41417 = state_39622__$1;
(statearr_39636_41417[(1)] = (8));

} else {
var statearr_39643_41421 = state_39622__$1;
(statearr_39643_41421[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39623 === (1))){
var inst_39596 = (0);
var state_39622__$1 = (function (){var statearr_39644 = state_39622;
(statearr_39644[(8)] = inst_39596);

return statearr_39644;
})();
var statearr_39648_41425 = state_39622__$1;
(statearr_39648_41425[(2)] = null);

(statearr_39648_41425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39623 === (4))){
var state_39622__$1 = state_39622;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39622__$1,(7),ch);
} else {
if((state_val_39623 === (6))){
var inst_39617 = (state_39622[(2)]);
var state_39622__$1 = state_39622;
var statearr_39664_41434 = state_39622__$1;
(statearr_39664_41434[(2)] = inst_39617);

(statearr_39664_41434[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39623 === (3))){
var inst_39619 = (state_39622[(2)]);
var inst_39620 = cljs.core.async.close_BANG_(out);
var state_39622__$1 = (function (){var statearr_39665 = state_39622;
(statearr_39665[(9)] = inst_39619);

return statearr_39665;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39622__$1,inst_39620);
} else {
if((state_val_39623 === (2))){
var inst_39596 = (state_39622[(8)]);
var inst_39600 = (inst_39596 < n);
var state_39622__$1 = state_39622;
if(cljs.core.truth_(inst_39600)){
var statearr_39666_41436 = state_39622__$1;
(statearr_39666_41436[(1)] = (4));

} else {
var statearr_39675_41437 = state_39622__$1;
(statearr_39675_41437[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39623 === (11))){
var inst_39596 = (state_39622[(8)]);
var inst_39609 = (state_39622[(2)]);
var inst_39610 = (inst_39596 + (1));
var inst_39596__$1 = inst_39610;
var state_39622__$1 = (function (){var statearr_39682 = state_39622;
(statearr_39682[(10)] = inst_39609);

(statearr_39682[(8)] = inst_39596__$1);

return statearr_39682;
})();
var statearr_39683_41438 = state_39622__$1;
(statearr_39683_41438[(2)] = null);

(statearr_39683_41438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39623 === (9))){
var state_39622__$1 = state_39622;
var statearr_39684_41439 = state_39622__$1;
(statearr_39684_41439[(2)] = null);

(statearr_39684_41439[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39623 === (5))){
var state_39622__$1 = state_39622;
var statearr_39691_41440 = state_39622__$1;
(statearr_39691_41440[(2)] = null);

(statearr_39691_41440[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39623 === (10))){
var inst_39614 = (state_39622[(2)]);
var state_39622__$1 = state_39622;
var statearr_39692_41442 = state_39622__$1;
(statearr_39692_41442[(2)] = inst_39614);

(statearr_39692_41442[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39623 === (8))){
var inst_39604 = (state_39622[(7)]);
var state_39622__$1 = state_39622;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39622__$1,(11),out,inst_39604);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36258__auto__ = null;
var cljs$core$async$state_machine__36258__auto____0 = (function (){
var statearr_39695 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39695[(0)] = cljs$core$async$state_machine__36258__auto__);

(statearr_39695[(1)] = (1));

return statearr_39695;
});
var cljs$core$async$state_machine__36258__auto____1 = (function (state_39622){
while(true){
var ret_value__36259__auto__ = (function (){try{while(true){
var result__36260__auto__ = switch__36257__auto__(state_39622);
if(cljs.core.keyword_identical_QMARK_(result__36260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36260__auto__;
}
break;
}
}catch (e39696){var ex__36261__auto__ = e39696;
var statearr_39697_41448 = state_39622;
(statearr_39697_41448[(2)] = ex__36261__auto__);


if(cljs.core.seq((state_39622[(4)]))){
var statearr_39698_41449 = state_39622;
(statearr_39698_41449[(1)] = cljs.core.first((state_39622[(4)])));

} else {
throw ex__36261__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41451 = state_39622;
state_39622 = G__41451;
continue;
} else {
return ret_value__36259__auto__;
}
break;
}
});
cljs$core$async$state_machine__36258__auto__ = function(state_39622){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36258__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36258__auto____1.call(this,state_39622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36258__auto____0;
cljs$core$async$state_machine__36258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36258__auto____1;
return cljs$core$async$state_machine__36258__auto__;
})()
})();
var state__37061__auto__ = (function (){var statearr_39703 = f__37059__auto__();
(statearr_39703[(6)] = c__37058__auto___41403);

return statearr_39703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37061__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39714 = (function (f,ch,meta39706,_,fn1,meta39715){
this.f = f;
this.ch = ch;
this.meta39706 = meta39706;
this._ = _;
this.fn1 = fn1;
this.meta39715 = meta39715;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39714.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39716,meta39715__$1){
var self__ = this;
var _39716__$1 = this;
return (new cljs.core.async.t_cljs$core$async39714(self__.f,self__.ch,self__.meta39706,self__._,self__.fn1,meta39715__$1));
}));

(cljs.core.async.t_cljs$core$async39714.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39716){
var self__ = this;
var _39716__$1 = this;
return self__.meta39715;
}));

(cljs.core.async.t_cljs$core$async39714.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39714.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async39714.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async39714.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__39704_SHARP_){
var G__39717 = (((p1__39704_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__39704_SHARP_) : self__.f.call(null,p1__39704_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__39717) : f1.call(null,G__39717));
});
}));

(cljs.core.async.t_cljs$core$async39714.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39706","meta39706",1739884387,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async39705","cljs.core.async/t_cljs$core$async39705",-1857938743,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta39715","meta39715",-247166475,null)], null);
}));

(cljs.core.async.t_cljs$core$async39714.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39714.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39714");

(cljs.core.async.t_cljs$core$async39714.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async39714");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39714.
 */
cljs.core.async.__GT_t_cljs$core$async39714 = (function cljs$core$async$__GT_t_cljs$core$async39714(f,ch,meta39706,_,fn1,meta39715){
return (new cljs.core.async.t_cljs$core$async39714(f,ch,meta39706,_,fn1,meta39715));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39705 = (function (f,ch,meta39706){
this.f = f;
this.ch = ch;
this.meta39706 = meta39706;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39705.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39707,meta39706__$1){
var self__ = this;
var _39707__$1 = this;
return (new cljs.core.async.t_cljs$core$async39705(self__.f,self__.ch,meta39706__$1));
}));

(cljs.core.async.t_cljs$core$async39705.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39707){
var self__ = this;
var _39707__$1 = this;
return self__.meta39706;
}));

(cljs.core.async.t_cljs$core$async39705.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39705.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async39705.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async39705.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39705.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async39714(self__.f,self__.ch,self__.meta39706,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5041__auto__ = ret;
if(cljs.core.truth_(and__5041__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5041__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__39718 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__39718) : self__.f.call(null,G__39718));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async39705.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39705.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async39705.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39706","meta39706",1739884387,null)], null);
}));

(cljs.core.async.t_cljs$core$async39705.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39705.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39705");

(cljs.core.async.t_cljs$core$async39705.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async39705");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39705.
 */
cljs.core.async.__GT_t_cljs$core$async39705 = (function cljs$core$async$__GT_t_cljs$core$async39705(f,ch,meta39706){
return (new cljs.core.async.t_cljs$core$async39705(f,ch,meta39706));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async39705(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39731 = (function (f,ch,meta39732){
this.f = f;
this.ch = ch;
this.meta39732 = meta39732;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39731.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39733,meta39732__$1){
var self__ = this;
var _39733__$1 = this;
return (new cljs.core.async.t_cljs$core$async39731(self__.f,self__.ch,meta39732__$1));
}));

(cljs.core.async.t_cljs$core$async39731.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39733){
var self__ = this;
var _39733__$1 = this;
return self__.meta39732;
}));

(cljs.core.async.t_cljs$core$async39731.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39731.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async39731.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39731.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async39731.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39731.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async39731.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39732","meta39732",-2016847919,null)], null);
}));

(cljs.core.async.t_cljs$core$async39731.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39731.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39731");

(cljs.core.async.t_cljs$core$async39731.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async39731");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39731.
 */
cljs.core.async.__GT_t_cljs$core$async39731 = (function cljs$core$async$__GT_t_cljs$core$async39731(f,ch,meta39732){
return (new cljs.core.async.t_cljs$core$async39731(f,ch,meta39732));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async39731(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39748 = (function (p,ch,meta39749){
this.p = p;
this.ch = ch;
this.meta39749 = meta39749;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39750,meta39749__$1){
var self__ = this;
var _39750__$1 = this;
return (new cljs.core.async.t_cljs$core$async39748(self__.p,self__.ch,meta39749__$1));
}));

(cljs.core.async.t_cljs$core$async39748.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39750){
var self__ = this;
var _39750__$1 = this;
return self__.meta39749;
}));

(cljs.core.async.t_cljs$core$async39748.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39748.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async39748.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async39748.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39748.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async39748.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39748.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async39748.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39749","meta39749",1093683234,null)], null);
}));

(cljs.core.async.t_cljs$core$async39748.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39748.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39748");

(cljs.core.async.t_cljs$core$async39748.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async39748");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39748.
 */
cljs.core.async.__GT_t_cljs$core$async39748 = (function cljs$core$async$__GT_t_cljs$core$async39748(p,ch,meta39749){
return (new cljs.core.async.t_cljs$core$async39748(p,ch,meta39749));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async39748(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__39775 = arguments.length;
switch (G__39775) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37058__auto___41525 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37059__auto__ = (function (){var switch__36257__auto__ = (function (state_39802){
var state_val_39803 = (state_39802[(1)]);
if((state_val_39803 === (7))){
var inst_39798 = (state_39802[(2)]);
var state_39802__$1 = state_39802;
var statearr_39809_41527 = state_39802__$1;
(statearr_39809_41527[(2)] = inst_39798);

(statearr_39809_41527[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39803 === (1))){
var state_39802__$1 = state_39802;
var statearr_39810_41530 = state_39802__$1;
(statearr_39810_41530[(2)] = null);

(statearr_39810_41530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39803 === (4))){
var inst_39783 = (state_39802[(7)]);
var inst_39783__$1 = (state_39802[(2)]);
var inst_39785 = (inst_39783__$1 == null);
var state_39802__$1 = (function (){var statearr_39811 = state_39802;
(statearr_39811[(7)] = inst_39783__$1);

return statearr_39811;
})();
if(cljs.core.truth_(inst_39785)){
var statearr_39813_41539 = state_39802__$1;
(statearr_39813_41539[(1)] = (5));

} else {
var statearr_39814_41540 = state_39802__$1;
(statearr_39814_41540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39803 === (6))){
var inst_39783 = (state_39802[(7)]);
var inst_39789 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_39783) : p.call(null,inst_39783));
var state_39802__$1 = state_39802;
if(cljs.core.truth_(inst_39789)){
var statearr_39816_41547 = state_39802__$1;
(statearr_39816_41547[(1)] = (8));

} else {
var statearr_39817_41548 = state_39802__$1;
(statearr_39817_41548[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39803 === (3))){
var inst_39800 = (state_39802[(2)]);
var state_39802__$1 = state_39802;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39802__$1,inst_39800);
} else {
if((state_val_39803 === (2))){
var state_39802__$1 = state_39802;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39802__$1,(4),ch);
} else {
if((state_val_39803 === (11))){
var inst_39792 = (state_39802[(2)]);
var state_39802__$1 = state_39802;
var statearr_39818_41549 = state_39802__$1;
(statearr_39818_41549[(2)] = inst_39792);

(statearr_39818_41549[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39803 === (9))){
var state_39802__$1 = state_39802;
var statearr_39819_41550 = state_39802__$1;
(statearr_39819_41550[(2)] = null);

(statearr_39819_41550[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39803 === (5))){
var inst_39787 = cljs.core.async.close_BANG_(out);
var state_39802__$1 = state_39802;
var statearr_39822_41551 = state_39802__$1;
(statearr_39822_41551[(2)] = inst_39787);

(statearr_39822_41551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39803 === (10))){
var inst_39795 = (state_39802[(2)]);
var state_39802__$1 = (function (){var statearr_39826 = state_39802;
(statearr_39826[(8)] = inst_39795);

return statearr_39826;
})();
var statearr_39827_41555 = state_39802__$1;
(statearr_39827_41555[(2)] = null);

(statearr_39827_41555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39803 === (8))){
var inst_39783 = (state_39802[(7)]);
var state_39802__$1 = state_39802;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39802__$1,(11),out,inst_39783);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36258__auto__ = null;
var cljs$core$async$state_machine__36258__auto____0 = (function (){
var statearr_39829 = [null,null,null,null,null,null,null,null,null];
(statearr_39829[(0)] = cljs$core$async$state_machine__36258__auto__);

(statearr_39829[(1)] = (1));

return statearr_39829;
});
var cljs$core$async$state_machine__36258__auto____1 = (function (state_39802){
while(true){
var ret_value__36259__auto__ = (function (){try{while(true){
var result__36260__auto__ = switch__36257__auto__(state_39802);
if(cljs.core.keyword_identical_QMARK_(result__36260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36260__auto__;
}
break;
}
}catch (e39831){var ex__36261__auto__ = e39831;
var statearr_39832_41558 = state_39802;
(statearr_39832_41558[(2)] = ex__36261__auto__);


if(cljs.core.seq((state_39802[(4)]))){
var statearr_39834_41560 = state_39802;
(statearr_39834_41560[(1)] = cljs.core.first((state_39802[(4)])));

} else {
throw ex__36261__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41561 = state_39802;
state_39802 = G__41561;
continue;
} else {
return ret_value__36259__auto__;
}
break;
}
});
cljs$core$async$state_machine__36258__auto__ = function(state_39802){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36258__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36258__auto____1.call(this,state_39802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36258__auto____0;
cljs$core$async$state_machine__36258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36258__auto____1;
return cljs$core$async$state_machine__36258__auto__;
})()
})();
var state__37061__auto__ = (function (){var statearr_39838 = f__37059__auto__();
(statearr_39838[(6)] = c__37058__auto___41525);

return statearr_39838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37061__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__39876 = arguments.length;
switch (G__39876) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__37058__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37059__auto__ = (function (){var switch__36257__auto__ = (function (state_39962){
var state_val_39963 = (state_39962[(1)]);
if((state_val_39963 === (7))){
var inst_39958 = (state_39962[(2)]);
var state_39962__$1 = state_39962;
var statearr_39990_41568 = state_39962__$1;
(statearr_39990_41568[(2)] = inst_39958);

(statearr_39990_41568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39963 === (20))){
var inst_39928 = (state_39962[(7)]);
var inst_39939 = (state_39962[(2)]);
var inst_39940 = cljs.core.next(inst_39928);
var inst_39914 = inst_39940;
var inst_39915 = null;
var inst_39916 = (0);
var inst_39917 = (0);
var state_39962__$1 = (function (){var statearr_39995 = state_39962;
(statearr_39995[(8)] = inst_39939);

(statearr_39995[(9)] = inst_39914);

(statearr_39995[(10)] = inst_39915);

(statearr_39995[(11)] = inst_39916);

(statearr_39995[(12)] = inst_39917);

return statearr_39995;
})();
var statearr_39996_41569 = state_39962__$1;
(statearr_39996_41569[(2)] = null);

(statearr_39996_41569[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39963 === (1))){
var state_39962__$1 = state_39962;
var statearr_39997_41570 = state_39962__$1;
(statearr_39997_41570[(2)] = null);

(statearr_39997_41570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39963 === (4))){
var inst_39903 = (state_39962[(13)]);
var inst_39903__$1 = (state_39962[(2)]);
var inst_39904 = (inst_39903__$1 == null);
var state_39962__$1 = (function (){var statearr_39998 = state_39962;
(statearr_39998[(13)] = inst_39903__$1);

return statearr_39998;
})();
if(cljs.core.truth_(inst_39904)){
var statearr_40003_41571 = state_39962__$1;
(statearr_40003_41571[(1)] = (5));

} else {
var statearr_40004_41572 = state_39962__$1;
(statearr_40004_41572[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39963 === (15))){
var state_39962__$1 = state_39962;
var statearr_40014_41573 = state_39962__$1;
(statearr_40014_41573[(2)] = null);

(statearr_40014_41573[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39963 === (21))){
var state_39962__$1 = state_39962;
var statearr_40015_41575 = state_39962__$1;
(statearr_40015_41575[(2)] = null);

(statearr_40015_41575[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39963 === (13))){
var inst_39917 = (state_39962[(12)]);
var inst_39914 = (state_39962[(9)]);
var inst_39915 = (state_39962[(10)]);
var inst_39916 = (state_39962[(11)]);
var inst_39924 = (state_39962[(2)]);
var inst_39925 = (inst_39917 + (1));
var tmp40008 = inst_39915;
var tmp40009 = inst_39914;
var tmp40010 = inst_39916;
var inst_39914__$1 = tmp40009;
var inst_39915__$1 = tmp40008;
var inst_39916__$1 = tmp40010;
var inst_39917__$1 = inst_39925;
var state_39962__$1 = (function (){var statearr_40017 = state_39962;
(statearr_40017[(14)] = inst_39924);

(statearr_40017[(9)] = inst_39914__$1);

(statearr_40017[(10)] = inst_39915__$1);

(statearr_40017[(11)] = inst_39916__$1);

(statearr_40017[(12)] = inst_39917__$1);

return statearr_40017;
})();
var statearr_40021_41581 = state_39962__$1;
(statearr_40021_41581[(2)] = null);

(statearr_40021_41581[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39963 === (22))){
var state_39962__$1 = state_39962;
var statearr_40025_41583 = state_39962__$1;
(statearr_40025_41583[(2)] = null);

(statearr_40025_41583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39963 === (6))){
var inst_39903 = (state_39962[(13)]);
var inst_39912 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_39903) : f.call(null,inst_39903));
var inst_39913 = cljs.core.seq(inst_39912);
var inst_39914 = inst_39913;
var inst_39915 = null;
var inst_39916 = (0);
var inst_39917 = (0);
var state_39962__$1 = (function (){var statearr_40044 = state_39962;
(statearr_40044[(9)] = inst_39914);

(statearr_40044[(10)] = inst_39915);

(statearr_40044[(11)] = inst_39916);

(statearr_40044[(12)] = inst_39917);

return statearr_40044;
})();
var statearr_40045_41589 = state_39962__$1;
(statearr_40045_41589[(2)] = null);

(statearr_40045_41589[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39963 === (17))){
var inst_39928 = (state_39962[(7)]);
var inst_39932 = cljs.core.chunk_first(inst_39928);
var inst_39933 = cljs.core.chunk_rest(inst_39928);
var inst_39934 = cljs.core.count(inst_39932);
var inst_39914 = inst_39933;
var inst_39915 = inst_39932;
var inst_39916 = inst_39934;
var inst_39917 = (0);
var state_39962__$1 = (function (){var statearr_40051 = state_39962;
(statearr_40051[(9)] = inst_39914);

(statearr_40051[(10)] = inst_39915);

(statearr_40051[(11)] = inst_39916);

(statearr_40051[(12)] = inst_39917);

return statearr_40051;
})();
var statearr_40054_41590 = state_39962__$1;
(statearr_40054_41590[(2)] = null);

(statearr_40054_41590[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39963 === (3))){
var inst_39960 = (state_39962[(2)]);
var state_39962__$1 = state_39962;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39962__$1,inst_39960);
} else {
if((state_val_39963 === (12))){
var inst_39948 = (state_39962[(2)]);
var state_39962__$1 = state_39962;
var statearr_40059_41593 = state_39962__$1;
(statearr_40059_41593[(2)] = inst_39948);

(statearr_40059_41593[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39963 === (2))){
var state_39962__$1 = state_39962;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39962__$1,(4),in$);
} else {
if((state_val_39963 === (23))){
var inst_39956 = (state_39962[(2)]);
var state_39962__$1 = state_39962;
var statearr_40061_41594 = state_39962__$1;
(statearr_40061_41594[(2)] = inst_39956);

(statearr_40061_41594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39963 === (19))){
var inst_39943 = (state_39962[(2)]);
var state_39962__$1 = state_39962;
var statearr_40063_41596 = state_39962__$1;
(statearr_40063_41596[(2)] = inst_39943);

(statearr_40063_41596[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39963 === (11))){
var inst_39914 = (state_39962[(9)]);
var inst_39928 = (state_39962[(7)]);
var inst_39928__$1 = cljs.core.seq(inst_39914);
var state_39962__$1 = (function (){var statearr_40071 = state_39962;
(statearr_40071[(7)] = inst_39928__$1);

return statearr_40071;
})();
if(inst_39928__$1){
var statearr_40072_41597 = state_39962__$1;
(statearr_40072_41597[(1)] = (14));

} else {
var statearr_40073_41598 = state_39962__$1;
(statearr_40073_41598[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39963 === (9))){
var inst_39950 = (state_39962[(2)]);
var inst_39951 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_39962__$1 = (function (){var statearr_40074 = state_39962;
(statearr_40074[(15)] = inst_39950);

return statearr_40074;
})();
if(cljs.core.truth_(inst_39951)){
var statearr_40075_41599 = state_39962__$1;
(statearr_40075_41599[(1)] = (21));

} else {
var statearr_40076_41600 = state_39962__$1;
(statearr_40076_41600[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39963 === (5))){
var inst_39906 = cljs.core.async.close_BANG_(out);
var state_39962__$1 = state_39962;
var statearr_40077_41601 = state_39962__$1;
(statearr_40077_41601[(2)] = inst_39906);

(statearr_40077_41601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39963 === (14))){
var inst_39928 = (state_39962[(7)]);
var inst_39930 = cljs.core.chunked_seq_QMARK_(inst_39928);
var state_39962__$1 = state_39962;
if(inst_39930){
var statearr_40078_41602 = state_39962__$1;
(statearr_40078_41602[(1)] = (17));

} else {
var statearr_40079_41603 = state_39962__$1;
(statearr_40079_41603[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39963 === (16))){
var inst_39946 = (state_39962[(2)]);
var state_39962__$1 = state_39962;
var statearr_40080_41604 = state_39962__$1;
(statearr_40080_41604[(2)] = inst_39946);

(statearr_40080_41604[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39963 === (10))){
var inst_39915 = (state_39962[(10)]);
var inst_39917 = (state_39962[(12)]);
var inst_39922 = cljs.core._nth(inst_39915,inst_39917);
var state_39962__$1 = state_39962;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39962__$1,(13),out,inst_39922);
} else {
if((state_val_39963 === (18))){
var inst_39928 = (state_39962[(7)]);
var inst_39937 = cljs.core.first(inst_39928);
var state_39962__$1 = state_39962;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39962__$1,(20),out,inst_39937);
} else {
if((state_val_39963 === (8))){
var inst_39917 = (state_39962[(12)]);
var inst_39916 = (state_39962[(11)]);
var inst_39919 = (inst_39917 < inst_39916);
var inst_39920 = inst_39919;
var state_39962__$1 = state_39962;
if(cljs.core.truth_(inst_39920)){
var statearr_40081_41605 = state_39962__$1;
(statearr_40081_41605[(1)] = (10));

} else {
var statearr_40082_41606 = state_39962__$1;
(statearr_40082_41606[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__36258__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__36258__auto____0 = (function (){
var statearr_40083 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40083[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__36258__auto__);

(statearr_40083[(1)] = (1));

return statearr_40083;
});
var cljs$core$async$mapcat_STAR__$_state_machine__36258__auto____1 = (function (state_39962){
while(true){
var ret_value__36259__auto__ = (function (){try{while(true){
var result__36260__auto__ = switch__36257__auto__(state_39962);
if(cljs.core.keyword_identical_QMARK_(result__36260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36260__auto__;
}
break;
}
}catch (e40084){var ex__36261__auto__ = e40084;
var statearr_40085_41608 = state_39962;
(statearr_40085_41608[(2)] = ex__36261__auto__);


if(cljs.core.seq((state_39962[(4)]))){
var statearr_40089_41613 = state_39962;
(statearr_40089_41613[(1)] = cljs.core.first((state_39962[(4)])));

} else {
throw ex__36261__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41614 = state_39962;
state_39962 = G__41614;
continue;
} else {
return ret_value__36259__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__36258__auto__ = function(state_39962){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__36258__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__36258__auto____1.call(this,state_39962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__36258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__36258__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__36258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__36258__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__36258__auto__;
})()
})();
var state__37061__auto__ = (function (){var statearr_40094 = f__37059__auto__();
(statearr_40094[(6)] = c__37058__auto__);

return statearr_40094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37061__auto__);
}));

return c__37058__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__40096 = arguments.length;
switch (G__40096) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__40116 = arguments.length;
switch (G__40116) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__40130 = arguments.length;
switch (G__40130) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37058__auto___41629 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37059__auto__ = (function (){var switch__36257__auto__ = (function (state_40161){
var state_val_40162 = (state_40161[(1)]);
if((state_val_40162 === (7))){
var inst_40156 = (state_40161[(2)]);
var state_40161__$1 = state_40161;
var statearr_40169_41630 = state_40161__$1;
(statearr_40169_41630[(2)] = inst_40156);

(statearr_40169_41630[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40162 === (1))){
var inst_40137 = null;
var state_40161__$1 = (function (){var statearr_40173 = state_40161;
(statearr_40173[(7)] = inst_40137);

return statearr_40173;
})();
var statearr_40174_41631 = state_40161__$1;
(statearr_40174_41631[(2)] = null);

(statearr_40174_41631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40162 === (4))){
var inst_40141 = (state_40161[(8)]);
var inst_40141__$1 = (state_40161[(2)]);
var inst_40142 = (inst_40141__$1 == null);
var inst_40143 = cljs.core.not(inst_40142);
var state_40161__$1 = (function (){var statearr_40178 = state_40161;
(statearr_40178[(8)] = inst_40141__$1);

return statearr_40178;
})();
if(inst_40143){
var statearr_40179_41632 = state_40161__$1;
(statearr_40179_41632[(1)] = (5));

} else {
var statearr_40180_41633 = state_40161__$1;
(statearr_40180_41633[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40162 === (6))){
var state_40161__$1 = state_40161;
var statearr_40181_41634 = state_40161__$1;
(statearr_40181_41634[(2)] = null);

(statearr_40181_41634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40162 === (3))){
var inst_40158 = (state_40161[(2)]);
var inst_40159 = cljs.core.async.close_BANG_(out);
var state_40161__$1 = (function (){var statearr_40182 = state_40161;
(statearr_40182[(9)] = inst_40158);

return statearr_40182;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40161__$1,inst_40159);
} else {
if((state_val_40162 === (2))){
var state_40161__$1 = state_40161;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40161__$1,(4),ch);
} else {
if((state_val_40162 === (11))){
var inst_40141 = (state_40161[(8)]);
var inst_40150 = (state_40161[(2)]);
var inst_40137 = inst_40141;
var state_40161__$1 = (function (){var statearr_40197 = state_40161;
(statearr_40197[(10)] = inst_40150);

(statearr_40197[(7)] = inst_40137);

return statearr_40197;
})();
var statearr_40199_41635 = state_40161__$1;
(statearr_40199_41635[(2)] = null);

(statearr_40199_41635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40162 === (9))){
var inst_40141 = (state_40161[(8)]);
var state_40161__$1 = state_40161;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40161__$1,(11),out,inst_40141);
} else {
if((state_val_40162 === (5))){
var inst_40141 = (state_40161[(8)]);
var inst_40137 = (state_40161[(7)]);
var inst_40145 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_40141,inst_40137);
var state_40161__$1 = state_40161;
if(inst_40145){
var statearr_40210_41636 = state_40161__$1;
(statearr_40210_41636[(1)] = (8));

} else {
var statearr_40211_41637 = state_40161__$1;
(statearr_40211_41637[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40162 === (10))){
var inst_40153 = (state_40161[(2)]);
var state_40161__$1 = state_40161;
var statearr_40212_41638 = state_40161__$1;
(statearr_40212_41638[(2)] = inst_40153);

(statearr_40212_41638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40162 === (8))){
var inst_40137 = (state_40161[(7)]);
var tmp40200 = inst_40137;
var inst_40137__$1 = tmp40200;
var state_40161__$1 = (function (){var statearr_40213 = state_40161;
(statearr_40213[(7)] = inst_40137__$1);

return statearr_40213;
})();
var statearr_40214_41639 = state_40161__$1;
(statearr_40214_41639[(2)] = null);

(statearr_40214_41639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36258__auto__ = null;
var cljs$core$async$state_machine__36258__auto____0 = (function (){
var statearr_40215 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40215[(0)] = cljs$core$async$state_machine__36258__auto__);

(statearr_40215[(1)] = (1));

return statearr_40215;
});
var cljs$core$async$state_machine__36258__auto____1 = (function (state_40161){
while(true){
var ret_value__36259__auto__ = (function (){try{while(true){
var result__36260__auto__ = switch__36257__auto__(state_40161);
if(cljs.core.keyword_identical_QMARK_(result__36260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36260__auto__;
}
break;
}
}catch (e40217){var ex__36261__auto__ = e40217;
var statearr_40218_41640 = state_40161;
(statearr_40218_41640[(2)] = ex__36261__auto__);


if(cljs.core.seq((state_40161[(4)]))){
var statearr_40219_41641 = state_40161;
(statearr_40219_41641[(1)] = cljs.core.first((state_40161[(4)])));

} else {
throw ex__36261__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41642 = state_40161;
state_40161 = G__41642;
continue;
} else {
return ret_value__36259__auto__;
}
break;
}
});
cljs$core$async$state_machine__36258__auto__ = function(state_40161){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36258__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36258__auto____1.call(this,state_40161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36258__auto____0;
cljs$core$async$state_machine__36258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36258__auto____1;
return cljs$core$async$state_machine__36258__auto__;
})()
})();
var state__37061__auto__ = (function (){var statearr_40220 = f__37059__auto__();
(statearr_40220[(6)] = c__37058__auto___41629);

return statearr_40220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37061__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__40225 = arguments.length;
switch (G__40225) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37058__auto___41652 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37059__auto__ = (function (){var switch__36257__auto__ = (function (state_40268){
var state_val_40269 = (state_40268[(1)]);
if((state_val_40269 === (7))){
var inst_40262 = (state_40268[(2)]);
var state_40268__$1 = state_40268;
var statearr_40271_41655 = state_40268__$1;
(statearr_40271_41655[(2)] = inst_40262);

(statearr_40271_41655[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40269 === (1))){
var inst_40226 = (new Array(n));
var inst_40227 = inst_40226;
var inst_40228 = (0);
var state_40268__$1 = (function (){var statearr_40273 = state_40268;
(statearr_40273[(7)] = inst_40227);

(statearr_40273[(8)] = inst_40228);

return statearr_40273;
})();
var statearr_40274_41663 = state_40268__$1;
(statearr_40274_41663[(2)] = null);

(statearr_40274_41663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40269 === (4))){
var inst_40231 = (state_40268[(9)]);
var inst_40231__$1 = (state_40268[(2)]);
var inst_40232 = (inst_40231__$1 == null);
var inst_40233 = cljs.core.not(inst_40232);
var state_40268__$1 = (function (){var statearr_40288 = state_40268;
(statearr_40288[(9)] = inst_40231__$1);

return statearr_40288;
})();
if(inst_40233){
var statearr_40289_41667 = state_40268__$1;
(statearr_40289_41667[(1)] = (5));

} else {
var statearr_40290_41668 = state_40268__$1;
(statearr_40290_41668[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40269 === (15))){
var inst_40256 = (state_40268[(2)]);
var state_40268__$1 = state_40268;
var statearr_40291_41672 = state_40268__$1;
(statearr_40291_41672[(2)] = inst_40256);

(statearr_40291_41672[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40269 === (13))){
var state_40268__$1 = state_40268;
var statearr_40293_41673 = state_40268__$1;
(statearr_40293_41673[(2)] = null);

(statearr_40293_41673[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40269 === (6))){
var inst_40228 = (state_40268[(8)]);
var inst_40252 = (inst_40228 > (0));
var state_40268__$1 = state_40268;
if(cljs.core.truth_(inst_40252)){
var statearr_40294_41674 = state_40268__$1;
(statearr_40294_41674[(1)] = (12));

} else {
var statearr_40295_41675 = state_40268__$1;
(statearr_40295_41675[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40269 === (3))){
var inst_40264 = (state_40268[(2)]);
var state_40268__$1 = state_40268;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40268__$1,inst_40264);
} else {
if((state_val_40269 === (12))){
var inst_40227 = (state_40268[(7)]);
var inst_40254 = cljs.core.vec(inst_40227);
var state_40268__$1 = state_40268;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40268__$1,(15),out,inst_40254);
} else {
if((state_val_40269 === (2))){
var state_40268__$1 = state_40268;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40268__$1,(4),ch);
} else {
if((state_val_40269 === (11))){
var inst_40243 = (state_40268[(2)]);
var inst_40244 = (new Array(n));
var inst_40227 = inst_40244;
var inst_40228 = (0);
var state_40268__$1 = (function (){var statearr_40309 = state_40268;
(statearr_40309[(10)] = inst_40243);

(statearr_40309[(7)] = inst_40227);

(statearr_40309[(8)] = inst_40228);

return statearr_40309;
})();
var statearr_40310_41679 = state_40268__$1;
(statearr_40310_41679[(2)] = null);

(statearr_40310_41679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40269 === (9))){
var inst_40227 = (state_40268[(7)]);
var inst_40241 = cljs.core.vec(inst_40227);
var state_40268__$1 = state_40268;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40268__$1,(11),out,inst_40241);
} else {
if((state_val_40269 === (5))){
var inst_40227 = (state_40268[(7)]);
var inst_40228 = (state_40268[(8)]);
var inst_40231 = (state_40268[(9)]);
var inst_40236 = (state_40268[(11)]);
var inst_40235 = (inst_40227[inst_40228] = inst_40231);
var inst_40236__$1 = (inst_40228 + (1));
var inst_40237 = (inst_40236__$1 < n);
var state_40268__$1 = (function (){var statearr_40321 = state_40268;
(statearr_40321[(12)] = inst_40235);

(statearr_40321[(11)] = inst_40236__$1);

return statearr_40321;
})();
if(cljs.core.truth_(inst_40237)){
var statearr_40322_41680 = state_40268__$1;
(statearr_40322_41680[(1)] = (8));

} else {
var statearr_40323_41684 = state_40268__$1;
(statearr_40323_41684[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40269 === (14))){
var inst_40259 = (state_40268[(2)]);
var inst_40260 = cljs.core.async.close_BANG_(out);
var state_40268__$1 = (function (){var statearr_40325 = state_40268;
(statearr_40325[(13)] = inst_40259);

return statearr_40325;
})();
var statearr_40327_41685 = state_40268__$1;
(statearr_40327_41685[(2)] = inst_40260);

(statearr_40327_41685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40269 === (10))){
var inst_40247 = (state_40268[(2)]);
var state_40268__$1 = state_40268;
var statearr_40328_41686 = state_40268__$1;
(statearr_40328_41686[(2)] = inst_40247);

(statearr_40328_41686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40269 === (8))){
var inst_40227 = (state_40268[(7)]);
var inst_40236 = (state_40268[(11)]);
var tmp40324 = inst_40227;
var inst_40227__$1 = tmp40324;
var inst_40228 = inst_40236;
var state_40268__$1 = (function (){var statearr_40329 = state_40268;
(statearr_40329[(7)] = inst_40227__$1);

(statearr_40329[(8)] = inst_40228);

return statearr_40329;
})();
var statearr_40330_41687 = state_40268__$1;
(statearr_40330_41687[(2)] = null);

(statearr_40330_41687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36258__auto__ = null;
var cljs$core$async$state_machine__36258__auto____0 = (function (){
var statearr_40331 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40331[(0)] = cljs$core$async$state_machine__36258__auto__);

(statearr_40331[(1)] = (1));

return statearr_40331;
});
var cljs$core$async$state_machine__36258__auto____1 = (function (state_40268){
while(true){
var ret_value__36259__auto__ = (function (){try{while(true){
var result__36260__auto__ = switch__36257__auto__(state_40268);
if(cljs.core.keyword_identical_QMARK_(result__36260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36260__auto__;
}
break;
}
}catch (e40337){var ex__36261__auto__ = e40337;
var statearr_40338_41692 = state_40268;
(statearr_40338_41692[(2)] = ex__36261__auto__);


if(cljs.core.seq((state_40268[(4)]))){
var statearr_40342_41693 = state_40268;
(statearr_40342_41693[(1)] = cljs.core.first((state_40268[(4)])));

} else {
throw ex__36261__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41697 = state_40268;
state_40268 = G__41697;
continue;
} else {
return ret_value__36259__auto__;
}
break;
}
});
cljs$core$async$state_machine__36258__auto__ = function(state_40268){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36258__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36258__auto____1.call(this,state_40268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36258__auto____0;
cljs$core$async$state_machine__36258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36258__auto____1;
return cljs$core$async$state_machine__36258__auto__;
})()
})();
var state__37061__auto__ = (function (){var statearr_40345 = f__37059__auto__();
(statearr_40345[(6)] = c__37058__auto___41652);

return statearr_40345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37061__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__40348 = arguments.length;
switch (G__40348) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37058__auto___41699 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37059__auto__ = (function (){var switch__36257__auto__ = (function (state_40400){
var state_val_40401 = (state_40400[(1)]);
if((state_val_40401 === (7))){
var inst_40396 = (state_40400[(2)]);
var state_40400__$1 = state_40400;
var statearr_40406_41701 = state_40400__$1;
(statearr_40406_41701[(2)] = inst_40396);

(statearr_40406_41701[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40401 === (1))){
var inst_40352 = [];
var inst_40356 = inst_40352;
var inst_40357 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_40400__$1 = (function (){var statearr_40407 = state_40400;
(statearr_40407[(7)] = inst_40356);

(statearr_40407[(8)] = inst_40357);

return statearr_40407;
})();
var statearr_40408_41710 = state_40400__$1;
(statearr_40408_41710[(2)] = null);

(statearr_40408_41710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40401 === (4))){
var inst_40360 = (state_40400[(9)]);
var inst_40360__$1 = (state_40400[(2)]);
var inst_40361 = (inst_40360__$1 == null);
var inst_40362 = cljs.core.not(inst_40361);
var state_40400__$1 = (function (){var statearr_40409 = state_40400;
(statearr_40409[(9)] = inst_40360__$1);

return statearr_40409;
})();
if(inst_40362){
var statearr_40410_41711 = state_40400__$1;
(statearr_40410_41711[(1)] = (5));

} else {
var statearr_40411_41712 = state_40400__$1;
(statearr_40411_41712[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40401 === (15))){
var inst_40356 = (state_40400[(7)]);
var inst_40388 = cljs.core.vec(inst_40356);
var state_40400__$1 = state_40400;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40400__$1,(18),out,inst_40388);
} else {
if((state_val_40401 === (13))){
var inst_40382 = (state_40400[(2)]);
var state_40400__$1 = state_40400;
var statearr_40420_41713 = state_40400__$1;
(statearr_40420_41713[(2)] = inst_40382);

(statearr_40420_41713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40401 === (6))){
var inst_40356 = (state_40400[(7)]);
var inst_40385 = inst_40356.length;
var inst_40386 = (inst_40385 > (0));
var state_40400__$1 = state_40400;
if(cljs.core.truth_(inst_40386)){
var statearr_40422_41714 = state_40400__$1;
(statearr_40422_41714[(1)] = (15));

} else {
var statearr_40423_41715 = state_40400__$1;
(statearr_40423_41715[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40401 === (17))){
var inst_40393 = (state_40400[(2)]);
var inst_40394 = cljs.core.async.close_BANG_(out);
var state_40400__$1 = (function (){var statearr_40424 = state_40400;
(statearr_40424[(10)] = inst_40393);

return statearr_40424;
})();
var statearr_40425_41716 = state_40400__$1;
(statearr_40425_41716[(2)] = inst_40394);

(statearr_40425_41716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40401 === (3))){
var inst_40398 = (state_40400[(2)]);
var state_40400__$1 = state_40400;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40400__$1,inst_40398);
} else {
if((state_val_40401 === (12))){
var inst_40356 = (state_40400[(7)]);
var inst_40375 = cljs.core.vec(inst_40356);
var state_40400__$1 = state_40400;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40400__$1,(14),out,inst_40375);
} else {
if((state_val_40401 === (2))){
var state_40400__$1 = state_40400;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40400__$1,(4),ch);
} else {
if((state_val_40401 === (11))){
var inst_40356 = (state_40400[(7)]);
var inst_40360 = (state_40400[(9)]);
var inst_40364 = (state_40400[(11)]);
var inst_40372 = inst_40356.push(inst_40360);
var tmp40428 = inst_40356;
var inst_40356__$1 = tmp40428;
var inst_40357 = inst_40364;
var state_40400__$1 = (function (){var statearr_40433 = state_40400;
(statearr_40433[(12)] = inst_40372);

(statearr_40433[(7)] = inst_40356__$1);

(statearr_40433[(8)] = inst_40357);

return statearr_40433;
})();
var statearr_40434_41718 = state_40400__$1;
(statearr_40434_41718[(2)] = null);

(statearr_40434_41718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40401 === (9))){
var inst_40357 = (state_40400[(8)]);
var inst_40368 = cljs.core.keyword_identical_QMARK_(inst_40357,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_40400__$1 = state_40400;
var statearr_40436_41719 = state_40400__$1;
(statearr_40436_41719[(2)] = inst_40368);

(statearr_40436_41719[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40401 === (5))){
var inst_40360 = (state_40400[(9)]);
var inst_40364 = (state_40400[(11)]);
var inst_40357 = (state_40400[(8)]);
var inst_40365 = (state_40400[(13)]);
var inst_40364__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_40360) : f.call(null,inst_40360));
var inst_40365__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_40364__$1,inst_40357);
var state_40400__$1 = (function (){var statearr_40439 = state_40400;
(statearr_40439[(11)] = inst_40364__$1);

(statearr_40439[(13)] = inst_40365__$1);

return statearr_40439;
})();
if(inst_40365__$1){
var statearr_40440_41721 = state_40400__$1;
(statearr_40440_41721[(1)] = (8));

} else {
var statearr_40441_41723 = state_40400__$1;
(statearr_40441_41723[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40401 === (14))){
var inst_40360 = (state_40400[(9)]);
var inst_40364 = (state_40400[(11)]);
var inst_40377 = (state_40400[(2)]);
var inst_40378 = [];
var inst_40379 = inst_40378.push(inst_40360);
var inst_40356 = inst_40378;
var inst_40357 = inst_40364;
var state_40400__$1 = (function (){var statearr_40442 = state_40400;
(statearr_40442[(14)] = inst_40377);

(statearr_40442[(15)] = inst_40379);

(statearr_40442[(7)] = inst_40356);

(statearr_40442[(8)] = inst_40357);

return statearr_40442;
})();
var statearr_40443_41726 = state_40400__$1;
(statearr_40443_41726[(2)] = null);

(statearr_40443_41726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40401 === (16))){
var state_40400__$1 = state_40400;
var statearr_40445_41727 = state_40400__$1;
(statearr_40445_41727[(2)] = null);

(statearr_40445_41727[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40401 === (10))){
var inst_40370 = (state_40400[(2)]);
var state_40400__$1 = state_40400;
if(cljs.core.truth_(inst_40370)){
var statearr_40448_41728 = state_40400__$1;
(statearr_40448_41728[(1)] = (11));

} else {
var statearr_40449_41729 = state_40400__$1;
(statearr_40449_41729[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40401 === (18))){
var inst_40390 = (state_40400[(2)]);
var state_40400__$1 = state_40400;
var statearr_40454_41730 = state_40400__$1;
(statearr_40454_41730[(2)] = inst_40390);

(statearr_40454_41730[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40401 === (8))){
var inst_40365 = (state_40400[(13)]);
var state_40400__$1 = state_40400;
var statearr_40457_41733 = state_40400__$1;
(statearr_40457_41733[(2)] = inst_40365);

(statearr_40457_41733[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__36258__auto__ = null;
var cljs$core$async$state_machine__36258__auto____0 = (function (){
var statearr_40458 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40458[(0)] = cljs$core$async$state_machine__36258__auto__);

(statearr_40458[(1)] = (1));

return statearr_40458;
});
var cljs$core$async$state_machine__36258__auto____1 = (function (state_40400){
while(true){
var ret_value__36259__auto__ = (function (){try{while(true){
var result__36260__auto__ = switch__36257__auto__(state_40400);
if(cljs.core.keyword_identical_QMARK_(result__36260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36260__auto__;
}
break;
}
}catch (e40459){var ex__36261__auto__ = e40459;
var statearr_40463_41734 = state_40400;
(statearr_40463_41734[(2)] = ex__36261__auto__);


if(cljs.core.seq((state_40400[(4)]))){
var statearr_40464_41735 = state_40400;
(statearr_40464_41735[(1)] = cljs.core.first((state_40400[(4)])));

} else {
throw ex__36261__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36259__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41736 = state_40400;
state_40400 = G__41736;
continue;
} else {
return ret_value__36259__auto__;
}
break;
}
});
cljs$core$async$state_machine__36258__auto__ = function(state_40400){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36258__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36258__auto____1.call(this,state_40400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36258__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36258__auto____0;
cljs$core$async$state_machine__36258__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36258__auto____1;
return cljs$core$async$state_machine__36258__auto__;
})()
})();
var state__37061__auto__ = (function (){var statearr_40497 = f__37059__auto__();
(statearr_40497[(6)] = c__37058__auto___41699);

return statearr_40497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37061__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
