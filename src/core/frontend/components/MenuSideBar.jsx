import { FaTicketAlt, FaMapMarkerAlt, FaGift, FaHandshake } from 'react-icons/fa';
import Link from "next/link";

const MenuSidebar = () => {
    return (
        <nav className="bg-transparent text-black w-48 rounded-r-xl py-5 px-3 space-y-3">
            <div className="flex items-center space-x-2">
                <FaTicketAlt className="text-xl" />
                <a href='#eventInformation'>Event Information</a>
            </div>
            {/*<div className="flex items-center space-x-2">*/}
            {/*    <FaMoneyBack className="text-xl" />*/}
            {/*    <span>Refund Policy</span>*/}
            {/*</div>*/}
            <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-xl" />
                <a href='#venueSelection'>Venue</a>
            </div>
            <div className="flex items-center space-x-2">
                <FaGift className="text-xl" />
                <a href='#perks'>Event Perks</a>
            </div>
            <div className="flex items-center space-x-2">
                <FaHandshake className="text-xl" />
                <a href='#impactPartners'>Impact Partners</a>
            </div>
        </nav>
    );
};

export default MenuSidebar;