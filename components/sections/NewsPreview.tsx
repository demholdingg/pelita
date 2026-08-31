"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Newspaper,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { newsArticles } from "@/lib/news";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

// Component untuk artikel card dengan rotating images
function ArticleCard({ article }: { article: (typeof newsArticles)[0] }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const allImages = [article.image, ...(article.gallery || [])];

  useEffect(() => {
    if (allImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [allImages.length]);

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link href={`/news/${article.slug}`}>
        <div className="relative h-56 overflow-hidden bg-green-900">
          <Image
            src={allImages[currentImageIndex]}
            alt={article.title}
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
          />
        </div>
        <div className="p-7">
          <p className="text-xs font-bold uppercase tracking-widest text-green-800">
            {article.category}
          </p>
          <h3 className="mt-3 font-heading text-xl font-bold leading-snug text-slate-900">
            {article.title}
          </h3>
          <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-slate-600">
            {article.excerpt}
          </p>
          <div className="mt-6 flex items-center gap-2 text-xs font-medium text-slate-500">
            <CalendarDays className="h-4 w-4" />
            {dateFormatter.format(new Date(article.publishedAt))}
          </div>
        </div>
      </Link>
    </article>
  );
}

export default function NewsPreview() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerSlide = 6;
  const totalSlides = Math.ceil(newsArticles.length / itemsPerSlide);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const startIndex = currentIndex * itemsPerSlide;
  const visibleArticles = newsArticles.slice(
    startIndex,
    startIndex + itemsPerSlide,
  );

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-amber-600">
              <Newspaper className="h-5 w-5" />
              <span>News & Insights</span>
            </div>
            <h2 className="max-w-2xl font-heading text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              Fresh perspectives for a more responsible energy future.
            </h2>
          </div>
          <Link
            href="/news"
            className="inline-flex shrink-0 items-center gap-2 font-bold uppercase tracking-wider text-green-900 transition-colors hover:text-amber-600"
          >
            View all news <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Slides */}
          <div className="grid gap-8 md:grid-cols-3">
            {visibleArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>

          {/* Navigation Buttons */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 md:-translate-x-20 rounded-full bg-green-900 p-2 text-white transition-colors hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 md:translate-x-20 rounded-full bg-green-900 p-2 text-white transition-colors hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600"
                aria-label="Next slide"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
