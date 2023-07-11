import {
  DEFAULT_ELICE_FILTER_CONDITIONS,
  ELICE_FILTER_CONDITION_MAP,
} from "./constants";
import { ApiFilterConditionObj, OrgCourseFilterConditionType } from "./types";

export function convertFilterConditions(
  key: OrgCourseFilterConditionType,
  value: string | string[]
) {
  const filterConditions: { $or: object[] } = { $or: [] };
  function convertQueryToEliceFilterConditions(
    key: OrgCourseFilterConditionType,
    value: string
  ) {
    const mappingData = ELICE_FILTER_CONDITION_MAP[key][value];
    if (mappingData) {
      const data = JSON.parse(mappingData.value);
      if (Array.isArray(data)) filterConditions.$or.push(...data);
      else filterConditions.$or.push(data);
    }
  }

  if (Array.isArray(value)) {
    const mapLength = Object.keys(ELICE_FILTER_CONDITION_MAP[key]).length;
    const isEveryOptionChecked = mapLength === value.length;

    if (!isEveryOptionChecked) {
      value.forEach((item) => {
        convertQueryToEliceFilterConditions(key, item);
      });
    }
  } else {
    convertQueryToEliceFilterConditions(key, value);
  }

  return filterConditions;
}

export function getEliceFilterConditions(filter_conditions: string) {
  let filterConditions: {
    $and: object[];
  } = {
    $and: [...DEFAULT_ELICE_FILTER_CONDITIONS],
  };

  const {
    category,
    courseType,
    format,
    keyword,
    level,
    price,
    programmingLanguage,
  } = JSON.parse(filter_conditions) as ApiFilterConditionObj;

  if (keyword) {
    filterConditions.$and.push({ title: `%${keyword}%` });
  } else {
    filterConditions.$and.push({ title: `%%` });
  }
  if (category) {
    const data = convertFilterConditions("category", category);
    filterConditions.$and.push(data);
  }
  if (courseType) {
    const data = convertFilterConditions("courseType", courseType);
    filterConditions.$and.push(data);
  }
  if (format) {
    const data = convertFilterConditions("format", format);
    filterConditions.$and.push(data);
  }
  if (level) {
    const data = convertFilterConditions("level", level);
    filterConditions.$and.push(data);
  }
  if (price) {
    const data = convertFilterConditions("price", price);
    filterConditions.$and.push(data);
  }
  if (programmingLanguage) {
    const data = convertFilterConditions(
      "programmingLanguage",
      programmingLanguage
    );
    filterConditions.$and.push(data);
  }

  return filterConditions;
}
