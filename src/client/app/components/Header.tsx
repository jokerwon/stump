export default function Header() {
  return (
    <header>
      <nav className="relative flex flex-none gap-4 p-4 border-b border-base bg-base text-xl">
        <div className="flex-auto"></div>
        <h1 className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center tracking-2px pointer-events-none">Stump</h1>
        <a href="http://github.com/jokerwon/stump" className="i-carbon-logo-github icon-button flex-none" target="_blank" title="GitHub"></a>
      </nav>
    </header>
  )
}
