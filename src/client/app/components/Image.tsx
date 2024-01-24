export type IProps = {
  name: string
  absPath: string
  path: string
}

export default function Image({ name, absPath }: IProps) {
  return (
    <div className="w-[100px] h-[105px] flex flex-col items-center justify-center p-4 rounded-lg bg-base-100">
      <figure className="w-[48px]">
        <img className="w-full h-full" src={`@fs/${absPath}`} alt="" />
      </figure>
      <h2 className="mt-2 text-center">{name}</h2>
      {/* <p>{path}</p> */}
    </div>
  )
}
