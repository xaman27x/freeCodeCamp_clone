
const http = require('http');

const server = http.createServer((req, res) => {
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
