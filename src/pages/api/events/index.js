import APIUtils from "@/core/backend/utils/APIUtils";
import EventsController from "@/core/backend/controllers/EventsController";

const GET = async (req, res) => {
    try {
        const events = await EventsController.getEvents(req.query);
        if (events && events.length >= 1) {
            res.status(200).json({events});
        } else {
            res.status(200).json({ message: "No events found matching the query.", events: [] });
        }
    } catch (error) {
        console.error('Cannot fetch events', error);
        res.status(500).json({ error });
    }
};

export default APIUtils.createAPIHandler({
   GET,
});