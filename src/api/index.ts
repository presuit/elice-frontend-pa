import axios from "axios";
import { GetOrgCourseListParams, OrgCourseListResponses } from "./types";

export const instance = axios.create({});
export const apiInstance = axios.create({
  baseURL: process.env.API_INSTANCE_BASE_URL,
});

export const OrgCourseList = {
  async getOrgCourseList({
    count,
    offset,
    filter_conditions,
  }: GetOrgCourseListParams) {
    const { data } = await instance.get<OrgCourseListResponses>(
      "/api/course/list",
      {
        params: { filter_conditions, count, offset },
      }
    );
    return data;
  },
};
