export const NAVIGATION_LINKS = {
    HOME: {
        LINK: `/`,
        LABEL: `Home`,
    },
    CORPORATES: {
        LINK: `/corporates`,
        LABEL: `Corporates`,
    },
    EVENTS: {
        LINK: '/events',
        LABEL: `Events`,
    },
    ABOUT_US: {
        LINK: `about-us`,
        LABEL: `About Us`,
    },
    CONTACT_US: {
        LINK: `/contact-us`,
        LABEL: `Contact Us`,
    },
    NGOS: {
        LINK: `/ngos`,
        LABEL: `NGOs`
    },
    INDIVIDUALS: {
        LINK: `/individuals`,
        LABEL: `Individuals`,
    },
};

export const SOCIALS = {
    WHATSAPP_NUMBER: `7500777789`,
    INSTAGRAM_LINK: `https://www.instagram.com/thekindcitizen_/`,
    FACEBOOK_LINK: `https://www.instagram.com/thekindcitizen_/`,
    LINKEDIN_LINK: `https://www.linkedin.com/company/the-kind-citizen-tkc/`,
    get WHATSAPP_LINK() {
        const message = encodeURIComponent("Hello, We'd like to partner with The Kind Citizen - TKC.");
        return `https://wa.me/${SOCIALS.WHATSAPP_NUMBER}?text=${message}`
    }
};