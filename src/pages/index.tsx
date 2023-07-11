import { QueryClient, dehydrate } from '@tanstack/react-query'
import { GetServerSideProps } from 'next'
import { OrgCourseList } from '@/api'
import CourseList from '@/components/CourseList'
import FilterChips from '@/components/FilterChips'
import SearchInput from '@/components/SearchInput'
import { DEFAULT_COURSE_COUNT } from '@/constants/courseCard'

export default function Home() {
  return (
    <div className="min-h-screen bg-main-background">
      <main className="mx-auto w-full max-w-7xl p-6">
        {/* filtering */}
        <section>
          <h2 className="sr-only">과목 필터링</h2>
          <div>
            <SearchInput />
            <FilterChips />
          </div>
        </section>
        {/* contents */}
        <section className="mt-3">
          <h2 className="sr-only">과목 리스트</h2>
          <CourseList />
        </section>
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(['course', 'list', query, 1], {
    queryFn: () =>
      OrgCourseList.getOrgCourseList({
        count: DEFAULT_COURSE_COUNT,
        offset: 0,
        filter_conditions: JSON.stringify(query),
      }),
  })

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
