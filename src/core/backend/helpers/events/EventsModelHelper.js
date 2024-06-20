import { EVENTS } from '@/core/common/constants';
const EventsModelHelper = {
    constructWhereClause: (filters) => {
        const { startDate, endDate, causes, cities, prices } = filters;
        let whereClause = {};
        if (startDate || endDate) {
            whereClause.startDate = {};
            if (startDate) {
                whereClause.startDate.gte = startDate;
            }
            if (endDate) {
                whereClause.startDate.lte = endDate;
            }
        }
        if (causes && causes.length > 0) {
            whereClause.cause = {
                in: causes,
            }
        }
        if (cities && cities.length > 0) {
            whereClause.city = {
                in: cities,
            };
        }
        if (prices && prices.length > 0) {
            const pricesLowercase = prices.map(price => price.toLowerCase());

            // If both Free and Paid are included, no need to construct where clause
            if (pricesLowercase.includes(EVENTS.PRICES.FREE.toLowerCase()) && pricesLowercase.includes(EVENTS.PRICES.PAID.toLowerCase())) {
                // No need to construct where clause, return
                return;
            }

            if (pricesLowercase.includes(EVENTS.PRICES.PAID.toLowerCase())) {
                // Only Paid is included, set price greater than 0
                whereClause.ticketPrice = {
                    gt: 0
                };
            } else if (pricesLowercase.includes(EVENTS.PRICES.FREE.toLowerCase())) {
                // Only Free is included, set price equals to 0
                // Directly assign the value for equality checks
                whereClause.ticketPrice = 0; // This is the correct way to check for equality with Prisma
            }

        }
        return whereClause;
    }
};
export default EventsModelHelper;


