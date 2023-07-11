import { NextApiRequest, NextApiResponse } from "next";
import {
  DEFAULT_ELICE_FILTER_CONDITIONS,
  ELICE_FILTER_CONDITION_MAP,
} from "./constants";
import {
  ApiFilterConditionObj,
  OrgCourseFilterConditionType,
  OrgCourseListErrorResponses,
  OrgCourseListResponses,
} from "./types";
import Cors from "cors";

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

function getEliceFilterCondition(
  key: OrgCourseFilterConditionType,
  value: string
) {
  const container = [];
  const mappingData = ELICE_FILTER_CONDITION_MAP[key][value];
  if (mappingData) {
    const data = JSON.parse(mappingData.value);
    if (Array.isArray(data)) container.push(...data);
    else container.push(data);
  }

  return container;
}

export function convertFilterConditions(
  key: OrgCourseFilterConditionType,
  value: string | string[]
) {
  const filterConditions: { $or: object[] } = { $or: [] };

  if (Array.isArray(value)) {
    const mapLength = Object.keys(ELICE_FILTER_CONDITION_MAP[key]).length;
    const isEveryOptionChecked = mapLength === value.length;

    if (!isEveryOptionChecked)
      value.forEach((item) => {
        filterConditions.$or.push(...getEliceFilterCondition(key, item));
      });
  } else {
    filterConditions.$or.push(...getEliceFilterCondition(key, value));
  }

  return filterConditions;
}

export function isOrgCourseErrorResponses(
  data: OrgCourseListResponses | OrgCourseListErrorResponses
): data is OrgCourseListErrorResponses {
  if ("fail_code" in data) {
    return true;
  }
  return false;
}

const cors = Cors({
  methods: ["GET"],
});

function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export function withCorsHandler(
  fn: (req: NextApiRequest, res: NextApiResponse) => Promise<void>
) {
  return async function (req: NextApiRequest, res: NextApiResponse) {
    try {
      await runMiddleware(req, res, cors);
      await fn(req, res);
    } catch (error) {
      throw error;
    }
  };
}
