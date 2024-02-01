interface Context {
  cwd: string
  root: string
  clientPort: number
  serverPort: number
  [k: string]: any
}
