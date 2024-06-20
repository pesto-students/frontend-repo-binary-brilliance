import React from 'react';
import LongContrastButton from "@/core/frontend/components/buttons/LongContrastButton";
import { useRouter } from "next/router";

const PaymentFailureSection = () => {
    const router = useRouter();

    return (
        <div className="bg-customDarkCream p-6 rounded-lg max-w-md mx-auto mt-12 text-center">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-500 mx-auto mb-4">
                {/* SVG for cross mark */}
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
            <h2 className="text-xl mb-2 font-semibold">Failed</h2>
            <p className="mb-4">We encountered an issue with your payment. Your ticket purchase for the event was not completed.</p>
            <p className="mb-4">Please check your payment information and try again. We're here to help if you need it!</p>
            <LongContrastButton label={'Back to events'} onClick={() => router.push('/events')} />
        </div>
    );
};

export default PaymentFailureSection;