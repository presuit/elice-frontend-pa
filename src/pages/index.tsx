import { OrgCourseList } from "@/api";
import { ORG_COURSE_FILTER_CONDITION } from "@/api/types";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  function handler() {
    const url = new URL(location.href);
    const randomIndex = Math.floor(
      Math.random() * ORG_COURSE_FILTER_CONDITION.length
    );
    const key = ORG_COURSE_FILTER_CONDITION[randomIndex];
    const value = Math.floor(Math.random() * 9999).toString();

    url.searchParams.append(key, value);
    router.replace(url);
  }

  async function sendApiServer() {
    try {
      await OrgCourseList.getOrgCourseList({
        count: 0,
        offset: 20,
        filter_conditions: JSON.stringify(router.query),
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    console.log(router.query);
  }, [router.query]);

  return (
    <div className="p-5 space-y-5">
      <p className="text-lg font-medium">{JSON.stringify(router.query)}</p>
      <div className="space-x-5">
        <button
          className="px-5 py-2 bg-rose-500 text-white rounded-md"
          onClick={handler}
        >
          gen search query
        </button>
        <button
          className="px-5 py-2 bg-teal-500 text-white rounded-md"
          onClick={sendApiServer}
        >
          send query to api server
        </button>
      </div>
    </div>
  );
}
