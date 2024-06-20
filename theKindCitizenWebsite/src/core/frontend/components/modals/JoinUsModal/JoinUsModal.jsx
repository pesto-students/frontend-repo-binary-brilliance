import Modal from "@/core/frontend/components/modals/Modal";
import SelectTypeSection from "@/core/frontend/components/modals/JoinUsModal/SelectTypeSection";
import RegistrationSection from "@/core/frontend/components/modals/JoinUsModal/RegistrationSection";
import { useState } from "react";
import { ModalSteps } from "@/core/frontend/components/modals/JoinUsModal/constants";
import { AccountTypes } from '@/core/common/constants';

const JoinUsModal = ({ isOpen, onClose, isMultiUserRegistration = false }) => {
    const [step, setStep] = useState(ModalSteps.SELECT_TYPE);
    const [accountType, setAccountType] = useState('');

    const onSubmit = (event) => {
        console.log('Join us submit button clicked', event);
    };

    const handleBackClick = () => {
        if (step === ModalSteps.SIGN_IN) {
            setStep(ModalSteps.SELECT_TYPE);
        }
    };

    const renderBackButton = () => (
        step > ModalSteps.SELECT_TYPE && (
            <button
                onClick={handleBackClick}
                className="absolute top-0 left-0 mt-4 ml-4 text-gray-700 hover:text-gray-900"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
        )
    );

    const renderModalContent = () => {
        return (
            <>
                {isMultiUserRegistration ? (
                    <>
                        {renderBackButton()}
                        {step === ModalSteps.SELECT_TYPE && <SelectTypeSection accountType={accountType} setAccountType={setAccountType} handleNextClick={() => setStep(ModalSteps.SIGN_IN)} />}
                        {step === ModalSteps.SIGN_IN && <RegistrationSection accountType={accountType} />}
                    </>
                ) : (
                    <RegistrationSection accountType={AccountTypes.INDIVIDUAL} />
                )}
            </>
        );
    };

    return(
        <Modal label={'Join Us'}
               isOpen={isOpen}
               onClose={onClose}
               onSubmit={onSubmit}>
            {renderModalContent()}
        </Modal>
    );
};

export default JoinUsModal;
