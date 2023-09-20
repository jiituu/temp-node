const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our home page'); // Use res.end, not req.end
  } else if (req.url === '/about') { // Use else if to handle different routes
    res.end("Here is about us");
  } else {
    res.end(`
      <h1>Oops!</h1>
      <p>We can't find the page you're looking for.</p>
      <a href="/">Back Home</a>
    `);
  }
});

server.listen(5000);
