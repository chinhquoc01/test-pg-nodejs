const {Pool} = require('pg')
require('dotenv').config()

// const pool = new Pool({
//     user: 'postgres',
//     password: '2468101',
//     database: 'todo_database',
//     host: 'localhost',
//     port: 5432
// });


// const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`

const connectionString = "postgres://ngeubxmvgcuazk:a85917513be63d26daeb934ee5acc96bf066972d154ccacdddb04ff073f2f084@ec2-3-233-55-123.compute-1.amazonaws.com:5432/d811obm5k096d6"

const pool = new Pool({
    user: 'ngeubxmvgcuazk',
    password: 'a85917513be63d26daeb934ee5acc96bf066972d154ccacdddb04ff073f2f084',
    database: 'd811obm5k096d6',
    host: 'ec2-3-233-55-123.compute-1.amazonaws.com',
    port: 5432,
    // connectionString: connectionString,
    ssl:{
        rejectUnauthorized: false
    }
});

module.exports = pool