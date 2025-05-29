import fs from 'node:fs';                           
const data = fs.readFile('./week_3/temp.txt','utf8',(error,data)=>{

  if (error)
    {
        console.log(wrong_file);
    }
  else  
    {   
        console.log(data);
    }
});

