const http = require('http');
const mypug = require('./main');

const port = process.env.port || '3000'

mypug.set('port',port);

var server = http.createServer(mypug);

server.listen(port);
server.on('error', onError);

function onError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }
}