import React, { createContext, useState } from 'react';
import {useRouter} from "next/router";
import NavigationUtils from "@/core/common/utils/NavigationUtils";
import DateUtils from "@/core/common/utils/DateUtils";
import {EVENTS} from "@/core/common/constants";

export const EventsPageContext = createContext();

export const EventsPageProvider = ({ children }) => {

    const router = useRouter();
    const { query } = router;
    const parsedQuery = NavigationUtils.convertCSVToArray(query);

    const [selectedCities, setSelectedCities] = useState(parsedQuery.cities || [EVENTS.FILTER_DEFAULTS.CITY]);
    const [selectedPrices, setSelectedPrices] = useState(parsedQuery.prices || []);
    const [selectedCauses, setSelectedCauses] = useState(parsedQuery.causes || []);
    const [startDate, setStartDate] = useState(parsedQuery.startDate ? DateUtils.convertUTCStringToDateObject(parsedQuery.startDate) : '');
    const [endDate, setEndDate] = useState(parsedQuery.endDate ? DateUtils.convertUTCStringToDateObject(parsedQuery.endDate) : '');

    const toggleCitySelection = (city) => {
        setSelectedCities((currentCities) =>
            currentCities.includes(city)
                ? currentCities.filter((l) => l !== city)
                : [...currentCities, city]
        );
    };

    const togglePriceSelection = (price) => {
        setSelectedPrices((currentPrices) =>
            currentPrices.includes(price)
                ? currentPrices.filter((l) => l !== price)
                : [...currentPrices, price]
        );
    };

    const toggleCauseSelection = (cause) => {
        setSelectedCauses((currentCauses) =>
            currentCauses.includes(cause)
                ? currentCauses.filter((l) => l !== cause)
                : [...currentCauses, cause]
        );
    };

    const clearFilters = () => {
        setSelectedCities([]);
        setSelectedPrices([]);
        setSelectedCauses([]);
    };

    return (
        <EventsPageContext.Provider value={
            {
                filterStates: {
                    city: {
                        selectedCities,
                        toggleCitySelection,
                    },
                    price: {
                        selectedPrices,
                        togglePriceSelection},
                    cause:{
                        selectedCauses,
                        toggleCauseSelection
                    },
                    dates: {
                        startDate,
                        endDate,
                        setStartDate,
                        setEndDate,
                    },
                    clearFilters,
                },
            }
        }>
            {children}
        </EventsPageContext.Provider>
    );
};