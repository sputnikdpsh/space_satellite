const path = require('path');
const fs = require('fs');
const fsp = require('fs/promises');

class FileService {
    constructor() {
        this.uploadDir = path.resolve(__dirname, '../uploads');
    }

    async getFiles(directory) {
        try {
            // Полный путь к указанной директории
            const dirPath = path.join(this.uploadDir, directory);

            // Проверяем, существует ли директория
            await fsp.access(dirPath);

            // Читаем файлы из директории
            const files = await fsp.readdir(dirPath);

            return files.filter(file => /\.(jpg|jpeg|png|gif|pdf|txt|webp)$/i.test(file)); // Возвращаем только допустимые файлы
        } catch (error) {
            if (error.code === 'ENOENT') {
                throw new Error(`Директория "${directory}" не найдена`);
            } else {
                throw error;
            }
        }
    }
}

module.exports = new FileService();