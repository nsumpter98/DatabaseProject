import { NextRequest, NextResponse } from 'next/server';
import axios from "axios";

export async function GET(req: NextRequest) {
    try {


        const response = await axios.get('https://database_project_express:80/');


        return NextResponse.json({response: response}, {status: 200});
    } catch (error) {
        console.error("Failed to create course: ", error);
        return NextResponse.json({response: error}, {status: 500});
    }
}
