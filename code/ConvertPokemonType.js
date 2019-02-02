module.exports = {
  function: convertPokemonType
}

function convertPokemonType (pokemonTypeName) {
  var typeName = pokemonTypeName.toUpperCase()
  var pokemonTypeId

  switch(typeName) {
    case 'NORMAL':
      pokemonTypeId = 1
      break
    case 'FIGHTING':
      pokemonTypeId = 2
      break
    case 'FLYING':
      pokemonTypeId = 3
      break
    case 'POISON':
      pokemonTypeId = 4
      break
    case 'GROUND':
      pokemonTypeId = 5
      break
    case 'ROCK':
      pokemonTypeId = 6
      break
    case 'BUG':
      pokemonTypeId = 7
      break
    case 'GHOST':
      pokemonTypeId = 8
      break
    case 'STEEL':
      pokemonTypeId = 9
      break
    case 'FIRE':
      pokemonTypeId = 10
      break
    case 'WATER':
      pokemonTypeId = 11
      break
    case 'GRASS':
      pokemonTypeId = 12
      break
    case 'ELECTRIC':
      pokemonTypeId = 13
      break
    case 'PSYCHIC':
      pokemonTypeId = 14
      break
    case 'ICE':
      pokemonTypeId = 15
      break
    case 'DRAGON':
      pokemonTypeId = 16
      break
    case 'DARK':
      pokemonTypeId = 17
      break
    case 'FAIRY':
      pokemonTypeId = 18
      break
    case 'UNKNOWN':
      pokemonTypeId = 10001
      break
    case 'SHADOW':
      pokemonTypeId = 10002
      break
    default:
      pokemonTypeId = 0
      break
  }
  return pokemonTypeId
}


// Types  
// 1 - Normal
// 2 - Fighting
// 3 - Flying
// 4 - Poison
// 5 - Ground
// 6 - Rock
// 7 - Bug
// 8 - Ghost
// 9 - Steel
// 10 - Fire
// 11 - Water
// 12 - Grass
// 13 - Electric
// 14 - Psychic
// 15 - Ice
// 16 - Dragon
// 17 - Dark
// 18 - Fairy
// 10001 - Unknown
// 10002 - Shadow