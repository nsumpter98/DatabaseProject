'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Opt out of caching for all data requests in the route segment
export const dynamic = 'force-dynamic';

export default function CreateSection() {
  const [instructors, setInstructors] = useState([]);
  const [courses, setCourses] = useState([]);
  const [selectedInstructorId, setSelectedInstructorId] = useState('');
  const [selectedCourseId, setSelectedCourseId] = useState('');
  // State variables for other Section fields
  const [daysOfWeek, setDaysOfWeek] = useState('');
  const [timeOfDay, setTimeOfDay] = useState('');
  const [location, setLocation] = useState('');
  const [creditHours, setCreditHours] = useState('');
  const [status, setStatus] = useState('');
  const [description, setDescription] = useState('');
  const [capacity, setCapacity] = useState('');
  const [availableSeats, setAvailableSeats] = useState('');
  const [waitlist, setWaitlist] = useState('');
  const [modeOfInstruction, setModeOfInstruction] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [component, setComponent] = useState('');
  const [requirement, setRequirement] = useState('');

  useEffect(() => {
    // Fetch instructors and courses from your API
    const fetchData = async () => {
      try {
        const instructorsResponse = await axios.get('/api/instructors');
        console.log(instructorsResponse);
        const coursesResponse = await axios.get('/api/courses');
        setInstructors(instructorsResponse.data.response);
        setCourses(coursesResponse.data.response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    // Submit form data to your API endpoint
    try {
      const response = await axios.post('/api/create-section', {
        instructorId: selectedInstructorId,
        courseId: selectedCourseId,
        // Include other section data here
        daysOfWeek,
        timeOfDay,
        location,
        creditHours,
        status,
        description,
        capacity,
        availableSeats,
        waitlist,
        modeOfInstruction,
        startDate,
        endDate,
        component,
        requirement,
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
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        {/* Instructor Dropdown */}
        <div className="mb-6">
          <label
            htmlFor="instructor"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Instructor:
          </label>
          <select
            id="instructor"
            value={selectedInstructorId}
            onChange={(e) => setSelectedInstructorId(e.target.value)}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select Instructor</option>
            {instructors.map((instructor: any) => (
              <option key={instructor.PersonID} value={instructor.PersonID}>
                {instructor.Person.FirstName} {instructor.Person.LastName}{' '}
                {/* Adjust according to your data structure */}
              </option>
            ))}
          </select>
        </div>

        {/* Course Dropdown */}
        <div className="mb-6">
          <label
            htmlFor="course"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Course:
          </label>
          <select
            id="course"
            value={selectedCourseId}
            onChange={(e) => setSelectedCourseId(e.target.value)}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select Course</option>
            {courses.map((course: any) => (
              <option key={course.cid} value={course.cid}>
                {course.CourseName}{' '}
                {/* Adjust according to your data structure */}
              </option>
            ))}
          </select>
        </div>

        {/* Example: Days of Week */}
        {/* Days of Week */}
        <div className="mb-6">
          <label
            htmlFor="daysOfWeek"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Days of Week:
          </label>
          <input
            type="text"
            id="daysOfWeek"
            value={daysOfWeek}
            onChange={(e) => setDaysOfWeek(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Time of Day */}
        <div className="mb-6">
          <label
            htmlFor="timeOfDay"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Time of Day:
          </label>
          <input
            type="text"
            id="timeOfDay"
            value={timeOfDay}
            onChange={(e) => setTimeOfDay(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Location */}
        <div className="mb-6">
          <label
            htmlFor="location"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Location:
          </label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Credit Hours */}
        <div className="mb-6">
          <label
            htmlFor="creditHours"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Credit Hours:
          </label>
          <input
            type="number"
            id="creditHours"
            value={creditHours}
            onChange={(e) => setCreditHours(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Status */}
        <div className="mb-6">
          <label
            htmlFor="status"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Status:
          </label>
          <input
            type="text"
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Description */}
        <div className="mb-6">
          <label
            htmlFor="description"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Description:
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Capacity */}
        <div className="mb-6">
          <label
            htmlFor="capacity"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Capacity:
          </label>
          <input
            type="number"
            id="capacity"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Available Seats */}
        <div className="mb-6">
          <label
            htmlFor="availableSeats"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Available Seats:
          </label>
          <input
            type="number"
            id="availableSeats"
            value={availableSeats}
            onChange={(e) => setAvailableSeats(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Waitlist */}
        <div className="mb-6">
          <label
            htmlFor="waitlist"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Waitlist:
          </label>
          <input
            type="number"
            id="waitlist"
            value={waitlist}
            onChange={(e) => setWaitlist(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Mode of Instruction */}
        <div className="mb-6">
          <label
            htmlFor="modeOfInstruction"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Mode of Instruction:
          </label>
          <input
            type="text"
            id="modeOfInstruction"
            value={modeOfInstruction}
            onChange={(e) => setModeOfInstruction(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Start Date */}
        <div className="mb-6">
          <label
            htmlFor="startDate"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Start Date:
          </label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* End Date */}
        <div className="mb-6">
          <label
            htmlFor="endDate"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            End Date:
          </label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Component */}
        <div className="mb-6">
          <label
            htmlFor="component"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Component:
          </label>
          <input
            type="text"
            id="component"
            value={component}
            onChange={(e) => setComponent(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Requirement */}
        <div className="mb-6">
          <label
            htmlFor="requirement"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Requirement:
          </label>
          <input
            type="text"
            id="requirement"
            value={requirement}
            onChange={(e) => setRequirement(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Create Section
        </button>
      </form>
    </div>
  );
}
