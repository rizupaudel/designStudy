var mysql = require('mysql')

var connection = mysql.createConnection({
  host: '127.0.0.1',
  port: 3306,
  user: 'user', //
  password: 'P@ssW0rd', //
  database: 'design_study',
  
})

connection.connect((err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('Database connected.')
})

module.exports = connection