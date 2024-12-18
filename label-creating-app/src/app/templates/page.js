/* 
Files needed from the user:
1. Template file (HTML)
2. Font file (TTF)
3. Logo file (PNG)
4. CSV file

*/

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function TemplatePage() {
  const router = useRouter();
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
    const file = files[fileType];
    if (!file) {
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
      formData.append("file", file);
      formData.append("type", fileType);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("upload failed");
      }

      setUploadStatus((prev) => ({
        ...prev,
        [fileType]: "uploaded",
      }));
      setFiles((prev) => ({ ...prev, [fileType]: null }));

      // Check if both files are uploaded
      if (fileType === 'csv' && uploadStatus.template === 'uploaded') {
        router.push('/generate'); // Navigate to next page
      }

    } catch (error) {
      console.error("upload error:", error);
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

        <div className="border p-3">
          <h2 className="text-base font-medium mb-1">CSV Data</h2>
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
            disabled={!files.csv || uploadStatus.template !== "uploaded"}
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
