import {run} from './run.ts';
import {db} from '../../../db/db.ts';
import {Table} from '../../interfaces/table.ts';

const insert = async (table: Table, values: any[]) => {
  const sql = `INSERT INTO ${table.name} \( ${table.params} \) VALUES \( ${values} \) `;
  const ready = await db.prepare(sql).run();
};

const insertMany = async(table: Table, items: any[]) => {
    for (const item of items) insert(table, item);
};



export {insert, insertMany}
