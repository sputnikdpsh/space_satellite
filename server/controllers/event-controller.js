const eventService = require('../service/event-service');

class EventController {
    async createEvent(req, res, next) {
        try {
            const eventData = req.body;
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