var http = require('http')

http.createServer((req,res)=>{
    res.end("<h1>Milan Nakum </h1>")
}).listen(4001)

console.log("Server is started on http://127.0.0.1:4001")
