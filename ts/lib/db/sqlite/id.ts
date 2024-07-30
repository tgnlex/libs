import {db} from '../../../db/db.ts';

function getByID(table: Table, id: Int) {
  const sql = `SELECT * FROM ${table.name} WHERE ${table.index} = ?`
  db.get(sql, [id], (err, row) => {
    if (err) {
      return console.error(err.message)
    }
    return row 
				? console.log([...row])
				: console.log(`No ${table.name} found with the id ${table.index}`)
  })
} 

