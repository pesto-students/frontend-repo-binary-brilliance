import { toInteger } from "lodash";
import ReadVenueCapacity from "../models/ReadVenueCapacity"
import PaymentService from "@/core/backend/services/PhonePe/PaymentService";
import Venue from "../models/Venue";
import {mockSendEmail} from "@/core/backend/services/Email/EmailService";
import MerchantTransaction from "@/core/backend/models/MerchantTransaction";
import emailService from '@/core/backend/services/Email/EmailService';

const TicketController = {
    reserveTicketAndGetRedirectURL: async (bookingInformation) => {
        const {
            event,
            bookingUserDetails,
            venueID,
            numberOfTicketsToBeReserved,
            ticketPrice
        } = bookingInformation;

        const {
            name,
            email,
            phone,
            address
        } = bookingUserDetails;

        if (!event || !venueID || !bookingUserDetails || !numberOfTicketsToBeReserved || !ticketPrice) {
            return { success: false, message: "Invalid input parameters." };
        }
        const remainingCapacity = await ReadVenueCapacity.getAvailableCapacity(venueID);
        if (toInteger(numberOfTicketsToBeReserved) <= toInteger(remainingCapacity)) {
            const areTicketsReserved = await ReadVenueCapacity.updateTicketCapacityOnReservation(toInteger(venueID),
                toInteger(numberOfTicketsToBeReserved));
            if (areTicketsReserved && areTicketsReserved.success) {
                try {
                    const paymentInitiatedDetails = await PaymentService.initiatePayment(bookingInformation);
                    if (!paymentInitiatedDetails) {
                        return { success: false, message: "Failed to obtain redirect URL." };
                    }
                    const redirectURL = paymentInitiatedDetails.redirectUrl;
                    return { success: true, redirectURL };
                }
                catch (error) {
                    console.error("Error initiating payment:", error);
                    return { success: false, message: error.message };
                }
            }
            else {
                return { success: false, message: "Not enough tickets available." };
            }
        }
    },
    updateCapacity: async (venueID, numberOfTicketsReserved, status, merchantTransactionID) => {
        if (status === 'PAYMENT_SUCCESS') {
            await Venue.updateCapacity(toInteger(venueID), toInteger(numberOfTicketsReserved));
            const transaction = await MerchantTransaction.getByMerchantTransactionID(merchantTransactionID);
            const { response, error } = await emailService.sendBookingDetailsEmail(transaction.Email);
            return { status: true, message: "Capacity updated successfully.", emailResponse: { response, error } };
        } else {
            await ReadVenueCapacity.updateTicketCapacityOnRleasingReservation(venueID, toInteger(numberOfTicketsReserved))
            return { status: false, message: "Capacity updated on releasing reservation.+{status}" };
        }
    }
};

export default TicketController