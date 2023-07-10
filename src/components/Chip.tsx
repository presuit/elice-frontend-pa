import { OrgCourseFilterConditionType } from "@/api/types";
import classNames from "classnames";
import { useRouter } from "next/router";
import { useLayoutEffect, useState } from "react";

interface IProps {
  id: string;
  name: string;
  filterCondition: OrgCourseFilterConditionType;
}

export default function Chip({ id, name, filterCondition }: IProps) {
  const router = useRouter();
  const [active, setActive] = useState(false);

  function handleClickChip() {
    if (!filterCondition) return;

    const url = new URL(location.href);

    if (active && url.searchParams.has(filterCondition)) {
      const optionList = url.searchParams.getAll(filterCondition);
      if (optionList.length > 1) {
        const filteredOptionList = optionList.filter((option) => option !== id);
        url.searchParams.delete(filterCondition);
        filteredOptionList.forEach((option) =>
          url.searchParams.append(filterCondition, option)
        );
      } else {
        url.searchParams.delete(filterCondition);
      }
    } else {
      url.searchParams.append(filterCondition, id);
    }
    router.replace(url);
  }

  useLayoutEffect(() => {
    if (filterCondition) {
      const queryValues = router.query[filterCondition];

      if (queryValues) {
        if (Array.isArray(queryValues)) {
          setActive(queryValues.includes(id));
        } else {
          setActive(queryValues === id);
        }
      } else {
        setActive(false);
      }
    }
  }, [router.query, filterCondition, id]);

  return (
    <button
      id={id}
      name={name}
      className={classNames(
        "m-2 py-1 px-3 bg-main-background border border-main-background text-sm rounded-[1.875rem] transition-colors",
        { "bg-indigo-500 text-white": active }
      )}
      onClick={handleClickChip}
    >
      {name}
    </button>
  );
}