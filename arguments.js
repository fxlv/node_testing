
var args = process.argv;
console.log(args.length.toString(),"arguments passed to node");
console.log(args);

if(args == "test"){
	console.log("Yeah this is a magnificent test indeed");
}

var args = args.slice(2);
console.log("Sliced args");
console.log(args);