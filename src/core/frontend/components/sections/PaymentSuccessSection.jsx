import LongContrastButton from "@/core/frontend/components/buttons/LongContrastButton";
import {useRouter} from "next/router";

const PaymentSuccessSection = () => {
    const router = useRouter();

    return (
        <div className="bg-customDarkCream p-6 rounded-lg max-w-md mx-auto mt-12 text-center">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-500 mx-auto mb-4">
                {/* SVG for checkmark */}
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <h2 className="text-xl mb-2 font-semibold">Successful</h2>
            <p className="mb-4">Thank you for your generosity and support! Your ticket purchase for the event has been successfully completed.</p>
            <p className="mb-4">You can find your tickets in your mail inbox. Together, we can make a difference!</p>
            <LongContrastButton label={'Back to events'} onClick={() => router.push('/events')}/>
        </div>
    );
};

export default PaymentSuccessSection;