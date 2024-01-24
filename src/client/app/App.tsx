import { useEffect, useState } from 'react'
import ImageList from './components/ImageList'

import './App.css'

function App() {
  const [images, setImages] = useState([])

  useEffect(() => {
    fetch('http://localhost:9528/images').then(async (result: any) => {
      const data = await result.json()
      console.log(data)
      setImages(data.list)
    })
  }, [])

  return (
    <div className="h-[100vh] p-8">
      <ImageList list={images} />
    </div>
  )
}

export default App
