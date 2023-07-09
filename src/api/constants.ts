import { EliceFilterConditionsMapType } from "./types";

export const ELICE_FILTER_CONDITION_MAP: EliceFilterConditionsMapType = {
  category: {
    "6": JSON.stringify({ tag_id: 12 }),
    "7": JSON.stringify({ tag_id: 13 }),
    "8": JSON.stringify({ tag_id: 14 }),
    "9": JSON.stringify({ tag_id: 22 }),
    "10": JSON.stringify({ tag_id: 23 }),
  },
  courseType: {
    "1": JSON.stringify([{ course_type: 0 }, { course_type: 2 }]),
    "2": JSON.stringify({ course_type: 1 }),
    "3": JSON.stringify({ course_type: 3 }),
  },
  format: {
    "4": JSON.stringify({ course_type: 0 }),
    "5": JSON.stringify({ course_type: 2 }),
  },
  level: {
    "11": JSON.stringify({ tag_id: 1 }),
    "12": JSON.stringify({ tag_id: 2 }),
    "13": JSON.stringify({ tag_id: 3 }),
    "14": JSON.stringify({ tag_id: 4 }),
  },
  price: {
    "25": JSON.stringify([{ enroll_type: 0, is_free: true }]),
    "26": JSON.stringify([{ enroll_type: 0, is_free: false }]),
    "27": JSON.stringify({ enroll_type: 4 }),
    "28": JSON.stringify({ enroll_type: 6 }),
  },
  programmingLanguage: {
    "15": JSON.stringify({ tag_id: 7 }),
    "16": JSON.stringify({ tag_id: 8 }),
    "17": JSON.stringify({ tag_id: 9 }),
    "18": JSON.stringify({ tag_id: 10 }),
    "19": JSON.stringify({ tag_id: 19 }),
    "20": JSON.stringify({ tag_id: 20 }),
    "21": JSON.stringify({ tag_id: 21 }),
    "22": JSON.stringify({ tag_id: 24 }),
    "23": JSON.stringify({ tag_id: 25 }),
    "24": JSON.stringify({ tag_id: 26 }),
  },
  keyword: {},
};

export const DEFAULT_ELICE_FILTER_CONDITIONS = [
  { $or: [{ status: 2 }, { status: 3 }, { status: 4 }] },
  { is_legacy_test: true },
  { is_datetime_enrollable: true },
];

export const ORG_COURSE_FILTER_CONDITION = [
  "courseType", //유형
  "format", //진행 방식
  "category", //분야
  "level", //난이도
  "programmingLanguage", //언어
  "price", //가격
  "keyword", //검색어
] as const;
