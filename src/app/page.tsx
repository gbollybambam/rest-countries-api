import { getCountriesData } from '@/lib/api';
import { CountryCard } from "@/components/countries/CountryCard";
import { SearchInput } from '@/components/countries/SearchInput';
import { RegionFilter } from '@/components/countries/RegionFilter';
import { Pagination } from '@/components/ui/Pagination';


type Props = {
  searchParams?: Promise<{
    q?: string;
    region?: string;
    page?: string;
  }>;
};


export default async function Home(props: Props) {
  const searchParams = await props.searchParams;
  const query = searchParams?.q || '';
  const region = searchParams?.region || '';
  const page = Number(searchParams?.page) || 1;

  const { countries, totalPages } = await getCountriesData(query, region, page);

  return (
    <section className="container max-w-[1440px] mx-auto px-4 py-8 md:px-12 lg:px-20">
      <div className="mb-12 flex flex-col justify-between gap-10 md:flex-row md:items-center">
        <SearchInput />
        <RegionFilter />
      </div>

      {countries.length > 0 ? (
        <>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {countries.map((country) => (
              <CountryCard key={country.cca3} country={country} />
            ))}
          </div>
          <Pagination totalPages={totalPages} />
        </>
      ) : (
        <div className="mt-20 text-center">
          <h2 className="text-xl font-bold">No countries found</h2>
          <p className="text-(--input)">Try changing your search terms.</p>
        </div>
      )}
    </section>
  );
}