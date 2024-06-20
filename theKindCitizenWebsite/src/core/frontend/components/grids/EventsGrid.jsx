import React from 'react';
import EventCard from '@/core/frontend/components/cards/EventCard';
import Message from "@/core/frontend/components/UIMessages/Message";

const EventsGrid = ({ events }) => {
    if (events.length === 0) {
        return (
            <Message text={'No events found.'}/>
        );
    }
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {events.map((event, index) => (
                <EventCard key={index} event={event} className="mb-4" />
            ))}
        </div>
    );
};

export default EventsGrid;