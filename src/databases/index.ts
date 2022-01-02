// import config from 'config';
// import { dbConfig } from '@interfaces/db.interface';

// const { host, port, database }: dbConfig = config.get('dbConfig');

// mongodb + srv://admin-deeni:muha234mmad@cluster0.n2lhm.mongodb.net/mediaplusDB

export const dbConnection = {
  url: `mongodb://localhost:27017/mediaplusDB`,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
};
