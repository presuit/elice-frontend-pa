import { ELICE_FILTER_CONDITION_MAP } from "@/api/constants";
import { OrgCourseFilterConditionType } from "@/api/types";
import { FILTER_NAME } from "@/constants/filter";
import Chip from "./Chip";

interface IProps {
  name: string;
  filterCondition: OrgCourseFilterConditionType;
}

export default function FilteringRow({ name, filterCondition }: IProps) {
  const chipIdList = Object.keys(ELICE_FILTER_CONDITION_MAP[filterCondition]);

  return (
    <section className="group">
      <h4 className="sr-only">{name}</h4>
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
                name={FILTER_NAME[+id - 1]}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
