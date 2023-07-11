export default function CourseMetaData({ shortDescription, taglist, title }: { taglist: string[]; title: string; shortDescription: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs font-bold text-[#524fa1]">{taglist.length > 0 ? taglist[0] : '미설정'}</span>
      <h4
        style={{
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
        }}
        className="overflow-hidden text-lg font-bold leading-[1.6] text-[#222]"
      >
        {title}
      </h4>
      <p
        style={{
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
        }}
        className="overflow-hidden text-sm leading-[1.6] text-[#5e5f61]"
      >
        {shortDescription}
      </p>
    </div>
  )
}
