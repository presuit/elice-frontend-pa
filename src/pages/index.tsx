import FilterChips from "@/components/FilterChips";
import SearchInput from "@/components/SearchInput";

export default function Home() {
  return (
    <div className="min-h-screen bg-main-background">
      <main className="p-6 mx-auto max-w-7xl w-full">
        {/* filtering */}
        <section>
          <h2 className="sr-only">Course Filtering</h2>
          <div>
            <SearchInput />
            <FilterChips />
          </div>
        </section>
        {/* contents */}
        <section className="p-5 border border-input-background mt-5">
          <h2 className="sr-only">Course Contents</h2>
        </section>
      </main>
    </div>
  );
}
