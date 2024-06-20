import prisma from "../../../../prisma/prisma";
const ContactUs =
{
    insertContactUsInformation: async (contactUsData) => {
        try {
            const newContact = await prisma.contactUs.create({
                data: {
                    name: contactUsData.name,
                    phoneNo: contactUsData.phoneNo,
                    email: contactUsData.email,
                    yourCity: contactUsData.yourCity,
                    askUsAnything: contactUsData.askUsAnything,
                    persona: contactUsData.persona,
                },
            });
            console.log("Contact created successfully:", newContact);
            return { success: true, message: "Contact created successfully." };
        } catch (error) {
            console.error("Failed to create contact:", error.message);
            throw new Error(error);
        }

    }
}
export default ContactUs;
