import apiClient from "../apiClient";
export default async function getRandomPairPokemon() {
  const { data } = await apiClient.get(`/api/pokemon/get-random-pokemons`);
  return data;
}
