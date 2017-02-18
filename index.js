const recipes ={}
function updateObjectWithKeyAndValue(object, key, value) {
	// body...
	object[key]=value
	return object
}

function deleteFromObjectByKey(object, key){

   let obj = Object.assign({}, object)

  delete obj[key]

  return obj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
	object[key]=value
	return object
}
function destructivelyDeleteFromObjectByKey(object, key){

	delete object[key]
	return object
}