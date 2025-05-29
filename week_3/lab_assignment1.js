//File System
/*
For this quick demo, we will learn how to read a file from the system:
- fs.readFile(): Reads the content of a file
- fs.readFileSync(): Same as readFile() but operates synchronously

Link: https://nodejs.org/en/learn/manipulating-files/reading-files-with-nodejs
*/

//we need the fs object => tho methods => readfile, readfileSync
//way1 : CJS


/*const fs = require('node:fs'); //works immediate

try {
  const data = fs.readFileSync('/Users/joe/test.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}*/

/********************************************************Method 2********************************************************** */
/*try {
  const data = fs.readFileSync('/Users/joe/test.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}*/

//sync <===> blocking
//Any function that ends with "Sync" means blocking



//fs.readFileSync(); //Stop the rest of the code till the file is fully read
//param1: file location/path
//param2: Anonymous Arrow (err,data) => {}


/*fs.readFile('./temp.txt','UTF-8', (err, data) => {
  //if (err) throw err;
  //console.log(data);
  if (err){
        console.log(err);
  }
  else  {   
        console.log(data);
    }
  }

);*/

//way2 : MJS

//need more settings (error,data)
//fs.readFile(); //The rest of the code will run smoothly without blocking
import fs from 'node:fs';                           
const data = fs.readFile('./week_3/temp.txt','utf8',(err,data)=>{

  if (err)
    {
        console.log(err);
    }
  else  
    {   
        console.log(data);
    }
});


