import Image from './Image'

export default function ImageList({ list = [] }) {
  return (
    <ul className="image_list">
      {list.map((image: any) => (
        <li key={image.name} className="flex justify-center items-end">
          <Image {...image} />
        </li>
      ))}
    </ul>
  )
}
