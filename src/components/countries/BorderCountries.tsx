import Link from 'next/link';
import { getCountryNamesByCodes } from '@/lib/api';

export async function BorderCountries({ codes }: { codes: string[] }) {
    const borders = await getCountryNamesByCodes(codes);

    if (borders.length === 0) {
        return <div className='text-gray-500 dark:text-gray-400 text-sm lg:text-base'>Could not load border names</div>;
    }

    return (
        <div className="flex flex-wrap gap-3">
            {borders.map((border) => (
                <Link
                    key={border.code}
                    href={`/${border.code}`}
                    className="min-w-[96px] rounded-sm bg-(--element)  px-6 py-1 text-center text-sm shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md dark:shadow-none dark:bg-(--element)"
                >
                    {border.name}
                </Link>
            ))}
        </div>
    )
};