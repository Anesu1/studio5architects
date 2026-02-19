import clsx from "clsx";

type PageHeroProps = {
    title: string;
    description?: string;
    kicker?: string;
    dark?: boolean;
    compact?: boolean;
};

export default function PageHero({ title, description, kicker, dark = false, compact = false }: PageHeroProps) {
    return (
        <section
            className={clsx(
                "relative overflow-hidden px-6 md:px-12",
                compact ? "pt-28 md:pt-32 pb-10 md:pb-12" : "pt-28 md:pt-32 pb-14 md:pb-16",
                dark ? "bg-verdant-black text-white" : "bg-verdant-bg text-verdant-black"
            )}
        >
            <div
                className={clsx(
                    "pointer-events-none absolute inset-0",
                    dark
                        ? "bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.10),transparent_45%)]"
                        : "bg-[radial-gradient(circle_at_15%_10%,rgba(20,20,20,0.06),transparent_45%)]"
                )}
            />
            <div className="relative max-w-5xl">
                {kicker && (
                    <p
                        className={clsx(
                            "mb-4 text-xs uppercase tracking-[0.18em] font-semibold",
                            dark ? "text-white/60" : "text-black/45"
                        )}
                    >
                        {kicker}
                    </p>
                )}
                <h1 className="font-heading uppercase leading-[0.92] tracking-tight text-4xl sm:text-5xl md:text-8xl">
                    {title}
                </h1>
                {description && (
                    <p className={clsx("mt-6 max-w-3xl text-base md:text-lg leading-relaxed", dark ? "text-white/75" : "text-black/70")}>
                        {description}
                    </p>
                )}
            </div>
        </section>
    );
}
