/*
#value:
					associated with the property.
					(undefined by defaults)

#configurable:
					true if and only if the type of this property descriptor may be changed
					and if the property may be deleted from the  object.
					(false by defaults)

#enumerable:
					true if and only if this property shows up during enumeration of the properties.
					(false by defaults)

#writable
					true if and only if the value associated with the property may be changed with an assignment operator:
					=, +=, -=, *=, /=, %=, <<=, >>=, >>>=, &=, ^=, |=
					(false by defaults)

*/

//v⇢value,w⇢writable,e⇢enumerable,c⇢configurable
function describeData(v,w,e,c){var x=false;return{value:v,writable:w||x,enumerable:e||x,configurable:c||x}};
console.log(describeData('pippo'));
