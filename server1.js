var http = require('http') //http is core module.
var a = 10
var b = 20
var c = a+b
var msg
if(c==30){
     msg = "Sum is 30"
}else{
    msg = "Sum is not 30"
}
http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'})
    res.write("A Value is "+ a)
    res.write("B Value is "+ b)
    res.write(`Sum is ${a+b}`)
    res.end(msg + "done")
}).listen(4032)
console.log("server is started at http://127.0.0.1:4032")