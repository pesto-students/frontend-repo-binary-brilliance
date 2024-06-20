import React, { useContext } from 'react';
import LongContrastButton from "@/core/frontend/components/buttons/LongContrastButton";
import { EventDetailsPageContext } from "@/core/frontend/contexts/EventDetailsPageContext";
import { useRouter } from "next/router";

const TicketPurchaseCard = ({ event = {}, handleCloseForMobileView = () => console.log('Close button clicked') }) => {
    const { Venue } = event;
    const router = useRouter();
    const { selectedVenue, handleVenueSelection } = useContext(EventDetailsPageContext);
    const selectValue = selectedVenue ? Venue.find((venue) => {
        const { id, venueName } = venue;
        return id === selectedVenue && venueName;
    })?.venueName : '';
    const handleSelectionChange = (e) => {
        const venueNameFromForm = e.target.value;
        const venue = Venue.find((venue) => {
            const { venueName } = venue;
            return venueName === venueNameFromForm;
        });
        handleVenueSelection(venue ? venue.id : null);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (selectedVenue && Object.keys(event).length) {
            const eventParam = encodeURIComponent(JSON.stringify(event));
            router.push(`/tickets/${selectedVenue}?event=${eventParam}`);
        }
    };

    return (
        <div className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center relative">
            <button
                onClick={handleCloseForMobileView}
                className="md:hidden absolute top-0 right-2 p-2"
            >
                &times;
            </button>
            <div className="text-3xl font-bold mb-4">₹{event.ticketPrice}</div>
            <form onSubmit={handleFormSubmit} className="w-full">
                <div className="relative mb-4 w-full">
                    <select
                        value={selectValue}
                        onChange={handleSelectionChange}
                        className="select-css-class w-full"
                        required // Make selection required
                    >
                        <option value="" disabled>Choose venue</option>
                        {Venue && Venue.map((venue, index) => {
                            const { venueName } = venue;
                            return (
                                <option key={index} value={venueName.toString()}>
                                    {venueName}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <LongContrastButton
                    type="submit"
                    label={'Buy Ticket(s) →'}
                />
            </form>
        </div>
    );
};

export default TicketPurchaseCard;
