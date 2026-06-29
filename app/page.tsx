export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-zinc-50 text-zinc-900 p-8">
      <div className="max-w-xl text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          Ben Corcoran
        </h1>
        <p className="text-lg text-zinc-600">
          Computer Science Student. Building software to anchor ideas.
        </p>
        <div className="pt-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 animate-pulse">
            Site under construction
          </span>
        </div>
      </div>
    </main>
  );
}