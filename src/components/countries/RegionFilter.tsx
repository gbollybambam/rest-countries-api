'use client';

import { useSearchParams, useRouter, usePathname } from "next/navigation";

const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

export function RegionFilter() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const currentRegion = searchParams.get('region');

    function handleFilter(region: string) {
        const params = new URLSearchParams(searchParams);

        if (region) {
            params.set('region', region);
        } else {
            params.delete('region'); 
        }

        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <div className="relative w-52">
            <select 
                className="w-full cursor-pointer appearance-none rounded-md bg-(--element) py-4 pl-6 pr-10 text-sm font-semibold text-(--foreground) shadow-md transition-shadow outline-none focus:ring-2 focus:ring-(--input) dark:shadow-none"
                value={currentRegion || ''}
                onChange={(e) => handleFilter(e.target.value)}
                aria-label="Filter by Region"
            >
                <option value="" className="hidden">Filter by Region</option>
                <option value="">All regions</option>
                {regions.map((region) => (
                <option key={region} value={region}>
                    {region}
                </option>
                ))}
            </select>

            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-(--foreground)">
                <svg className="h-3 w-3 fill-current" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
            </div>
        </div>
    )
}