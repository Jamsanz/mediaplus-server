process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';

import 'dotenv/config';
import App from './app';
import AuthRoute from './routes/auth.route';
import IndexRoute from './routes/index.route';
import UsersRoute from './routes/users.route';
import PostsRoute from './routes/posts.route';
import ContactsRoute from './routes/contact.route';
import validateEnv from './utils/validateEnv';
import StakeholderRoute from './routes/stakeholder.route';

validateEnv();

const app = new App([new IndexRoute(), new PostsRoute(), new ContactsRoute(), new UsersRoute(), new AuthRoute(), new StakeholderRoute()]);

app.listen();
