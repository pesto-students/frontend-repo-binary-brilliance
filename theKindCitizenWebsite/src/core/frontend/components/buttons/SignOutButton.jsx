import { signOut } from "next-auth/react";
import LightButton from "@/core/frontend/components/buttons/LightButton";

const SignOutButton = () => {
    return (
        <LightButton onClick={() => signOut({ callbackUrl: '/' })} label={'Sign Out'}/>
    )
};

export default SignOutButton;