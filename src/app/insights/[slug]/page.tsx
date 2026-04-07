import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import CTASection from '@/components/CTASection';
import { getBlogPostBySlug } from '@/lib/blogs';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  return {
    title: `${post?.title || 'Insight'} — Studio5`,
  };
}

export default async function InsightPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <article className="pt-40 pb-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-2 text-[10px] tracking-widest uppercase text-blue-600 mb-10">
            <Link href="/insights" className="hover:underline">Insights</Link>
            <span>/</span>
            <span className="text-gray-400 uppercase">{post.category}</span>
          </div>

          <h1 className="font-serif text-4xl md:text-6xl font-bold text-[#0A0A0A] leading-tight mb-8">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-6 py-6 border-y border-gray-100 mb-12">
             <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-100">
                   <Image src="/img/team/brighton-madondo.jpg" alt="Author" fill className="object-cover" />
                </div>
                <div>
                   <p className="text-[10px] font-bold text-gray-900 uppercase tracking-widest">Brighton Madondo</p>
                   <p className="text-[10px] text-gray-400">Principal Architect</p>
                </div>
             </div>
             <div className="h-4 w-px bg-gray-100" />
             <p className="text-[10px] text-gray-400 uppercase tracking-widest">{post.publishedAt}</p>
             <div className="h-4 w-px bg-gray-100" />
             <p className="text-[10px] text-gray-400 uppercase tracking-widest">{post.readTime}</p>
          </div>

          <div className="relative aspect-video bg-gray-100 mb-12 shadow-2xl overflow-hidden">
             <Image src={post.image} alt={post.title} fill className="object-cover" priority />
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-8 font-serif">
             {post.content.map((paragraph, index) => (
                <p key={index} className={index === 0 ? "text-xl font-medium text-gray-900 italic leading-relaxed" : ""}>
                   {paragraph}
                </p>
             ))}
          </div>

          {post.gallery && post.gallery.length > 0 && (
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
              {post.gallery.map((img, idx) => (
                <div key={idx} className="relative aspect-[3/2] bg-gray-100 overflow-hidden shadow-lg">
                  <Image src={img} alt={`View ${idx + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              ))}
            </div>
          )}

          <div className="mt-20 pt-10 border-t border-gray-100 flex items-center justify-between">
             <div className="flex gap-4">
                {[post.category, 'Research', 'Regionalism'].map(tag => (
                   <span key={tag} className="px-4 py-2 bg-gray-50 text-[10px] font-bold text-gray-400 uppercase tracking-widest">{tag}</span>
                ))}
             </div>
             <Link href="/insights" className="text-blue-600 text-[10px] font-bold uppercase tracking-widest border-b border-blue-100 hover:border-blue-600">Back to Journal</Link>
          </div>
        </div>
      </article>

      <CTASection
        title="Thinking Beyond the Structures."
        subtitle="Our research informs every commission at Studio5. Let's discuss how we can apply these insights to your vision."
        ctaHref="/contact"
        ctaText="Collaborate with Us"
      />
    </>
  );
}

