"use client";
import React, { useState } from 'react';
import axios from 'axios';


// Opt out of caching for all data requests in the route segment
export const dynamic = 'force-dynamic'

export default function CreatePerson() {

    //GET request to /api/dev
    const [response, setResponse] = useState('');
    const [error, setError] = useState('');

    const getDev = async (e: any) => {
        e.preventDefault();
        try {
            const response = await axios.get('/api/dev');
            console.log(response);
            setResponse(response.data);
        } catch (error: any) {
            console.error(error);
            setError(error);
        }
    };

    return (
        <div className="max-w-sm mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-5 text-center">Check</h1>
            <form onSubmit={getDev} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Get Dev
                    </button>
                </div>
                <div className="mb-4">
                    <p>{response.toString()}</p>
                </div>
                <div className="mb-4">
                    <p>{error.toString()}</p>
                </div>
            </form>

        </div>


    );
}
