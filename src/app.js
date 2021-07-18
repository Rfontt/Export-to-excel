import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import Routes from './routes/exportToExcel.js';
import { StopWatch } from './stopwatch/cron.js';

const app = express();
const folder = path.resolve('src', 'archives');

app.use(bodyParser.json());
app.use(Routes);
app.use(express.static(folder));

StopWatch();

export default app;