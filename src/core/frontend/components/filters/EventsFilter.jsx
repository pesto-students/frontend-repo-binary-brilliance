import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { EventsPageContext } from '@/core/frontend/contexts/EventsPageContext';
import FilterTag from '@/core/frontend/components/buttons/FilterTag';
import { EVENTS } from "@/core/common/constants";
import ContrastButton from "@/core/frontend/components/buttons/ContrastButton";
import NavigationUtils from "@/core/common/utils/NavigationUtils";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import DateUtils from "@/core/common/utils/DateUtils";
import ModalCloseButton from "@/core/frontend/components/buttons/ModalCloseButton";

const EventsFilter = ({ handleCloseForMobileView }) => {
    const { filterStates } = useContext(EventsPageContext);
    const router = useRouter();

    const applyFilters = () => {
        const queryParams = {};

        if (filterStates.city.selectedCities.length > 0) {
            queryParams.cities = filterStates.city.selectedCities;
        }
        if (filterStates.price.selectedPrices.length > 0) {
            queryParams.prices = filterStates.price.selectedPrices;
        }
        if (filterStates.cause.selectedCauses.length > 0) {
            queryParams.causes = filterStates.cause.selectedCauses;
        }

        if (filterStates.dates.startDate && filterStates.dates.endDate) {
            queryParams.startDate = DateUtils.convertJavascriptDateToUTCFormat(filterStates.dates.startDate);
            queryParams.endDate = DateUtils.convertJavascriptDateToUTCFormat(filterStates.dates.endDate);
        }

        const path = {
            pathname: router.pathname,
            query: NavigationUtils.convertArraysToCSV(queryParams),
        };

        router.push(path, undefined, { shallow: true }).then(() => {
            if (handleCloseForMobileView) {
                handleCloseForMobileView();
            }
        });
    };

    const readableStartDate = filterStates.dates.startDate ? DateUtils.convertUTCDateToReadableFormat(DateUtils.convertJavascriptDateToUTCFormat(filterStates.dates.startDate)) : '';
    const readableEndDate = filterStates.dates.endDate ? DateUtils.convertUTCDateToReadableFormat(DateUtils.convertJavascriptDateToUTCFormat(filterStates.dates.endDate)) : '';

    return (
        <div className="p-4 gap-5 bg-white shadow-md rounded-lg w-3/5 md:w-11/12 h-fit"> {/* Adjusted padding and width */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3"> {/* Adjusted margin-bottom */}
                <div className="flex justify-between items-center w-full md:w-auto mb-2 md:mb-0">
                    <span className="text-md font-semibold">Filters:</span> {/* Adjusted font size */}
                    <ModalCloseButton onClick={ handleCloseForMobileView ? handleCloseForMobileView : () => console.log('Handle close for filters undefined.') }/>
                </div>
                <button className="text-xs text-blue-600 hover:text-blue-800" onClick={filterStates.clearFilters}>Clear all</button> {/* Adjusted font size */}
            </div>

            <div className="flex flex-col gap-3 mb-2"> {/* Adjusted gap and margin-bottom */}
                {/* City filter */}
                <div className="flex-1">
                    <label className="text-xs font-semibold">City:</label> {/* Adjusted font size */}
                    <div className="flex flex-wrap gap-1"> {/* Adjusted gap and margin-top */}
                        {Object.values(EVENTS.CITIES).map((city) => (
                            <FilterTag
                                key={city}
                                label={city}
                                isSelected={filterStates.city.selectedCities.includes(city)}
                                onClick={() => filterStates.city.toggleCitySelection(city)}
                            />
                        ))}
                    </div>
                </div>

                {/* Prices filter */}
                <div className="flex-1">
                    <label className="text-xs font-semibold">Prices:</label> {/* Adjusted font size */}
                    <div className="flex flex-wrap gap-1"> {/* Adjusted gap and margin-top */}
                        {Object.values(EVENTS.PRICES).map((price) => (
                            <FilterTag
                                key={price}
                                label={price}
                                isSelected={filterStates.price.selectedPrices.includes(price)}
                                onClick={() => filterStates.price.togglePriceSelection(price)}
                            />
                        ))}
                    </div>
                </div>

                <div className="flex-1">
                    <label className="text-xs font-semibold">Causes:</label>
                    <div className="flex flex-wrap gap-1">
                        {Object.values(EVENTS.CAUSES).map((cause) => (
                            <FilterTag
                                key={cause}
                                label={cause}
                                isSelected={filterStates.cause.selectedCauses.includes(cause)}
                                onClick={() => filterStates.cause.toggleCauseSelection(cause)}
                            />
                        ))}
                    </div>
                </div>

                <div className="flex-1">
                    <label className="text-xs font-semibold">Dates:</label>
                    <div className="flex flex-col gap-1 items-center">
                        <DatePicker customInput={<FilterTag
                            label={`From ${readableStartDate ? readableStartDate : ''}`}/>}
                                    selected={filterStates.dates.startDate}
                                    onChange={(date) => filterStates.dates.setStartDate(date)}
                                    selectsStart
                                    startDate={filterStates.dates.startDate}
                                    endDate={filterStates.dates.endDate} />
                        <DatePicker customInput={<FilterTag
                            label={`Till ${readableEndDate ? readableEndDate : ''}`}/>}
                                    selected={filterStates.dates.endDate}
                                    onChange={(date) => filterStates.dates.setEndDate(date)}
                                    selectsEnd
                                    startDate={filterStates.dates.startDate}
                                    endDate={filterStates.dates.endDate}
                                    minDate={filterStates.dates.startDate} />
                    </div>
                </div>
            </div>
            <ContrastButton label={'Apply Filters'} isRed={true} onClick={applyFilters}/>
        </div>
    );
};

export default EventsFilter;

