import { prisma } from '../../../../db' // Adjust the import path as needed
import { NextRequest, NextResponse } from 'next/server'

export async function POST (req: NextRequest) {
  try {
    const { firstName, lastName, graduationDate, programIds } = await req.json()

    // First, create a person with type 'S' for student
    const newPerson = await prisma.person.create({
      data: {
        FirstName: firstName,
        LastName: lastName,
        type: 'S' // Assuming 'S' represents 'Student'
      }
    })

    // Then, create a student entry
    const newStudent = await prisma.student.create({
      data: {
        PersonID: newPerson.PersonID,
        GraduationDate: new Date(graduationDate)
        // Additional logic for handling program associations if needed
      }
    })

    // Handle program associations if programIds are provided
    if (programIds && Array.isArray(programIds)) {
      await Promise.all(programIds.map(async programId =>
        await prisma.studentProgram.create({
          data: {
            PersonID: newPerson.PersonID,
            ProgramID: parseInt(programId, 10)
          }
        })
      ))
    }

    return NextResponse.json({ student: newStudent }, { status: 200 })
  } catch (error) {
    console.error('Failed to create student: ', error)
    return NextResponse.json({ error: 'Failed to create student' }, { status: 500 })
  }
}
