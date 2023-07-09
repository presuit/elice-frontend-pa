import FilteringRow from "./FilteringRow";

export default function FilterChips() {
  return (
    <div className="flex flex-col">
      <h3 className="sr-only">과목 필터링</h3>
      <FilteringRow name="유형" filterCondition="courseType" />
      <FilteringRow name="진행 방식" filterCondition="format" />
      <FilteringRow name="분야" filterCondition="category" />
      <FilteringRow name="난이도" filterCondition="level" />
      <FilteringRow name="언어" filterCondition="programmingLanguage" />
      <FilteringRow name="가격" filterCondition="price" />
    </div>
  );
}
