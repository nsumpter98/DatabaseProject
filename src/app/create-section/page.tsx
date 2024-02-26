"use client"
import React, { useState } from 'react';
import axios from 'axios';

export default function CreateSection() {
    const [daysOfWeek, setDaysOfWeek] = useState('');
    const [timeOfDay, setTimeOfDay] = useState('');
    const [location, setLocation] = useState('');
    const [creditHours, setCreditHours] = useState(0);
    const [status, setStatus] = useState('');
    const [courseId, setCourseId] = useState('');
    const [instructorId, setInstructorId] = useState('');

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        try {
            const response = await axios.post('/api/create-section', {
                daysOfWeek,
                timeOfDay,
                location,
                creditHours,
                status,
                courseId,
                instructorId
            });
            console.log(response.data);
            // Handle success (e.g., show a message, redirect, etc.)
        } catch (error) {
            console.error('Error creating section:', error);
            // Handle error (e.g., show error message)
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-5 text-center">Create Section</h1>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <input
                        type="text"
                        value={daysOfWeek}
                        onChange={(e) => setDaysOfWeek(e.target.value)}
                        placeholder="Days of Week"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                {/* Repeat the above div for other fields like timeOfDay, location, etc. */}
                {/* ... */}
                <div className="flex items-center justify-center">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Create Section
                    </button>
                </div>
            </form>
        </div>
    );
}
