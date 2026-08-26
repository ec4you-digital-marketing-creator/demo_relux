export default function LoadingContact() {
  return (
    <main className="flex min-h-screen flex-col bg-black pt-24 animate-pulse">
      <section className="relative w-full py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center gap-4 mb-16">
            <div className="h-3 w-20 bg-white/10 rounded-full" />
            <div className="h-12 w-72 bg-white/10 rounded-xl" />
            <div className="h-4 w-96 bg-white/5 rounded-full" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact form skeleton */}
            <div className="flex flex-col gap-5">
              <div className="h-12 w-full bg-white/5 rounded-xl border border-white/10" />
              <div className="h-12 w-full bg-white/5 rounded-xl border border-white/10" />
              <div className="h-12 w-full bg-white/5 rounded-xl border border-white/10" />
              <div className="h-32 w-full bg-white/5 rounded-xl border border-white/10" />
              <div className="h-12 w-40 bg-[#00b14f]/20 rounded-xl border border-[#00b14f]/20" />
            </div>
            {/* Map / Info skeleton */}
            <div className="bg-white/5 rounded-2xl border border-white/10 h-[380px]" />
          </div>
        </div>
      </section>
    </main>
  );
}
