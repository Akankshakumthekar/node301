const winston = require('winston');
const { transports } = require('./utils/logger');

const logConfiguration = {
    'transports': [
        new winston.transports.File({
            level: 'error',
            filename: 'logs/example.log'
        })
    ],
    format: winston.format.combine(
        winston.format.label({
            label:  `label`
        }),
    winston.format.timestamp({
        format: 'MM-DD-YYYY HH:mm:ss'
    })
    )
}

const logger = winston.createLogger(logConfiguration);

logger.log({
    message: 'hello, winstone',

    levele: 'info',

    level: 'error'
})

logger.info('hello, winstone');

transports.File({
    filename: 'logs/example.log'
})