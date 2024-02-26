// pages/api/create-instructor/route.ts
import { prisma } from '../../../../db'; // Adjust the import path as needed
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const { personId, salary } = await req.json();

        // Create an instructor entry
        const newInstructor = await prisma.instructor.create({
            data: {
                PersonID: Number(personId),
                Salary: Number(salary),
            },
        });

        return NextResponse.json({response: newInstructor}, {status: 200});
    } catch (error) {
        console.error("Failed to create instructor: ", error);
        return NextResponse.json({response: "fail"}, {status: 500});
    }
}
