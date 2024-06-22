const EnvironmentUtils = {
    isServerEnvironment: () => {
        return typeof window === 'undefined';
    },
    getBaseURL: () => {
        console.log({
            message: 'hi i am in EnvironmentUtils.js file',
            APP_DOMAIN: process.env.APP_DOMAIN,
            isServer: EnvironmentUtils.isServerEnvironment()
        });
        return EnvironmentUtils.isServerEnvironment() ? process.env.APP_DOMAIN : '';
    },
    getNextAuthSecret: () => {
        return process.env.NEXTAUTH_SECRET;
    },
};

export default EnvironmentUtils;