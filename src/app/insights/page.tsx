import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CTASection from '@/components/CTASection';
import { getAllBlogPosts } from '@/lib/blogs';

export const metadata: Metadata = {
  title: 'Insights — Architectural Thinking on the Zimbabwean Built Environment',
  description:
    'Research, material investigation, and architectural reflections from Studio5. Exploring climate-responsive design and urban development in Harare and Bulawayo.',
};

export default async function InsightsPage() {
  const posts = await getAllBlogPosts();
  const featuredPost = posts[0];

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section style={{ background: '#FFFFFF', paddingTop: '120px' }} className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-7">
            <span className="rule" />
            <span className="label">Thinking &amp; Journal</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#0A0A0A] leading-tight mb-8">
            Insights into the
            <br />
            Built <em style={{ color: 'var(--blue)' }}>Environment.</em>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">
            A collection of stories, research, and reflections from our studio. We explore the
            intersection of architectural practice, local materials, and the evolving urban landscape
            of Zimbabwe.
          </p>
        </div>
      </section>

      <hr className="divider" />

      {/* ── FEATURED ARTICLE ─────────────────────────────── */}
      {featuredPost && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div
                className="rounded-none shadow-sm"
                style={{ position: 'relative', overflow: 'hidden', aspectRatio: '16/9' }}
              >
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                  <span className="label text-blue-600 mb-6 block border-b-2 border-blue-100/50 pb-2">{featuredPost.category}</span>
                <h2 className="font-serif text-4xl font-bold text-[#0A0A0A] mb-6 leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-500 text-base leading-relaxed mb-8">
                  {featuredPost.excerpt}
                </p>
                <Link href={`/insights/${featuredPost.slug}`} className="btn-outline">
                  Read the Story
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── ARTICLES GRID ────────────────────────────────── */}
      <section className="py-20 bg-[#F4F5F7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="insight-card border border-gray-100 bg-white shadow-soft group hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                <Link href={`/insights/${post.slug}`}>
                  <div className="insight-img-wrap relative aspect-video overflow-hidden">
                    <Image src={post.image} alt={post.title} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  </div>
                  <div className="p-8">
                    <span className="label text-blue-600 mb-6 block border-b border-blue-100/50 pb-2">{post.category}</span>
                    <h3 className="font-serif text-2xl font-bold text-[#0A0A0A] mb-4 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                       {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                      <span className="text-gray-400 text-[10px] tracking-widest uppercase font-bold">
                        {post.publishedAt}
                      </span>
                      <span className="text-blue-600 text-[10px] tracking-widest uppercase font-bold hover:underline">
                        Read More
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        dark
        title="Stay Informed on the Built Environment."
        subtitle="Subscribe to our quarterly journal for technical research and architectural reflections from the Zimbabwe plateau."
        ctaText="Subscribe to Journal"
      />
    </>
  );
}
