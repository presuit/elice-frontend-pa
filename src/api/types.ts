import { ORG_COURSE_FILTER_CONDITION } from "./constants";

export interface OrgCourseListResponses {
  courseCount: number;
  courses: {
    courseType: number;
    tags: string[];
    title: string;
    shortDescription: string;
    classType: number;
    logoFileUrl: null | string;
    enrolledRolePeriod: null | string;
    enrolledRoleBeginDatetime: number | null;
    enrolledRoleEndDatetime: number | null;
    beginDatetime: number;
    endDatetime: null | number;
    isDiscounted: boolean;
    discountedPrice: string;
    discountedPriceUsd: string;
    discountRate: null | any;
    price: string;
    priceUsd: string;
    enrollType: number;
    isFree: boolean;
  }[];
}

export interface GetOrgCourseListParams {
  offset: number;
  count: number;
  filter_conditions?: string;
}

export type ApiFilterConditionObj = {
  [key in OrgCourseFilterConditionType]?: string[] | string;
};

export type OrgCourseFilterConditionType =
  (typeof ORG_COURSE_FILTER_CONDITION)[number];

export type EliceFilterConditionsMapType = {
  [key in OrgCourseFilterConditionType]: {
    [key: string]: string;
  };
};
