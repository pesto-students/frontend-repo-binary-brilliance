import APIUtils from "@/core/backend/utils/APIUtils";
import { toInteger } from "lodash";
import TicketController from "@/core/backend/controllers/TicketController";

const GET = async (req, res) => {
    try {
        const { venueID, numberOfTicketReserved, status } = req.query;
        const result=await TicketController.updateCapacity(toInteger(venueID),toInteger(eventID),toInteger(numberOfTicketReserved),response,status);
        if (result.status === 'successful') {
            res.status(200).json({ message: "Capacity updated successfully." });
        } else {
            res.status(200).json({ message: "Capacity updated on releasing reservation." });
        }
        // If status is successful, update the capacity
    } catch (error) {
        console.error('Error handling the capacity update', error);
        res.status(500).json({ error: error.message });
    }
};

export default APIUtils.createAPIHandler({
    GET,
});
