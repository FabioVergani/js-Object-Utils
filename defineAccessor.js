

//function textSpaced(){return '--\u0020--'};






console.clear();
//
function isUndefined(e){return typeof(e)==='undefined'};
//
function valOr(a,b){return isUndefined(a)?b:a};
//


function definePropertyAccessor(o,p,g,s){
 var t=String(p);
 var o=Object.defineProperty(o,p,{
	get:g?function(){return g(p,o,t)}:null,
	set:s?function(v){p=s(v,p,o,t);return p}:null}
 );
 console.log("----")
 p=void(o);
 return o;
};


//console.dir(arguments);
 
function logAccess(a,v,p,o,t,w,x){
 console.log('%s Property:"%s", in:%O',a,t,o);
 console.debug('value old:%O, passed:%O, %s:%O;',p,v,w,x);
}; 
 
function Metodo(){
 var e=this,z=null;
 e.history=[];
	
 function Setter(v,p,o,t,l){
	var x;
	//<handle‣BeforeSet! > 
		x=v;
		e.history.push(p);
		logAccess('set',v,p,o,t,'assigned',x);
	//</handle>
	return x
 };

 function Getter(p,o,t,l){
	var x;
	//<handle‣AfterGet> 
		x=p;
		logAccess('get',null,p,o,t,'returned',x);
	//</handle>
	return x
 };
 definePropertyAccessor(e,'z',Getter,Setter);
};




//TestRun:
var k,o= new Metodo();
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
