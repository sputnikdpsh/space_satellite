const path = require('path');
const fs = require('fs');
const fsp = require('fs/promises');

class FileService {
    constructor() {
        this.uploadDir = path.resolve(__dirname, '../uploads');
    }
    async upload(file) {
        await fsp.mkdir(this.uploadDir, { recursive: true });
        const clearFilename = file.originalname.replace(/\s+/g, '_');
        const uniqueFilename = `${Date.now()}-${Math.round(Math.random() * 1E9)}-${clearFilename}`;
        const filePath = path.join(this.uploadDir, uniqueFilename);
        await fsp.rename(file.path, filePath); // Перемещаем файл
        return {
            id: uniqueFilename,
            url: `/uploads/${uniqueFilename}`
        };
    }

    async download(filename) {
        const filePath = path.join(this.uploadDir, filename);
        await fsp.access(filePath);
        return fs.createReadStream(filePath);
    }

    async getFiles() {
        try {
            const files = await fsp.readdir(this.uploadDir);
            return files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file)); // Только изображения
        } catch (error) {
            throw new Error('Ошибка при чтении директории');
        }
    }
}

module.exports = new FileService();