import React, { useRef } from "react";

export default function PersonalInformation() {
    const studentname = useRef();
    const dateOfBirth = useRef();
    const gender = useRef();
    const contactNo = useRef();
    const emailAddress = useRef();
    const AadharNumber = useRef();
    const ResidentAddress = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const Name = studentname.current.value;
        const DOB = dateOfBirth.current.value;
        const gen = gender.current.value;
        const Contact = contactNo.current.value;
        const email = emailAddress.current.value;
        const aadhar = AadharNumber.current.value;
        const homeAddress = ResidentAddress.current.value;

        studentname.current.value = "";
        dateOfBirth.current.value = "";
        gender.current.value = "";
        contactNo.current.value = "";
        emailAddress.current.value = "";
        AadharNumber.current.value = "";
        ResidentAddress.current.value = "";

        addPost(Name, DOB, gen, Contact, email, aadhar, homeAddress);
    };

    return (
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Personal Details
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700 font-medium">
                        Student Name
                    </label>
                    <input
                        type="text"
                        ref={studentname}
                        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your name here"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium">
                        Date of Birth
                    </label>
                    <input
                        type="date"
                        ref={dateOfBirth}
                        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium">
                        Gender
                    </label>
                    <div className="flex gap-4 mt-2">
                        {["Male", "Female", "Other"].map((g) => (
                            <label key={g} className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="gender"
                                    value={g}
                                    ref={gender}
                                    className="focus:ring-blue-500"
                                    required
                                />
                                {g}
                            </label>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="block text-gray-700 font-medium">
                        Contact Number
                    </label>
                    <input
                        type="tel"
                        ref={contactNo}
                        pattern="[0-9]{10}"
                        placeholder="Enter 10-digit number"
                        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium">
                        Email Address
                    </label>
                    <input
                        type="email"
                        ref={emailAddress}
                        placeholder="example@example.com"
                        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium">
                        Aadhar Number
                    </label>
                    <input
                        type="text"
                        ref={AadharNumber}
                        pattern="[0-9]{12}"
                        placeholder="Enter 12-digit Aadhar Number"
                        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium">
                        Residential Address
                    </label>
                    <textarea
                        ref={ResidentAddress}
                        rows="4"
                        placeholder="Enter your full residential address"
                        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    ></textarea>
                </div>

                <div className="flex justify-between">
                    <button
                        type="button"
                        className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
                    >
                        Back
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                        Save & Next
                    </button>
                </div>
            </form>
        </div>
    );
}
