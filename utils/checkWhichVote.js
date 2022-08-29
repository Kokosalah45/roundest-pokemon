export default function checkWhichVote(e, pokemonPair) {
  const tempPokemons = [...pokemonPair];

  let selectedPokemon = {};
  if (+e.currentTarget.dataset.index) {
    selectedPokemon = tempPokemons.pop();
    // tempPokemons = [0]
  } else {
    selectedPokemon = tempPokemons.shift();
    // tempPokemons = [1]
  }

  return { selectedPokemon, unselectedPokemon: tempPokemons[0] };
}
