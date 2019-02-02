module.exports = {
  function: findPokemonById
}

var utils = require('./lib/utils.js')

function findPokemonById (pokemonId) {
  //https://pokeapi.co/api/v2/pokemon/{pokemonId}
  var url = "https://pokeapi.co/api/v2/pokemon/" + pokemonId + "/"

  var response = http.getUrl(url)
  var parsedResponse = JSON.parse(response)

  //populates an array containing the Pokemon's element types.
  var types = utils.function(parsedResponse)
  
  return {
    pokemonName: parsedResponse.name.replace(/\b\w/g, l => l.toUpperCase()),
    pokemonId: parsedResponse.id,
    pokemonTypeName: types,
    pokemonImageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + parsedResponse.id + ".png"
  }
}
