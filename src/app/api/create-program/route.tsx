import { prisma } from '../../../../db'; // Adjust the import path as needed
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { programName, department } = await req.json();

    // Create a course
    const newDepartment = await prisma.program.create({
      data: {
        ProgramName: programName,
        department,
      },
    });

    return NextResponse.json({ response: newDepartment }, { status: 200 });
  } catch (error) {
    console.error('Failed to create course: ', error);
    return NextResponse.json({ response: 'fail' }, { status: 500 });
  }
}
