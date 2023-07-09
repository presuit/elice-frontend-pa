import { OrgCourseList } from "@/api";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  async function sendApiServer() {
    try {
      await OrgCourseList.getOrgCourseList({
        offset: 0,
        count: 20,
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
          className="px-5 py-2 bg-teal-500 text-white rounded-md"
          onClick={sendApiServer}
        >
          send query to api server
        </button>
      </div>
    </div>
  );
}
