const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

const todos = [
  {
    id: 1,
    title: 'Comprar pan',
    completed: false,
  },
  {
    id: 2,
    title: 'Comprar leche',
    completed: true,
  },
]

app.get('/', (req, res) => {
  res.json(todos)
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
