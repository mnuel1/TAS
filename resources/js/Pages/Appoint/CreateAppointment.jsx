import React, { useState } from 'react';

const AppointmentForm = ({model, driver, rate, ratings, img, description}) => {
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        location: '',
        vehicleType: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send the data to the server)
        console.log(formData);
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Create an Appointment</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="date" className="block text-sm font-medium text-gray-600">
                        Date:
                    </label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="time" className="block text-sm font-medium text-gray-600">
                        Time:
                    </label>
                    <input
                        type="time"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="location" className="block text-sm font-medium text-gray-600">
                        Location:
                    </label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="vehicleType" className="block text-sm font-medium text-gray-600">
                        Vehicle Type:
                    </label>
                    <select
                        id="vehicleType"
                        name="vehicleType"
                        value={formData.vehicleType}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                    >
                        <option value="car">Car</option>
                        <option value="bike">Bike</option>
                        <option value="van">Van</option>
                        {/* Add more vehicle options */}
                    </select>
                </div>

                <div className="mt-6">
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
                    >
                        Create Appointment
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AppointmentForm;
