import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center px-gutter py-section">
      <div className="text-center">
        <p className="font-mono text-eyebrow uppercase text-muted-foreground">
          [404]
        </p>
        <h1 className="mt-6 font-display text-display-lg uppercase leading-[0.9] tracking-tight">
          No such case.
        </h1>
        <Link
          href="/#projects"
          data-cursor="link"
          className="mt-10 inline-block rounded-full bg-accent px-7 py-3 font-mono text-eyebrow uppercase tracking-[0.16em] text-accent-foreground transition-transform duration-300 ease-expo-out hover:scale-[1.04]"
        >
          ← Back to Index
        </Link>
      </div>
    </section>
  );
}
