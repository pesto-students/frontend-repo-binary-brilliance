import CredentialsProvider from "next-auth/providers/credentials";
import {ROLES} from "@/core/common/constants";

export const options = {
    providers: [
        CredentialsProvider({
            name: 'Username and Password',
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            authorize: async (credentials) => {
                const user = { id: 1, name: 'adminUser', email: 'admin@example.com', role: ROLES.TKC_ADMIN, username: 'admin', password: 'admin' };
                if (user) {
                    return Promise.resolve({ id: user.id, name: user.name, email: user.email, role: user.role });
                } else {
                    return Promise.resolve(null);
                }
            }
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        jwt: async ({ token, user }) => {
            if (user) {
                token.role = user.role;
            }
            return token;
        },
        session: async ({ session, token }) => {
            session.user.role = token.role;
            return session;
        }
    },
};
