import prisma from "../../../../prisma/prisma";
import EventsModelHelper from "@/core/backend/helpers/events/EventsModelHelper";
import {EVENTS} from "@/core/common/constants";
import { toInteger } from "lodash";
import DateUtils from "@/core/common/utils/DateUtils";

const EventsModel = {
    getEvents: async (filters) => {
        try {
            const take = toInteger(filters.limitOfNumberOfRecords) || EVENTS.FILTER_DEFAULTS.PAGINATION_LIMIT;
            const skip = toInteger(filters.numberOfRecordsToSkip) || 0;
            const whereClause = EventsModelHelper.constructWhereClause(filters)
            const events = await prisma.Event.findMany({
                where: whereClause,
                include: {
                    Venue: true,
                },
                skip,
                take,
            });
            return events;
        } catch (error) {
            console.error('Error occurred while fetching events from database:', error);
            return [];
        }
    },
    getEventById: async (eventID) => {
        try {
            const event = await prisma.Event.findUnique({
                where: {
                    id: eventID,
                },
                select: {
                    eventName: true,
                    startDate: true,
                    endDate: true,
                    city: true,
                    description: true,
                    ticketPrice: true,
                    cause: true,
                    startTime: true,
                    endTime: true,
                    Venue: {
                        select: {
                            id: true,
                            address: true,
                            latitude: true,
                            longitude: true,
                            email: true,
                            locationLink: true,
                            venueName: true,
                            capacity: true,
                            ReadVenueCapacity: {
                                select: {
                                    id: true,
                                    availableCapacity: true,
                                }
                            }
                        }
                    },
                    EventNGORelationship: {
                        select: {
                            NGO: {
                                select: {
                                    LogoLink: true,
                                    InstagramLink: true,
                                    Organization: {
                                        select: {
                                            name: true,
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            });
            return event;
        } catch (error) {
            console.error(`Error occurred while fetching event with ID ${eventID} from database`, error);
            return null;
        }
    },

    getCountByCity: async () => {
        try {
            const today = DateUtils.getCurrentDateTime();
            const eventsCount = await prisma.Event.groupBy({
                by: ['city'],
                _count: {
                    city: true,
                },
                where: {
                    startDate: {
                        gt: today,
                    },
                },
            });
            return eventsCount;
        } catch (error) {
            console.error('Error occurred while fetching events by city:', error);
            return [];
        }
    }
}
export default EventsModel;
