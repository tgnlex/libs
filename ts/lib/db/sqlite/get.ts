import {Table} from '@/interfaces/Table.ts'

async function getAll(table: Table, id: number): Promise<T | undefined> {
  const sql = `SELECT * FROM ${table.name}`
}
