import { pool } from '../src/models/connectionPool.js'

const client = await pool.connect();

try {
    await client.query('DELETE FROM jobs');
    await client.query('DELETE FROM companies');
    await client.query(`  
        insert into companies (id, name) values ('7034a6b4-99d4-4e34-8fb5-527ac6eeffe4', 'ABC Corp');
        insert into companies (name) values ('XYZ LLC');
        insert into companies (name) values ('ACME Enterprises');
    `);
} catch (error) {
    console.log(error.message);
} finally {
    await client.end();
}