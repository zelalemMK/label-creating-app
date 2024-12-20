"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function GeneratePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("sessionId") || "";
  const [status, setStatus] = useState("loading");
  const [downloadUrl, setDownloadUrl] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (sessionId) {
      getFiles();
    } else {
      setError("Session ID missing");
      setStatus("error");
    }
  }, [sessionId]);

  const getFiles = async () => {
    try {
      setStatus("processing");

      // Pass sessionId as query param
      const response = await fetch(`/api/process?sessionId=${sessionId}`, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to get files");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      setDownloadUrl(url);
      setStatus("completed");
    } catch (err) {
      console.error("Download error:", err);
      setError(err.message);
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center p-8 border border-black">
        {status === "loading" || status === "processing" ? (
          <>
            <h1 className="text-2xl font-bold mb-6">Processing Files</h1>
            <div className="animate-spin border-t-2 border-black h-8 w-8 rounded-full mx-auto mb-4"></div>
            <p>Please wait while we process your files...</p>
          </>
        ) : status === "completed" ? (
          <>
            <h1 className="text-2xl font-bold mb-6">Files Processed</h1>
            <a
              href={downloadUrl}
              download={`${sessionId}.zip`}
              className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
            >
              Download ZIP
            </a>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold mb-6">Error</h1>
            <p>{error}</p>
            <button
              onClick={() => router.push("/templates")}
              className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
            >
              Go Back
            </button>
          </>
        )}
      </div>
    </div>
  );
}