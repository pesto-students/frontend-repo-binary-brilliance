import publicImages from "@/core/frontend/publicImages";

export const ROLES = {
    TKC_ADMIN: 'ADMIN',
    TKC_EMPLOYEE: 'TKC_EMPLOYEE',
    NGO_ADMIN: 'NGO_ADMIN',
    NGO_EMPLOYEE: 'NGO_EMPLOYEE',
    USER: 'USER'
};

export const AccountTypes = {
    INDIVIDUAL: 'Individual',
    NGO: 'Ngo',
};

export const EVENTS = {
    CAUSES: {
        ANIMALS: "Animals",
        CHILDREN: "Children",
        ELDERLY: "Elderly",
        HUNGER: "Hunger",
        WOMEN: "Women",
        LGBTQ: 'LGBTQ',
        FAITH: 'Faith',
        ENVIRONMENT_AND_CLIMATE_CHANGE: 'Environment and Climate Change',
        DISASTER_RELIEF: 'Disaster Relief',
        DISABILITY: 'Disability',
    },
    CITIES: {
        HYDERABAD: "Hyderabad",
        DELHI: "Delhi",
        BENGALURU: "Bengaluru",
        CHENNAI: "Chennai",
        MUMBAI: "Mumbai",
        JAIPUR: "Jaipur",
        KOLKATA: "Kolkata"
    },
    PRICES: {
        FREE: 'Free',
        PAID: 'Paid'
    },
    get FILTER_DEFAULTS() {
        return {
            CITY: this.CITIES.DELHI,
            NUMBER_OF_DAYS_FROM_TODAY_LIMIT: 30,
            PAGINATION_LIMIT: 10,
        };
    },
    get CAUSE_LOGOS() {
        const logosMap = {};
        Object.keys(publicImages.CAUSE_LOGOS).forEach(logo => {
            logosMap[logo.toUpperCase()] = publicImages.CAUSE_LOGOS[logo];
        });

        const map = {};

        Object.values(this.CAUSES).forEach((cause) => {
            const upperCaseCauseNameWithUnderscore = cause.toUpperCase().replace(/\s+/g, '_');
            const causeLogo = logosMap[upperCaseCauseNameWithUnderscore];
            if (causeLogo) {
                const upperCaseCauseName = upperCaseCauseNameWithUnderscore
                    .toLowerCase() // Convert the entire string to lowercase first
                    .replace(/_/g, ' ') // Replace underscores with spaces
                    .split(' ') // Split the string into an array of words
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
                    .join(' '); // Join the array back into a single string

                map[upperCaseCauseName] = causeLogo;
            }
        });
        return map;
    },
    get CITY_IMAGES() {
        const imagesMap = {};
        Object.keys(publicImages.CITIES).forEach(city => {
            imagesMap[city.toUpperCase()] = publicImages.CITIES[city];
        });

        const map = {};

        Object.values(this.CITIES).forEach((city) => {
            const upperCaseCityName = city.toUpperCase();
            const cityImage = imagesMap[upperCaseCityName];
            if (cityImage) {
                map[upperCaseCityName] = cityImage;
            }
        });
        return map;
    },
    TICKET: {
        UPPER_LIMIT: 10,
        LOWER_LIMIT: 1,
        PAYMENT_TIMEOUT: 3 * 60 * 1000,
    }
};

export const FILTER_CONSTANTS = {
    ALL: 'All'
};
