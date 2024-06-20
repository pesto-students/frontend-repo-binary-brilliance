import React, { useState } from 'react';
import ContrastButton from '../buttons/ContrastButton';
import ContactUsRequest from '../../requests/ContactUsRequest';

const ContactUsForm = () => {
    const [formData, setFormData] = useState({
        persona: '',
        name: '',
        phoneNo: '',
        email: '',
        yourCity: '',
        askUsAnything: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false); 

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        let formIsValid = true;
        let newErrors = {};

        // Check for empty fields and validate email
        Object.keys(formData).forEach((key) => {
            if (!formData[key].trim()) {
                formIsValid = false;
                newErrors[key] = 'This field cannot be empty';
            }
        });

        // Email validation regex
        if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) {
            formIsValid = false;
            newErrors.email = 'Invalid email address';
        }

        setErrors(newErrors);
        return formIsValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                setIsSubmitting(true)
                const response = await ContactUsRequest.insertContactUsDetails(formData);
                if (response.error) {
                    // Inform the user of the submission error via an alert
                    alert(`Submission error: ${response.error}`);
                    setIsSubmitting(false);
                    return; // Exit the function if there's an error
                }
                // Reset form and errors upon successful submission
                setFormData({
                    persona: '',
                    name: '',
                    phoneNo: '',
                    email: '',
                    yourCity: '',
                    askUsAnything: ''
                });
                setErrors({});
                alert('Your contact information has been submitted successfully!');
            } catch (error) {
                // Log and alert the user of the error in the catch block
                console.error('There was a problem with your submission:', error);
                alert('There was a problem with your submission. Please try again.');
            }
            finally {
                setIsSubmitting(false); // Ensure isSubmitting is set to false after submission completes
            }
        }
    };


    return (
        <form className="space-y-6 mt-5">
            <div className="mb-6">
                <span className="text-blue-600 font-bold text-sm">Are you?</span>
                <div className="flex flex-col sm:flex-row sm:space-x-4 mt-2">
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-start">
                        {["individual", "ngo", "corporate"].map((value, index) => (
                            <label key={index} className="flex items-center">
                                <input
                                    type="radio"
                                    name="persona"
                                    className={`mr-2 ${errors.entity ? 'border-red-500' : ''}`}
                                    value={value}
                                    onChange={handleChange}
                                    checked={formData.persona === value}
                                    required
                                />
                                {value === "individual" && "An Individual/Volunteer"}
                                {value === "ngo" && "An NGO/Non-profit"}
                                {value === "corporate" && "A Corporate"}
                            </label>
                        ))}
                    </div>
                </div>
                {errors.entity && <p className="text-red-500 text-sm mt-1">{errors.entity}</p>}
            </div>

            {/* Name Input */}
            <div>
                <label htmlFor="name" className="text-blue-600 font-bold text-sm">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="E.g., John Doe"
                    className={`mt-1 block w-full border-b-2 bg-transparent ${errors.name ? 'border-red-500' : 'border-gray-300 focus:border-blue-600'}`}
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Phone and Email Input */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="text-blue-600 font-bold text-sm">Phone no.</label>
                    <input
                        type="text"
                        id="phoneNo"
                        name="phoneNo"
                        placeholder="E.g., +91 999999999"
                        className={`mt-1 block w-full border-b-2 bg-transparent ${errors.phone ? 'border-red-500' : 'border-gray-300 focus:border-blue                        -600'}`}
                        value={formData.phoneNo}
                        onChange={handleChange}
                        required
                    />
                    {errors.phoneNo && <p className="text-red-500 text-sm mt-1">{errors.phoneNo}</p>}
                </div>
                <div>
                    <label htmlFor="email" className="text-blue-600 font-bold text-sm">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="E.g., email@example.com"
                        className={`mt-1 block w-full border-b-2 bg-transparent ${errors.email ? 'border-red-500' : 'border-gray-300 focus:border-blue-600'}`}
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
            </div>

            {/* City Input */}
            <div>
                <label className="text-blue-600 font-bold text-sm">Your City</label>
                <input
                    type="text"
                    id="yourCity"
                    name="yourCity"
                    placeholder="E.g., Delhi"
                    className={`mt-1 block w-full border-b-2 bg-transparent ${errors.city ? 'border-red-500' : 'border-gray-300 focus:border-blue-600'}`}
                    value={formData.yourCity}
                    onChange={handleChange}
                    required
                />
                {errors.yourCity && <p className="text-red-500 text-sm mt-1">{errors.yourCity}</p>}
            </div>
            <div>
                <label className="text-blue-600 font-bold text-sm">Ask us anything</label>
                <textarea
                    id="askUsAnything"
                    name="askUsAnything"
                    rows="4"
                    placeholder="Your message here"
                    className={`mt-1 block w-full border-b-2 bg-transparent ${errors.message ? 'border-red-500' : 'border-gray-300 focus:border-blue-600'}`}
                    value={formData.askUsAnything}
                    onChange={handleChange}
                    required
                ></textarea>
                {errors.askUsAnything && <p className="text-red-500 text-sm mt-1">{errors.askUsAnything}</p>}
            </div>
            {/* <div>
                <ContrastButton label="Submit" onClick={handleSubmit} ></ContrastButton>
            </div> */}
            <div>
                <ContrastButton 
                    label={isSubmitting ? "Submitting..." : "Submit"} 
                    onClick={handleSubmit}
                    disabled={isSubmitting} // Disable the button while submitting
                />
            </div>
        </form>
    );
};

export default ContactUsForm;
