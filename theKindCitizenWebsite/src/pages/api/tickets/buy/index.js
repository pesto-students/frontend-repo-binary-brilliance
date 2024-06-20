import APIUtils from "@/core/backend/utils/APIUtils";
import TicketController from "@/core/backend/controllers/TicketController";

const POST = async (req, res) => {
    try {
        const { event, bookingUserDetails, venueID, ticketCount } = req.body;
        const bookingInformation = {
            event,
            bookingUserDetails,
            venueID,
            numberOfTicketsToBeReserved: ticketCount,
            ticketPrice: event.ticketPrice,
        };
        const { success, message, redirectURL } = await TicketController.reserveTicketAndGetRedirectURL(bookingInformation);
        if (success && redirectURL) {
            res.status(200).json({
                message: `Event data received successfully.`,
                transactionData: {event, bookingUserDetails, venueID, ticketCount},
                redirectURL,
            });
        } else {
            res.status(422).json({
                message: message || "Unable to process ticket reservation.",
            });
        }
    }
    catch (error) {
        res.status(500).json({ error });
    }
};

export default APIUtils.createAPIHandler({
    POST,
});