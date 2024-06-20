import { toInteger } from "lodash";
import Venue from "../models/Venue"
const VenueController = {
    getVenueDetailsByID: async (venueId) => {
        try {
            const venue = await Venue.getVenueDetailsByID(toInteger(venueId));
            if (!venue || Object.keys(venue).length === 0) {
                console.log(`No venue found for ID ${venueId} or venue data is empty.`);
                return null;
            } else {
                return venue;
            }
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
}
export default VenueController;