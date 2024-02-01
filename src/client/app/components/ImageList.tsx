import { useEffect, useState } from 'react'
import { copyText } from '../utils'
import Image from './Image'
import Notification from './Notification'

export default function ImageList() {
  const [images, setImages] = useState([])
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    fetch('http://localhost:9528/images').then(async (result: any) => {
      const data = await result.json()
      console.log(data)
      setImages(data.list)
    })
  }, [])

  const onCopy = async (path: string) => {
    setCopied(await copyText(path))
    setTimeout(() => {
      setCopied(false)
    }, 2e3)
  }

  return (
    <div className="mt-6 py-4 of-y-auto bg-light-300">
      <ul className="flex flex-wrap select-none justify-center text-2xl text-dark-600 dark:text-dark-900 text-4xl">
        {images.map((image: any) => (
          <li key={image.path} className="flex justify-center m-2">
            <Image {...image} onCopy={onCopy} />
          </li>
        ))}
      </ul>
      <Notification visible={copied}>
        <i className="i-carbon:checkmark-outline mr-2 font-xl align-middle" />
        <span className="align-middle">Copied</span>
      </Notification>
    </div>
  )
}
