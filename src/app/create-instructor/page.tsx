// pages/create-instructor.js
"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function CreateInstructor() {
    const [persons, setPersons] = useState([]);
    const [selectedPersonId, setSelectedPersonId] = useState('');
    const [salary, setSalary] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Fetch eligible persons (of type 'I') from your API
        const fetchPersons = async () => {
            try {
                const response = await axios.get('/api/person/instructors');
                console.log(response)
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
            const response = await axios.post('/api/create-instructor', { personId: selectedPersonId, salary });
            console.log(response.data);
            // Handle success (e.g., show a message, redirect, etc.)
        } catch (error) {
            console.error('Error creating instructor:', error);
            // Handle error (e.g., show error message)
        }
    };

    return (
        <div>
            <h1>Create Instructor</h1>
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

                <label htmlFor="salary">Salary:</label>
                <input
                    type="number"
                    id="salary"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                    placeholder="Salary"
                />

                <button type="submit">Create Instructor</button>
            </form>
        </div>
    );
}
