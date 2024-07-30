import {db} from './db.ts';
import {backup} from 'saveqlite'
//import {logError, logEvent} from '../lib/log.ts';
import path from 'path';
const location = './dev.db';
async function backupDB(loc: string) {
  
  backup(`${loc}`, `./backups/${Date.now()}.txt`)
    .then(() => {
      console.log(`Backup complete at: ${loc}`)
    })
    .catch((err: Error) => {
      console.error(`Backup failed: ${err.message}`)
    });
}
backupDB(location);
export {backupDB};
