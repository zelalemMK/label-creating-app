import { NextResponse } from 'next/server';
import { join } from 'path';
import archiver from 'archiver';
import { processFiles } from './backend_work'; 
import { Buffer } from 'buffer';

export async function GET(request) {
  try {
    // Retrieve sessionId from URL query
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get('sessionId');
    if (!sessionId) {
      throw new Error('Missing sessionId');
    }

    // Process files for given sessionId
    const result = await processFiles(sessionId);
    if (!result.success) {
      throw new Error('Processing failed');
    }

    // Create ZIP archive
    const archive = archiver('zip');
    const chunks = [];

    // Add files from the session folder
    const sessionDir = join(process.cwd(), 'public', 'uploads', sessionId);
    archive.directory(sessionDir, 'session-files');

    // Also add generated output folder if needed
    // const outputDir = join(sessionDir, 'output');
    // archive.directory(outputDir, 'output');

    // Collect archive chunks
    archive.on('data', (chunk) => chunks.push(chunk));
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
        'Content-Disposition': `attachment; filename=${sessionId}.zip`
      }
    });
  } catch (error) {
    console.error('Processing error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to process files' },
      { status: 500 }
    );
  }
}