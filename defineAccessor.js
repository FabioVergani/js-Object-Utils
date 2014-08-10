console.clear();



//
function isUndefined(e){return typeof(e)==='undefined'};



/*ℹ PropertyAccessor:
	#get
			A function which serves as a getter for the property.
			The output will be used as the value of property.
			(undefined by defaults)
	#set
			A function which serves as a setter for the property.
			The function will receive -as only argument- the new value being assigned to the property.
			(undefined by defaults)
*/
//
function definePropertyAccessor(o,p,g,s){
 var k=o[p],t=String(p),n=void(o),o=Object.defineProperty(o,p,{get:g?function(){return g(p,o,t)}:n,set:s?function(v){p=s(v,p,o,t);return p}:n});
 p=(t in o)?k:n;
 return o;
};



//
function logAccess(a,v,p,o,t,w,x){
 console.log('%s Property:"%s", in:%O',a,t,o);
 console.debug('value old:%O, passed:%O, %s:%O;',p,v,w,x);
};
function logSet(v,p,o,t,x){logAccess('set',v,p,o,t,'assigned',x)}; 
function logGet(p,o,t,x){logAccess('get',null,p,o,t,'returned',x)}; 

//
function Metodo(){};
//Metodo.z=333;
Metodo.history=[];
function Setter(v,p,o,t){
 var x=v
 /*<handle‣BeforeSet!>*/
	o.history.push(p);
 /*</handle>*/
 logSet(v,p,o,t,x);
 return x
};
function Getter(p,o,t){
 var x;
 /*<handle‣AfterGet> */
	x=p;
 /*</handle>*/
 logGet(p,o,t,x);
 return x
};
definePropertyAccessor(Metodo,'z',Getter,Setter);
//

//TestRun:
var k,o=Metodo;
console.log("----")
console.dir(o);
console.log('#g1');
k=o.z;//⇢get!1
console.log('#s1');
o.z=11;//⇢set!
console.log('#g2');
k=o.z;//⇢get!2
console.log('#s2');
o.z=13;//⇢set!
console.log('#g3');
k=o.z;//⇢get!3
console.log(o.history);
console.dir(o);


//console.dir(arguments);
//function textSpaced(){return '--\u0020--'};
//
//<handle‣! > 
//</handle>

/*
function log(){console.log.apply(null,arguments)};
function logObj(){console.dir.apply(null,arguments)};
function logDebug(){console.debug.apply(null,arguments)};
*/
