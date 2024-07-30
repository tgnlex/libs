import {db} from '../../../db/db.ts';
import {Table} from '../../interfaces/table.ts';
import {log} from '../../log.ts'; 
async function deleteItem(table: Table, id: number):Promise<Void> {
  let sql = `DELETE FROM ${table.name} WHERE id = ?`;
  let result = await db.run(sql, [id]);
  if (result.changes === 0 ) {
    throw new Error(`${table.name} not found or operation failed`)
  }
}
export {deleteItem};
