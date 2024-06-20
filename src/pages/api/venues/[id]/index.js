import APIUtils from "@/core/backend/utils/APIUtils";
import VenueController from "@/core/backend/controllers/VenueController";

const GET = async (req, res) => {
    try {
        const { id } = req.query;
        const venue = await VenueController.getVenueDetailsByID(id);
        if (!venue || Object.keys(venue).length === 0) {
            res.status(404).json({ message: "Venue not found." });
        } else {
            res.status(200).json({ venue });
        }
    } catch (error) {
        console.error('Cannot fetch event', error);
        res.status(500).json({ error });
    }
};

export default APIUtils.createAPIHandler({
    GET,
});