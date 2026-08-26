export default function LoadingBlogs() {
  return (
    <main className="min-h-screen bg-[#080808] text-white pt-24 animate-pulse">
      {/* Header */}
      <section className="relative pt-20 pb-16 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center gap-5">
          <div className="h-8 w-40 bg-white/10 rounded-sm" />
          <div className="h-16 w-96 bg-white/10 rounded-xl" />
          <div className="h-4 w-72 bg-white/5 rounded-full" />
        </div>
      </section>

      {/* Content */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left: blog cards */}
          <div className="lg:w-[70%]">
            <div className="h-8 w-48 bg-white/10 rounded-lg mb-12" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex flex-col gap-4 bg-white/[0.03] rounded-sm border border-white/5 p-5">
                  <div className="aspect-video bg-white/5 rounded-sm" />
                  <div className="h-3 w-24 bg-white/10 rounded-full" />
                  <div className="h-5 w-full bg-white/10 rounded-lg" />
                  <div className="h-5 w-4/5 bg-white/10 rounded-lg" />
                  <div className="h-3 w-32 bg-[#00b14f]/20 rounded-full mt-2" />
                </div>
              ))}
            </div>
          </div>

          {/* Right: sidebar */}
          <aside className="lg:w-[30%] flex flex-col gap-12">
            <div>
              <div className="h-5 w-32 bg-white/10 rounded-lg mb-6" />
              <div className="flex flex-col gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-8 w-full bg-white/5 rounded-lg border border-white/5" />
                ))}
              </div>
            </div>
            <div>
              <div className="h-5 w-28 bg-white/10 rounded-lg mb-6" />
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="h-7 w-20 bg-white/5 rounded-sm border border-white/10" />
                ))}
              </div>
            </div>
            <div className="h-64 bg-white/5 rounded-sm border border-white/10" />
          </aside>
        </div>
      </section>
    </main>
  );
}
