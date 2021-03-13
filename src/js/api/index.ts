export function getCount () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(6)
    }, 1000)
  })
}
