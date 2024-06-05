import { NextRequest, NextResponse } from 'next/server'
import axios from 'axios'

export async function GET (req: NextRequest) {
  try {
    const response = await axios.get('http://database_project_express:3000/')

    // Ensure only the response data is sent back, not the entire Axios response object
    return NextResponse.json({ response: JSON.stringify(response.data) }, { status: 200 })
  } catch (error: any) {
    console.error('Failed to create course: ', error)

    // Send a more generic error message or specific error details as needed
    // Avoid sending the full error object directly if it's not necessary
    return NextResponse.json({ message: 'An error occurred', details: error.message }, { status: 500 })
  }
}
