const express = require('express')
const app = express()
const port = 3000

// Simulates CPU-intensive operation
const heavyComputation = (iterations = 1e7) => {
  let sum = 0
  for (let i = 0; i < iterations; i++) {
    sum += Math.sqrt(i)
  }
  return sum
}

// Simulates memory load
const allocateMemory = (sizeInMB = 50) => {
  return Buffer.alloc(sizeInMB * 1024 * 1024)
}

// Basic health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

// CPU Load Endpoint
app.get('/cpu-load', (req, res) => {
  const result = heavyComputation()
  res.json({ result, message: 'CPU load simulated' })
})

// Memory Load Endpoint
app.get('/memory-load', (req, res) => {
  const memoryBlock = allocateMemory()
  res.json({ message: 'Memory allocated', size: memoryBlock.length })
})

// Simulate delayed response
app.get('/delay/:time', (req, res) => {
  const delay = parseInt(req.params.time) || 1000
  setTimeout(() => {
    res.json({ message: `Response delayed by ${delay}ms` })
  }, delay)
})

app.listen(port, () => {
  console.log(`Load testing server running at http://localhost:${port}`)
})
