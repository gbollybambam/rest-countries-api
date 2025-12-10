import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { getCountryByCode } from '@/lib/api';
import { BorderCountries } from '@/components/countries/BorderCountries';

type Props = {
    params: Promise<{ countryCode: string }>;
};

export async function generateMetadata({ params }: Props) {
    const { countryCode } = await params;
    const country = await getCountryByCode(countryCode);
    if (!country) return { title: 'Country Not Found' };

    return {
        title: `${country.name.common} | REST Countries`,
        description: `Learn about ${country.name.common}, its population, region,and more.`,
    };
}

export default async function CountryDetail({ params }: Props) {
    const { countryCode } = await params;
    const country = await getCountryByCode(countryCode);

    if (!country) {
        notFound();
    }

    const currencies = country.currencies ? Object.values(country.currencies).map(c => c.name).join(', ') : 'N/A';
    const languages = country.languages ? Object.values(country.languages).join(', ') : 'N/A';
    const nativeName = country.name.nativeName ? Object.values(country.name.nativeName)[0].common : country.name.common;

    return (
        <section className='mx-auto max-w-[1440px] px-4 py-12 md:px-0 text-(--foreground) md:px-12 lg:px-20'>
            <Link href="/" className="mb-16 inline-flex items-center gap-3 rounded-md bg-(--element) px-8 py-2.5 text-sm font-light shadow-md transition-transform hover:-translate-x-1 hover:shadow-lg">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className='h-5 w-5'>
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back
            </Link>

            <div className='grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-28'>
                <div className="relative aspect-4/3 w-full overflow-hidden rounded-md shadow-md lg:aspect-[5/3.5]">
                    <Image
                        src={country.flags.svg}
                        alt={country.flags.alt || `Flag of ${country.name.common}`}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div>
                    <h1 className="mb-8 text-2xl font-extrabold lg:text-3xl">{country.name.common}</h1>

                    <div className="mb-16 grid gap-10 md:grid-cols-2 md:gap-4">
                        <ul className="flex flex-col gap-2.5 text-sm lg:text-base">
                            <li><span className="font-semibold">Native Name:</span> {nativeName}</li>
                            <li><span className="font-semibold">Population:</span> {country.population.toLocaleString()}</li>
                            <li><span className="font-semibold">Region:</span> {country.region}</li>
                            <li><span className="font-semibold">Sub Region:</span> {country.subregion}</li>
                            <li><span className="font-semibold">Capital:</span> {country.capital?.join(', ') || 'N/A'}</li>
                        </ul>
                        <ul className="flex flex-col gap-2.5 text-sm lg:text-base">
                            <li><span className="font-semibold">Top Level Domain:</span> {country.tld?.join(', ')}</li>
                            <li><span className="font-semibold">Currencies:</span> {currencies}</li>
                            <li><span className="font-semibold">Languages:</span> {languages}</li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4 md:flex-row md:items-baseline">
                        <span className="whitespace-nowrap text-base font-semibold">Border Countries:</span>
                        {country.borders && country.borders.length > 0 ? (
                            <Suspense fallback={<div className="h-8 w-24 animate-pulse rounded bg-gray-300 dark:bg-gray-700 text-(--input)">Loading borders...</div>}>
                                <BorderCountries codes={country.borders} />
                            </Suspense>
                        ) : (
                            <span className="text-gray-500 dark:text-gray-400 text-sm lg:text-base">No border countries</span>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
