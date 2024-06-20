import React from 'react';
import LongContrastButton from "@/core/frontend/components/buttons/LongContrastButton";
import { AccountTypes } from '@/core/common/constants';

const SelectTypeSection = ({ accountType, setAccountType, handleNextClick }) => {
    return (
        <>
            <div className="mt-4 flex justify-between pb-4">
                <button
                    onClick={() => setAccountType(AccountTypes.INDIVIDUAL)}
                    className={`w-full px-4 py-2 mr-2 text-white rounded-md focus:outline-none ${
                        accountType === AccountTypes.INDIVIDUAL ? 'bg-customBlue' : 'bg-gray-200 text-black'
                    }`}
                >
                    {AccountTypes.INDIVIDUAL}
                </button>
                <button
                    onClick={() => setAccountType(AccountTypes.NGO)}
                    className={`w-full px-4 py-2 ml-2 text-white rounded-md focus:outline-none ${
                        accountType === AccountTypes.NGO ? 'bg-customBlue' : 'bg-gray-200 text-black'
                    }`}
                >
                    {AccountTypes.NGO}
                </button>
            </div>
            <LongContrastButton label={'Next'} onClick={handleNextClick}/>
        </>
    );
};

export default SelectTypeSection;