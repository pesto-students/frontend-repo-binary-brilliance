import axios from "../../../../axios.config";
import EnvironmentUtils from "@/core/common/utils/EnvironmentUtils";

const TicketRequests = {
    buyTickets: async (requestBody) => {
        try {
            const response = await axios.post(`/api/tickets/buy`, requestBody, {
                headers: {
                    'Cache-Control': 'no-cache, no-store, must-revalidate',
                    'Pragma': 'no-cache',
                    'Expires': '0'
                },
            });
            return response.data;
        } catch (error) {
            console.log('Error:', error);
            return {}; // Return empty object in case of error
        }
    }
};

export default TicketRequests;