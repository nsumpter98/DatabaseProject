// pages/api/sections/create.ts
import { prisma } from '../../../../db'; // Adjust the import path as needed
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const {
            instructorId,
            courseId,
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
            requirement
        } = await req.json();

        // Create a section
        const newSection = await prisma.section.create({
            data: {
                InstructorID: Number(instructorId),
                cid: Number(courseId),
                days_of_week: daysOfWeek,
                time_of_day: timeOfDay,
                location,
                credit_hours: Number(creditHours),
                status,
                description,
                capacity: Number(capacity),
                available_seats: Number(availableSeats),
                waitlist: Number(waitlist),
                mode_of_instruction: modeOfInstruction,
                start_date: new Date(startDate),
                end_date: new Date(endDate),
                component,
                requirement
            },
        });

        return NextResponse.json({ response: newSection }, { status: 200 });
    } catch (error) {
        console.error("Failed to create section: ", error);
        return NextResponse.json({ response: "fail" }, { status: 500 });
    }
}
