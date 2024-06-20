import APIUtils from "@/core/backend/utils/APIUtils";
import EventsController from "@/core/backend/controllers/EventsController";

const GET = async (req, res) => {
    try {
        const eventsCountByCity = await EventsController.getCountByCity();
        if (eventsCountByCity && eventsCountByCity.length) {
            res.status(200).json({ eventsCountByCity });
        } else {
            res.status(404).json({ message: "No event counts found by city." });
        }
    } catch (error) {
        console.error('Cannot fetch events', error);
        res.status(500).json({ error });
    }
};

export default APIUtils.createAPIHandler({
    GET,
});