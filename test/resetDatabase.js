import { pool } from '../src/models/connectionPool.js'

const client = await pool.connect();

try {
    await client.query('DELETE FROM jobs');
    await client.query('DELETE FROM companies');
    await client.query(`  
        insert into companies (id, name) values ('7034a6b4-99d4-4e34-8fb5-527ac6eeffe4', 'ABC Corp');
        insert into companies (name) values ('XYZ LLC');
        insert into companies (name) values ('ACME Enterprises');
        insert into jobs (id, company_id, title, description, location)
        values ('45da5a40-7328-44a3-87f8-43873e6a6539', '7034a6b4-99d4-4e34-8fb5-527ac6eeffe4', 'dev1', 'programar', 'SP');
        insert into jobs (id, company_id, title, description, location)
        values ('deb5ca22-c701-4d13-ba68-1160121f26a3', '7034a6b4-99d4-4e34-8fb5-527ac6eeffe4', 'dev2', 'desenvolver', 'MG');
        insert into jobs (id, company_id, title, description, location)
        values ('c9cdb241-1f07-4b81-afbc-266827ecbd14', '7034a6b4-99d4-4e34-8fb5-527ac6eeffe4', 'dev3', 'construir', 'SC');
    `);
} catch (error) {
    console.log(error.message);
} finally {
    await client.end();
}