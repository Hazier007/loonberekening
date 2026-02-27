import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllBlogPosts } from '@/lib/blog';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Blog — Loonberekening.be',
  description: 'Alles over lonen, belastingen, voordelen en tips voor werknemers in België. Gratis gidsen en actuele informatie.',
};

export default function BlogIndex() {
  const posts = getAllBlogPosts();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Blog' }
      ]} />

      <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
      <p className="text-lg text-gray-600 mb-12 max-w-3xl">
        Gidsen, tips en actuele informatie over lonen, belastingen en voordelen voor werknemers in België.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-xl hover:border-teal-200 transition-all p-6"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-block bg-teal-100 text-teal-700 text-xs font-semibold px-2 py-1 rounded">
                {post.category}
              </span>
              <span className="text-sm text-gray-500">
                {new Date(post.date).toLocaleDateString('nl-BE', { day: 'numeric', month: 'short', year: 'numeric' })}
              </span>
            </div>

            <h2 className="text-xl font-bold text-gray-900 group-hover:text-teal-700 transition-colors mb-2">
              {post.title}
            </h2>

            <p className="text-gray-600 mb-4 line-clamp-3">
              {post.description}
            </p>

            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">{post.readTime} leestijd</span>
              <span className="text-teal-700 font-medium group-hover:underline flex items-center gap-1">
                Lees meer
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="bg-gradient-to-br from-teal-700 to-teal-900 rounded-2xl p-8 text-white shadow-2xl mt-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-3">Bereken je nettoloon</h2>
          <p className="text-teal-100 text-lg max-w-2xl mx-auto mb-6">
            Wil je precies weten hoeveel je netto overhoudt? Gebruik onze gratis calculator.
          </p>
          <Link 
            href="/calculator" 
            className="inline-flex items-center gap-2 bg-white text-teal-800 font-bold px-8 py-4 rounded-xl hover:bg-teal-50 transition-colors shadow-lg text-lg"
          >
            <span>Start Calculator</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
