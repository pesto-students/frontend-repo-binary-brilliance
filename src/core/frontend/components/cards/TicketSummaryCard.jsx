import React, { useContext } from 'react';
import LongContrastButton from "@/core/frontend/components/buttons/LongContrastButton";
import { BookTicketsPageContext } from "@/core/frontend/contexts/BookTicketsPageProvider";
import TicketRequests from "@/core/frontend/requests/TicketRequests";

const TicketSummaryCard = ({event = {}, venueID }) => {
    const {
        ticketCount,
        bookingUserDetails,
    } = useContext(BookTicketsPageContext);
    return (
        <div className="bg-white h-64 rounded-lg p-6 shadow-md flex flex-col items-start relative">
            <div className="font-bold mb-4">Summary</div>
            <div className="text-gray-500 mb-4">{`Price (${ticketCount} tickets)`}</div>
            <div className="font-bold mb-4">{`Total Amount ₹${event.ticketPrice * ticketCount}`}</div>

            <LongContrastButton
                // isDisabledOnClick={true}
                onClick={async () => {
                    alert('We are redirecting you to the Payment page...');
                    const data = await TicketRequests.buyTickets({ event, venueID, ticketCount, bookingUserDetails });
                    if (data && data.redirectURL) {
                        window.location.href = data.redirectURL;
                    }
                }}
                label={'Buy Ticket(s) →'}
            />
        </div>
    );
};

export default TicketSummaryCard;
