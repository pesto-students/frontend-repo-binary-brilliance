import ContactUs from '@/core/backend/models/ContactUs';
import ContactUsHelper from '@/core/backend/helpers/contactUs/ContactUsHelper'

const ConttactUsController = {
    insertContactUsInformation: async (data) => {
        try {
            const isDataValid = await ContactUsHelper.isDataValid(data);
            if (isDataValid.success === true) {
                const isDataInserted = await ContactUs.insertContactUsInformation(data);
                return isDataInserted;
            }
            else {
                return isDataValid;
            }

        } catch (error) {
            console.error('Cannot insert contact us information', error);
            throw new Error(error);
        }
    }

}
export default ConttactUsController;