import http from 'http';
import fs from 'fs';

const hostname = '0.0.0.0';
const port = 3000;

const app = http.createServer((req, res) => {
  var url = req.url;
  if (url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!');
  } else if(url === '/test') {
    fs.readFile("views/test.html", function (err, data) {
      res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
      res.write(data);
      res.end();
    })
  } else {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Content for '+url+' url was not provided!');
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

