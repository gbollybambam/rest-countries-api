import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex h-[50vh] flex-col items-center justify-center gap-4 text-center">
      <h2 className="text-4xl font-bold">404 - Country Not Found</h2>
      <p className="text-(--input)">We couldn't locate the country you're looking for.</p>
      <Link 
        href="/"
        className="mt-4 rounded-md bg-(--element) px-6 py-2 shadow-md hover:bg-opacity-80"
      >
        Return Home
      </Link>
    </div>
  );
}