import cron from 'node-cron';
import path from 'path';
import { listAndRemoveFiles } from '../utils/fileHandling.js';

function StopWatch() {
    cron.schedule('59 23 * * *', () => {
      listAndRemoveFiles();
    });
}

export { StopWatch };