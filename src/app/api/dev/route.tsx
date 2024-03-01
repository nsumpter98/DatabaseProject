import { NextRequest, NextResponse } from 'next/server';
import axios from "axios";

export async function GET(req: NextRequest) {
    try {


        const response = await axios.get('http://database_project_express:3000/');


        return NextResponse.json({response: response}, {status: 200});
    } catch (error) {
        console.error("Failed to create course: ", error);
        return NextResponse.json({response: error}, {status: 500});
    }
}
