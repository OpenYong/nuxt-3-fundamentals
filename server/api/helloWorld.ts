export default defineEventHandler((event) => {
  return {
    message: getMethod(event) + 'Hello World!'
  }
})