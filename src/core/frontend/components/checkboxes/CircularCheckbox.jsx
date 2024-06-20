import React from 'react';

const CircularCheckbox = ({ checked, onChange }) => {
    return (
        <div className="relative">
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className="opacity-0 absolute h-8 w-8"
            />
            <div
                className={`w-4 h-4 rounded-full flex justify-center items-center cursor-pointer ${checked ? '' : 'bg-transparent'} border-2 border-customYellow`}
                onClick={onChange}
            >
                {checked && (
                    <span className="block w-2 h-2 bg-customYellow rounded-full"></span>
                )}
            </div>
        </div>
    );
};

export default CircularCheckbox;