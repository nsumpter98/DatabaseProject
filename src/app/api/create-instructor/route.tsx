import { prisma } from '../../../../db'; // Adjust the import path as needed
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    // Extracting the fields from the request body
    const { firstName, lastName, salary } = await req.json();

    // First, create a Person entry
    const newPerson = await prisma.person.create({
      data: {
        FirstName: firstName,
        LastName: lastName,
        type: 'I', // Assuming 'I' stands for Instructor
      },
    });

    // Then, create an Instructor entry with the PersonID from the newly created person
    const newInstructor = await prisma.instructor.create({
      data: {
        PersonID: newPerson.PersonID,
        Salary: Number(salary),
      },
    });

    return NextResponse.json(
      { response: { person: newPerson, instructor: newInstructor } },
      { status: 200 },
    );
  } catch (error) {
    console.error('Failed to create instructor: ', error);
    return NextResponse.json({ response: 'fail' }, { status: 500 });
  }
}
