export type IProps = {
  name: string
  absPath: string
  path: string
  onCopy: (path: string) => void
}

export default function Image({ name, absPath, path, onCopy }: IProps) {
  return (
    <div title={name} onClick={() => onCopy?.(path)} className="icons-item w-[100px] flex flex-col items-center p-4 rounded-lg cursor-pointer">
      <figure className="w-[32px]">
        <img className="w-full h-full object-contain" src={`@fs/${absPath}`} alt="" />
      </figure>
      {/* <h5 className="mt-2 text-xs text-center">{name}</h5> */}
      {/* <p className="whitespace-nowrap overflow-ellipsis">
        <i className="i-carbon:copy-file" />
        {path}
      </p> */}
    </div>
  )
}
