var array = [1,2,3,4,5];

// numbers are floats
var n1 = 1;
var n2 = 27;
var n3 = n1 / n2;

//booleans
var t = true;
var f = false;


//objects
var o = {
	key1: "value",
	key2: [1,2,3],
	key3: {
		subkey1: "subvalue1"
	}
}

console.log("True and False");
console.log(t&&f);
console.log(t||f);
console.log("Numbers");
console.log(n1,n2,n3);
console.log("Arrays")
console.log(array);
array.push(200);
console.log(array);
array.unshift(400);
console.log(array);
array.sort();
console.log(array);
console.log("Objects");
console.log(o);