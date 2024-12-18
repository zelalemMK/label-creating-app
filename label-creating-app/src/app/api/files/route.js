import { NextResponse } from 'next/server';
import { join } from 'path';
import { createReadStream } from 'fs';
import archiver from 'archiver';
import { Readable } from 'stream';

export async function GET() {
  try {
    const archive = archiver('zip');
    const chunks = [];

    archive.directory(join(process.cwd(), 'public', 'uploads'), false);
    
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
        'Content-Disposition': 'attachment; filename=files.zip'
      }
    });
  } catch (error) {
    console.error('Zip creation error:', error);
    return NextResponse.json({ error: 'Failed to create zip' }, { status: 500 });
  }
}