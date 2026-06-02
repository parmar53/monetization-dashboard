export function SkeletonCard() {
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 animate-pulse space-y-3">
      <div className="h-3 w-24 bg-gray-200 dark:bg-gray-800 rounded" />
      <div className="h-7 w-32 bg-gray-200 dark:bg-gray-800 rounded" />
      <div className="h-3 w-20 bg-gray-200 dark:bg-gray-800 rounded" />
    </div>
  );
}

export function SkeletonChart() {
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 animate-pulse">
      <div className="h-3 w-32 bg-gray-200 dark:bg-gray-800 rounded mb-4" />
      <div className="h-56 bg-gray-200 dark:bg-gray-800 rounded-lg" />
    </div>
  );
}

export function SkeletonFeed() {
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 animate-pulse space-y-4">
      <div className="h-3 w-28 bg-gray-200 dark:bg-gray-800 rounded" />
      {[...Array(5)].map((_, i) => (
        <div key={i} className="flex gap-3">
          <div className="w-4 h-4 bg-gray-200 dark:bg-gray-800 rounded-full mt-0.5" />
          <div className="flex-1 space-y-1.5">
            <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-full" />
            <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded w-16" />
          </div>
        </div>
      ))}
    </div>
  );
}