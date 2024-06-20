import React from 'react';
import Link from 'next/link';
import ContrastButton from "@/core/frontend/components/buttons/ContrastButton";
import {useRouter} from "next/router";

const NotFoundPage = () => {
    const router = useRouter();
    const handleGoBack = async (event) => {
        event.preventDefault();
        await router.push('/');
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-800">Coming Soon</h1>
                <p className="mt-4 text-lg text-gray-600">{"We re working hard to bring you this page. Stay tuned!"}</p>
                <div className='mt-4'>
                    <ContrastButton label={'Go Back'}
                                isRed={true}
                                onClick={handleGoBack}
                    />
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;