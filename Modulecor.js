const http = require('http')
http.createServer((req,res)=> {
    res.write('<h1>HELLO NODE!!! <h1>')
    res.end ()

}). listen(3000,console.log('n quand qullequn atteint'))