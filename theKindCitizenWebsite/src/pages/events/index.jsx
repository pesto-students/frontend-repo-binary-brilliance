import DefaultLayout from "@/core/frontend/components/layouts/DefaultLayout";
import TwoPartLayout from "@/core/frontend/components/layouts/TwoPartLayout";
import EventsGrid from "@/core/frontend/components/grids/EventsGrid";
import {EventsPageProvider} from "@/core/frontend/contexts/EventsPageContext";
import EventsFilter from "@/core/frontend/components/filters/EventsFilter";
import React, {useEffect, useState} from "react";
import Section from "@/core/frontend/components/sections/Section";
import Heading from "@/core/frontend/components/headings/Heading";
import SpaceFillerSection from "@/core/frontend/components/sections/SpaceFillerSection";
import CityCard from "@/core/frontend/components/cards/CityCard";
import publicImages from "@/core/frontend/publicImages";
import {EVENTS} from "@/core/common/constants";
import SectionCard from "@/core/frontend/components/cards/SectionCard";
import FilterButton from "@/core/frontend/components/buttons/FilterButton";
import EventsUtils from "@/core/frontend/requests/EventRequests";
import {useRouter} from "next/router";
import HallowButton from "@/core/frontend/components/buttons/HallowButton";

const Events = ({eventsCountByCity = []}) => {
    const router = useRouter();
    const [events, setEvents] = useState([]);
    const itemsPerPage = EVENTS.FILTER_DEFAULTS.PAGINATION_LIMIT;
    const [loading, setLoading] = useState(false);

    const fetchEvents = async (skip = 0) => {
        setLoading(true);
        try {
            const newEvents = await EventsUtils.fetchEvents({
                ...router.query,
                limitOfNumberOfRecords: itemsPerPage,
                numberOfRecordsToSkip: skip
            });
            if (skip > 0) {
                setEvents(prevEvents => [...prevEvents, ...newEvents]);
            } else {
                setEvents(newEvents);
            }
        } catch (error) {
            console.error("Error fetching events:", error);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchEvents(0);
    }, [router.query]);

    const fetchMoreEvents = () => {
        fetchEvents(events.length);
    };

    return (
        <EventsPageProvider>
            <DefaultLayout>
                <TwoPartLayout leftChildren={
                    <Section className='min-h-full pt-20'
                             isGradientCream={true}
                             isPadding={false}
                             horizontalPositionOfChildren='center'>
                        <EventsFilter/>
                    </Section>
                } rightChildren={
                    <Section className='min-h-full pt-24'
                             horizontalPositionOfChildren='center'
                             isGradientCream={true}>
                        <Heading labelConfig={{blue:'Events', black: `(${events.length} results)`, isBlueFirst: true}}
                                 size='small'
                                 horizontalPositionOfChildren='center'
                                 desktopLayout='hortizontal'/>
                        <EventsGrid events={events}/>
                        <HallowButton label={`${loading ? 'Loading' : 'View more'}`} onClick={fetchMoreEvents}/>
                    </Section>
                } ComponentToShowAsModalInMobileView={EventsFilter}
                               OpenModalButtonComponent={FilterButton}/>
                <Section isGradientCream={true}
                         layout='vertical'
                         isPadding={true}>
                    <Heading labelConfig={{ blue: 'Events in your city', black: 'Discover trending'}}
                             layout='horizontal'/>
                    <div className="flex flex-row flex-wrap gap-y-10 gap-x-10 justify-center">
                        {eventsCountByCity.map((eventCountByCity) => {
                            const upperCaseCity = eventCountByCity.city.toUpperCase();
                            const imageSrc = EVENTS.CITY_IMAGES[upperCaseCity];
                            if (imageSrc) {
                                return (
                                    <CityCard
                                        key={upperCaseCity}
                                        title={eventCountByCity.city}
                                        eventCount={eventCountByCity.count}
                                        imageSrc={imageSrc}
                                        className="m-2"
                                    />
                                );
                            }
                            return null;
                        })}
                    </div>
                </Section>
                <Section>
                    <SectionCard headingConfig={{ blue: 'Own event', black: 'Organize your' }}
                                 linkHref={'/contactus'}
                                 imgSrc={publicImages.ILLUSTRATOR_CONTACT_US}>
                        <ul className="list-disc ml-4">
                            <li>Register as an NGO Partner</li>
                            <li>Register as a Corporate Partner</li>
                            <li>Organize an event with your NGO</li>
                            <li>Are there any concerns? We are listening!</li>
                        </ul>
                    </SectionCard>
                </Section>
            </DefaultLayout>
        </EventsPageProvider>
    );
};

export default Events;

export const getServerSideProps = async (context) => {
    let eventsCountByCity = [];

    try {
        eventsCountByCity = await EventsUtils.fetchCountByCity();
    } catch (error) {
        console.error("Error fetching event counts by city:", error);
    }
    return {
        props: {
            eventsCountByCity,
        },
    };
};