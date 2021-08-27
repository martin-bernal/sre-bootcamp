const mysql = require('mysql2/promise');
const Config = require('config');


let config = Config;

export async function query(sql, params){
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DATABASE
    }, (error) => {
        console.log(error);
    });
    const [rows,] = await connection.execute(sql, params);
    return rows;
}