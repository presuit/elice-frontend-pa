import type { NextApiRequest, NextApiResponse } from "next";

import { apiInstance } from "@/api";
import { OrgCourseListResponses } from "@/api/types";
import { getEliceFilterConditions, withCorsHandler } from "@/api/utils";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<OrgCourseListResponses>
) {
  let eliceFilterConditions = null;
  const { offset, count, filter_conditions } = req.query;
  const isFilterExists =
    filter_conditions && typeof filter_conditions === "string";

  if (isFilterExists) {
    eliceFilterConditions = getEliceFilterConditions(filter_conditions);
  }

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
}

export default withCorsHandler(handler);
