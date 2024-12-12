"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function TemplatePage() {
  const router = useRouter();
  const [files, setFiles] = useState({
    template: null,
    csv: null,
  });
  const [uploadStatus, setUploadStatus] = useState({
    template: "idle",
    csv: "idle",
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
    <div className="bg-white text-black p-6">
      <h1 className="text-2xl font-bold mb-6">File Upload</h1>

      <div className="space-y-6">
        <div className="border p-4">
          <h2 className="text-lg font-medium mb-2">Template</h2>
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange("template")}
            className="block mb-2 border border-black p-1"
          />
          {files.template && <p className="text-sm">{files.template.name}</p>}
          <button
            onClick={() => handleUpload("template")}
            className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 disabled:opacity-50"
            disabled={!files.template}
          >
            Upload Template
          </button>
          <p className="text-sm mt-2">{uploadStatus.template}</p>
        </div>

        <div className="border p-4">
          <h2 className="text-lg font-medium mb-2">CSV Data</h2>
          <input
            type="file"
            accept=".csv"
            onChange={handleFileChange("csv")}
            className="block mb-2 border border-black p-1"
          />
          {files.csv && <p className="text-sm">{files.csv.name}</p>}
          <button
            onClick={() => handleUpload("csv")}
            className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 disabled:opacity-50"
            disabled={!files.csv || uploadStatus.template !== "uploaded"}
          >
            Upload CSV
          </button>
          <p className="text-sm mt-2">{uploadStatus.csv}</p>
        </div>
      </div>
    </div>
  );
}
