import { prisma } from '../../../../db'; // Adjust the import path as needed
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    try {
        const programs = await prisma.program.findMany({});
        return NextResponse.json({response: programs}, {status: 200});
    } catch (error) {
        return NextResponse.json({response: "fail"}, {status: 500});
    }
}
