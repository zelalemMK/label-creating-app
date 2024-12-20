/* 
Files needed from the user:
1. Template file (HTML)
2. Font file (TTF)
3. Logo file (PNG)
4. CSV file

*/

"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

export default function TemplatePage() {
  const router = useRouter();
  const [sessionId, setSessionId] = useState(null);
  const [files, setFiles] = useState({
    template: null,
    font: null,
    logo: null,
    csv: null
  });
  const [uploadStatus, setUploadStatus] = useState({
    template: "idle",
    font: "idle",
    logo: "idle",
    csv: "idle"
  });

  // Generate sessionId one time
  useEffect(() => {
    setSessionId(uuidv4());
  }, []);

  const handleFileChange = (fileType) => (e) => {
    const file = e.target.files[0];
    if (file) {
      setFiles((prev) => ({ ...prev, [fileType]: file }));
      setUploadStatus((prev) => ({
        ...prev,
        [fileType]: "file selected",
      }));
    }
  };

  const handleUpload = async (fileType) => {
    if (!files[fileType] || !sessionId) {
      setUploadStatus((prev) => ({
        ...prev,
        [fileType]: "please choose a file first",
      }));
      return;
    }

    try {
      setUploadStatus((prev) => ({
        ...prev,
        [fileType]: "uploading",
      }));

      const formData = new FormData();
      formData.append("file", files[fileType]);
      formData.append("type", fileType);
      formData.append("sessionId", sessionId);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      setUploadStatus((prev) => ({
        ...prev,
        [fileType]: "uploaded",
      }));
      setFiles((prev) => ({ ...prev, [fileType]: null }));

      // Check if all files are uploaded
      const newStatus = {
        ...uploadStatus,
        [fileType]: "uploaded"
      };
      const allUploaded = Object.values(newStatus).every(
        (status) => status === "uploaded"
      );

      if (allUploaded) {
        // Move to next step
        router.push(`/generate?sessionId=${sessionId}`);
      }
    } catch (error) {
      console.error("Upload error:", error);
      setUploadStatus((prev) => ({
        ...prev,
        [fileType]: "upload failed",
      }));
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Upload Files</h1>
      <div className="grid gap-3">
        {/* Template */}
        <div className="border p-3">
          <h2 className="text-base font-medium mb-1">Template</h2>
          <input
            type="file"
            accept=".html"
            onChange={handleFileChange("template")}
            className="block w-full text-sm mb-1 border border-black p-1"
          />
          {files.template && <p className="text-sm">{files.template.name}</p>}
          <div className="flex justify-center">
            <button
              onClick={() => handleUpload("template")}
              className="w-1/2 px-3 py-1.5 bg-black text-white text-sm rounded hover:bg-gray-800 disabled:opacity-50"
              disabled={!files.template}
            >
              Upload Template
            </button>
          </div>
          <p className="text-xs mt-1">{uploadStatus.template}</p>
        </div>

        {/* Font */}
        <div className="border p-3">
          <h2 className="text-base font-medium mb-1">Font File</h2>
          <input
            type="file"
            accept=".ttf,.otf"
            onChange={handleFileChange("font")}
            className="block w-full text-sm mb-1 border border-black p-1"
          />
          {files.font && <p className="text-sm">{files.font.name}</p>}
          <div className="flex justify-center">
            <button
              onClick={() => handleUpload("font")}
              className="w-1/2 px-3 py-1.5 bg-black text-white text-sm rounded hover:bg-gray-800 disabled:opacity-50"
              disabled={!files.font}
            >
              Upload Font File
            </button>
          </div>
          <p className="text-xs mt-1">{uploadStatus.font}</p>
        </div>

        {/* Logo */}
        <div className="border p-3">
          <h2 className="text-base font-medium mb-1">Logo</h2>
          <input
            type="file"
            accept=".png,.jpg,.jpeg"
            onChange={handleFileChange("logo")}
            className="block w-full text-sm mb-1 border border-black p-1"
          />
          {files.logo && <p className="text-sm">{files.logo.name}</p>}
          <div className="flex justify-center">
            <button
              onClick={() => handleUpload("logo")}
              className="w-1/2 px-3 py-1.5 bg-black text-white text-sm rounded hover:bg-gray-800 disabled:opacity-50"
              disabled={!files.logo}
            >
              Upload Logo
            </button>
          </div>
          <p className="text-xs mt-1">{uploadStatus.logo}</p>
        </div>

        {/* CSV */}
        <div className="border p-3">
          <h2 className="text-base font-medium mb-1">CSV File</h2>
          <input
            type="file"
            accept=".csv"
            onChange={handleFileChange("csv")}
            className="block w-full text-sm mb-1 border border-black p-1"
          />
          {files.csv && <p className="text-sm">{files.csv.name}</p>}
          <div className="flex justify-center">
            <button
              onClick={() => handleUpload("csv")}
              className="w-1/2 px-3 py-1.5 bg-black text-white text-sm rounded hover:bg-gray-800 disabled:opacity-50"
              disabled={!files.csv}
            >
              Upload CSV
            </button>
          </div>
          <p className="text-xs mt-1">{uploadStatus.csv}</p>
        </div>
      </div>
    </div>
  );
}

// Helper function for file acceptance
function getAcceptTypes(fileType) {
  switch (fileType) {
    case "template":
      return ".html";
    case "font":
      return ".ttf,.otf";
    case "logo":
      return ".png,.jpg,.jpeg";
    case "csv":
      return ".csv";
    default:
      return "*/*";
  }
}
