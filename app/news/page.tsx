// import type { Metadata } from "next";
// import Image from "next/image";
// import Link from "next/link";
// import { ArrowRight, CalendarDays, Clock3, Newspaper } from "lucide-react";
// import { newsArticles } from "@/lib/news";

// const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://pelitaenergi.com";

// export const metadata: Metadata = {
//   title: "News & Insights",
//   description:
//     "Latest news, market insights, and updates from Pelita Bioenergi Nusantara.",
//   alternates: { canonical: `${BASE_URL}/news` },
//   openGraph: {
//     title: "News & Insights | Pelita Bioenergi Nusantara",
//     description: "News and insights on biomass, bioenergy, and sustainability.",
//     url: `${BASE_URL}/news`,
//     type: "website",
//   },
// };

// const dateFormatter = new Intl.DateTimeFormat("en-US", {
//   day: "numeric",
//   month: "long",
//   year: "numeric",
// });

// export default function NewsPage() {
//   const [featuredArticle, ...articles] = newsArticles;

//   return (
//     <main className="min-h-screen overflow-hidden bg-slate-50 pb-24 text-slate-800">
//       <section className="relative flex min-h-[58vh] items-end overflow-hidden pt-32 pb-20 text-white md:min-h-[64vh] md:pb-24">
//         <Image
//           src="/images/news/event pelita.jpeg"
//           alt="Pelita Bioenergi Nusantara at a product exhibition"
//           fill
//           priority
//           sizes="100vw"
//           className="object-cover object-center"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-green-950/95 via-green-950/75 to-green-950/35" />
//         <div className="absolute inset-0 bg-gradient-to-t from-green-950/80 via-transparent to-transparent" />
//         <div className="container relative z-10 mx-auto max-w-6xl px-6">
//           <div className="max-w-3xl">
//             <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-amber-400/30 bg-green-950/60 px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] text-amber-400 backdrop-blur-sm">
//               <Newspaper className="h-4 w-4" />
//               <span>News & Insights</span>
//             </div>
//             <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
//               Ideas for <span className="text-amber-400">a cleaner</span>
//               <br className="hidden md:block" /> energy future.
//             </h1>
//             <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200 md:text-lg">
//               Perspectives, progress, and practical insights from Pelita
//               Bioenergi Nusantara as we build a responsible energy supply chain.
//             </p>
//           </div>
//         </div>
//       </section>

//       <div className="container mx-auto max-w-6xl px-6 pt-14 md:pt-20">
//         <Link
//           href={`/news/${featuredArticle.slug}`}
//           className="group mb-20 grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-xl md:grid-cols-12"
//         >
//           <div className="relative min-h-80 overflow-hidden bg-green-900 md:col-span-7 md:min-h-105">
//             <Image
//               src={featuredArticle.image}
//               alt={featuredArticle.title}
//               fill
//               className="object-cover transition duration-700 group-hover:scale-105"
//               priority
//             />
//             <div className="absolute left-6 top-6 rounded-full bg-amber-400 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-green-950">
//               Featured
//             </div>
//           </div>
//           <div className="flex flex-col justify-center p-8 md:col-span-5 md:p-10">
//             <p className="text-sm font-bold uppercase tracking-widest text-green-800">
//               {featuredArticle.category}
//             </p>
//             <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
//               {featuredArticle.title}
//             </h2>
//             <p className="mt-5 leading-relaxed text-slate-600">
//               {featuredArticle.excerpt}
//             </p>
//             <ArticleMeta article={featuredArticle} />
//             <span className="mt-8 inline-flex items-center gap-2 font-bold uppercase tracking-wider text-green-900">
//               Read article{" "}
//               <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//             </span>
//           </div>
//         </Link>

//         <div className="mb-8 flex items-end justify-between gap-4 border-b border-slate-200 pb-5">
//           <div>
//             <p className="text-sm font-bold uppercase tracking-widest text-amber-600">
//               Latest stories
//             </p>
//             <h2 className="mt-2 font-heading text-3xl font-extrabold text-slate-900 md:text-4xl">
//               Latest from Pelita
//             </h2>
//           </div>
//         </div>
//         <div className="grid gap-6 md:grid-cols-2">
//           {articles.map((article) => (
//             <article
//               key={article.slug}
//               className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
//             >
//               <Link href={`/news/${article.slug}`}>
//                 <div className="relative h-60 overflow-hidden bg-green-900">
//                   <Image
//                     src={article.image}
//                     alt={article.title}
//                     fill
//                     className="object-cover transition duration-700 group-hover:scale-105"
//                   />
//                 </div>
//                 <div className="flex min-h-65 flex-col p-7">
//                   <p className="text-xs font-bold uppercase tracking-widest text-green-800">
//                     {article.category}
//                   </p>
//                   <h3 className="mt-3 font-heading text-2xl font-bold text-slate-900">
//                     {article.title}
//                   </h3>
//                   <p className="mt-3 flex-1 leading-relaxed text-slate-600">
//                     {article.excerpt}
//                   </p>
//                   <ArticleMeta article={article} />
//                 </div>
//               </Link>
//             </article>
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// }

// function ArticleMeta({ article }: { article: (typeof newsArticles)[number] }) {
//   return (
//     <div className="mt-6 flex flex-wrap gap-4 text-xs font-medium text-slate-500">
//       <span className="inline-flex items-center gap-1.5">
//         <CalendarDays className="h-4 w-4" />
//         {dateFormatter.format(new Date(article.publishedAt))}
//       </span>
//       <span className="inline-flex items-center gap-1.5">
//         <Clock3 className="h-4 w-4" />
//         {article.readTime}
//       </span>
//     </div>
//   );
// }

import React from "react";
import NotFound from "../not-found";

const page = () => {
  return (
    <div>
      <NotFound />
    </div>
  );
};

export default page;
