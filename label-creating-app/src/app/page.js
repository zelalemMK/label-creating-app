'use client';


import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  return (
    <div>
      <h2 className="text-4xl font-bold mb-4">Welcome to My Website</h2>
      <p>
        This is the home page content where you can provide information and
        links.
      </p>
      <button
        onClick={() => router.push("/templates")}
        className="px-4 py-2 bg-blue-500 text-white rounded mt-4"
        href="/templates"
      >
        Template Generation
      </button>
    </div>
  );
}
