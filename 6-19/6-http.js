"use strict";

// 开启一个http服务
var http = require('http')
var server = http.createServer(function(request,response){
    console.log(request.method+':'+request.url)
    response.writeHead(200,{'Content-Type':'text/html'})
    response.end('<h1>Hello world!</h1>')
})
server.listen(3000)
console.log('Server is running at http://127.0.0.1:3000')

// url
var url = require('url')
console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'))

// path
var path = require('path')
var workDir = path.resolve('.')
console.log(workDir)
var filePath = path.join(workDir,'pub','index.html')
console.log(filePath)

