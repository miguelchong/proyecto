const { Pool} = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password:'llave',
    database: 'proyecto',
    port: '5432'
});

const getState = async (req,res)=>{
    const response = await pool.query('SELECT * FROM state');
    console.log(response.rows);
    res.status(200).json(response.rows);
}

const getCounty = async (req,res)=>{
    const response = await pool.query('SELECT * FROM county JOIN state  ON (state.id = 1) AND (county.id_state = 1)');
    console.log(response.rows);
    res.status(200).json(response.rows);
}

module.exports = {
    getState,
    getCounty
}