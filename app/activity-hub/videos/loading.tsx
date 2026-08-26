export default function LoadingVideos() {
  return (
    <main className="min-h-screen bg-[#080808] text-white pt-24 animate-pulse">
      {/* Hero skeleton */}
      <section className="relative w-full h-[420px] bg-white/5 border-b border-white/5 flex items-end pb-12 px-6">
        <div className="max-w-7xl mx-auto w-full flex flex-col gap-4">
          <div className="h-3 w-24 bg-white/10 rounded-full" />
          <div className="h-14 w-96 bg-white/10 rounded-xl" />
          <div className="h-4 w-64 bg-white/5 rounded-full" />
        </div>
      </section>

      {/* Filter bar */}
      <div className="max-w-7xl mx-auto px-6 py-8 flex gap-3">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-9 w-24 bg-white/5 rounded-full border border-white/10" />
        ))}
      </div>

      {/* Video grid */}
      <section className="py-4 pb-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex flex-col gap-3 bg-white/[0.03] rounded-2xl border border-white/5 overflow-hidden">
              <div className="aspect-video bg-white/5" />
              <div className="px-4 pb-5 flex flex-col gap-2">
                <div className="h-4 w-full bg-white/10 rounded-lg" />
                <div className="h-3 w-3/4 bg-white/5 rounded-full" />
                <div className="h-3 w-16 bg-[#00b14f]/20 rounded-full mt-1" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
