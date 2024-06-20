import React from 'react';
import EventsCarousel from "@/core/frontend/components/carousels/EventsCarousel";
import { EVENTS } from "@/core/common/constants";
import {useRouter} from "next/router";
import NavigationUtils from "@/core/common/utils/NavigationUtils";
import Heading from "@/core/frontend/components/headings/Heading";
import Section from "@/core/frontend/components/sections/Section";
import { FILTER_CONSTANTS } from '@/core/common/constants';

const BrowseEventsSection = ({ events }) => {
    const router = useRouter();
    const { query } = router;
    const city = NavigationUtils.convertCSVToArray(query)?.cities?.[0] || EVENTS.FILTER_DEFAULTS.CITY;

    const handleCityChange = async (event) => {
        event.preventDefault();
        await NavigationUtils.softRefreshWithQuery(router, { cities: [event.target.value] });
    };

    const handleCauseChange = async (event) => {
        event.preventDefault();
        await NavigationUtils.softRefreshWithQuery(router, { causes: [event.target.innerText] });
    };


    return (
        <Section isGradientCream={true} layout='vertical'>
            <div className="flex flex-row items-start gap-11 w-full">
                <Heading labelConfig={{ black: 'Browse', blue: 'Events'}}/>
                <select className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md" value={city} onChange={handleCityChange}>
                    <option value={FILTER_CONSTANTS.ALL}>{FILTER_CONSTANTS.ALL}</option>
                    {Object.values(EVENTS.CITIES).map((city, index) => <option key={index} value={city}>{city}</option>)}
                </select>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center w-full overflow-x-auto">
                <div className="flex flex-nowrap gap-8">
                    <button className="text-sm bg-transparent text-black focus:outline-none active:text-customBlue" onClick={handleCauseChange}>
                        {FILTER_CONSTANTS.ALL}
                    </button>
                    {Object.values(EVENTS.CAUSES).map((cause, index) => (
                        <button key={index} className="text-sm bg-transparent text-black focus:outline-none active:text-customBlue" onClick={handleCauseChange}>
                            {cause}
                        </button>
                    ))}
                </div>
            </div>
            <EventsCarousel events={events} />
        </Section>
    );
};

export default BrowseEventsSection;
