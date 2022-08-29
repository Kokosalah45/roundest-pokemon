import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { getPokemonData } from "../api/pokemon";
const Paginate = ({ pageSize, pageCount }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [noOfPages, setNoOfPages] = useState(0);
  const [take, setTake] = useState(0);
  const [cursor, setCursor] = useState(0);
  useEffect(() => {
    setNoOfPages(Math.ceil(pageCount / pageSize));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const tempTake = currentPage * pageSize;
    setTake(tempTake);
    setCursor(tempTake - pageSize);
    // eslint-disable-next-line
  }, [currentPage]);

  const { data, isLoading } = useQuery(
    ["page", cursor, take],
    () => getPokemonData(cursor, take),
    {
      enabled: !!take,
    }
  );
  const next = () => {
    setCurrentPage(currentPage + 1);
  };
  const prev = () => {
    setCurrentPage(currentPage - 1);
  };
  return (
    <>
      <div>{currentPage}</div>
      <button onClick={prev} disabled={!cursor}>
        prev
      </button>
      <button onClick={next} disabled={currentPage === noOfPages}>
        next
      </button>
      <div>{cursor}</div>
      <div>{take}</div>

      <div>{JSON.stringify(data)}</div>
    </>
  );
};

export default Paginate;
