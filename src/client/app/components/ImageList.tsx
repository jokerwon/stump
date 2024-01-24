import Image from './Image'

export default function ImageList({ list = [] }) {
  return (
    <ul className="grid grid-cols-6 gap-10 md:grid-cols-4 sm:grid-cols-3 <sm:grid-cols-2">
      {list.map((image: any) => (
        <li key={image.name} className="flex justify-center items-end">
          <Image {...image} />
        </li>
      ))}
    </ul>
  )
}
