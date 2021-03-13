
export function getParam (key:string, url?:string) {
  if (typeof location === 'undefined') {
    return
  }
  url = url || window.location.href
  const reg = new RegExp('[?&#]' + key + '=([^&#]*)', 'i')
  const match = url.match(reg)
  let result

  if (match) {
    try {
      result = decodeURIComponent(match[1]) || ''
      return result
    } catch (e) {
    }
  }
  return ''
}
