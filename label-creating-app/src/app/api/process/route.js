import { NextResponse } from 'next/server';
import { readdir } from 'fs/promises';
import { join } from 'path';

export async function GET(request) {
    try {
        const uploadDir = join(process.cwd(), 'public', 'uploads');
        const files = await readdir(uploadDir);

        const uploadedFiles = files.map(file => ({
            name: file,
            url: `/uploads/${file}`
        }));

        return NextResponse.json({ 
            files: uploadedFiles 
        }, { status: 200 });

    } catch (error) {
        console.error('Error reading files:', error);
        return NextResponse.json({ 
            error: 'Failed to retrieve files' 
        }, { status: 500 });
    }
}