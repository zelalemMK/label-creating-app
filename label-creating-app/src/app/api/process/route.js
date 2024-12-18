import { NextResponse } from 'next/server';
import { join } from 'path';
import { processFiles } from './backend_work';
import archiver from 'archiver';

export async function GET(request) {
    try {
        const result = await processFiles();
        
        if (!result.success) {
            throw new Error('Processing failed');
        }

        // Create ZIP archive
        const archive = archiver('zip');
        const chunks = [];

        // Add input files
        const uploadsDir = join(process.cwd(), 'public', 'uploads');
        archive.directory(uploadsDir, 'input');

        // Add generated files
        const outputDir = join(process.cwd(), 'public', 'uploads', 'output');
        archive.directory(outputDir, 'output');
        
        archive.on('data', chunk => chunks.push(chunk));
        
        await new Promise((resolve, reject) => {
            archive.on('end', resolve);
            archive.on('error', reject);
            archive.finalize();
        });

        const buffer = Buffer.concat(chunks);

        return new NextResponse(buffer, {
            status: 200,
            headers: {
                'Content-Type': 'application/zip',
                'Content-Disposition': 'attachment; filename=all-files.zip'
            }
        });

    } catch (error) {
        console.error('Processing error:', error);
        return NextResponse.json({ 
            error: error.message || 'Failed to process files' 
        }, { status: 500 });
    }
}