// // const express = require('express')
// // const app = express()
// // const fs = require('fs');
// // const port = 3000

// // // respond with "hello world" when a GET request is made to the homepage
// // app.get('/hello', (req, res) => {
// //   res.send('hello world')
// // })

// // app.get('/',(req,res)=>{
// //     const a = fs.readFileSync('./index.html')
// //     res.send(a.toString());
// // })
// // app.listen(port,()=>{
// //     console.log('Example app listening at http://localhost:',port);
// // })

// // const express = require ('express');
// // const fs = require('fs');
// // const app = express();
// // const port = 3000;

// // app.get("/",(req,res)=>{
// //   const ac = fs.readFileSync('./index.html');
// //   res.send(ac);
// // });

// // app.get("/home",(req,res)=>{
// //   res.send("This is the Home Page");
// // })

// // app.get("/about",(req,res)=>{
// //   res.send("This is the about section");
// // });

// // app.listen((port),()=>{
// //   console.log(`Listening at port ${port}`);
// // })

// const express = require('express');
// const fs = require('fs');
// const app = express();
// const port =3000;

// app.get("/",(req,res)=>{
//   const indexPage = fs.readFileSync('./index.html');
//   res.send(indexPage.toString());
// });

// app.get("/home",(req,res)=>{
//   res.send("Welcome to Home Page");
// });

// app.get("/abo?ut",(req,res)=>{
//   res.send("This is about page");
// });

// app.get("/file",(req,res)=>{
//   let path = fs.readFileSync("./File2.txt")
//   res.send(path.toString());
// });


// app.get("/users/:userId/books/:bookId",(req,res)=>{
//   res.send(req.params);
// })
// app.listen(port,()=>{
//   console.log(`Listening to port https:localhost:${port}`)
// });


const express = require('express');
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
  res.send("Why are you geh");
});

app.get("/get",(req,res)=>{
  res.send("You are geh");
});

app.listen(port,()=>{
  `The local host is running with port :${port}`
});