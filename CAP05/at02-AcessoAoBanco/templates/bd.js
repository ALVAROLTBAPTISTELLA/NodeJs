import mysql from 'mysql2/promise'

const dbConnection = async () =>{
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST, //"localhost",
        user: process.env.DB_USER, //"root",
        password: process.env.DB_PASSWORD,
        databsee: process.env.DB_NAME //"amigo_do_pet"
    })
}

export default dbConnection