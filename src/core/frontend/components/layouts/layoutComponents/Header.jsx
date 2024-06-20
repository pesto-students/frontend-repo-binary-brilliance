import Link from 'next/link';
import {useEffect, useState} from 'react';
import {useSession} from "next-auth/react";
import SignInButton from "@/core/frontend/components/buttons/SignInButton";
import JoinUsButton from "@/core/frontend/components/buttons/JoinUsButton";
import SignOutButton from "@/core/frontend/components/buttons/SignOutButton";
import {NAVIGATION_LINKS} from "@/core/frontend/constants";

const Header = () => {
    const { data: session } = useSession();
    const [isNavOpen, setIsNavOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 800) {
                setIsNavOpen(false); // Close the nav on resizing to wider screens
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="fixed top-3 left-0 right-0 px-4 sm:px-6 lg:px-8 mx-auto max-w-screen-xl z-20">
            <header className="w-full bg-white border-t border-customYellow shadow-xl rounded-full">
                <div className="flex justify-between items-center h-16">
                    <div className="ml-8 flex items-center gap-4 sm:gap-8">
                        <Link href="/">
                            <span className="flex-shrink-0">
                                <img src='/CompanyLogo.png' alt="Logo" className="h-10 w-10 rounded-full"/>
                            </span>
                        </Link>
                    </div>
                    <div
                        className={`${isNavOpen ? 'fixed top-16 right-0 mt-4 mr-4 bg-white z-50 p-5 flex flex-col rounded-lg shadow-lg' : 'hidden'} md:flex md:items-center md:static md:p-0 md:bg-transparent md:shadow-none md:flex-row`}
                        style={{minWidth: '250px'}}>
                        <nav className="flex flex-col md:flex-row gap-4 sm:gap-6">
                            <Link href={NAVIGATION_LINKS.HOME.LINK}><span className="text-gray-800 hover:text-gray-600">{NAVIGATION_LINKS.HOME.LABEL}</span></Link>
                            <Link href={NAVIGATION_LINKS.ABOUT_US.LINK}><span className="text-gray-800 hover:text-gray-600">{NAVIGATION_LINKS.ABOUT_US.LABEL}</span></Link>
                            <Link href={NAVIGATION_LINKS.CORPORATES.LINK}><span className="text-gray-800 hover:text-gray-600">{NAVIGATION_LINKS.CORPORATES.LABEL}</span></Link>
                            <Link href={NAVIGATION_LINKS.NGOS.LINK}><span className="text-gray-800 hover:text-gray-600">{NAVIGATION_LINKS.NGOS.LABEL}</span></Link>
                            <Link href={NAVIGATION_LINKS.EVENTS.LINK}><span className="text-gray-800 hover:text-gray-600">{NAVIGATION_LINKS.EVENTS.LABEL}</span></Link>
                            <Link href={NAVIGATION_LINKS.INDIVIDUALS.LINK}><span className="text-gray-800 hover:text-gray-600">{NAVIGATION_LINKS.INDIVIDUALS.LABEL}</span></Link>
                    </nav>
                </div>
                <div className="mr-8 flex items-center gap-4">
                    <button onClick={() => setIsNavOpen((prev) => !prev)} className="md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20"
                             fill="currentColor">
                            <path
                                d="M3 5h14a1 1 0 000-2H3a1 1 0 100 2zm0 6h14a1 1 0 000-2H3a1 1 0 100 2zm0 6h14a1 1 0 000-2H3a1 1 0 100 2z"/>
                        </svg>
                    </button>
                    {/*{session ? <SignOutButton/> : <>*/}
                    {/*    <SignInButton/>*/}
                    {/*    <JoinUsButton/>*/}
                    {/*</>}*/}
                </div>
                </div>
            </header>
        </div>
    );
};

export default Header;