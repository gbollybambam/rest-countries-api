'use client';

import { useSearchParams, useRouter, usePathname } from "next/navigation";

export function Pagination({ totalPages }: { totalPages: number }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const currentPage = Number(searchParams.get('page')) || 1;

    const createPageURL = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', pageNumber.toString());
        replace(`${pathname}?${params.toString()}`);
    };

    if (totalPages <= 1) return null;

    return (
        <div className="mt-12 flex justify-center gap-4">
            <button
                onClick={() => createPageURL(currentPage - 1)}
                disabled={currentPage <= 1}
                className="rounded-md bg-(--element) px-4 py-2 font-semibold shadow-md transition-opacity hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Previous
            </button>

            <span className="flex items-center text-(--foreground)">
                Page {currentPage} of {totalPages}
            </span>

            <button
                onClick={() => createPageURL(currentPage + 1)}
                disabled={currentPage >= totalPages}
                className="rounded-md bg-(--element) px-4 py-2 font-semibold shadow-md transition-opacity hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Next
            </button>
        </div>
    );
}