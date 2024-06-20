import React, { createContext, useState } from 'react';

export const EventDetailsPageContext = createContext();

export const EventDetailsPageProvider = ({ children }) => {
    const [selectedVenue, setSelectedVenue] = useState(null);

    const handleVenueSelection = (venueId) => {
        setSelectedVenue(selectedVenue => selectedVenue === venueId ? null : venueId);
    };

    return (
        <EventDetailsPageContext.Provider value={{
            selectedVenue,
            handleVenueSelection,
        }}>
            {children}
        </EventDetailsPageContext.Provider>
    );
};