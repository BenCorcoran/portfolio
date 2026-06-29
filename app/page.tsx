export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans antialiased selection:bg-zinc-200">
      
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-zinc-50/80 border-b border-zinc-200">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight hover:opacity-70 transition-opacity">
            Ben Corcoran
          </a>
          <div className="flex space-x-6 text-sm font-medium text-zinc-600">
            <a href="#about" className="hover:text-zinc-900 transition-colors">About</a>
            <a href="#projects" className="hover:text-zinc-900 transition-colors">Projects</a>
            <a href="#writing" className="hover:text-zinc-900 transition-colors">Writing</a>
          </div>
        </div>
      </nav>

      {/* Main Content Container */}
      <main className="max-w-3xl mx-auto px-6 py-16 space-y-24">
        
        {/* 1. About Section */}
        <section id="about" className="space-y-6 pt-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Computer Science Student & Writer.
          </h1>
          <p className="text-lg text-zinc-600 leading-relaxed max-w-2xl">
            Hi, I'm Ben. I'm finishing my final year of Computer Science. I build clean, reliable web software.
          </p>
          <div className="flex space-x-4 pt-2">
            <a 
              href="https://github.com/BenCorcoran" 
              target="_blank" 
              className="text-sm font-medium underline underline-offset-4 hover:text-zinc-600 transition-colors"
            >
              GitHub
            </a>
            <span className="text-zinc-300">|</span>
            <a 
              href="mailto:your-email@example.com" 
              className="text-sm font-medium underline underline-offset-4 hover:text-zinc-600 transition-colors"
            >
              Contact
            </a>
          </div>
        </section>

        {/* 2. Projects Section (Placeholders for now) */}
        <section id="projects" className="space-y-6 scroll-mt-20">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">Selected Projects</h2>
            <p className="text-zinc-500 text-sm">Applications and tools built over the summer.</p>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-2">
            {/* Project Card Placeholder */}
            <div className="p-5 rounded-xl border border-zinc-200 bg-white space-y-3 shadow-xs">
              <div className="flex justify-between items-start">
                <h3 className="font-medium">Coming Soon</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-600">
                  Next.js
                </span>
              </div>
              <p className="text-sm text-zinc-500 leading-normal">
                An interactive full-stack application targeting European market requirements. Currently in development.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-zinc-200 bg-white space-y-3 shadow-xs">
              <div className="flex justify-between items-start">
                <h3 className="font-medium">Coming Soon</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-600">
                  TypeScript
                </span>
              </div>
              <p className="text-sm text-zinc-500 leading-normal">
                A system tool demonstrating API integration and data visualization. Launching shortly.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Writing Section */}
        <section id="writing" className="space-y-6 scroll-mt-20">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">Writing & Thoughts</h2>
            <p className="text-zinc-500 text-sm">Essays on tech, literature, and building software.</p>
          </div>

          <div className="space-y-4 divide-y divide-zinc-200">
            <article className="pt-4 first:pt-0 group">
              <span className="text-xs text-zinc-400 font-mono">JUNE 2026</span>
              <h3 className="font-medium text-lg group-hover:text-zinc-600 transition-colors cursor-pointer mt-1">
                Why Code is the Ultimate Ink for Modern Writers
              </h3>
              <p className="text-sm text-zinc-500 mt-2 leading-relaxed">
                A short reflection on how structuring software mirrors the plotting of a novel, and why technical stability empowers creative execution...
              </p>
            </article>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="max-w-3xl mx-auto px-6 py-8 border-t border-zinc-200 text-xs text-zinc-400 text-center">
        &copy; {new Date().getFullYear()} Ben Corcoran. All rights reserved.
      </footer>

    </div>
  );
}