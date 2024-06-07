'use client';
import React, { useState } from 'react';
import axios from 'axios';

export default function CreateProgram() {
  const [programName, setProgramName] = useState('');
  const [department, setDepartment] = useState('');

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/create-program', {
        programName,
        department,
      });
      console.log(response.data);
      // Handle success (e.g., show a message, redirect, etc.)
    } catch (error) {
      console.error('Error creating course:', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5 text-center">Create Program</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-6">
          <label
            htmlFor="courseName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Program Name:
          </label>
          <input
            type="text"
            id="courseName"
            value={programName}
            onChange={(e) => setProgramName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Course Name"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="topic"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Department:
          </label>
          <input
            type="text"
            id="topic"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Topic"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Create Program
        </button>
      </form>
    </div>
  );
}
