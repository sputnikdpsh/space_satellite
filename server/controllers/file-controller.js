const fileService = require('../service/file-service');

class FileController {
    async upload (req, res, next){
        try {
            const file = req.file;

            if (!file) {
                return res.status(400).json({ error: 'Файл не был загружен' });
            }
            const filePath = await fileService.upload(file);
            res.status(200).json({
                message: 'Файл успешно загружен',
                filePath
            });
        } catch (error) {
            next(error);
        }
    }

    async uploadMultiple(req, res, next) {
        try {
            const files = req.files;

            if (!files || files.length === 0) {
                return res.status(400).json({ error: 'Файлы не были загружены' });
            }

            const fileUrls = files.map(file => ({
                id: file.filename,
                url: `${req.protocol}://${req.get('host')}/api/download/${file.filename}`,
            }));

            res.status(200).json({
                message: 'Файлы успешно загружены',
                files: fileUrls,
            });
        } catch (error) {
            next(error);
        }
    }

    async download (req, res, next){
        try {
            const { filename } = req.params;
            const fileStream = await fileService.download(filename);
            fileStream.pipe(res);
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
            const files = await fileService.getFiles();
            res.status(200).json({ files });
        } catch (error) {
            next(error);
        }
    }

    async getGallery(req, res, next) {
        try {
            const files = await fileService.getFiles();
            const fileUrls = files.map(file => {
                const url = `${req.protocol}://${req.get('host')}/api/download/${file}`;
                console.log(`Generated URL for file: ${file} -> ${url}`); // Логируем информацию
                return {
                    id: file,
                    url
                };
            });
            res.status(200).json({ gallery: fileUrls });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new FileController();