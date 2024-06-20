import APIUtils from "@/core/backend/utils/APIUtils";
import EventsController from "@/core/backend/controllers/EventsController";
import { toInteger } from "lodash";

const GET = async (req, res) => {
    try {
        const { id } = req.query;
        const event = await EventsController.getEventById(toInteger(id));
        if (event) {
            res.status(200).json({event});
        } else {
            res.status(404).json({ message: "Event not found." });
        }
    } catch (error) {
        console.error('Cannot fetch event', error);
        res.status(500).json({ error });
    }
};

export default APIUtils.createAPIHandler({
    GET,
});