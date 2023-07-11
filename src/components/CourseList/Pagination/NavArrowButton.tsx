import classNames from 'classnames'
import { Dispatch, SetStateAction } from 'react'
import IcoChevronLeft from '@/components/Icons/IcoChevronLeft'
import { PAGINATION_MINIMUM_PAGE } from '@/constants/courseCard'

interface Props {
  direction: 'LEFT' | 'RIGHT'
  page: number
  setPage: Dispatch<SetStateAction<number>>
  maxPage: number
}

export default function NavArrowButton({ maxPage, page, setPage, direction }: Props) {
  function handleClickNextPage() {
    const nextPage = Math.min(maxPage, page + 1)
    setPage(nextPage)
  }
  function handleClickPrevPage() {
    const prevPage = Math.max(PAGINATION_MINIMUM_PAGE, page - 1)
    setPage(prevPage)
  }

  const isFirstPage = direction === 'LEFT' && page === PAGINATION_MINIMUM_PAGE
  const isLastPage = direction === 'RIGHT' && page === maxPage

  const ARROW_BASE_STYLE = 'w-6 aspect-square text-[#222] rounded-[.25rem] py-[1px] px-[6px] text-sm flex justify-center items-center'
  const ICON_BASE_STYLE = 'stroke-[3] w-[14px] h-[14px] shrink-0'

  return (
    <button
      onClick={direction === 'LEFT' ? handleClickPrevPage : handleClickNextPage}
      className={classNames(ARROW_BASE_STYLE, {
        'cursor-not-allowed text-[#ccc]': isFirstPage || isLastPage,
      })}
    >
      <IcoChevronLeft
        classname={classNames(ICON_BASE_STYLE, {
          'rotate-180': direction === 'RIGHT',
        })}
      />
    </button>
  )
}
