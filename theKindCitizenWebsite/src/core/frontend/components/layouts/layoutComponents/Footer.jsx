import React from 'react';
import { FaWhatsapp, FaInstagram, FaLinkedin, FaFacebookF } from 'react-icons/fa';
import Link from "next/link";
import {NAVIGATION_LINKS, SOCIALS} from "@/core/frontend/constants";

const Footer = () => {
    return (
        <footer className="bg-black text-white">
            <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between">
                <div className="flex flex-col mb-6 md:mb-0 md:flex-row md:items-center">
                    <h2 className="text-xl mr-4 mb-4 md:mb-0">Get in Touch</h2>
                    <div className="flex space-x-4">
                        <a href={SOCIALS.WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp className="text-2xl cursor-pointer hover:text-green-500" />
                        </a>
                        <a href={SOCIALS.INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="text-2xl cursor-pointer hover:text-pink-600" />
                        </a>
                        <a href={SOCIALS.LINKEDIN_LINK} target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-500" />
                        </a>
                        <a href={SOCIALS.FACEBOOK_LINK} target="_blank" rel="noopener noreferrer">
                            <FaFacebookF className="text-2xl cursor-pointer hover:text-blue-700" />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col mb-6 md:mb-0 md:flex-row md:items-center">
                    <h2 className="text-xl md:mr-4 mb-4 md:mb-0">Site Map</h2>
                    <ul className="flex flex-col text-customYellow space-y-2 md:flex-row md:space-y-0 md:space-x-4">
                        <li>
                            <Link href={NAVIGATION_LINKS.HOME.LINK} className="hover:underline">
                                {NAVIGATION_LINKS.HOME.LABEL}
                            </Link>
                        </li>
                        <li>
                            <Link href={NAVIGATION_LINKS.ABOUT_US.LINK} className="hover:underline">
                                {NAVIGATION_LINKS.ABOUT_US.LABEL}
                            </Link>
                        </li>
                        <li>
                            <Link href={NAVIGATION_LINKS.CORPORATES.LINK} className="hover:underline">
                                {NAVIGATION_LINKS.CORPORATES.LABEL}
                            </Link>
                        </li>
                        <li>
                            <Link href={NAVIGATION_LINKS.NGOS.LINK} className="hover:underline">
                                {NAVIGATION_LINKS.NGOS.LABEL}
                            </Link>
                        </li>
                        <li>
                            <Link href={NAVIGATION_LINKS.EVENTS.LINK} className="hover:underline">
                                {NAVIGATION_LINKS.EVENTS.LABEL}
                            </Link>
                        </li>
                        <li>
                            <Link href={NAVIGATION_LINKS.INDIVIDUALS.LINK} className="hover:underline">
                                {NAVIGATION_LINKS.INDIVIDUALS.LABEL}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="text-center text-gray-500 text-sm py-4 border-t border-gray-700">
                Terms of use | Privacy Policy | Copyright 2024 TKA All Rights Reserved
            </div>
        </footer>
    );
};

export default Footer;
