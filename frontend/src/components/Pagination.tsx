/* eslint-disable @next/next/no-img-element */
"use client";

import ReactPaginate from "react-paginate";

const Pagination = ({
  total,
  limit,
  setPageNumber,
}: {
  total: number;
  limit: number;
  setPageNumber: (e: number) => void;
}) => {
  const pageCount = Math.ceil(total / limit);
  const handlePageClick = (e: any) => {
    setPageNumber(e.selected);
  };

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel={
          <button className="gap-2">
            Next <img src="/arrow-right.svg" alt="" />
          </button>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={0}
        pageCount={pageCount}
        previousLabel={
          <button className="gap-2">
            <img src="/arrow-left.svg" alt="" /> Previous
          </button>
        }
        containerClassName="flex items-center gap-3 ml-auto mt-6 text-sm"
        pageClassName="w-10 h-10 rounded-[8px] flex-center"
        activeClassName="text-accent-500 bg-accent-50"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Pagination;
