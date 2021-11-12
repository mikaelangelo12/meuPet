const mysql = require('mysql2/promise')

async function main(){
    await mysql.createConnection("mysql://root:luiztools@localhost:3306/crud")
    console.log("Conectou ao Mysql")
}
main().catch((err) => console.log(err))

module.exports = mysql