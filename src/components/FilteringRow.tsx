import Chip from './Chip'
import { ELICE_FILTER_CONDITION_MAP } from '@/api/constants'
import { OrgCourseFilterConditionType } from '@/api/types'

interface Props {
  name: string
  filterCondition: OrgCourseFilterConditionType
}

export default function FilteringRow({ name, filterCondition }: Props) {
  const chipIdList = Object.keys(ELICE_FILTER_CONDITION_MAP[filterCondition])

  return (
    <section className="group">
      <h3 className="sr-only">{name}</h3>
      <div className="flex border-b border-l border-r border-filtering-title-border bg-white group-first-of-type:border-t">
        <div className="inline-flex min-w-[6rem] border-r bg-filtering-title-background px-4 py-[.875rem]">
          <span className="text-xs font-bold text-filtering-title-text">{name}</span>
        </div>
        <div className="flex flex-1 flex-wrap px-2">
          {chipIdList.map(id => {
            return <Chip key={id} id={id} filterCondition={filterCondition} name={ELICE_FILTER_CONDITION_MAP[filterCondition][id].name} />
          })}
        </div>
      </div>
    </section>
  )
}
