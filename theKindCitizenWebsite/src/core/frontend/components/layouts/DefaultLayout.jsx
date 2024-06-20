import Header from "@/core/frontend/components/layouts/layoutComponents/Header";
import Body from "@/core/frontend/components/layouts/layoutComponents/Body";
import WhatsAppChatButton from "@/core/frontend/components/buttons/WhatsappChatButton";
import Footer from "@/core/frontend/components/layouts/layoutComponents/Footer";

const DefaultLayout = ({ children }) => {
    return (
        <main>
            <Header />
            <Body>
                {children}
            </Body>
            <Footer/>
            <WhatsAppChatButton />
        </main>
    );
};

export default DefaultLayout;
