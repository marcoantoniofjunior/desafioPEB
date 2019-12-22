'use strict';

const app = require('../src/app');
const http = require('http');
const debug = require('debug')('nodeApi:server');
const dotenv = require('dotenv');
const path = require('path');

const port = normalizePort(process.env.PORT) || 3000;

dotenv.config({ path: path.resolve(__dirname, '../.env.dev')});

const server = http.createServer(app);

server.listen(port, function(){
    debug('Express server listing on port ' + port);
});

server.on('error', onError);

server.on('listening', onListening);

console.log('Running on port: '+ port);

function normalizePort(val){
    const port = parseInt(val,10);
    if (isNaN(port)){
        return val;
    }
    if (port >= 0){
        return port;
    }
    return false;
};

function onError(error){

    if (error.syscall !== 'listen'){
        throw error;
    }

    const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

    switch (error.code) {
        case 'EACCES':
            console.log(bind + 'requires elevation privileges');
            break;
    
        case 'EADDRINUSE':
            console.log(bind + 'is a already in use');

        default:
            throw error;
    }

};