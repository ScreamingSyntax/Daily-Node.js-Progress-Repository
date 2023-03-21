  const http = require('http');
  const fs = require('fs');

const port = process.env.PORT || 3000;

const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html')
    if(req.url =='/another' ){
        res.statusCode = 200;
        res.end('<h1> This is your Mom</h1><p> Go Study </p>')
    }
    else if(req.url == "/"){
        const a = fs.readFileSync('./index.html');
        res.statusCode == 200;
        res.end(a);
    }
    else if(req.url =="/about"){
        res.statusCode = 200;
        res.end('<h1>This is about yo mama</h1><p>She goin to slap your bitch ass</p>')
    }
    else{
        res.statusCode = 404;
        res.end('<h1>The page wasn\'t found on the server</h1>')

    }
});

server.listen(port, ()=> {console.log(`Server is listening on port ${port}`)});