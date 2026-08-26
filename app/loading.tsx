export default function LoadingHome() {
  return (
    <main className="flex min-h-screen flex-col bg-black pt-24 animate-pulse">
      {/* Hero skeleton */}
      <section className="relative w-full min-h-[90vh] flex items-center px-6">
        <div className="max-w-7xl mx-auto w-full flex flex-col gap-6">
          <div className="h-3 w-32 bg-white/10 rounded-full" />
          <div className="h-20 w-full max-w-2xl bg-white/10 rounded-2xl" />
          <div className="h-20 w-3/4 max-w-xl bg-white/10 rounded-2xl" />
          <div className="h-4 w-96 bg-white/5 rounded-full" />
          <div className="flex gap-4 mt-4">
            <div className="h-12 w-40 bg-[#00b14f]/20 rounded-xl border border-[#00b14f]/20" />
            <div className="h-12 w-36 bg-white/5 rounded-xl border border-white/10" />
          </div>
        </div>
      </section>

      {/* News marquee skeleton */}
      <div className="w-full h-12 bg-white/5 border-y border-white/5 mb-4" />

      {/* Stats bar */}
      <div className="w-full py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="h-28 w-full bg-[#00b14f]/5 rounded-[2rem] border border-[#00b14f]/10" />
        </div>
      </div>

      {/* About section skeleton */}
      <section className="w-full py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-4">
            <div className="h-3 w-20 bg-white/10 rounded-full" />
            <div className="h-12 w-3/4 bg-white/10 rounded-xl" />
            <div className="h-4 w-full bg-white/5 rounded-full" />
            <div className="h-4 w-5/6 bg-white/5 rounded-full" />
          </div>
          <div className="aspect-video bg-white/5 rounded-3xl border border-[#00b14f]/20" />
        </div>
      </section>

      {/* Cards row */}
      <section className="w-full py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-48 bg-white/5 rounded-2xl border border-white/5" />
          ))}
        </div>
      </section>
    </main>
  );
}
