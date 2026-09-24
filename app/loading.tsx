export default function Loading() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <div className="animate-pulse space-y-10">
        <div className="h-4 w-32 bg-ink/10 rounded" />
        <div className="h-10 w-2/3 bg-ink/10 rounded" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="aspect-[4/3] bg-ink/10 rounded" />
          <div className="aspect-[4/3] bg-ink/10 rounded" />
        </div>
      </div>
    </div>
  );
}