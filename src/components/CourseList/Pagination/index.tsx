import { Dispatch, SetStateAction } from "react";
import { PAGINATION_MINIMUM_PAGE } from "@/constants/courseCard";
import classNames from "classnames";
import NavArrowButton from "./NavArrowButton";

interface Props {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  maxPage: number;
}

export default function Pagination(props: Props) {
  return (
    <nav className="mt-6">
      <div className="flex justify-center items-center gap-3">
        <NavArrowButton direction="LEFT" {...props} />
        {renderPages(props)}
        <NavArrowButton direction="RIGHT" {...props} />
      </div>
    </nav>
  );
}

function renderPages({ maxPage, page, setPage }: Props) {
  const leftPageThreshold = Math.max(PAGINATION_MINIMUM_PAGE, page - 4);
  const rightPageThreshold = Math.min(maxPage, page + 4);

  const leftPages = Array.from({ length: page - leftPageThreshold }).map(
    (_, index) => leftPageThreshold + index
  );
  const rightPages = Array.from({ length: rightPageThreshold - page }).map(
    (_, index) => page + index + 1
  );

  const BUTTON_BASE_STYLE =
    "w-6 h-6 rounded-[.25rem] py-[1px] px-[6px] text-sm";

  return (
    <>
      {leftPages.map((page) => (
        <button
          key={page}
          id={`${page}`}
          name={`${page}`}
          className={classNames(BUTTON_BASE_STYLE, "text-[#999]")}
          onClick={() => setPage(page)}
        >
          {page}
        </button>
      ))}
      <button
        className={classNames(BUTTON_BASE_STYLE, "bg-[#524fa1] text-white")}
      >
        {page}
      </button>
      {rightPages.map((page) => (
        <button
          key={page}
          id={`${page}`}
          name={`${page}`}
          className={classNames(BUTTON_BASE_STYLE, "text-[#999]")}
          onClick={() => setPage(page)}
        >
          {page}
        </button>
      ))}
    </>
  );
}
