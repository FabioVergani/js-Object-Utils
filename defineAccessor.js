

//function textSpaced(){return '--\u0020--'};






var _defineProperty=Object.defineProperty;

 
function isUndefined(e){return typeof(e)==='undefined'};
//
function valOr(a,b){return isUndefined(a)?b:a};
//
function definePropertyAccessor(o,p,g,s){
 var t=String(p),n=null;
 return _defineProperty(o,p,{get:g?function(){return g(t,o,p)}:n,set:s?function(v){p=s(t,o,p,v)}:n})};

//
//
/*v⇢nextvalue, p⇢actualvalue, o[t]⇢assign*/



/*
function logAccess(s,w,f,o,t,p,v,x,y){
 console.log(s+'Property:%s in %O',t,o);
 console.info('HandleBefore:%s(Optionally),Handler:%O',w,f);
 console.debug('Values= Actual:%O, Passed:%O, ReturnedByHandler:%O, Used:%O',o[p],v,x,y);
};
*/

//function handleBeforeSet(x){return Number(x)};
//var f=handleBeforeSet,z=o[p],x=f(z),y=valOr(x,p);logAccess('set','assignement',f,o,t,p,v,x,y);
//function handleBeforeGet(x){return String(x)};
//var f=handleBeforeGet,x=f(x),y=valOr(x,p);logAccess('get','returning',f,o,t,p,null,x,y);
//TestInit:
function Metodo(){
 var e=this,z=null;
 e.history=[];
//function log(t,o,p,v){console.log(t+'Property:"%s" in object:%O; value new:%O, old:%O;',p,o,v)};
 function log(x,t,o,p,v){console.log('action:%s t:"%s", o:%O, p:%O, v:%O;',x,t,o,p,v)};
  
 function Setter(t,o,p,v){log('set',t,o,p,v);p=v;return v};
 function Getter(t,o,p){log('get',t,o,p,null);v=p;return v};
 definePropertyAccessor(e,'z',Getter,Setter).gethistory=function(){return e.history};
};

//TestRun:
var o= new Metodo();
console.dir(o);
console.log(o.z);//⇢get!
o.z=11;//⇢set!
o.z=13;//⇢set!
console.log(o.gethistory());
console.dir(o);
