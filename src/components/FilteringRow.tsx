import { ELICE_FILTER_CONDITION_MAP } from "@/api/constants";
import { OrgCourseFilterConditionType } from "@/api/types";
import Chip from "./Chip";

interface Props {
  name: string;
  filterCondition: OrgCourseFilterConditionType;
}

export default function FilteringRow({ name, filterCondition }: Props) {
  const chipIdList = Object.keys(ELICE_FILTER_CONDITION_MAP[filterCondition]);

  return (
    <section className="group">
      <h3 className="sr-only">{name}</h3>
      <div className="flex bg-white border-b border-l border-r border-filtering-title-border group-first-of-type:border-t">
        <div className="min-w-[6rem] py-[.875rem] px-4 bg-filtering-title-background border-r inline-flex">
          <span className="text-xs text-filtering-title-text font-bold">
            {name}
          </span>
        </div>
        <div className="px-2 flex flex-wrap flex-1">
          {chipIdList.map((id) => {
            return (
              <Chip
                key={id}
                id={id}
                filterCondition={filterCondition}
                name={ELICE_FILTER_CONDITION_MAP[filterCondition][id].name}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
