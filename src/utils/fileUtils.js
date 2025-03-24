const fs = require('fs').promises;
const path = require('path');

const dataFilePath = path.join(__dirname, '../../users.json');

const readData = async () => {
    try {
        const data = await fs.readFile(dataFilePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading data:', error);
        return [];
    }
}

const writeData = async (data) => {
    try {
        await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
    } catch (error) {
        console.error('Error writing data:', error);
    }
}

module.exports = {
    readData,
    writeData,
};