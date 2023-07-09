import IcoSearch from "./Icons/IcoSearch";

export default function SearchInput() {
  return (
    <div className="border-input-background border rounded overflow-hidden flex items-center my-3 bg-white">
      <IcoSearch classname="ml-4" />
      <input
        type="text"
        placeholder="배우고 싶은 언어, 기술을 검색해 보세요"
        className="flex-1 py-3 px-4 placeholder:text-[gray] text-sm outline-none"
      />
    </div>
  );
}
