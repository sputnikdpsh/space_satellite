const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Настройка хранилища для multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = path.join(__dirname, '../uploads');
        // Создаем папку, если она не существует
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath);
        }
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
        cb(null, `${uniqueSuffix}-${file.originalname}`);
    }
});

const upload = multer({ storage });

// Класс для управления файлами
class FileHandler {
    constructor() {
        this.router = express.Router();
        this.initRoutes();
    }

    initRoutes() {
        // Маршрут для загрузки файла
        this.router.post('/upload', upload.single('file'), (req, res) => {
            if (!req.file) {
                return res.status(400).json({ error: 'Файл не был загружен' });
            }
            res.status(200).json({
                message: 'Файл успешно загружен',
                filePath: req.file.path
            });
        });

        // Маршрут для скачивания файла
        this.router.get('/download/:filename', (req, res) => {
            const filePath = path.join(__dirname, '../uploads', req.params.filename);
            if (fs.existsSync(filePath)) {
                res.download(filePath, req.params.filename, (err) => {
                    if (err) {
                        res.status(500).json({ error: 'Ошибка при скачивании файла' });
                    }
                });
            } else {
                res.status(404).json({ error: 'Файл не найден' });
            }
        });
    }
}

module.exports = FileHandler;
