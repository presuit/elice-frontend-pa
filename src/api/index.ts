import axios from 'axios'
import { GetOrgCourseListParams, OrgCourseListErrorResponses, OrgCourseListResponses } from './types'

export const instance = axios.create({
  baseURL: process.env.INSTANCE_BASE_URL,
})
export const apiInstance = axios.create({
  baseURL: process.env.API_INSTANCE_BASE_URL,
})

export const OrgCourseList = {
  async getOrgCourseList({ count, offset, filter_conditions }: GetOrgCourseListParams) {
    const { data } = await instance.get<OrgCourseListResponses | OrgCourseListErrorResponses>('/api/course/list', {
      params: { filter_conditions, count, offset },
    })
    return data
  },
}
