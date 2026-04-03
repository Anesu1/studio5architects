import Link from 'next/link';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  dark?: boolean;
}

export default function CTASection({
  title = "Let's Build Something Great.",
  subtitle = "Whether you have a fully developed brief or are still turning an idea over, we welcome the conversation.",
  ctaText = "Start Your Project",
  ctaHref = "/contact",
  dark = false
}: CTASectionProps) {
  return (
    <section className={`py-24 ${dark ? 'bg-[#0A0A0A] text-white' : 'bg-[#F4F5F7] text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="reveal">
          <span className={`label mb-6 block ${dark ? 'text-blue-400' : 'text-blue-600'}`}>Next Steps</span>
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-8 leading-tight">
            {title.split(' ').map((word, i) => i === title.split(' ').length - 1 ? <em key={i} className="italic text-blue-600">{word}</em> : word + ' ')}
          </h2>
          <p className={`${dark ? 'text-gray-400' : 'text-gray-500'} text-lg max-w-2xl mx-auto mb-12 leading-relaxed`}>
            {subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href={ctaHref} className="btn-primary">
              {ctaText}
            </Link>
            {!dark && (
              <Link href="/portfolio" className="btn-outline border border-[#0A0A0A]">
                View Our Work
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
