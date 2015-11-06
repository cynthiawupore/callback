function writeCode(callback){
	console.log("i am waiting....")
	callback();
	console.log("i am ready")
}
function prepare(){
	console.log("i am preparing...")
}

writeCode(prepare)