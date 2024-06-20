import DefaultLayout from "@/core/frontend/components/layouts/DefaultLayout";
import Details from "@/core/frontend/components/Details";
import ThreePartLayout from "@/core/frontend/components/layouts/ThreePartLayout";
import TicketPurchaseCard from "@/core/frontend/components/cards/TicketPurchaseCard";
import MenuSidebar from "@/core/frontend/components/MenuSideBar";
import { EventDetailsPageProvider } from "@/core/frontend/contexts/EventDetailsPageContext";
import BuyTicketButton from "@/core/frontend/components/buttons/BuyTicketButton";
import EventRequests from "@/core/frontend/requests/EventRequests";

const EventDetailsPage = ({event}) => {
    return (
        <EventDetailsPageProvider>
            <DefaultLayout>
                <ThreePartLayout className='pt-24 bg-gradient-to-b from-customCream to-white'
                                 leftChildren={<MenuSidebar/>}
                                 centreChildren={<Details event={event}/>}
                                 rightChildren={<TicketPurchaseCard event={event}/>}
                                 ComponentToShowAsModalInMobileView={TicketPurchaseCard}
                                 OpenModalButtonComponent={BuyTicketButton}/>
            </DefaultLayout>
        </EventDetailsPageProvider>
    );
};

export default EventDetailsPage;

export const getServerSideProps = async (context) => {
    try {
        const event = await EventRequests.fetchEventByID(context.query.id);
        return {
            props: {
                event,
            }
        }
    } catch (error) {
        return {
            redirect: {
                destination: '/events',
                permanent: false,
            },
        };
    }
};