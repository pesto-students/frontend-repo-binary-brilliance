import { useSession } from "next-auth/react";
import { ROLES } from '@/core/common/constants';

const useAppUser = () => {
    const { data: session } = useSession();
    return {
        getUser: () => session?.user,
        isAdmin: () => {
            return session?.user?.role === ROLES.TKC_ADMIN;
        },
    };
}

export default useAppUser;