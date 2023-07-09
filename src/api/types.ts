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

export const ORG_COURSE_FILTER_CONDITION = [
  "courseType", //유형
  "format", //진행 방식
  "category", //분야
  "level", //난이도
  "programmingLanguage", //언어
  "price", //가격
  "keyword", //검색어
] as const;
export type OrgCourseFilterConditionType =
  (typeof ORG_COURSE_FILTER_CONDITION)[number];

// elice API
