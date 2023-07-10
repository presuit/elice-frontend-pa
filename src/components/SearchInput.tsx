import IcoSearch from "./Icons/IcoSearch";
import { debounce } from "lodash-es";
import { useRouter } from "next/router";

export default function SearchInput() {
  const router = useRouter();

  const deferredFunc = debounce((value: string) => {
    const url = new URL(location.href);
    if (value.length > 0) url.searchParams.set("keyword", value);
    else url.searchParams.delete("keyword");
    router.replace(url);
  }, 300);

  return (
    <div className="border-input-background border rounded overflow-hidden flex items-center my-3 bg-white">
      <IcoSearch classname="ml-4" />
      <input
        type="text"
        className="flex-1 py-3 px-4 placeholder:text-[gray] text-sm outline-none"
        placeholder="배우고 싶은 언어, 기술을 검색해 보세요"
        onChange={(e) => deferredFunc(e.target.value)}
      />
    </div>
  );
}
