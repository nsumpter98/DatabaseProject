// pages/api/courses/create.ts
import { prisma } from '../../../../db'; // Adjust the import path as needed
import { NextRequest, NextResponse } from 'next/server';
import axios from "axios";

export async function POST(req: NextRequest) {
    try {
        const { courseName, topic } = await req.json();
        const result = axios.get("http://database_project_express:80/");

        // Create a course
        const newCourse = await prisma.course.create({
            data: {
                CourseName: courseName,
                Topic: topic,
            },
        });

        return NextResponse.json({response: newCourse, testing: result}, {status: 200});
    } catch (error) {
        console.error("Failed to create course: ", error);
        return NextResponse.json({response: "fail"}, {status: 500});
    }
}
