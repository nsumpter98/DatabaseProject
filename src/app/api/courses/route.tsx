import { prisma } from '../../../../db' // Adjust the import path as needed
import { NextRequest, NextResponse } from 'next/server'

export async function GET (request: NextRequest) {
  try {
    const courses = await prisma.course.findMany({})

    // Create a response object with the JSON payload
    const response = NextResponse.json({ response: courses }, { status: 200 })

    // Set headers to prevent caching
    response.headers.set('Cache-Control', 'no-store, max-age=0')
    response.headers.set('Pragma', 'no-cache')
    response.headers.set('Expires', '0')

    return response
  } catch (error) {
    console.error('Failed to fetch courses: ', error)

    // Prepare error response and set no-cache headers
    const errorResponse = NextResponse.json({ response: 'Failed to fetch courses' }, { status: 500 })
    errorResponse.headers.set('Cache-Control', 'no-store, max-age=0')
    errorResponse.headers.set('Pragma', 'no-cache')
    errorResponse.headers.set('Expires', '0')

    return errorResponse
  }
}
