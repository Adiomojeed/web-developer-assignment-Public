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
          <button className="gap-2 text-xs md:text-sm">
            Next <img src="/arrow-right.svg" alt="" />
          </button>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={0}
        pageCount={pageCount}
        previousLabel={
          <button className="gap-2 text-xs md:text-sm">
            <img src="/arrow-left.svg" alt="" /> Previous
          </button>
        }
        containerClassName="flex items-center gap-1 md:gap-3 ml-auto mt-6 text-xs md:text-sm"
        pageClassName="w-8 h-8 md:w-10 md:h-10 rounded-[8px] flex-center"
        activeClassName="text-accent-500 bg-accent-50"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Pagination;
