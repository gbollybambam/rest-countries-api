import { Skeleton } from "../ui/Skeleton";

export function CountryCardSkeleton() {
    return (
        <div className="overflow-hidden rounded-md bg-(--element) shadow-sm">
            <Skeleton className="h-40 w-full rounded-none" />

            <div className="p-6">
                <Skeleton className="mb-4 h-6 w-3/4" />

                <div className="flex flex-col gap-2">
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-4 w-2/3" />
                    <Skeleton className="h-4 w-1/2" />
                </div>
            </div>
        </div>
    )
}