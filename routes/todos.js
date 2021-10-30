var express = require('express')
var router = express.Router()

const pool = require('../db')

router.get('/add', (req, res)=>{
    res.render('todos_form', {title: 'Add todos'});
})

router.post('/add', async(req, res)=>{
    try {
        const {description} = req.body
        const newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES($1) RETURNING *",
            [description]
        )
        // res.json(newTodo.rows[0]);

        //redirect
        const allTodo = await pool.query('SELECT * FROM todo')

        res.render('index', {title: 'allTodo', alltd: allTodo.rows});
    } catch (error) {
        console.error(error.message)
        
    }
})

router.get('/', async(req,res)=>{
    try {
        const allTodo = await pool.query('SELECT * FROM todo')
        // res.json(allTodo.rows)
        res.render('index',{title: 'allTodo', alltd: allTodo.rows})

    } catch (error) {
        res.render('error',{error: error});
    }
})
module.exports = router