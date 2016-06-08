import http from 'http';

http.createServer((req, res) =>{
  res.end("fine fine");
}).listen(8000);
