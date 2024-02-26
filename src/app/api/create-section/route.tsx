// pages/api/create-section/route.tsx

import { prisma } from '../../../../db'; // Adjust the import path as needed
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const { daysOfWeek, timeOfDay, location, creditHours, status, courseId, instructorId } = await req.json();

        // Create a new section
        const newSection = await prisma.section.create({
            data: {
                days_of_week: daysOfWeek,
                time_of_day: timeOfDay,
                location: location,
                credit_hours: creditHours,
                status: status,
                cid: courseId,  // Assuming 'cid' is the field for CourseID
                InstructorID: instructorId, // Assuming 'InstructorID' is the field for the Instructor's PersonID
            },
        });

        return NextResponse.json({response: newSection}, {status: 200});
    } catch (error) {
        console.error("Failed to create section: ", error);
        return NextResponse.json({response: "fail"}, {status: 500});
    }
}
