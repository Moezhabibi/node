const fs = require('fs')

fs.readFile('./Wellcome.txt','utf-8',(err,data)=>{
    if (err) {
        console.log(err)
        
    } else {
        console.log(data)
        }

})
// console.log (fs.readFileSync('./Wellcome.txt','utf-8'))
