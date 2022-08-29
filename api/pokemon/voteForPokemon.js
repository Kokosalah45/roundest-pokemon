import apiClient from "../apiClient";

export default async function voteForPokemon({
  selectedPokemon,
  unselectedPokemon,
}) {
  const { data } = await apiClient.patch("/api/pokemon/vote", {
    selectedPokemon,
    unselectedPokemon,
  });

  return data;
}
