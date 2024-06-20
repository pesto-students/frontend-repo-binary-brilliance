import ContactUsForm from "@/core/frontend/components/form/ContactUsForm";
import Heading from "@/core/frontend/components/headings/Heading";
import DefaultLayout from "@/core/frontend/components/layouts/DefaultLayout";
import Section from "@/core/frontend/components/sections/Section";

const ContactUs = () => {
    return (
        <DefaultLayout>
            <Section horizontalPositionOfChildren="center" className="pt-40">
                <Heading labelConfig={{ blue: `Contact`, black: `TKC`, isBlueFirst: true }} />  
                <ContactUsForm></ContactUsForm>           
            </Section>
        </DefaultLayout>
    )
};
export default ContactUs;

