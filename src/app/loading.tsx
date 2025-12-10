import { CountryCardSkeleton } from "@/components/countries/CountryCardSkeleton";

export default function Loading() {
    return (
        <section className="container mx-auto px-4 py-8" >
            <div className="mb-12 flex flex-col justify-between gap-10 md:flex-row md:items-center">
                <div className="h-14 w-full rounded-md bg-(--element) shadow-sm md:w-[480px] animate-pulse opacity-50" />
                <div className="h-14 w-52 rounded-md bg-(--element) shadow-sm animate-pulse opacity-50" />
            </div>

            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {Array.from({ length: 12 }).map((_, i) => (
                    <CountryCardSkeleton key={i} />
                ))}
            </div>
        </section>
    )
}