// pages/api/create-person/request.ts
import { prisma } from '../../../../db' // Adjust the import path as needed
import { NextRequest, NextResponse } from 'next/server'

async function generateNewPersonID () {
  try {
    // Find the highest current PersonID
    const lastPerson = await prisma.person.findFirst({
      orderBy: {
        PersonID: 'desc'
      }
    })

    // If there's at least one person, increment the highest ID by 1
    // Otherwise, start with 1
    return (lastPerson != null) ? lastPerson.PersonID + 1 : 1
  } catch (error) {
    console.error('Error generating new PersonID: ', error)
    throw error
  }
}

export async function POST (request: NextRequest) {
  try {
    const json = await request.json()
    const { firstName, lastName, type } = json
    const newPerson = await prisma.person.create({
      data: {
        FirstName: firstName,
        LastName: lastName,
        type
      }
    })
    console.log(newPerson)
    return NextResponse.json({ response: newPerson }, { status: 200 })
  } catch (error) {
    console.log('fail')
    return NextResponse.json({ response: 'fail' }, { status: 500 })
  }
}
