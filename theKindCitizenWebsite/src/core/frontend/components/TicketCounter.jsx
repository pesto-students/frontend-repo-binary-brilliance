import React, {useContext, useState} from 'react';
import {BookTicketsPageContext} from "@/core/frontend/contexts/BookTicketsPageProvider";

const TicketCounter = ({ ticketPrice }) => {
    const {
        ticketCount,
        incrementTicketCount,
        decrementTicketCount,
    } = useContext(BookTicketsPageContext);
    return (
        <div className="flex items-center justify-center">
            <div className="flex items-center bg-transparent  rounded-lg">
                <span className="mx-4">{`₹ ${ticketPrice} x `}</span>
            </div>
            <div className="ml-4 bg-customYellow rounded-lg">
                <button
                    onClick={decrementTicketCount}
                    className="text-lg font-semibold hover:bg-customLightYellow m-2 rounded focus:outline-none"
                >
                    -
                </button>
                <span>{ticketCount}</span>
                <button
                    onClick={incrementTicketCount}
                    className="text-lg font-semibold hover:bg-customLightYellow m-2 rounded focus:outline-none"
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default TicketCounter;