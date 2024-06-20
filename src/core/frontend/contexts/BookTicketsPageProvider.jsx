import React, { createContext, useState } from 'react';
import {EVENTS} from "@/core/common/constants";

export const BookTicketsPageContext = createContext();

export const BookTicketsPageProvider = ({ children, availableCapacity }) => {
    const [ticketCount, setTicketCount] = useState(1);
    const [bookingUserDetails, setBookingUserDetails] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    });

    const incrementTicketCount = () => {
        if (ticketCount < Math.min(EVENTS.TICKET.UPPER_LIMIT, availableCapacity)) {
            setTicketCount(ticketCount + 1);
        }
    }

    const decrementTicketCount = () => {
        if (ticketCount > EVENTS.TICKET.LOWER_LIMIT) {
            setTicketCount(ticketCount - 1);
        }
    }


    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookingUserDetails(prevBookingUserDetails => ({
            ...prevBookingUserDetails,
            [name]: value
        }));
    };

    return (
        <BookTicketsPageContext.Provider value={{
            ticketCount,
            incrementTicketCount,
            decrementTicketCount,
            bookingUserDetails,
            handleChange,
        }}>
            {children}
        </BookTicketsPageContext.Provider>
    );
};