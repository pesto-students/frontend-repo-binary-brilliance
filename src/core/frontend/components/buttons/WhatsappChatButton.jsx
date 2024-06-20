import publicImages from "@/core/frontend/publicImages";
import {SOCIALS} from "@/core/frontend/constants";

const WhatsAppChatButton = () => {
    const whatsappNumber = SOCIALS.WHATSAPP_NUMBER;
    const message = encodeURIComponent("Hello, We'd like to partner with The Kind Citizen - TKC.");
    const whatsappUrl = SOCIALS.WHATSAPP_LINK;
    const whatsappLogoLink = 'https://cdn.pixabay.com/photo/2021/05/22/11/38/logo-6273368_1280.png'
    return (
        <a href={whatsappUrl}
           target="_blank"
           rel="noopener noreferrer"
           className="fixed bottom-4 right-4 w-16 h-16 bg-no-repeat bg-center bg-cover rounded-full shadow-lg text-lg transition duration-300 ease-in-out z-50"
           style={{ backgroundImage: `url('${publicImages.WHATSAPP_LOGO}')` }} // Make sure you have the image at the public folder
           aria-label="Chat with us on WhatsApp">
        </a>
    );
};

export default WhatsAppChatButton;