import { Dispatch, SetStateAction } from "react";
import IcoChevronLeft from "../Icons/IcoChevronLeft";
import { PAGINATION_MINIMUM_PAGE } from "@/constants/courseCard";
import classNames from "classnames";

interface IProps {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  maxPage: number;
}

export default function Pagination({ page, setPage, maxPage }: IProps) {
  function handleClickNextPage() {
    const nextPage = Math.min(maxPage, page + 1);
    setPage(nextPage);
  }
  function handleClickPrevPage() {
    const prevPage = Math.max(PAGINATION_MINIMUM_PAGE, page - 1);
    setPage(prevPage);
  }

  const isFirstPage = page === PAGINATION_MINIMUM_PAGE;
  const isLastPage = page === maxPage;

  const arrowStyles =
    "w-6 aspect-square text-[#222] rounded-[.25rem] py-[1px] px-[6px] text-sm flex justify-center items-center";

  return (
    <div className="mt-6">
      <div className="flex justify-center items-center gap-3">
        <button
          onClick={handleClickPrevPage}
          className={classNames(arrowStyles, {
            "text-[#ccc] cursor-not-allowed": isFirstPage,
          })}
        >
          <IcoChevronLeft classname="stroke-[3] w-[14px] h-[14px] shrink-0" />
        </button>
        {renderPages({ maxPage, page, setPage })}
        <button
          onClick={handleClickNextPage}
          className={classNames(arrowStyles, {
            "text-[#ccc] cursor-not-allowed": isLastPage,
          })}
        >
          <IcoChevronLeft classname="stroke-[3] w-[14px] h-[14px] rotate-180 shrink-0" />
        </button>
      </div>
    </div>
  );
}

function renderPages({
  maxPage,
  page,
  setPage,
}: {
  page: number;
  maxPage: number;
  setPage: Dispatch<SetStateAction<number>>;
}) {
  const leftPageThreshold = Math.max(PAGINATION_MINIMUM_PAGE, page - 4);
  const rightPageThreshold = Math.min(maxPage, page + 4);

  const leftPages = Array.from({ length: page - leftPageThreshold }).map(
    (_, index) => leftPageThreshold + index
  );
  const rightPages = Array.from({ length: rightPageThreshold - page }).map(
    (_, index) => page + index + 1
  );

  function handleClickPage(page: number) {
    setPage(page);
  }

  return (
    <>
      {leftPages.map((page) => (
        <button
          key={page}
          id={`${page}`}
          name={`${page}`}
          className="w-6 aspect-square rounded-[.25rem] py-[1px] px-[6px] text-sm text-[#999]"
          onClick={() => handleClickPage(page)}
        >
          {page}
        </button>
      ))}
      <button className="w-6 aspect-square bg-[#524fa1] rounded-[.25rem] py-[1px] px-[6px] text-sm text-white">
        {page}
      </button>
      {rightPages.map((page) => (
        <button
          key={page}
          id={`${page}`}
          name={`${page}`}
          className="w-6 aspect-square rounded-[.25rem] py-[1px] px-[6px] text-sm text-[#999]"
          onClick={() => handleClickPage(page)}
        >
          {page}
        </button>
      ))}
    </>
  );
}
