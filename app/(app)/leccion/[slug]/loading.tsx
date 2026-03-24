export default function LessonLoading() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Breadcrumb skeleton */}
      <div className="h-4 w-32 bg-cream-300 rounded animate-pulse mb-6" />

      {/* Title area */}
      <div className="h-6 w-24 bg-sage-200 rounded-full animate-pulse mb-3" />
      <div className="h-9 w-3/4 bg-cream-300 rounded animate-pulse mb-2" />
      <div className="h-5 w-1/2 bg-cream-200 rounded animate-pulse mb-8" />

      {/* Content blocks */}
      <div className="space-y-4">
        <div className="h-4 w-full bg-cream-200 rounded animate-pulse" />
        <div className="h-4 w-5/6 bg-cream-200 rounded animate-pulse" />
        <div className="h-4 w-4/5 bg-cream-200 rounded animate-pulse" />
      </div>

      {/* Analogy box skeleton */}
      <div className="my-6 rounded-2xl border-2 border-amber-200 bg-amber-50 p-5 animate-pulse">
        <div className="h-4 w-40 bg-amber-200 rounded mb-3" />
        <div className="space-y-2">
          <div className="h-4 w-full bg-amber-100 rounded" />
          <div className="h-4 w-5/6 bg-amber-100 rounded" />
          <div className="h-4 w-4/6 bg-amber-100 rounded" />
        </div>
      </div>

      {/* More content */}
      <div className="space-y-4">
        <div className="h-4 w-full bg-cream-200 rounded animate-pulse" />
        <div className="h-4 w-3/4 bg-cream-200 rounded animate-pulse" />
      </div>
    </div>
  )
}
