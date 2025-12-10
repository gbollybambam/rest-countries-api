import Image from 'next/image';
import Link from 'next/link';
import { Country } from '@/types';

interface CountryCardProps {
    country: Country;
}

export function CountryCard({ country }: CountryCardProps) {
    return (
        <Link
            href={`/${country.cca3}`}
            className='block overflow-hidden rounded-md bg-(--element) shadow-md transition-transform duration-200 hover:scale-105 dark:shadow-none'
        >
            <div className='relative aspect-[1.6] w-full'>
                <Image
                    src={country.flags.svg}
                    alt={country.flags.alt || `Flag of ${country.name.common}`}
                    fill
                    className='object-cover'
                />
            </div>

            <div className='p-6 text-(--foreground)'>
                <h2 className='mb-3 text-lg font-bold'>{country.name.common}</h2>

                <div className='flex flex-col gap-1.5 text-sm'>
                    <p>
                        <span className='font-semibold'>Population: </span>
                        {country.population.toLocaleString()}
                    </p>
                    <p>
                        <span className='font-semibold'>Region: </span>
                        {country.region}
                    </p>
                    <p>
                        <span className='font-semibold'>Capital: </span>
                        {country.capital?.join(', ') || 'N/A'}
                    </p>
                </div>
            </div>
        </Link>
    )
}
