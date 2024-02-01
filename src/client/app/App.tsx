import ImageList from './components/ImageList'
import Header from './components/Header'

const style = {
  '--theme-color': '#0F0F0F',
}

function App() {
  return (
    // @ts-ignore
    <div className="h-screen overflow-hidden flex flex-col" style={style}>
      <Header />
      <div className="flex-auto flex flex-col of-hidden">
        <main className="h-full of-hidden grid grid-rows-[max-content_1fr]">
          <div className="md:mx-6 md:mt-6 md:flex md:shadow md:rounded outline-none md:py-1 py-3 px-4 border-b border-x border-b md:border-t border-base">
            <input className="text-base outline-none w-full py-1 px-4 m-0 bg-transparent" />
          </div>
          <ImageList />
        </main>
      </div>
    </div>
  )
}

export default App
