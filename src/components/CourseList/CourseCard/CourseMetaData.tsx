interface Props {
  enrollType: number
  isFree: boolean
  title: string
  shortDescription: string
}

export default function CourseMetaData({ shortDescription, title, enrollType, isFree }: Props) {
  function renderLabel() {
    return (
      <>
        {enrollType === 0 && isFree && <span className="text-xs font-bold text-elice-purple">무료</span>}
        {enrollType === 0 && !isFree && <span className="text-xs font-bold text-elice-purple">유료</span>}
        {enrollType === 4 && <span className="text-xs font-bold text-elice-purple">구독</span>}
        {enrollType === 5 && <span className="text-xs font-bold text-elice-purple">관리자 등록</span>}
      </>
    )
  }

  return (
    <div className="flex flex-col gap-1">
      {renderLabel()}
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
