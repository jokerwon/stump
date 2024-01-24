export type IProps = {
  name: string
  absPath: string
  path: string
}

export default function Image({ name, absPath }: IProps) {
  return (
    <div className="p-4 rounded-lg bg-base-100 shadow-xl">
      <figure>
        <img src={`@fs/${absPath}`} alt="" />
      </figure>
      <h2 className="mt-2 text-center">{name}</h2>
      {/* <p>{path}</p> */}
    </div>
  )
}
