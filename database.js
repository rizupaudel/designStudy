const mysql = require('mysql2/promise');

var connection_object = {
    host: '127.0.0.1',
    port: 3306,
    user: 'user',
    password: 'P@ssW0rd',
    database: 'design_study',  
}

// const connection = mysql.createConnection(connection_object);

// connection.connect((err) => {
//     if (err) {
//         console.log(err)
//     return
//     }
//     console.log('Database connected.')
// });

async function runQuery(query) {
    const connection = await mysql.createConnection(connection_object);
    const [rows, fields] = await connection.execute(query);
    return rows;
}

module.exports = { runQuery };