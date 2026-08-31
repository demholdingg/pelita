import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Clock3 } from "lucide-react";
import { getNewsArticle, newsArticles } from "@/lib/news";
import { notFound } from "next/navigation";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://pelitaenergi.com";

export function generateStaticParams() {
  return newsArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsArticle(slug);
  if (!article)
    return { title: "News Not Found", robots: { index: false, follow: true } };
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `${BASE_URL}/news/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `${BASE_URL}/news/${article.slug}`,
      type: "article",
      publishedTime: article.publishedAt,
      images: [{ url: article.image, alt: article.title }],
    },
  };
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getNewsArticle(slug);
  if (!article) notFound();

  return (
    <main className="min-h-screen bg-slate-50 pb-24 pt-28 text-slate-800">
      <article className="container mx-auto max-w-4xl px-6">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-green-900 hover:text-amber-600"
        >
          <ArrowLeft className="h-4 w-4" /> Back to News
        </Link>
        <header className="mt-10">
          <p className="text-sm font-bold uppercase tracking-widest text-green-800">
            {article.category}
          </p>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
            {article.title}
          </h1>
          <div className="mt-6 flex flex-wrap gap-5 text-sm text-slate-500">
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="h-4 w-4" />
              {new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(
                new Date(article.publishedAt),
              )}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock3 className="h-4 w-4" />
              {article.readTime}
            </span>
            <span>By {article.author}</span>
          </div>
        </header>
        <div className="relative mt-10 h-72 overflow-hidden rounded-3xl bg-green-900 md:h-115">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="mx-auto mt-12 max-w-3xl space-y-6 text-lg leading-relaxed text-slate-700">
          {article.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        {article.sections && article.sections.length > 0 && (
          <div className="mx-auto mt-14 max-w-3xl space-y-8 text-lg leading-relaxed text-slate-700">
            {article.sections.map((section, index) => {
              if (section.type === "heading") {
                return (
                  <h2
                    key={`${section.title}-${index}`}
                    className="pt-4 font-heading text-2xl font-extrabold leading-tight text-slate-900 md:text-3xl"
                  >
                    {section.title}
                  </h2>
                );
              }

              if (section.type === "list") {
                return (
                  <ul
                    key={`list-${index}`}
                    className="space-y-4 border-l-2 border-amber-400 pl-6 marker:text-amber-500"
                  >
                    {section.items.map((item) => (
                      <li key={item} className="pl-2">
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }

              if (section.type === "quote") {
                return (
                  <blockquote
                    key={`quote-${index}`}
                    className="border-l-4 border-green-800 bg-green-950 px-6 py-5 text-xl font-medium italic leading-relaxed text-white md:px-8"
                  >
                    “{section.text}”
                  </blockquote>
                );
              }

              return <p key={`paragraph-${index}`}>{section.text}</p>;
            })}
          </div>
        )}
        {article.gallery && article.gallery.length > 0 && (
          <section
            className="mx-auto mt-20 max-w-5xl"
            aria-label="Article gallery"
          >
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-slate-200 pb-5">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-amber-600">
                  Event highlights
                </p>
                <h2 className="mt-2 font-heading text-3xl font-extrabold text-slate-900">
                  Moments from the event
                </h2>
              </div>
              <p className="text-sm font-medium text-slate-500">
                {article.gallery.length + 1} photos
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
              {article.gallery.map((image, index) => (
                <figure
                  key={image}
                  className={`group relative overflow-hidden rounded-2xl bg-slate-100 ${
                    index === 0
                      ? "aspect-[4/5] sm:aspect-[4/3] lg:col-span-7 lg:row-span-2 lg:aspect-auto lg:min-h-130"
                      : index < 3
                        ? "aspect-[4/3] lg:col-span-5"
                        : "aspect-[4/3] lg:col-span-4"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${article.title} - image ${index + 2}`}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                  />
                  <figcaption className="absolute bottom-3 left-3 rounded-full bg-slate-950/75 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                    {String(index + 2).padStart(2, "0")}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}
      </article>
    </main>
  );
}
