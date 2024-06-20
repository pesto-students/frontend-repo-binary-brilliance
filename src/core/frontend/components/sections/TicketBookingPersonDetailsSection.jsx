import React, { useContext } from 'react';
import { BookTicketsPageContext } from "@/core/frontend/contexts/BookTicketsPageProvider";

const TicketBookingPersonDetailsSection = () => {
    const {
        bookingUserDetails,
        handleChange,
    } = useContext(BookTicketsPageContext);

    return (
        <div className="bg-customCream w-full mx-auto rounded-lg">
            <h2 className="text-xl p-6 bg-customDarkCream font-semibold mb-6 rounded-lg flex items-center">
                <span role="img" aria-label="Document">📝</span> Fill out your details
            </h2>
            <form className='px-2'>
                <label className="block mb-4">
                    <span className="text-gray-700">Name<span className="text-red-500">*</span></span>
                    <input
                        type="text"
                        name="name"
                        value={bookingUserDetails.name}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border-b-2 border-gray-500 p-2 text-gray-700"
                        placeholder="Your name"
                    />
                </label>
                <div className="flex mb-4 space-x-4">
                    <label className="flex-1">
                        <span className="text-gray-700">Email<span className="text-red-500">*</span></span>
                        <input
                            type="email"
                            name="email"
                            value={bookingUserDetails.email}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border-b-2 border-gray-500 p-2 text-gray-700"
                            placeholder="Your email"
                        />
                    </label>
                    <label className="flex-1">
                        <span className="text-gray-700">Phone no.<span className="text-red-500">*</span></span>
                        <input
                            type="tel"
                            name="phone"
                            value={bookingUserDetails.phone}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border-b-2 border-gray-500 p-2 text-gray-700"
                            placeholder="Your phone number"
                        />
                    </label>
                </div>
                <label className="block mb-6">
                    <span className="text-gray-700">Address</span>
                    <input
                        type="text"
                        name="address"
                        value={bookingUserDetails.address}
                        onChange={handleChange}
                        className="mt-1 block w-full border-b-2 border-gray-500 p-2 text-gray-700"
                        placeholder="Your address"
                    />
                </label>
            </form>
        </div>
    );
};

export default TicketBookingPersonDetailsSection;