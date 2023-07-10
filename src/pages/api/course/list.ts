import { apiInstance } from "@/api";
import { OrgCourseListResponses } from "@/api/types";
import { getEliceFilterConditions } from "@/api/utils";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let eliceFilterConditions = null;
  const { offset, count, filter_conditions } = req.query;
  const isFilterExists =
    filter_conditions && typeof filter_conditions === "string";

  if (isFilterExists) {
    eliceFilterConditions = getEliceFilterConditions(filter_conditions);
  }

  try {
    const { data, status } = await apiInstance.get<OrgCourseListResponses>(
      "/org/academy/course/list",
      {
        params: {
          offset,
          count,
          ...(eliceFilterConditions && {
            filter_conditions: JSON.stringify(eliceFilterConditions),
          }),
        },
      }
    );

    return res.status(status).json(data);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
}
