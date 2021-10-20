// import config from 'config';
// import { dbConfig } from '@interfaces/db.interface';

// const { host, port, database }: dbConfig = config.get('dbConfig');

export const dbConnection = {
  url: `mongodb+srv://admin-deeni:muha234mmad@cluster0.n2lhm.mongodb.net/mediaplusDB`,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
};
