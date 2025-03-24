const {readData, writeData} = require('../utils/fileUtils');
const {v4: uuidv4} = require('uuid');

class UserModel {
    static async getAll() {
        return await readData();
    }

    static async getById(id){
        const data = await readData();
        return data.find(user => user.id === id); 
    }

    static async create(newUser){
        const data = await readData();
        newUser.id = uuidv4();
        data.push(newUser);
        await writeData(data);
        return newUser;
    }

    static async update(id, updatedUser) {
        const data = await readData();
        const index = data.findIndex(user => user.id === id);
        if (index !== -1) {
            data[index] = { ...data[index], ...updatedUser, id };
            await writeData(data);
            return data[index];
        }
        return null;
    }

    static async delete(id){
        const data = await readData();
        const initialLength = data.length;
        const updatedData = data.filter(user => user.id !== id);
        if (updatedData.length < initialLength){
            await writeData(updatedData);
            return true;
        }
        return false;
    }
}

module.exports = UserModel;
