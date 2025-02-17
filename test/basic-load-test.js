const http = require('k6/http')
const { sleep, check } = require('k6')

export let options = {
  vus: 10, // Number of virtual users
  duration: '30s', // Test duration
}

export default function () {
  let responses = []

  // Health check
  responses.push(http.get('http://localhost:3000/health'))

  // CPU Load test
  responses.push(http.get('http://localhost:3000/cpu-load'))

  // Memory Load test
  responses.push(http.get('http://localhost:3000/memory-load'))

  // Delayed response test (1s delay)
  responses.push(http.get('http://localhost:3000/delay/1000'))

  // Check responses
  responses.forEach((res) => {
    check(res, {
      'is status 200': (r) => r.status === 200,
    })
  })

  sleep(1) // Wait between iterations
}
