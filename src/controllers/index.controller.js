const { Pool} = require('pg');
/* const format = require('pg-format'); */

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
    return res.json(response.rows);
}

const getCountyById = async (req,res)=>{
    const Id=req.params.id;
    const response = await pool.query('SELECT county.name, county.id FROM county JOIN state  ON (state.id = $1) AND (county.id_state = $1)', [Id]);
    return res.json(response.rows);
}

module.exports = {
    getState,
    getCountyById
}