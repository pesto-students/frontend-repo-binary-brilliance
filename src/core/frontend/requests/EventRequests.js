import axios from "../../../../axios.config";
import {isEmpty} from "lodash";
import EnvironmentUtils from "@/core/common/utils/EnvironmentUtils";

const EventRequests = {
    fetchEvents: async (query) => {
        try {
            const baseURL = EnvironmentUtils.getBaseURL();
            const response = await axios.get(`${baseURL}/api/events`, {
                params: isEmpty(query) ? undefined : query,
                headers: {
                    'Cache-Control': 'no-cache, no-store, must-revalidate',
                    'Pragma': 'no-cache',
                    'Expires': '0'
                },
            });
            const { events } = response.data;
            return events;
        } catch (error) {
            console.log('Error occurred while fetching events.', error);
            return [];
        }
    },

    fetchEventByID: async (eventID) => {
        try {
            const baseURL = EnvironmentUtils.getBaseURL();
            const response = await axios.get(`${baseURL}/api/events/${eventID}`, {
                headers: {
                    'Cache-Control': 'no-cache, no-store, must-revalidate',
                    'Pragma': 'no-cache',
                    'Expires': '0'
                },
            });
            const { event, message, error } = response.data;
            if (message) console.log(message);
            else console.log(error);
            return event;
        } catch (error) {
            console.log('Error occurred while fetching events.', error);
            return {};
        }
    },

    fetchCountByCity: async () => {
        try {
            const baseURL = EnvironmentUtils.getBaseURL();
            const response = await axios.get(`${baseURL}/api/events/countByCity`, {
                headers: {
                    'Cache-Control': 'no-cache, no-store, must-revalidate',
                    'Pragma': 'no-cache',
                    'Expires': '0'
                },
            });
            const { eventsCountByCity } = response.data;
            return eventsCountByCity;
        } catch (error) {
            console.log('Error occurred while fetching events count by city.', error);
            return [];
        }
    }
};

export default EventRequests;