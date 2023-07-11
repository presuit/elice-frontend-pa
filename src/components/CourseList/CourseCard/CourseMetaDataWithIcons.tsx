import IcoCanlendar from '@/components/Icons/IcoCalendar'
import IcoComputer from '@/components/Icons/IcoComputer'
import IcoGraphSquare from '@/components/Icons/IcoGraphSquare'

export default function CourseMetaDataWithIcons({ logoFileUrl }: { logoFileUrl: string | null }) {
  return (
    <div className="relative mt-5">
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <IcoGraphSquare classname="w-6 h-6" />
          <span className="text-xs text-[#7d7e80]">난이도: 미설정</span>
        </div>
        <div className="flex items-center gap-2">
          <IcoComputer classname="w-6 h-6" />
          <span className="text-xs text-[#7d7e80]">수업: 온라인</span>
        </div>
        <div className="flex items-center gap-2">
          <IcoCanlendar classname="w-6 h-6" />
          <span className="text-xs text-[#7d7e80]">기간: 무제한</span>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${logoFileUrl})`,
        }}
        className="absolute right-0 top-0 h-[52px] w-[52px] bg-contain"
      />
    </div>
  )
}
