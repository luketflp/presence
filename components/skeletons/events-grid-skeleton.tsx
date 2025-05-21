export default function EventsGridSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="rounded-lg overflow-hidden border bg-card">
          <div className="h-48 w-full bg-muted animate-pulse" />
          <div className="p-4">
            <div className="h-4 w-24 bg-muted rounded animate-pulse mb-2" />
            <div className="h-6 w-full bg-muted rounded animate-pulse mb-2" />
            <div className="h-4 w-full bg-muted rounded animate-pulse mb-2" />
            <div className="h-4 w-3/4 bg-muted rounded animate-pulse mb-2" />
            <div className="h-4 w-1/2 bg-muted rounded animate-pulse mt-4" />
          </div>
          <div className="p-4 pt-0 flex items-center justify-between">
            <div className="h-6 w-16 bg-muted rounded animate-pulse" />
            <div className="h-9 w-24 bg-muted rounded animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  )
}
