"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const revalidate = 0

export default function CreateStudent() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [graduationDate, setGraduationDate] = useState('');
    const [programs, setPrograms] = useState([]);
    const [selectedPrograms, setSelectedPrograms] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPrograms = async () => {
            try {
                const response = await axios.get('/api/programs'); // Adjust API endpoint as needed
                setPrograms(response.data.response);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching programs:', error);
                setIsLoading(false);
            }
        };

        fetchPrograms();
    }, []);

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        try {
            const response = await axios.post('/api/create-student', {
                firstName,
                lastName,
                graduationDate,
                programIds: selectedPrograms
            });

            console.log(response.data);
            // Handle success
        } catch (error) {
            console.error('Error creating student:', error);
            // Handle error
        }
    };


    const handleProgramSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedProgramId = event.target.value;

        setSelectedPrograms((prevSelectedPrograms: any) => {
            if (event.target.checked) {
                // Add the selected program ID to the array
                return [...prevSelectedPrograms, selectedProgramId];
            } else {
                // Remove the unselected program ID from the array
                return prevSelectedPrograms.filter((id: any) => id !== selectedProgramId);
            }
        });
    };


    return (
        <div className="max-w-md mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-5 text-center">Create Student</h1>
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
                <div className="mb-4">
                    <label htmlFor="graduationDate" className="block text-sm font-bold mb-2">Graduation Date:</label>
                    <input
                        type="date"
                        id="graduationDate"
                        value={graduationDate}
                        onChange={(e) => setGraduationDate(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">Program:</label>
                    <div className="grid grid-cols-1 gap-2">
                        {programs.map((program: any) => (
                            <label key={program.ProgramID} className="flex items-center">
                                <input
                                    type="checkbox"
                                    value={program.ProgramID}
                                    onChange={handleProgramSelection}
                                    disabled={isLoading}
                                    className="form-checkbox h-5 w-5 text-blue-600"
                                />
                                <span className="ml-2 text-gray-700">{program.ProgramName}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Create Student
                    </button>
                </div>
            </form>
        </div>
    );
}
