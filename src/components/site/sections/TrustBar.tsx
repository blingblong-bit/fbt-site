const ITEMS = [
  "Physician Referred",
  "ForceDecks Data-Backed",
  "10+ Years Serving Tullahoma",
  "Connected to FIT Beyond Plus",
];

export function TrustBar() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center text-sm font-bold uppercase tracking-[0.14em] text-primary">
          {ITEMS.map((item, i) => (
            <li key={item} className="flex items-center gap-3">
              <span>{item}</span>
              {i < ITEMS.length - 1 && (
                <span className="hidden h-2 w-2 rotate-45 bg-accent md:inline-block" aria-hidden />
              )}
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
