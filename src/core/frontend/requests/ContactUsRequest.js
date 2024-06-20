
import axios from "../../../../axios.config";
import EnvironmentUtils from "@/core/common/utils/EnvironmentUtils";

const ContactUsRequest = {
    insertContactUsDetails: async (requestBody) => {
        try {
            const baseURL = EnvironmentUtils.getBaseURL();
            const response = await axios.post(`${baseURL}/api/contactUs`, requestBody, {
                headers: {
                    'Cache-Control': 'no-cache, no-store, must-revalidate',
                    'Pragma': 'no-cache',
                    'Expires': '0'
                },
            });
            return response.data;
        } catch (error) {
            console.error('Error in ContactUsRequest:', error);
            return { error: error.message || "Unknown error" }; // Include an error field in the return object
        }
    }
};

export default ContactUsRequest;
