import * as express from 'express';
import formatData from '../utils/formatData';

const routerUtils = express.Router();
routerUtils.use(function (req, res, next) {
  console.log(`${formatData(new Date())}-----${req.path}-------${req.method}`);
  next();
});

export default routerUtils;
