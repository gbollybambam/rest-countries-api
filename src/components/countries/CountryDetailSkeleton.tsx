import { Skeleton } from "@/components/ui/Skeleton";

export function CountryDetailSkeleton() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-0">
      <Skeleton className="mb-16 h-10 w-32 rounded-md shadow-md" />

      <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-28">

        <Skeleton className="aspect-[4/3] w-full rounded-md shadow-md lg:aspect-[5/3.5]" />

        <div>
          <Skeleton className="mb-8 h-8 w-1/2 md:h-10" />

          <div className="mb-16 grid gap-10 md:grid-cols-2 md:gap-4">
            <div className="flex flex-col gap-2.5">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-2/3" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/3" />
            </div>
            <div className="flex flex-col gap-2.5">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            <Skeleton className="h-6 w-32" />
            <div className="flex gap-2">
              <Skeleton className="h-8 w-24 rounded-sm" />
              <Skeleton className="h-8 w-24 rounded-sm" />
              <Skeleton className="h-8 w-24 rounded-sm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}