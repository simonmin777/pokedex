module.exports ={
  function: findPokemonByType
}

var nameSearch = require('./FindPokemonByName.js')

function findPokemonByType (pokemonTypeId) {
  //https://pokeapi.co/api/v2/type/{pokemonType}
  var url = "https://pokeapi.co/api/v2/type/" + pokemonTypeId + "/"

  var response = http.getUrl(url)
  var parsedResponse = JSON.parse(response)

  var finalResult = new Array

  for(var i=0; i<parsedResponse.pokemon.length; i++) {
    var pokeNameArray = new Array

    pokeNameArray.push(parsedResponse.pokemon[i].pokemon.name)
    finalResult.push(nameSearch.function(pokeNameArray)[0])
  }

  return finalResult
}