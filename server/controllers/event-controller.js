const eventService = require('../service/event-service');

class EventController {
    async createEvent(req, res, next) {
        try {
            const eventData = req.body;

            // Получаем hashedDirectory из запроса
            if (!req.hashedDirectory) {
                return res.status(400).json({ message: 'Ошибка: директория не создана' });
            }

            // Добавляем путь к директории как фото
            eventData.event_photo = req.hashedDirectory;

            // Создаём событие
            const newEvent = await eventService.createEvent(eventData);

            res.status(201).json({
                message: 'Событие успешно создано',
                event: newEvent,
            });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new EventController();