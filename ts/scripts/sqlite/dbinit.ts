import sqlite3 from 'sqlite3';
import {open} from 'sqlite';
import path from 'path';
const dbPath = `${path.join(__dirname, 'dev.db')}`;
const db = new sqlite3.Database(dbPath);

export {db};
