const winston = require('winston');
require('winston-mongodb');
require('express-async-errors');

module.exports = function () {
  // supposed to throw an exception and log it in "uncaughtExceptions.log" but it doesn't work. Ask Ben
    // winston.exceptions.handle(
    //     new winston.transports.File({ filename: 'uncaughtException.log' }));
      
    //   process.on('unhandledRejection', (ex) => {
    //     throw ex;
    //   });

    winston.configure({transports: [new winston.transports.File({ filename: 'logfile.log' }) ]});
  // talk to Ben about this
    // winston.configure({transports: [new winston.transports.MongoDB({
    //   db: 'mongodb://localhost/vidly',
    //   level: 'info'
    // })]});
};

// original Mosh code: 
//     inston.add(winston.transports.File, { filename: 'logfile.log' });
//     winston.add(winston.transports.MongoDB, {
//     db: 'mongodb://localhost/vidly',
//     level: 'info'
//   });

