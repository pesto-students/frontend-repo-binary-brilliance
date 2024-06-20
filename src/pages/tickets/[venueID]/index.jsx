import DefaultLayout from "@/core/frontend/components/layouts/DefaultLayout";
import React from "react";
import { BookTicketsPageProvider } from "@/core/frontend/contexts/BookTicketsPageProvider";
import TicketCountSection from "@/core/frontend/components/sections/TicketCountSection";
import { toInteger } from "lodash";
import VenueRequests from "@/core/frontend/requests/VenueRequests";

const BookTicketsPage = ({ event = {}, venueID, availableCapacity}) => {
    return (
        <BookTicketsPageProvider availableCapacity={availableCapacity}>
            <DefaultLayout>
                <TicketCountSection event={event} venueID={venueID}/>
            </DefaultLayout>
        </BookTicketsPageProvider>
    )
};

export default BookTicketsPage;

export const getServerSideProps = async (context) => {
    const event = JSON.parse(context.query.event);
    const venueID = toInteger(context.query.venueID);
    const venue = await VenueRequests.fetchVenueDetailsByID(venueID);
    const {
        ReadVenueCapacity: [{ availableCapacity }]
    } = venue;
    if (!event || toInteger(availableCapacity) <= 0) {
        return {
            redirect: {
                destination: '/events',
                permanent: false,
            },
        };
    }
    return {
        props: {
            event,
            venueID,
            availableCapacity: toInteger(availableCapacity)
        }
    };
};