import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import config from './config';
import router from './src/routers';
import utils from './src/utils';

const app = express();
app.set('port', process.env.PORT || config.port);
utils.dirExists(config.publicFolder);

app.use('/', express.static(path.resolve(__dirname, 'public')));

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());
app.use(
  cors({
    origin: config.originUrl, //允许访问
    optionsSuccessStatus: 200,
  })
);

app.use('/', router.routerInfo);

app.listen(app.get('port'), () => {
  console.log(` app listening on port ${app.get('port')}!`);
});
