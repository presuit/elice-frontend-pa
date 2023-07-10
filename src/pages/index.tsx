import CourseList from "@/components/CourseList";
import FilterChips from "@/components/FilterChips";
import SearchInput from "@/components/SearchInput";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-main-background">
      <main className="p-6 mx-auto max-w-7xl w-full">
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
          <Suspense
            fallback={
              <div className="text-5xl font-bold text-black">Loading...</div>
            }
          >
            <CourseList />
          </Suspense>
        </section>
      </main>
    </div>
  );
}
