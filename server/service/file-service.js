const path = require('path');
const fs = require('fs');
const fsp = require('fs/promises');

class FileService {
    constructor() {
        this.uploadDir = path.resolve(__dirname, '../uploads');
    }

    async sendFile(res, category, directory, filename) {
        try {
            // Конструируем путь к файлу
            const filePath = path.join(this.uploadDir, category, directory, filename);
            // Проверяем существование файла
            await fsp.access(filePath);
            // Определяем MIME-тип файла по расширению
            const ext = path.extname(filename).toLowerCase();
            const mimeTypes = {
                '.jpg': 'image/jpeg',
                '.jpeg': 'image/jpeg',
                '.png': 'image/png',
                '.gif': 'image/gif',
                '.webp': 'image/webp',
                '.pdf': 'application/pdf',
                '.txt': 'text/plain',
            };
            const contentType = mimeTypes[ext] || 'application/octet-stream';
            // Устанавливаем заголовок Content-Type
            res.setHeader('Content-Type', contentType);
            // Передаём файл клиенту
            const fileStream = fs.createReadStream(filePath);
            fileStream.pipe(res);
        } catch (error) {
            throw error; // Прокидываем ошибку для обработки в контроллере
        }
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