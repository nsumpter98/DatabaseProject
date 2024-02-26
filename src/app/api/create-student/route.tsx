// pages/api/create-student/route.tsx

import { prisma } from '../../../../db'; // Adjust the import path as needed
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const { personId, graduationDate } = await req.json();

        // Assuming the person already exists and you're just adding student details
        const newStudent = await prisma.student.create({
            data: {
                PersonID: Number(personId),
                GraduationDate: new Date(graduationDate)
            },
        });

        return NextResponse.json({response: newStudent}, {status: 200});
    } catch (error) {
        console.error("Failed to create student: ", error);
        return NextResponse.json({response: "fail"}, {status: 500});
    }
}
