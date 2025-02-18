export default async function someAsyncOperation() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Hello World')
    }, 1000)
  })
}