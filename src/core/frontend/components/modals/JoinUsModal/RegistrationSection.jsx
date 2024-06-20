import LongContrastButton from "@/core/frontend/components/buttons/LongContrastButton";
import { AccountTypes } from '@/core/common/constants';

const RegistrationSection = ({ accountType }) => {
    return (
        <>
            <form className="space-y-4 mt-4">
                {accountType === AccountTypes.INDIVIDUAL && (
                    <>
                        <input
                            type="name"
                            name="name"
                            placeholder="Enter your name"
                            className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-green-500"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-green-500"
                            required
                        />
                        <input
                            type="mobileNumber"
                            name="mobileNumber"
                            placeholder="Enter your mobile number"
                            className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-green-500"
                            required
                        />
                    </>
                )}
                {accountType === AccountTypes.NGO && (
                    <>
                        <input
                            type="text"
                            name="ngoName"
                            placeholder="Enter NGO name"
                            className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-green-500"
                            required
                        />
                        <input
                            type="text"
                            name="ngoCity"
                            placeholder="Enter NGO city"
                            className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-green-500"
                            required
                        />
                        <input
                            type="text"
                            name="registrantName"
                            placeholder="Enter registrant name"
                            className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-green-500"
                            required
                        />
                        <input
                            type="email"
                            name="ngoEmail"
                            placeholder="Enter NGO email"
                            className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-green-500"
                            required
                        />
                        <input
                            type="tel"
                            name="mobileNumber"
                            placeholder="Enter mobile number"
                            className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-green-500"
                            required
                        />
                    </>
                )}
                <LongContrastButton label={'Send verification link'}
                                    type={'submit'}
                />
            </form>
        </>
    );
};

export default RegistrationSection;