import * as path from 'path';
import { Config } from './src/types';

const publicFolder = path.resolve(__dirname, 'public');
const config: Config = {
  originUrl: '*', //允许所有访问
  port: 8889, //服务端口
  imgService: 'http://www.ndzy01.com:8888/uploads/',
  publicFolder,
};

export default config;
