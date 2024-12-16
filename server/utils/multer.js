const multer = require('multer');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (!req.hashedDirectory) {
            // Создаём уникальную директорию один раз на весь запрос
            const header = req.headers['file-category'];
            let uploadDir = '../uploads';

            if (header === 'news') {
                uploadDir = path.join(__dirname, '../uploads/news');
            } else if (header === 'events') {
                uploadDir = path.join(__dirname, '../uploads/events');
            } else if (header === 'gallery') {
                uploadDir = path.join(__dirname, '../uploads/gallery');
            } else {
                return cb(new Error('Неверный или отсутствующий заголовок file-category'));
            }

            if (!fs.existsSync(uploadDir)) {
                fs.mkdirSync(uploadDir, { recursive: true });
            }

            // Генерация уникального имени директории
            const hash = crypto.randomBytes(16).toString('hex');
            req.hashedDirectory = hash;  // Сохраняем только хеш, а не полный путь

            // Создаём директорию
            const fullPath = path.join(uploadDir, req.hashedDirectory);
            fs.mkdirSync(fullPath);

            // Назначаем путь для последующего сохранения файлов
            req.fullDirectoryPath = fullPath;
        }

        cb(null, req.fullDirectoryPath);
    },
    filename: (req, file, cb) => {
        const clearFilename = file.originalname.replace(/\s+/g, '_');
        const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
        cb(null, `${uniqueSuffix}-${clearFilename}`);
    }
});

module.exports = multer({ storage });
