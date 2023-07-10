import { OrgCourseList } from "@/api";
import { DEFAULT_COURSE_COUNT } from "@/constants/courseCard";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

export function useCourseList(page: number) {
  const router = useRouter();

  return useQuery(["course", "list", router.query, page], {
    queryFn: ({ queryKey }) => {
      console.log(queryKey);
      return OrgCourseList.getOrgCourseList({
        count: DEFAULT_COURSE_COUNT,
        offset: (page - 1) * DEFAULT_COURSE_COUNT,
        filter_conditions: JSON.stringify(router.query),
      });
    },
    keepPreviousData: true,
  });
}
