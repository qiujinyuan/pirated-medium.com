import log4js from 'log4js';
import path from 'path';

log4js.configure({
  appenders: {
    default: {
      type: 'console',
      layout: {
        type: 'pattern',
        pattern: '%[[%d{yyyy-MM-dd hh:mm:ss.SSS}] [%p] %f{2}:%l%] - %m',
      },
    },
    pirated: {
      type: 'file',
      filename: path.join(process.cwd(), '/logs/pirated.log'),
    },
  },
  categories: {
    default: {
      appenders: ['default'],
      level: process.env.LOG_LEVEL || 'info',
      enableCallStack: true,
    },
    pirated: { appenders: ['pirated'], level: 'info' },
  },
});

const logger = log4js.getLogger(
  process.env.NODE_ENV === 'development' ? 'default' : 'pirated',
);

export default logger;
