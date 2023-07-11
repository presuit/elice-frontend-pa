import { useCourseList } from "@/hooks/useCourseList";
import CourseCard from "./CourseCard";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import {
  DEFAULT_COURSE_COUNT,
  PAGINATION_MINIMUM_PAGE,
} from "@/constants/courseCard";
import { useRouter } from "next/router";
import usePageTriggerScroll from "@/hooks/usePageTriggerScroll";
import NotFound from "./NotFound";
import { isOrgCourseErrorResponses } from "@/api/utils";

export default function CourseList() {
  const [page, setPage] = useState(PAGINATION_MINIMUM_PAGE);
  const router = useRouter();
  const scrollRef = usePageTriggerScroll(page);
  const { data, isLoading, error } = useCourseList({
    page,
    filterConditions: router.query,
  });

  useEffect(() => {
    setPage(PAGINATION_MINIMUM_PAGE);
  }, [router.query]);

  if (isLoading) {
    return <></>;
  }

  if (error || !data) {
    return <NotFound cause={"에러가 발생했습니다: Internal Server Error"} />;
  }

  if (isOrgCourseErrorResponses(data)) {
    return <NotFound cause={`에러가 발생했습니다: ${data.fail_message}`} />;
  }

  if (data.course_count === 0 || data.courses.length === 0) {
    return <NotFound cause="검색 결과가 없습니다." />;
  }

  return (
    <div>
      <div
        ref={scrollRef}
        className="py-3 text-xs font-medium border-b border-zinc-200"
      >
        전체 {data.course_count}개
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-3">
        {data.courses.map((course) => (
          <li key={course.id}>
            <a href="#">
              <CourseCard
                enrollType={course.enroll_type}
                isFree={course.is_free}
                logoFileUrl={course.logo_file_url}
                shortDescription={course.short_description}
                taglist={course.taglist}
                title={course.title}
              />
            </a>
          </li>
        ))}
      </ul>
      <Pagination
        page={page}
        setPage={setPage}
        maxPage={Math.ceil(data.course_count / DEFAULT_COURSE_COUNT)}
      />
    </div>
  );
}
