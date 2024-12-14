const db = require('../database');
const ApiError = require("../exceptions/api-error");

class EventService {
    async createEvent(eventData) {
        const requiredFields = [
            'event_name',
            'event_description',
            'event_date_start',
            'event_place',
            'event_type_id',
            'event_creator',
        ];

        for (const field of requiredFields) {
            if (!eventData[field]) {
                throw ApiError.BadRequest(`Поле "${field}" является обязательным`);
            }
        }

        if (
            eventData.event_date_end &&
            new Date(eventData.event_date_start) > new Date(eventData.event_date_end)
        ) {
            throw ApiError.BadRequest('Дата начала не может быть позже даты окончания');
        }

        try {
            const event = await db.Events.create({
                event_name: eventData.event_name,
                event_description: eventData.event_description,
                event_date_start: eventData.event_date_start,
                event_date_end: eventData.event_date_end || null,
                event_place: eventData.event_place,
                event_notice: eventData.event_notice || null,
                event_photo: eventData.event_photo || null,
                event_type_id: eventData.event_type_id,
                event_creator: eventData.event_creator,
            });

            return event;
        } catch (error) {
            throw ApiError.BadResponse(`Ошибка базы данных: ${error.message}`);
        }
    }
}

module.exports = new EventService();