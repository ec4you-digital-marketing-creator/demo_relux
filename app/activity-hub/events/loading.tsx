export default function LoadingEvents() {
  return (
    <main className="min-h-screen bg-[#080808] text-white pt-24 animate-pulse">
      {/* Header */}
      <section className="relative pt-20 pb-16 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center gap-5">
          <div className="h-8 w-40 bg-white/10 rounded-sm" />
          <div className="h-16 w-80 bg-white/10 rounded-xl" />
          <div className="h-4 w-64 bg-white/5 rounded-full" />
        </div>
      </section>

      {/* Events grid */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex flex-col bg-white/[0.03] rounded-2xl border border-white/5 overflow-hidden">
              <div className="aspect-video bg-white/5" />
              <div className="p-5 flex flex-col gap-3">
                <div className="h-3 w-20 bg-[#00b14f]/20 rounded-full" />
                <div className="h-5 w-full bg-white/10 rounded-lg" />
                <div className="h-4 w-3/4 bg-white/10 rounded-lg" />
                <div className="h-3 w-32 bg-white/5 rounded-full" />
                <div className="h-9 w-28 bg-white/10 rounded-xl mt-2" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
