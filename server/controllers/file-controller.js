const fileService = require('../service/file-service');
const path = require('path');
const fs = require('fs');

class FileController {

    async uploadMultiple(req, res, next) {
        try {
            const files = req.files;

            if (!files || files.length === 0) {
                return res.status(400).json({ error: 'Файлы не были загружены' });
            }

            res.status(200).json({
                message: 'Файлы успешно загружены',
                hashedDirectory: req.hashedDirectory
            });
        } catch (error) {
            next(error);
        }
    }

    async sendFile (req, res, next){
        try {
            const { category, directory, filename } = req.params;
            await fileService.sendFile(res, category, directory, filename);
        } catch (error) {
            if (error.code === 'ENOENT') {
                res.status(404).json({ error: 'Файл не найден' });
            } else {
                next(error);
            }
        }
    }

    async getFiles(req, res, next) {
        try {
            const hashedDirectory = req.headers['directory'];

            if (!hashedDirectory) {
                return res.status(400).json({ error: 'Заголовок "hashed-directory" отсутствует' });
            }

            // Получаем список файлов в указанной директории
            const files = await fileService.getFiles(hashedDirectory);

            // Возвращаем ссылки на файлы
            const fileUrls = files.map(file => ({
                filename: file,
                url: `${req.protocol}://${req.get('host')}/api/download/${hashedDirectory}/${file}`,
            }));

            res.status(200).json({ files: fileUrls });
        } catch (error) {
            if (error.message.includes('не найдена')) {
                res.status(404).json({ error: error.message });
            } else {
                next(error);
            }
        }
    }
}

module.exports = new FileController();

// const fileUrls = files.map(file => ({
//     id: file.filename,
//     url: `${req.protocol}://${req.get('host')}/api/download/${req.headers['file-category']}/${req.hashedDirectory}/${file.filename}`
// }));

//fullDirectoryPath: req.fullDirectoryPath,
//files: fileUrls