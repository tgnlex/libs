import {db} from '../../db/db.ts';

async function run(sql: string, params: []) {
  try {
    const result = await db.prepare(sql).run(params);
    return result;
  } catch (err) { console.error(err); return err; };
};

export {run};

