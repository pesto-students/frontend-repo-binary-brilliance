import DateUtils from "@/core/common/utils/DateUtils";
import { EVENTS } from '@/core/common/constants';
import { FILTER_CONSTANTS } from "@/core/common/constants";
import { isArray, isEmpty, includes, toInteger} from "lodash";

const EventsFilterHelper = {
    validateFilters:  (filters) => {
        try {
            const {startDate, endDate, causes, cities, prices, limitOfNumberOfRecords, numberOfRecordsToSkip} = filters;
            const areDatesValid = EventsFilterHelper.validateDates(startDate, endDate);
            const areCausesValid = EventsFilterHelper.validateCauses(causes);
            const areCitiesValid = EventsFilterHelper.validateCities(cities);
            const arePricesValid = EventsFilterHelper.validatePrices(prices);
            const isLimitValid = EventsFilterHelper.validateLimit(limitOfNumberOfRecords);
            const isSkipValid = EventsFilterHelper.validateSkip(numberOfRecordsToSkip);

            if (areDatesValid && areCausesValid && areCitiesValid && arePricesValid && isLimitValid && isSkipValid) {
                return true;
            }

            console.error({areDatesValid, areCausesValid, areCitiesValid, arePricesValid, isLimitValid, isSkipValid});
            return false;
        } catch (error) {
            console.error(`An error occurred during filter validation.`, error);
            return false;
        }
    },

    validateDates: (startDate, endDate) => {
        return DateUtils.isDateSameOrEarlier(startDate, endDate);
    },

    validateCauses: (causesFromFilter) => {
        const validCauses = Object.values(EVENTS.CAUSES);
        return causesFromFilter.every(cause => validCauses.includes(cause));
    },

    validateCities: (citiesFromFilter) => {
        const validCities = Object.values(EVENTS.CITIES);
        return citiesFromFilter.every(city => validCities.includes(city));
    },

    validatePrices: (pricesFromFilter) => {
        const validPrices = Object.values(EVENTS.PRICES);
        return pricesFromFilter.every(price => validPrices.includes(price));
    },

    validateLimit: (limitFromFilter) => {
        return toInteger(limitFromFilter) > 0 && toInteger(limitFromFilter) <= EVENTS.FILTER_DEFAULTS.PAGINATION_LIMIT;
    },

    validateSkip: (skipFromFilter) => {
        return toInteger(skipFromFilter) >= 0;
    },

    setDefaultValues: (filters) => {
        if (!filters.startDate) {
            filters.startDate = DateUtils.getCurrentDateTime();
        }

        if(!filters.endDate) {
            filters.endDate = DateUtils.getDateTimeAfterDays(EVENTS.FILTER_DEFAULTS.NUMBER_OF_DAYS_FROM_TODAY_LIMIT);
        }

        if (!isArray(filters.causes) ||
            isEmpty(filters.causes) ||
            includes(filters.causes, FILTER_CONSTANTS.ALL)) {
            filters.causes = [];
        }

        if (!isArray(filters.cities) ||
            isEmpty(filters.cities) ||
            includes(filters.cities, FILTER_CONSTANTS.ALL)) {
            filters.cities = [EVENTS.FILTER_DEFAULTS.CITY];
        }

        if (!isArray(filters.prices) ||
            isEmpty(filters.prices) ||
            includes(filters.prices, FILTER_CONSTANTS.ALL) ||
            (includes(filters.prices, EVENTS.PRICES.FREE) &&
                includes(filters.prices, EVENTS.PRICES.PAID))) {
            filters.prices = [];
        }

        if (!filters.limitOfNumberOfRecords || toInteger(filters.limitOfNumberOfRecords) < 1 || toInteger(filters.limitOfNumberOfRecords) > EVENTS.FILTER_DEFAULTS.PAGINATION_LIMIT) {
            filters.limitOfNumberOfRecords = EVENTS.FILTER_DEFAULTS.PAGINATION_LIMIT;
        }

        if (!filters.numberOfRecordsToSkip || toInteger(filters.numberOfRecordsToSkip) < 0) {
            filters.numberOfRecordsToSkip = 0;
        }

        return filters;
    }
};

export default EventsFilterHelper;