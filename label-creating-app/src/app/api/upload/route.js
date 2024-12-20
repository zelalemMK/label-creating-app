import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import { join } from "path";

export async function POST(request) {
  try {
    const data = await request.formData();
    const file = data.get("file");
    const type = data.get("type");
    const sessionId = data.get("sessionId");

    if (!file || !type || !sessionId) {
      return NextResponse.json(
        { error: "Missing file, type, or sessionId" },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create session folder
    const baseDir = join(process.cwd(), "public", "uploads");
    const sessionDir = join(baseDir, sessionId);
    await mkdir(sessionDir, { recursive: true });

    // Save file to the session folder
    const filePath = join(sessionDir, file.name);
    await writeFile(filePath, buffer);

    return NextResponse.json(
      {
        message: `${type} file uploaded under session ${sessionId}`,
        path: `/uploads/${sessionId}/${file.name}`,
        sessionId: sessionId
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: "Failed to upload file" },
      { status: 500 }
    );
  }
}
