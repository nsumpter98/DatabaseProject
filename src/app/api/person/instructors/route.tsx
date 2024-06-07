import { prisma } from '../../../../../db'; // Adjust the import path as needed
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const instructors = await prisma.person.findMany({
      where: {
        type: 'Instructor',
      },
    });
    return NextResponse.json({ response: instructors }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ response: 'fail' }, { status: 500 });
  }
}
