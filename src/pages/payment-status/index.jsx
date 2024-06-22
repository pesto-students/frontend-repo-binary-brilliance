import PaymentRequests from "@/core/frontend/requests/PaymentRequests";
import PaymentSuccessSection from "@/core/frontend/components/sections/PaymentSuccessSection";
import DefaultLayout from "@/core/frontend/components/layouts/DefaultLayout";
import Section from "@/core/frontend/components/sections/Section";
import SpaceFillerSection from "@/core/frontend/components/sections/SpaceFillerSection";
import PaymentFailureSection from "@/core/frontend/components/sections/PaymentFailureSection";
import TicketController from "@/core/backend/controllers/TicketController";

const StatusPage = ({success, emailResponse}) => {
    console.log({
        emailResponse
    });
    return (
        <DefaultLayout>
            <Section isGradientCream={true} className='pt-24' horizontalPositionOfChildren={'center'}>
                {success ? <PaymentSuccessSection/> : <PaymentFailureSection/>}
            </Section>
        </DefaultLayout>
    );
};

export default StatusPage;

export const getServerSideProps = async (context) => {
    try {
        const { transactionID, merchantID, venueID, numberOfTicketsToBeReserved } = context.query;
        const paymentResponse = await PaymentRequests.getPaymentStatus(merchantID, transactionID);
        const { emailResponse } = await TicketController.updateCapacity(venueID, numberOfTicketsToBeReserved, paymentResponse.code, transactionID);
        return {
            props: {
                success: paymentResponse.success,
                emailResponse,
            },
        };
    } catch (error) {
        return {
            redirect: {
                destination: '/events',
                permanent: false,
            },
        };
    }
};