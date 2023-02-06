const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=>{
    const read = fs.createReadStream('./static/index.html')
    read.pipe(res)
})

const PORT = 3000;

server.listen(PORT)

console.log(`Server ejecutandose en puerto ${PORT}`);