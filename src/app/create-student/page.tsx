// pages/create-student.js
"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function CreateStudent() {
    const [persons, setPersons] = useState([]);
    const [selectedPersonId, setSelectedPersonId] = useState('');
    const [graduationDate, setGraduationDate] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Fetch persons from your API
        const fetchPersons = async () => {
            try {
                const response = await axios.get('/api/person/students'); // Adjust API endpoint as needed
                setPersons(response.data.response);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching persons:', error);
                setIsLoading(false);
            }
        };

        fetchPersons();
    }, []);

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        try {
            const response = await axios.post('/api/create-student', { personId: selectedPersonId, graduationDate });
            console.log(response.data);
            // Handle success (e.g., show a message, redirect, etc.)
        } catch (error) {
            console.error('Error creating student:', error);
            // Handle error (e.g., show error message)
        }
    };

    return (
        <div>
            <h1>Create Student</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="person">Person:</label>
                <select
                    id="person"
                    value={selectedPersonId}
                    onChange={(e) => setSelectedPersonId(e.target.value)}
                    disabled={isLoading}
                >
                    <option value="">Select a Person</option>
                    {persons.map((person: any) => (
                        <option key={person.PersonID} value={person.PersonID}>
                            {person.FirstName} {person.LastName}
                        </option>
                    ))}
                </select>

                <label htmlFor="graduationDate">Graduation Date:</label>
                <input
                    type="date"
                    id="graduationDate"
                    value={graduationDate}
                    onChange={(e) => setGraduationDate(e.target.value)}
                />

                <button type="submit">Create Student</button>
            </form>
        </div>
    );
}
