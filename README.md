# Express.js Load Testing with k6

This repository provides a basic Express.js application with endpoints designed for load testing. It also includes a k6 script to benchmark the server performance.

## Features
- Express.js app with endpoints for CPU, memory, and response delay simulation.
- k6 script for load testing.
- Easy setup and usage instructions.

## Requirements
- [Node.js](https://nodejs.org/) (v14+ recommended)
- [k6](https://k6.io/) for running load tests

## Setup Instructions

### 1. Clone the Repository
```sh
git clone https://github.com/yourusername/express-k6-load-test.git
cd express-k6-load-test
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Start the Express Server
```sh
node server.js
```
The server will run at `http://localhost:3000`.

## Endpoints
| Endpoint          | Description |
|------------------|-------------|
| `/health`        | Health check endpoint |
| `/cpu-load`      | Simulates CPU-intensive computation |
| `/memory-load`   | Allocates memory to stress test RAM |
| `/delay/:time`   | Delays response by specified milliseconds |

## Running Load Tests with k6

### 1. Install k6
Follow the official installation guide for your OS: [k6 Installation](https://k6.io/docs/getting-started/installation/)

### 2. Run the k6 Load Test
```sh
k6 run k6_script.js
```

## Customizing the Load Test
Modify the `options` in `k6_script.js` to change test parameters:
```js
export let options = {
  vus: 10, // Number of virtual users
  duration: '30s', // Test duration
}
```

## License
This project is open-source and available under the MIT License.

