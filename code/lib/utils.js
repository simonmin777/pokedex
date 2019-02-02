module.exports = {
  function: getTypes
}

function getTypes (parsedResponse) {

  //TODO: add function logic here
  var rslt = new Array()
  for (var i=0; i<parsedResponse.types.length; i++) {
    rslt.push(parsedResponse.types[i].type.name.replace(/\b\w/g, l => l.toUpperCase()))
  }
  return rslt
}
