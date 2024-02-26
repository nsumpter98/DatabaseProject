// pages/api/instructors.ts
import { prisma } from '../../../../db'; // Adjust the import path as needed
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    try {
        const instructors = await prisma.instructor.findMany({
            include: {
                Person: true // This joins the Person table
            }
        });
        return NextResponse.json({response: instructors}, {status: 200});
    } catch (error) {
        console.error("Failed to fetch instructors: ", error);
        return NextResponse.json({response: "Failed to fetch instructors"}, {status: 500});
    }
}
