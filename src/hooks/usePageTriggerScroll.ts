import { useEffect, useRef } from 'react'

export default function usePageTriggerScroll(page: number) {
  const courseCountRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (courseCountRef.current) {
      const { top } = courseCountRef.current.getBoundingClientRect()
      if (top < 0) window.scrollTo(0, courseCountRef.current.offsetTop)
    }
  }, [page])

  return courseCountRef
}
