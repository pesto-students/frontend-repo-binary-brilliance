import EventsFilterHelper from '@/core/backend/helpers/events/EventsFilterHelper';
import EventsModel from "@/core/backend/models/Events";
import { toInteger } from "lodash";
import DateUtils from "@/core/common/utils/DateUtils";

const EventsController = {
    getEvents: async (filters) => {
        try {
            if (!filters) {
                filters = {};
            }
            EventsFilterHelper.setDefaultValues(filters);
            const areFiltersValid = EventsFilterHelper.validateFilters(filters);
            if (!areFiltersValid) {
                return [];
            }
            const events = await EventsModel.getEvents(filters);
            if (events && events.length >= 1) {
                return events;
            } else {
                return [];
            }
        } catch (error) {
            console.error('Cannot fetch events', error);
            return null;
        }
    },

    getEventById: async (eventID) => {
        try {
            const event = await EventsModel.getEventById(toInteger(eventID));
            if (event) {
                event.startDate = DateUtils.convertUTCDateToReadableFormat(event.startDate.toString());
                event.endDate = DateUtils.convertUTCDateToReadableFormat(event.endDate.toString());
                event.startTime = DateUtils.convertTimeToRedableFormat(event.startTime.toString());
                event.endTime = DateUtils.convertTimeToRedableFormat(event.endTime.toString());
                return event;
            } else {
                return null;
            }
        } catch (error) {
            console.error(`An error occurred while getting event with id ${eventID}`, error);
            return null;
        }
    },

    getCountByCity: async () => {
        try {
            const eventsCount = await EventsModel.getCountByCity();
            const formattedEventCounts = eventsCount.map(eventCount => ({ city: eventCount.city, count: eventCount._count.city }));
            return formattedEventCounts;
        } catch (error) {
            console.error('Cannot fetch events count by city', error);
            return null;
        }
    }
};

export default EventsController;