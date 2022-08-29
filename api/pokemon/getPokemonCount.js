import apiClient from "../apiClient";
export default async function getPokemonCount() {
  const { data } = await apiClient.get(`/api/pokemon/pokemon-count`);
  return data;
}
