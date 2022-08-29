import { useMutation, useQueryClient } from "@tanstack/react-query";
import { voteForPokemon } from "../api/pokemon";
export default function useVotePokemon() {
  const queryClient = useQueryClient();

  return useMutation(
    (votedPokemons) => {
      voteForPokemon(votedPokemons);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["pokemon-pair"]);
      },
    }
  );
}
