module.exports = {
  function: findPokemonByName
}

var utils = require('./lib/utils.js')

function findPokemonByName (pokemonName) {

  var finalResult = new Array()
  
  for(var i=0; i<pokemonName.length;i++) {
    //https://pokeapi.co/api/v2/pokemon/{pokemonName}
    var url = "https://pokeapi.co/api/v2/pokemon/" + pokemonName[i].toLowerCase() + "/"

    var response = http.getUrl(url)
    var parsedResponse = JSON.parse(response)

    //populates an array containing the Pokemon's element types.
    var types = utils.function(parsedResponse)

    finalResult.push( {
      pokemonName: parsedResponse.name.replace(/\b\w/g, l => l.toUpperCase()),
      pokemonId: parsedResponse.id,
      pokemonTypeName: types,
      pokemonImageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + parsedResponse.id + ".png"
    })
  }
  return finalResult
}
