export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center py-32 gap-3">
      <img src="/images/notFound.png" alt="notFound" width={64} height={64} />
      <span className="text-lg font-medium text-zinc-500">
        검색 결과가 없습니다.
      </span>
    </div>
  );
}
