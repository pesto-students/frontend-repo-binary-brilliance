const ContactUsHelper = {
    isDataValid: async (requestData) => {
        const { name, phoneNo, email, yourCity, askUsAnything, persona } = requestData;
        if (!name || !phoneNo || !email || !yourCity || !askUsAnything || !persona) {
            return { success: false, message: "All fields must be provided and non-empty." };
        }
        else {
            return { success: true, message: "All fields are provided and non-empty." };
        }

    }
}
export default ContactUsHelper;
