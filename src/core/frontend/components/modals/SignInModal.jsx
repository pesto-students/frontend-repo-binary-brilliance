import { useState } from "react";
import { signIn } from "next-auth/react";
import Modal from "@/core/frontend/components/modals/Modal";
import LongLightButton from "@/core/frontend/components/buttons/LongLightButton";

const SignInModal = ({ isOpen, onClose }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = async (event) => {
        const result = await signIn("credentials", {
            redirect: false,
            username,
            password,
        });

        if (result.error) {
            console.log(result.error);
            return result.error;
        }
    };

    return (
        <Modal label={'Sign In'}
               isOpen={isOpen}
               onClose={onClose}
               onSubmit={onSubmit}
        >
            <form className="space-y-4 mt-4">
                <input type="email"
                       className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-green-500"                       value={username}
                       onChange={(event) => setUsername(event.target.value)}
                       placeholder="Email" />
                <input
                    type="password"
                    className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-green-500"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Password" />
                <LongLightButton label={'Sign In'} type={'submit'}/>
            </form>
        </Modal>
    );
};

export default SignInModal;