export default function Quote() {
  return (
    <div className="border-t px-12 py-10">
      <div className="bg-secondary/50 relative mx-auto max-w-3xl overflow-hidden rounded-xl border p-8">
        {/* Large decorative quote mark */}
        <span className="text-muted-foreground/10 pointer-events-none absolute -top-2 left-4 select-none text-[8rem] font-bold leading-none">
          &ldquo;
        </span>

        {/* Quote text */}
        <p className="text-foreground/80 relative z-10 text-sm leading-relaxed italic font-medium">
          &ldquo;I&apos;m not gonna be the one who gives up. I&apos;ll keep
          moving forward, no matter what. Even if I don&apos;t have any magic, I
          will become the Wizard King.&rdquo;
        </p>

        {/* Attribution */}
        <p className="text-muted-foreground relative z-10 mt-4 text-right text-xs">
          — Asta, Black Clover
        </p>
      </div>
    </div>
  );
}
