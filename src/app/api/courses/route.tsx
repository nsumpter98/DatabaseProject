// pages/api/courses.ts
import { prisma } from '../../../../db'; // Adjust the import path as needed
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    try {
        const courses = await prisma.course.findMany({});
        return NextResponse.json({response: courses}, {status: 200});
    } catch (error) {
        console.error("Failed to fetch courses: ", error);
        return NextResponse.json({response: "Failed to fetch courses"}, {status: 500});
    }
}
