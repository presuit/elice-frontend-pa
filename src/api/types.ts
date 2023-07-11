import { ORG_COURSE_FILTER_CONDITION } from './constants'

export interface OrgCourse {
  id: number
  courseType: number
  tags: string[]
  title: string
  short_description: string
  classType: number
  logo_file_url: null | string
  enrolledRolePeriod: null | string
  enrolledRoleBeginDatetime: number | null
  enrolledRoleEndDatetime: number | null
  beginDatetime: number
  endDatetime: null | number
  isDiscounted: boolean
  discountedPrice: string
  discountedPriceUsd: string
  discountRate: null | any
  price: string
  priceUsd: string
  enroll_type: number
  is_free: boolean
  image_file_url: string | null
  taglist: string[]
}

export interface OrgCourseListResponses {
  course_count: number
  courses: OrgCourse[]
}

export interface OrgCourseListErrorResponses {
  _result: {
    status: string
    reason: string
  }
  fail_code: string
  fail_message: string
  fail_detail: {
    invalid_params: {
      offset: string
    }
  }
}

export interface GetOrgCourseListParams {
  offset: number
  count: number
  filter_conditions?: string
}

export type ApiFilterConditionObj = {
  [key in OrgCourseFilterConditionType]?: string[] | string
}

export type OrgCourseFilterConditionType = (typeof ORG_COURSE_FILTER_CONDITION)[number]

export type EliceFilterConditionsMapType = {
  [key in OrgCourseFilterConditionType]: {
    [key: string]: { name: string; value: string }
  }
}
