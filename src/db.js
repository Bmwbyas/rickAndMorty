const { Pool } = require("pg")
const dotenv = require("dotenv")

dotenv.config()

const pool = new Pool({
    user: process.env. POSTGRESS_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_PORT
})
const connectDb = async () => {
    try {


        await pool.connect()
        const res = await pool.query('create TABLE askerkoalexandr(\n' +
            '    id SERIAL PRIMARY KEY,\n' +
            '    name VARCHAR(255),\n' +
            '    data jsonb       \n' +
            ')')
         console.log(res.rows[0])
    } catch (error) {
        console.log(error)
    }
}

module.exports = {connectDb, pool}
