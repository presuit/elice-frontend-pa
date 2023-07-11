import { OrgCourseFilterConditionType } from "@/api/types";
import classNames from "classnames";
import { useRouter } from "next/router";
import { useEffect, useLayoutEffect, useState } from "react";

interface Props {
  id: string;
  name: string;
  filterCondition: OrgCourseFilterConditionType;
}

export default function Chip({ id, name, filterCondition }: Props) {
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
    router.replace(url, undefined, { shallow: true });
  }

  useLayoutEffect(() => {
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
  }, [router.query, filterCondition, id]);

  return (
    <button
      id={id}
      name={name}
      className={classNames(
        "m-2 py-1 px-3 border border-main-background text-sm rounded-[1.875rem] transition-colors",
        { "bg-indigo-500 text-white": active },
        { "bg-main-background": !active }
      )}
      onClick={handleClickChip}
    >
      {name}
    </button>
  );
}
