"use client";
import React, { useState } from 'react';
import axios from 'axios';

export default function CreatePerson() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [type, setType] = useState('');

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        try {
            const response = await axios.post('/api/create-person', { firstName, lastName, type });
            console.log(response.data);
            // Handle success (e.g., show a message, redirect, etc.)
        } catch (error) {
            console.error(error);
            // Handle error (e.g., show error message)
        }
    };

    return (
        <div className="max-w-sm mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-5 text-center">Create Person</h1>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="First Name"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Last Name"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-6">
                    <select
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        className="shadow border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="" disabled>Select Type</option>
                        <option value="I">Instructor</option>
                        <option value="S">Student</option>
                    </select>
                </div>
                <div className="flex items-center justify-center">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Create
                    </button>
                </div>
            </form>
        </div>


    );
}
