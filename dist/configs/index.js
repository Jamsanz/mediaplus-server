"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CREDENTIALS = exports.ORIGIN = exports.LOG_DIR = exports.LOG_FORMAT = exports.SECRET_KEY = exports.DB_DATABASE = exports.DB_PORT = exports.DB_HOST = exports.PORT = exports.NODE_ENV = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)({ path: `.env` });
exports.NODE_ENV = 'development';
exports.PORT = 5000;
exports.DB_HOST = 'localhost';
exports.DB_PORT = 27017;
exports.DB_DATABASE = 'test';
exports.SECRET_KEY = 'secretKey';
exports.LOG_FORMAT = 'dev';
exports.LOG_DIR = '../logs';
exports.ORIGIN = '*';
exports.CREDENTIALS = true;
//# sourceMappingURL=index.js.map