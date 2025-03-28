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
            const user = await UserModel.getById(req.params.id);
            if (user){
                res.render('users/view', { user });
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
           const newUser = await UserModel.create(req.body);
           res.redirect('/users'); 
        } catch (error) {
            res.status(500).send('Internal server error');
        }
    }

    static async editForm(req, res){
        try {
            const user = await UserModel.getById(req.params.id);
            if (user){
                res.render('users/edit', { user });
            } else {
                res.status(404).send('User not found');
            }
        } catch (error) {
            res.status(500).send('Internal server error');
        }
    }

    static async update(req, res){
        try {
            const updatedUser = await UserModel.update(req.params.id, req.body);
            if (updatedUser){
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
            const success = await UserModel.delete(req.params.id);
            if (success) {
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
