const EnvironmentUtils = {
    isServerEnvironment: () => {
        return typeof window === 'undefined';
    },
    getBaseURL: () => {
        return EnvironmentUtils.isServerEnvironment() ? process.env.APP_DOMAIN : '';
    },
    getNextAuthSecret: () => {
        return process.env.NEXTAUTH_SECRET;
    },
};

export default EnvironmentUtils;