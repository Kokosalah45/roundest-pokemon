import { useQuery } from "@tanstack/react-query";
import { useState, useMemo } from "react";
import getPokemonCount from "../api/pokemon/getPokemonCount";
import Paginate from "../components/Paginate";
import Head from "next/head";

export async function getStaticProps() {
  const pokemonCount = await getPokemonCount();
  return {
    props: {
      pokemonCount,
    },
  };
}
export default function voteResults({ pokemonCount }) {
  return (
    <>
      <Head>
        <title>Vote Results</title>
        <meta
          name="pokemon vote results"
          content="Generated by create next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-gradient-to-r from-[#ff6e7f] to-[#bfe9ff]">
        <Paginate pageSize={10} pageCount={pokemonCount} />
      </main>
      <footer className="bg-teal-700 text-white flex items-center justify-center p-5">
        <p>Created By Kerolous Amged</p>
      </footer>
    </>
  );
}
