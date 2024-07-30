import {db} from '../db';

function dbTable(table: string, data: string) {
  db.run(`CREATE TABLE ${table} (${data})`);
}

export {dbTable};
