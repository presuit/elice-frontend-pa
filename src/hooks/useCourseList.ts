import { ParsedUrlQuery } from 'querystring'
import { useQuery } from '@tanstack/react-query'
import { OrgCourseList } from '@/api'
import { DEFAULT_COURSE_COUNT } from '@/constants/courseCard'

interface Props {
  page: number
  filterConditions: ParsedUrlQuery
}

export function useCourseList({ page, filterConditions }: Props) {
  return useQuery(['course', 'list', filterConditions, page], {
    queryFn: () =>
      OrgCourseList.getOrgCourseList({
        count: DEFAULT_COURSE_COUNT,
        offset: (page - 1) * DEFAULT_COURSE_COUNT,
        filter_conditions: JSON.stringify(filterConditions),
      }),
    keepPreviousData: true,
  })
}
