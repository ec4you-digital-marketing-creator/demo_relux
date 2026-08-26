export default function LoadingAbout() {
  return (
    <main className="flex min-h-screen flex-col bg-black pt-24 animate-pulse">
      {/* About Hero Skeleton */}
      <section className="relative w-full pt-10 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div className="flex flex-col gap-5">
              <div className="h-3 w-24 bg-white/10 rounded-full" />
              <div className="h-12 w-3/4 bg-white/10 rounded-xl" />
              <div className="h-12 w-1/2 bg-white/10 rounded-xl" />
              <div className="h-4 w-full bg-white/5 rounded-full mt-4" />
              <div className="h-4 w-5/6 bg-white/5 rounded-full" />
              <div className="flex gap-8 mt-6">
                <div className="h-3 w-16 bg-white/10 rounded-full" />
                <div className="h-3 w-16 bg-white/10 rounded-full" />
                <div className="h-3 w-16 bg-white/10 rounded-full" />
              </div>
              <div className="h-20 w-full bg-white/5 rounded-xl mt-4" />
            </div>
            {/* Right image skeleton */}
            <div className="relative w-full max-w-[480px] aspect-[3/3.5] rounded-[2.5rem] bg-white/5 border border-white/10" />
          </div>
        </div>
      </section>
      {/* Why Choose Us Skeleton */}
      <section className="w-full py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="h-10 w-64 bg-white/10 rounded-xl mb-12 mx-auto lg:mx-0" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white/5 rounded-2xl border border-white/10 h-[380px]" />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
