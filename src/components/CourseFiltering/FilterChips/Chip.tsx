import classNames from 'classnames'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { OrgCourseFilterConditionType } from '@/api/types'

interface Props {
  id: string
  name: string
  filterCondition: OrgCourseFilterConditionType
}

export default function Chip({ id, name, filterCondition }: Props) {
  const router = useRouter()
  const [active, setActive] = useState(false)

  function handleClickChip() {
    if (!filterCondition) return

    const url = new URL(location.href)

    if (active && url.searchParams.has(filterCondition)) {
      const optionList = url.searchParams.getAll(filterCondition)
      if (optionList.length > 1) {
        const filteredOptionList = optionList.filter(option => option !== id)
        url.searchParams.delete(filterCondition)
        filteredOptionList.forEach(option => url.searchParams.append(filterCondition, option))
      } else {
        url.searchParams.delete(filterCondition)
      }
    } else {
      url.searchParams.append(filterCondition, id)
    }
    router.replace(url, undefined, { shallow: true })
  }

  useEffect(() => {
    const queryValues = router.query[filterCondition]

    if (queryValues) {
      if (Array.isArray(queryValues)) {
        setActive(queryValues.includes(id))
      } else {
        setActive(queryValues === id)
      }
    } else {
      setActive(false)
    }
  }, [router.query, filterCondition, id])

  return (
    <button
      id={id}
      name={name}
      className={classNames(
        'm-2 rounded-[1.875rem] border border-main-background px-3 py-1 text-sm transition-colors',
        { 'bg-indigo-500 text-white': active },
        { 'bg-main-background': !active },
      )}
      onClick={handleClickChip}
    >
      {name}
    </button>
  )
}
