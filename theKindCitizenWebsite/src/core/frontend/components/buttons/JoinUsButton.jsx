import ContrastButton from "@/core/frontend/components/buttons/ContrastButton";
import {useState} from "react";
import JoinUsModal from "@/core/frontend/components/modals/JoinUsModal/JoinUsModal";

const JoinUsButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return(
        <>
            <ContrastButton label={'Join Us'} margin={'ml-4'} onClick={() => setIsModalOpen(true)}/>
            <JoinUsModal isMultiUserRegistration={true} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
        </>
    )
};

export default JoinUsButton;