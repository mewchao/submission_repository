const express = require('express')
const cors = require('cors')

const app = express()

// 用于启用内置的 express.json() 中间件，以便正确解析请求体
app.use(express.json())
app.use(cors())

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

app.get('/notes', (request, response) => {
response.json(notes)
})

app.get('/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  const note = notes.find(note => note.id === id)
  if (note) {
    response.json(note)
  } else {
    response.status(404).end()
  }
})

const generateId = () => {
  const maxId = notes.length > 0
    ? Math.max(...notes.map(n => n.id))
    : 0
  return maxId + 1
}

app.post('/notes', (request, response) => {
  const body = request.body
  // console.log(body)

  if (!body.content) {
    return response.status(400).json({
      error: 'content missing'
    })
  }

  const note = {
    date: new Date(),
    id: generateId(),
    content: body.content,
    important: body.important || false,
  }

  notes = notes.concat(note)
  response.json(note)
})


app.delete('/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  notes = notes.filter(note => note.id !== id)
  response.status(204).end()
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`)
})

