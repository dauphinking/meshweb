import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { blogPosts, getBlogPost } from "@/lib/blog"

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = getBlogPost(params.slug)
  if (!post) return {}
  return {
    title: `${post.title} | HWZ Mining Screen Mesh`,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: "HWZ Industrial Technology" }],
    alternates: {
      canonical: `https://www.screenmesh.org/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: ["HWZ Industrial Technology"],
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)
  if (!post) notFound()

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "HWZ Industrial Technology",
      url: "https://www.screenmesh.org",
    },
    publisher: {
      "@type": "Organization",
      name: "HWZ Industrial Technology",
      logo: {
        "@type": "ImageObject",
        url: "https://www.screenmesh.org/images/logo.jpg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.screenmesh.org/blog/${post.slug}`,
    },
  }

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Header */}
      <header className="bg-slate-900 text-white py-6">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors">
            ← All Articles
          </Link>
        </div>
      </header>

      {/* Article */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-AU", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span>·</span>
            <span>{post.readTime}</span>
            <span>·</span>
            <span>HWZ Industrial Technology</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-5 leading-tight">
            {post.title}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">{post.description}</p>
          <div className="flex flex-wrap gap-2 mt-5">
            {post.keywords.map((kw) => (
              <span
                key={kw}
                className="bg-cyan-50 text-cyan-700 text-xs font-medium px-3 py-1 rounded-full border border-cyan-200"
              >
                {kw}
              </span>
            ))}
          </div>
        </header>

        <div
          className="prose prose-lg prose-slate max-w-none
            prose-headings:font-bold prose-headings:text-gray-900
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-h4:text-lg prose-h4:mt-6 prose-h4:mb-2
            prose-p:text-gray-700 prose-p:leading-relaxed
            prose-li:text-gray-700
            prose-strong:text-gray-900
            prose-a:text-cyan-600"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* CTA */}
        <div className="mt-14 bg-gradient-to-br from-slate-800 to-slate-900 text-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-3">Need Mining Screen Mesh for Your Application?</h2>
          <p className="text-slate-300 mb-6">
            HWZ Industrial Technology manufactures custom welded wire screens, woven wire mesh and
            polyurethane screen panels for coal mining, non-ferrous metal mining and hard rock mining.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/#get-in-touch"
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Request a Quote
            </Link>
            <Link
              href="/#products"
              className="border border-slate-500 hover:border-cyan-400 text-slate-300 hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              View Products
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        {otherPosts.length > 0 && (
          <div className="mt-14">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
            <div className="space-y-4">
              {otherPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="block border border-gray-200 rounded-lg p-5 hover:border-cyan-300 hover:shadow-sm transition-all duration-200"
                >
                  <h3 className="font-semibold text-gray-900 hover:text-cyan-600 mb-1">
                    {related.title}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2">{related.description}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="bg-gray-900 text-white py-10 mt-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">© 2022–2025 HWZ Industrial Technology · screenmesh.org</p>
          <p className="text-gray-500 text-xs mt-1">
            Mining Screen Mesh Manufacturer · Shanghai, China · contact@biditech.cn
          </p>
        </div>
      </footer>
    </div>
  )
}
