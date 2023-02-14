"use strict";
// import config from 'config';
// import { dbConfig } from '@interfaces/db.interface';
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnection = void 0;
// const { host, port, database }: dbConfig = config.get('dbConfig');
// mongodb + srv://admin-deeni:muha234mmad@cluster0.n2lhm.mongodb.net/mediaplusDB
// mongodb://localhost:27017/mediaplusDB
exports.dbConnection = {
    url: `mongodb+srv://admin-deeni:muha234mmad@cluster0.n2lhm.mongodb.net/mediaplusDB`,
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    },
};
//# sourceMappingURL=index.js.map