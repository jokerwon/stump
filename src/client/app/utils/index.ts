export const copyText = async (text?: string) => {
  if (text) {
    try {
      await navigator.clipboard.writeText(text)
      return true
    } catch (err) {}
  }
  return false
}
