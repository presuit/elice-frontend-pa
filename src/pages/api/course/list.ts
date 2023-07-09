import { apiInstance } from "@/api";
import { ELICE_FILTER_CONDITION_MAP } from "@/api/constants";
import {
  ApiFilterConditionObj,
  OrgCourseFilterConditionType,
} from "@/api/types";
import type { NextApiRequest, NextApiResponse } from "next";

function convertFilterConditions(
  key: OrgCourseFilterConditionType,
  value: string | string[]
) {
  const prefix: { $or: object[] } = { $or: [] };

  if (Array.isArray(value)) {
    // todo: 배열을 순환하면서 엘리스 필터링 문구로 변경한다.
    // 옵션을 전체 선택했다면, 필터링할 영역이 없기 때문에 필터링 하지 않아도 됨.
    const mapLength = Object.keys(ELICE_FILTER_CONDITION_MAP[key]);
    const isEveryOptionChecked = mapLength.length === value.length;

    if (!isEveryOptionChecked) {
      value.forEach((item) => {
        const mappingData = ELICE_FILTER_CONDITION_MAP[key][item];
        if (mappingData) {
          const data = JSON.parse(mappingData);
          if (Array.isArray(data)) {
            prefix.$or.push(...data);
          } else {
            prefix.$or.push(data);
          }
        }
      });
    }
  } else {
    const mappingData = ELICE_FILTER_CONDITION_MAP[key][value];
    if (mappingData) {
      const data = JSON.parse(mappingData);
      if (Array.isArray(data)) {
        prefix.$or.push(...data);
      } else {
        prefix.$or.push(data);
      }
    }
  }

  return prefix;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ name: any }>
) {
  const { offset, count, filter_conditions } = req.query;
  let filter: {
    $and: any[];
  } = {
    $and: [
      { $or: [{ status: 2 }, { status: 3 }, { status: 4 }] },
      { is_legacy_test: true },
      { is_datetime_enrollable: true },
    ],
  };

  if (filter_conditions && typeof filter_conditions === "string") {
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
      filter.$and.push({ title: `%${keyword}%` });
    } else {
      filter.$and.push({ title: `%%` });
    }
    if (category) {
      const data = convertFilterConditions("category", category);
      filter.$and.push(data);
    }
    if (courseType) {
      const data = convertFilterConditions("courseType", courseType);
      filter.$and.push(data);
    }
    if (format) {
      const data = convertFilterConditions("format", format);
      filter.$and.push(data);
    }
    if (level) {
      const data = convertFilterConditions("level", level);
      filter.$and.push(data);
    }
    if (price) {
      const data = convertFilterConditions("price", price);
      filter.$and.push(data);
    }
    if (programmingLanguage) {
      const data = convertFilterConditions(
        "programmingLanguage",
        programmingLanguage
      );
      filter.$and.push(data);
    }
  }

  try {
    const { data } = await apiInstance.get("/org/academy/course/list", {
      params: {
        offset: 0,
        count: 20,
        filter_conditions: JSON.stringify(filter),
      },
    });

    console.log(JSON.stringify(filter));

    return res.status(200).json({ name: data });
  } catch (error) {
    console.log(error);
  }

  //   try {
  //     await apiInstance.get("/org/academy/course/list", {
  //       params: { offset, count, filter_conditions },
  //     });
  //   } catch (error) {}

  res.status(200).json({ name: "" });
}
