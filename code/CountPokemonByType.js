module.exports = {
  function: countPokemonByType
}

function countPokemonByType (pokemonTypeId) {
  //https://pokeapi.co/api/v2/type/{pokemonType}
  var url = "https://pokeapi.co/api/v2/type/" + pokemonTypeId + "/"

  var response = http.getUrl(url)
  var parsedResponse = JSON.parse(response)

  return parsedResponse.pokemon.length
}
