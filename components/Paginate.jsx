import React from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { getPokemonData } from "../api/pokemon";
import shortid from "shortid";
import { ImSpinner8 } from "react-icons/im";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
export default function Paginate({ pageSize, pageCount }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [noOfPages, setNoOfPages] = useState(0);

  useEffect(() => {
    setNoOfPages(Math.floor(pageCount / pageSize));
    // eslint-disable-next-line
  }, []);

  const { data, isFetching } = useQuery(["page", currentPage + 1], () =>
    getPokemonData(currentPage * pageSize, pageSize)
  );
  const next = () => {
    setCurrentPage(currentPage + 1);
  };
  const prev = () => {
    setCurrentPage(currentPage - 1);
  };
  return (
    <>
      <div className="overflow-x-auto w-dynamic m-auto min-h-screen relative  font-mono  ">
        <div className="flex  justify-around border-2  mb-4 p-3 rounded-md my-4 ">
          <button onClick={prev} disabled={!currentPage}>
            <MdNavigateBefore className="w-8 h-8 rounded-[50%] border-2 text-white cursor-pointer hover:text-black hover:bg-white transition-all" />
          </button>
          <h2 className="text-3xl font-bold text-white">{currentPage + 1}</h2>
          <button onClick={next} disabled={currentPage === noOfPages}>
            <MdNavigateNext className="w-8 h-8 rounded-[50%] border-2 text-white cursor-pointer hover:text-black hover:bg-white transition-all" />
          </button>
        </div>

        <table className=" w-full text-white  table-fixed rounded-lg overflow-hidden capitalize text-lg text-center ">
          <thead className="text-xs  uppercase  bg-gray-700 text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Pokemon Name
              </th>
              <th scope="col" className="py-3 px-6">
                Image
              </th>
              <th scope="col" className="py-3 px-6">
                Voted for
              </th>
              <th scope="col" className="py-3 px-6">
                Voted against
              </th>
            </tr>
          </thead>
          <tbody>
            {isFetching && (
              <tr className="min-h-screen w-full relative">
                <td className="h-screen " colSpan="3"></td>
                <div className="absolute inset-0 grid place-items-center bg-gray-700">
                  <ImSpinner8 className="animate-spin w-14 h-14" />
                </div>
              </tr>
            )}
            {data &&
              data?.results?.map(
                ({ name, img_url, voted_for, voted_against }) => (
                  <tr
                    className="border-b bg-gray-800 border-gray-700  cursor-pointer hover:bg-green-500 select-none"
                    key={shortid.generate()}
                  >
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium  whitespace-nowrap text-white"
                    >
                      {name}
                    </th>
                    <td className="py-4 px-6">
                      <Image
                        src={img_url}
                        layout="fixed"
                        width={80}
                        height={80}
                        alt={`image of ${name} pokemon`}
                      />
                    </td>
                    <td className="py-4 px-6">{voted_for}</td>
                    <td className="py-4 px-6">{voted_against}</td>
                  </tr>
                )
              )}
          </tbody>
        </table>
      </div>

      <button onClick={() => setCurrentPage(noOfPages)}>
        set to last page
      </button>
    </>
  );
}
