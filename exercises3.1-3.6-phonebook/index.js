const express = require('express')
const morgan = require('morgan')
const app = express()
const PORT = 3001

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(express.json())
app.use(requestLogger)


let persons = [
    {
      "id": 1,
      "name": "Arto Hellas",
      "number": "040-123456"
    },
    {
      "id": 2,
      "name": "Ada Lovelace",
      "number": "39-44-5323523"
    },
    {
      "id": 3,
      "name": "Dan Abramov",
      "number": "12-43-234345"
    },
    {
      "id": 4,
      "name": "Mary Poppendieck",
      "number": "39-23-6423122"
    }
]

const generateId = () => {
    const maxId = persons.length > 0
      ? Math.max(...persons.map(n => n.id))
      : 0
    return maxId + 1
}

app.get('/info', (request, response) => {
    const len = persons.length
    const date = new Date()
    const response_string =`Phonebook has info for ${len} people
    ${date}` 
    response.send(response_string)
})
    
app.get('/api/persons', (request, response) => {
response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    if (person) {
      response.json(person)
    } else {
      response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
  
    response.status(204).end()
})

app.post('/api/persons', (request, response) => {
    const body = request.body
    console.log(body)
    if (!body.name) {
      return response.status(400).json({
        error: 'name missing'
      })
    }

    if (!body.number) {
        return response.status(400).json({
          error: 'number missing'
        })
    }

    const isNameExists = persons.some(person => person.name === body.name);

    if(isNameExists) {
        return response.status(400).json({ 
          error: 'name must be unique' 
        })
    }
  
    const person = {
      id: generateId(),
      number: body.number,
      name: body.name,
    }
  
    persons = persons.concat(person)
    response.json(person)
})

app.use(unknownEndpoint)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
    
    