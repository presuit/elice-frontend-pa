interface Props {
  cause: string
}

export default function NotFound({ cause }: Props) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-32">
      <img src="/images/notFound.png" alt="notFound" width={64} height={64} />
      <span className="text-lg font-medium text-zinc-500">{cause}</span>
    </div>
  )
}
