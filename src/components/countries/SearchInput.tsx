'use client';

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useDebouncedCallback } from 'use-debounce';

export function SearchInput() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams);

        if (term) {
            params.set('q', term);
        } else {
            params.delete('q');
        }

        replace(`${pathname}?${params.toString()}`);
    }, 300);

    return (
        <div className="relative w-full md:w-[480px]">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-8">
                <svg
                    className="h-5 w-5 text-(--input) dark:text-white"
                    xmlns="http://www.w3.org/20000/svg"
                    viewBox="0 0 20 20"  
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        fillRule="evenodd"
                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>

            <input
                type="text"
                placeholder="Search for a country..."
                className="w-full rounded-md bg-(--element) py-4 pl-20 pr-4 text-(--foreground) shadow-md outline-none transition-all placeholder:text-(--input) placeholder:text-sm focus:ring-2 focus:ring-(--input) dark:placeholder:text-white dark:shadow-none"
                defaultValue={searchParams.get('q')?.toString()} 
                onChange={(e) => {
                    handleSearch(e.target.value);
                }}
            />
        </div>
    )
}