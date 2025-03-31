const UserModel = require('../models/user.model');
const pool = require('../config/db');


class UserController {
    static async index(req, res){
        try {
            const result = await pool.query('SELECT * FROM user_info');
            const users = result.rows;
            res.render('users/index', { users });
        } catch (error) {
            res.status(500).send('Internal server error');
        }
    }

    static async view(req, res){
        try {
            const result = await pool.query('SELECT * FROM user_info WHERE id=$1', [req.params.id]);
            if (result){
                res.render('users/view', {
                    id: result.rows[0].id, 
                    username: result.rows[0].username,
                    email: result.rows[0].email, 
                    age: result.rows[0].age, 
                });
            } else {
                res.status(404).send('User not found');
            }
        } catch (error) {
            res.status(500).send('Internal server error');
        }   
    }

    static async createForm(req, res){
        res.render('users/create');
    }

    static async create(req, res){
        try {
           const newUser = await pool.query('INSERT INTO user_info (username, email, age) VALUES ($1, $2, $3) RETURNING *', [req.body.username, req.body.email, req.body.age]);
           console.log(newUser);
           res.redirect('/users'); 
        } catch (error) {
            res.status(500).send('Internal server error');
        }
    }

    static async editForm(req, res){
        try {
            console.log("Edit form uchun ID:", req.params.id); // ID ni tekshiramiz
            const result = await pool.query('SELECT * FROM user_info WHERE id=$1', [req.params.id]);
            console.log("Database query natijasi:", result); // Query natijasini tekshiramiz
            if (result && result.rows.length > 0){
                res.render('users/edit', { user: result.rows[0] });
            } else {
                res.status(404).send('User not found');
            }
        } catch (error) {
            console.error("Edit form xatoligi:", error); // Xatolikni konsolga chiqaramiz
            res.status(500).send('Internal server error');
        }
    }

    static async update(req, res){
        try {
            const result = await pool.query('UPDATE user_info SET username=$1, email=$2, age=$3 WHERE id=$4 RETURNING *', [req.body.username, req.body.email, req.body.age, req.params.id]);
            if (result.rows.length > 0){
                res.redirect('/users/' + req.params.id);
            } else {
                res.status(404).send('User not found');
            }
        } catch (error) {
            res.status(500).send('Internal server error');
        }
    }

    static async delete(req, res){
        try {
            console.log(req);
            const { id } = req.params
            const result = await pool.query('DELETE FROM user_info WHERE id=$1', [id]);
            console.log(result);
            if (result.rowCount > 0) {
                res.redirect('/users');
            } else {
                res.status(404).send('User not found');
            }
        } catch (error) {
            res.status(500).send('Internal server error');
        }
    }
}

module.exports = UserController;
