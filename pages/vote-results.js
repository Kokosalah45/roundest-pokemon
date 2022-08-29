import { useQuery } from "@tanstack/react-query";
import { useState, useMemo } from "react";
import getPokemonCount from "../api/pokemon/getPokemonCount";
import Paginate from "../components/Paginate";

export async function getStaticProps() {
  const pokemonCount = await getPokemonCount();
  return {
    props: {
      pokemonCount,
    },
  };
}
export default function voteResults({ pokemonCount }) {
  return <Paginate pageSize={20} pageCount={pokemonCount} />;
}
