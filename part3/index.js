const express = require('express')
const app = express()
const PORT = 3001

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2022-05-30T17:30:31.098Z",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2022-05-30T18:39:34.091Z",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2022-05-30T19:20:14.298Z",
    important: true
  }
]
// 第一个 request 参数包含 HTTP 请求的所有信息，第二个 response 参数用于定义如何对请求进行响应。
app.get('/', (request, response) => {
response.send('<h1>Hello World!</h1>')
})

app.get('/api/notes', (request, response) => {
response.json(notes)
})

app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`)
})

