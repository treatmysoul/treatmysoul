export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="mx-auto max-w-5xl px-6 py-24">
        <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
          Treat My Soul
        </p>

        <h1 className="mt-6 max-w-3xl text-5xl font-bold tracking-tight">
          Discover journeys worth experiencing.
        </h1>

        <p className="mt-6 max-w-2xl text-xl leading-8 text-gray-600">
          Thoughtful travel guides, practical planning advice and meaningful
          experiences to help you explore the world with confidence.
        </p>

        <div className="mt-16 border-t border-gray-200 pt-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            Our first destination
          </p>

          <h2 className="mt-4 text-3xl font-semibold">
            Discover India
          </h2>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">
            We&apos;re starting with practical guides for first-time travellers
            exploring Delhi, Agra, Jaipur and India&apos;s Golden Triangle.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-gray-200 p-5">
              First Trip to India
            </div>

            <div className="rounded-xl border border-gray-200 p-5">
              Golden Triangle
            </div>

            <div className="rounded-xl border border-gray-200 p-5">
              Experiences
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-200">
        <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-gray-500">
          © 2026 Treat My Soul
        </div>
      </footer>
    </main>
  );
}