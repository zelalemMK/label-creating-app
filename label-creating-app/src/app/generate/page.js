'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function GeneratePage() {
  const router = useRouter();
  const [status, setStatus] = useState('loading');
  const [downloadUrl, setDownloadUrl] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    processFiles();
  }, []);

  const processFiles = async () => {
    try {
      setStatus('processing');
      const response = await fetch('/api/process', {
        method: 'GET'
      });

      if (!response.ok) {
        throw new Error('Processing failed');
      }

      const data = await response.json();
      setDownloadUrl(data.downloadUrl);
      setStatus('completed');
    } catch (err) {
      console.error('Processing error:', err);
      setError(err.message);
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center p-8 border border-black">
        {status === 'loading' || status === 'processing' ? (
          <>
            <h1 className="text-2xl font-bold mb-6">Processing Files</h1>
            <div className="animate-spin border-t-2 border-black h-8 w-8 rounded-full mx-auto mb-4"></div>
            <p>Please wait while we process your files...</p>
          </>
        ) : status === 'completed' ? (
          <>
            <h1 className="text-2xl font-bold mb-6">Files Ready</h1>
            <p className="mb-8">Your documents have been generated successfully.</p>
            <a
              href={downloadUrl}
              download
              className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 inline-block mb-4"
            >
              Download Files
            </a>
            <br />
            <button
              onClick={() => router.push('/')}
              className="px-6 py-2 border border-black rounded hover:bg-gray-100"
            >
              Return Home
            </button>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold mb-6">Error</h1>
            <p className="mb-8 text-black">{error || 'Something went wrong'}</p>
            <button
              onClick={() => router.push('/')}
              className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800"
            >
              Try Again
            </button>
          </>
        )}
      </div>
    </div>
  );
}