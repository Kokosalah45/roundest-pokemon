import apiClient from "../apiClient";

export default async function getPokemonData(cursor, take) {
  const { data } = await apiClient.get(
    `/api/pokemon?take=${take}&cursor=${cursor}`
  );
  return data;
}
