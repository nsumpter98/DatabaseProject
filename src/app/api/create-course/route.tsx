// pages/api/courses/create.ts
import { prisma } from '../../../../db'; // Adjust the import path as needed
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const { courseName, topic } = await req.json();

        // Create a course
        const newCourse = await prisma.course.create({
            data: {
                CourseName: courseName,
                Topic: topic,
            },
        });

        return NextResponse.json({response: newCourse}, {status: 200});
    } catch (error) {
        console.error("Failed to create course: ", error);
        return NextResponse.json({response: "fail"}, {status: 500});
    }
}
