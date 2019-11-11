const server = require('./server')

const HOST = 8000

server.listen(HOST, ()=>{
    console.log('you are now listening on localhost:', HOST)
})