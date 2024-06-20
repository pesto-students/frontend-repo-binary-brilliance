import { useRouter } from 'next/router';
import LightButton from "@/core/frontend/components/buttons/LightButton";
import {useState} from "react";
import ContrastButton from "@/core/frontend/components/buttons/ContrastButton";
import JoinUsModal from "@/core/frontend/components/modals/JoinUsModal/JoinUsModal";
import SignInModal from "@/core/frontend/components/modals/SignInModal";

const SignInButton = () => {
    // const router = useRouter();
    //
    // const navigateToSignIn = () => {
    //     router.push('/api/auth/signin');
    // };
    //
    // return(
    //     <LightButton onClickCallBack={navigateToSignIn} label={'Sign In'}/>
    // )
    const [isModalOpen, setIsModalOpen] = useState(false);
    return(
        <>
            <LightButton onClick={() => setIsModalOpen(true)} label={'Sign In'}/>
            <SignInModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
        </>
    )
};

export default SignInButton;