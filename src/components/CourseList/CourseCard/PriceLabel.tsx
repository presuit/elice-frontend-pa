export default function PriceLabel({
  enrollType,
  isFree,
}: {
  enrollType: number;
  isFree: boolean;
}) {
  return (
    <div className="border-t border-main-background pt-4">
      {enrollType === 0 && isFree && (
        <span className="font-bold text-[#00ab53]">무료</span>
      )}
      {enrollType === 0 && !isFree && (
        <span className="font-bold text-[#524fa1]">유료</span>
      )}
      {enrollType === 4 && (
        <span className="font-bold text-[#524fa1]">구독</span>
      )}
      {enrollType === 5 && (
        <span className="font-bold text-[#524fa1]">관리자 등록</span>
      )}
    </div>
  );
}
