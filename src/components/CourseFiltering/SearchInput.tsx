import { debounce } from 'lodash-es'
import { useRouter } from 'next/router'
import IcoSearch from '../Icons/IcoSearch'

export default function SearchInput() {
  const router = useRouter()

  const deferredFunc = debounce((value: string) => {
    const url = new URL(location.href)
    if (value.length > 0) url.searchParams.set('keyword', value)
    else url.searchParams.delete('keyword')
    router.replace(url, undefined, { shallow: true })
  }, 300)

  return (
    <div className="my-3 flex items-center overflow-hidden rounded border border-input-background bg-white">
      <IcoSearch classname="mx-4" />
      <input
        type="text"
        className="flex-1 py-3 pr-4 text-sm outline-none placeholder:text-[gray]"
        placeholder="배우고 싶은 언어, 기술을 검색해 보세요"
        onChange={e => deferredFunc(e.target.value)}
      />
    </div>
  )
}
