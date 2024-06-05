'use client'
import React, { useState } from 'react'
import axios from 'axios'

export default function CreateInstructor () {
  // State for instructor personal details
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  // State for instructor specific details
  const [salary, setSalary] = useState('')

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    try {
      const response = await axios.post('/api/create-instructor', {
        firstName,
        lastName,
        salary
      })
      console.log(response.data)
      // Handle success (e.g., show a message, redirect, etc.)
    } catch (error) {
      console.error('Error creating instructor:', error)
      // Handle error (e.g., show error message)
    }
  }

  return (
    <div className='max-w-md mx-auto mt-10'>
      <h1 className='text-2xl font-bold mb-5 text-center'>Create Instructor</h1>
      <form onSubmit={handleSubmit} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <div>
          <label htmlFor='firstName' className='block text-sm font-medium text-gray-700'>First Name</label>
          <input
            type='text'
            id='firstName'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
            placeholder='First Name'
          />
        </div>
        <div>
          <label htmlFor='lastName' className='block text-sm font-medium text-gray-700'>Last Name</label>
          <input
            type='text'
            id='lastName'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
            placeholder='Last Name'
          />
        </div>
        <div>
          <label htmlFor='salary' className='block text-sm font-medium text-gray-700'>Salary</label>
          <input
            type='number'
            id='salary'
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
            placeholder='Salary'
          />
        </div>
        <button
          type='submit'
          className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        >
          Create Instructor
        </button>
      </form>
    </div>
  )
}
