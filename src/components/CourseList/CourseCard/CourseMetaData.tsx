export default function CourseMetaData({
  shortDescription,
  taglist,
  title,
}: {
  taglist: string[];
  title: string;
  shortDescription: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs text-[#524fa1] font-bold">
        {taglist.length > 0 ? taglist[0] : "미설정"}
      </span>
      <h4
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
        }}
        className="font-bold text-[#222] text-lg leading-[1.6] overflow-hidden"
      >
        {title}
      </h4>
      <p
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
        }}
        className="text-sm text-[#5e5f61] leading-[1.6] overflow-hidden"
      >
        {shortDescription}
      </p>
    </div>
  );
}
