
import fs from 'node:fs';                           
const data = fs.readFile('./text.txt','utf8',(error,data)=>{

  if (error)
    {
        console.log(error);
    }
  else  
    {   
        console.log(data);
    }
});

