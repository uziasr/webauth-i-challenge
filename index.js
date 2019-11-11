const server = require('./data/api/server')

const HOST = 8000

server.listen(HOST, ()=>{
    console.log('you are now listening on localhost:', HOST)
})