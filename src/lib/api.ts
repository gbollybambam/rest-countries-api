import { Country } from '@/types';

const BASE_URL = 'https://restcountries.com/v3.1';

const HOME_FIELDS = 'name,population,region,capital,flags,cca3';
const DETAIL_FIELDS = 'name,population,region,capital,flags,cca3,borders,subregion,tld,currencies,languages';


// --- EXPORTED FUNCTIONS (The ones used by the UI) ---

// Get All (Home Page)
export async function getAllCountries(): Promise<Country[]> {
  try {
    const res = await fetch(`${BASE_URL}/all?fields=${HOME_FIELDS}`);
    if (!res.ok) throw new Error(`Failed to fetch countries: ${res.status}`);
    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  };
};

// GetSingle (Detail Page)
export async function getCountryByCode(code: string): Promise<Country | null> {
  try {
    const res = await fetch(`${BASE_URL}/alpha/${code}?fields=${DETAIL_FIELDS}`);
    if (!res.ok) return null;
    const data = await res.json();
    return Array.isArray(data) ? data[0] : data || null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// Region (Filter Dropdown)
export async function getCountriesByRegion(region: string): Promise<Country[]> {
  try {
    const res = await fetch(`${BASE_URL}/region/${region}?fields=${HOME_FIELDS}`);
    if (!res.ok) throw new Error(`Failed to fetch region: ${region}`);
    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Search
export async function searchCountries(name: string): Promise<Country[]> {
  try {
    const res = await fetch(`${BASE_URL}/name/${name}?fields=${HOME_FIELDS}`);
    
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Border Names
export async function getCountryNamesByCodes(codes: string[]): Promise<{ name: string; code: string }[]> {
  if (!codes || codes.length === 0) return [];

  try {
    const codesString = codes.join(',');
    const res = await fetch(`${BASE_URL}/alpha?codes=${codesString}&fields=name,cca3`);

    if (!res.ok) return [];

    const data = await res.json();

    return data.map((c: Country) => ({
      name: c.name.common,
      code: c.cca3
    }));
  } catch (error) {
    console.error("Error fetching borders:", error);
    return [];
  } 
}

const ITEMS_PER_PAGE = 12;

export async function getCountriesData(query: string, region: string, page: number = 1) {
  let countries: Country[] = [];

  if (query) {
    countries = await searchCountries(query);
  } else if (region) {
    countries = await getCountriesByRegion(region);
  } else {
    countries = await getAllCountries();
  }

  if (query && region) {
    countries = countries.filter(
      (country) => country.region.toLowerCase() === region.toLowerCase()
    );
  }

  const totalItems = countries.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  
  const start = (page - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  
  const paginatedCountries = countries.slice(start, end);

  return {
    countries: paginatedCountries,
    totalPages,
    totalItems
  };
}