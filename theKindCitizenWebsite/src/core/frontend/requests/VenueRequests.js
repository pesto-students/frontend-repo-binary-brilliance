import axios from "../../../../axios.config";
import {isEmpty} from "lodash";
import EnvironmentUtils from "@/core/common/utils/EnvironmentUtils";
import publicImages from "@/core/frontend/publicImages";

const VenueRequests = {
    fetchVenueDetailsByID: async (id) => {
        try {
            const baseURL = EnvironmentUtils.getBaseURL();
            const response = await axios.get(`${baseURL}/api/venues/${id}`, {
                headers: {
                    'Cache-Control': 'no-cache, no-store, must-revalidate',
                    'Pragma': 'no-cache',
                    'Expires': '0'
                },
            });
            const { venue } = response.data;
            return venue;
        } catch (error) {
            console.log('Error occured while fetching venue.', error);
            return {};
        }
    }
};

export default VenueRequests;