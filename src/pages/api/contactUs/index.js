import APIUtils from "@/core/backend/utils/APIUtils";
import ContactUsController from "@/core/backend/controllers/ContactUsController";

const POST = async (req, res) => {
    try {
        const { name, email, phoneNo, askUsAnything, persona, yourCity } = req.body;
        const contactUsInformation = { name, email, askUsAnything, phoneNo, persona, yourCity };
        const { success, message } = await ContactUsController.insertContactUsInformation(contactUsInformation);
        if (success) {
            res.status(200).json( {message:"Query received successfully." });
        } else {
            res.status(422)({ message: message || "Unable to process message. Please insert all the fields correctly." });
        }
    } catch (error) {
        console.error("Error in ContactUs POST:", error);
        res.status({ error: error.message || "Internal Server Error" });
    }
};
export default APIUtils.createAPIHandler({
    POST
});