import express from 'express'
import http from 'http';

const app=express();
const server = http.createServer(app);

const port=8080;

app.get('/',(req,res)=>{
  res.send("<h1>hi</h1>");
})

app.post('/post', (req,res)=>{
  console.log(req);
  console.log(req.body);
  res.send('');
})

server.listen(port,()=>{
  console.log('server started');
})
