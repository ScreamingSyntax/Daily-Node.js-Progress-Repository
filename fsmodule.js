const fs = require('fs');

// const a = fs.readFile('app.js','utf-8',(error,data)=>{
//     console.log(error); // Prints error which is nulll
//     console.log(data);
// })


//async function
// const b = fs.readFile('igga.js','utf-8',(error,data)=>{  //This time there is no file called igga.js so error gets logged as well
//     console.log(error);
//     console.log(data);
// })


//read sync does the basic work of read file function
//that is it automatically allocations enconding that is 'utf-8'
//and the returns the error and data message 
// const b = fs.readFileSync('index.js');
// console.log(b.toString())
// console.log("Finished reading file")


// here the first parameter is the name and path of file
// 2nd is for the encoding type
// 3rd is the call back function
// fs.writeFile('File2.aodmaoidnian[odatxt','utf-8',()=>{
//     console.log("Written to the file nigga")
//     console.log(err)
// })


//Here the call back function isn't required
//It just makes our life easier
fs.writeFileSync('file2.txt','Chigga gott overridden')