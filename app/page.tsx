'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const portfolioVideos = [
  'https://youtu.be/-0HRHk66G0Y?si=jnRAkz-iam-P6nUv',
  'https://youtu.be/nRHA08e-4bI?si=6WnVw_3MvFkc73Ly',
  'https://youtu.be/41GreOQlm3g?si=rDLutmHF1IiNyCcC',
  'https://youtu.be/zhNwnRtLOtQ?si=SzmIzpAxdx0AKDrB',
  'https://youtu.be/FF1M4R-hUNs?si=M9h7c440ekraYvfJ',
  'https://youtu.be/hLVatzjlgM8?si=07pu3hQLiqGLhfml',
  'https://youtu.be/N1OGmA-nezY?si=iVl1lTDGRPaigsKN',
  'https://youtu.be/fSnovy2XRy8?si=AyLd9W0YQfve7K0k',
  'https://youtu.be/E0UfkejpCdQ?si=Bp4vV70GVKBDvanG',
  'https://youtu.be/aZbxJCMG1r0?si=bXn6tqNF_eH_xHsp',
  'https://youtu.be/CyOCXjDkHAE?si=nCSSuRc65rFaxjTt',
  'https://youtu.be/FmT7M40m9bM?si=5BBhJzcn0ZBLfQXr',
];

const services = [
  {
    title: 'Long-Form YouTube Editing',
    desc: 'High-retention edits with strong pacing, storytelling, and brand clarity.',
  },
  {
    title: 'Short-Form Content Engine',
    desc: 'Reels, Shorts, and TikToks cut from your long-form ecosystem every week.',
  },
  {
    title: 'VSL and Paid Creative',
    desc: 'Conversion-focused edits for ads, landing pages, and lead generation.',
  },
  {
    title: 'Podcast Production',
    desc: 'Audio cleanup, multicam editing, clips, subtitles, and final exports.',
  },
  {
    title: 'Founder Personal Brand',
    desc: 'Premium thought-leadership edits for YouTube and LinkedIn content.',
  },
  {
    title: 'Creative Direction',
    desc: 'Hook strategy, narrative structure, and publishing cadence support.',
  },
];

const testimonials = [
  {
    text: 'Moonstudios made our content look world-class. We saw better retention in two weeks.',
    author: 'A. Rahman',
    company: 'SaaS Founder',
  },
  {
    text: 'Fast communication, clean process, and edits that actually move business metrics.',
    author: 'N. Ahmed',
    company: 'Agency Owner',
  },
  {
    text: 'Their style consistency across formats is unmatched. We finally look premium everywhere.',
    author: 'S. Karim',
    company: 'Marketing Lead',
  },
];

const faqs = [
  {
    q: 'How fast is your turnaround?',
    a: 'Most projects are delivered within 3-5 business days depending on complexity.',
  },
  {
    q: 'Can you handle weekly volume?',
    a: 'Yes. We run an organized production pipeline for recurring content schedules.',
  },
  {
    q: 'Do you include revisions?',
    a: 'Yes. Revisions are included so the final output matches your goals and style.',
  },
  {
    q: 'What platforms do you optimize for?',
    a: 'YouTube, Instagram, TikTok, LinkedIn, and ad placements with tailored exports.',
  },
];

const getYouTubeVideoId = (url: string) => {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
  return match ? match[1] : '';
};

const primaryBtn =
  'inline-flex w-full items-center justify-center rounded-full bg-zinc-950 px-6 py-3 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-zinc-800 sm:w-auto sm:px-7 sm:py-3.5';

const secondaryBtn =
  'inline-flex w-full items-center justify-center rounded-full border border-zinc-300 bg-white/80 px-6 py-3 text-base font-semibold text-zinc-900 transition hover:-translate-y-0.5 hover:bg-white sm:w-auto sm:px-7 sm:py-3.5';

const sectionTitle =
  'mt-3 max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-tight text-zinc-950 sm:text-5xl';

export default function Home() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 2400);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f2e8] text-zinc-900">
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-[#f7f2e8]/90 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <Image src="/moooon.png" alt="Moonstudios Logo" width={34} height={34} className="rounded-md" />
            <span className="text-2xl font-semibold tracking-tight">Moonstudios</span>
          </div>
          <div className="flex items-center gap-3">
            <a href="#portfolio" className="hidden rounded-full border border-zinc-300 bg-white/80 px-5 py-2.5 text-sm font-semibold text-zinc-900 transition hover:bg-white sm:inline-flex">
              Portfolio
            </a>
            <Link
              href="https://calendly.com/muntasinr/30min?month=2026-03&fbclid=PAZnRzaAQiM7BleHRuA2FlbQIxMABzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAaedNvqg3fEX-N17-IZhWgfizKmNBF0ZiL2xhY-YkzPM4dAsPy3VgKPsXN20hA_aem_hxpcS4jgFBWov0tsvfeqCw"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-800"
            >
              Book a Call
            </Link>
          </div>
        </nav>
      </header>

      <main>
        <section className="px-4 pb-16 pt-14 sm:px-6 sm:pb-24 sm:pt-20">
          <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="inline-flex rounded-full border border-zinc-300 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-700">
                Premium Video Agency
              </p>
              <h1 className="mt-6 max-w-3xl text-balance text-4xl font-semibold leading-[0.96] tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
                Beautiful edits that make
                <br />
                your brand look expensive.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-zinc-700 sm:text-xl">
                We design, edit, and systemize your content so every video feels aligned,
                polished, and built for growth.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="https://calendly.com/muntasinr/30min?month=2026-03&fbclid=PAZnRzaAQiM7BleHRuA2FlbQIxMABzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAaedNvqg3fEX-N17-IZhWgfizKmNBF0ZiL2xhY-YkzPM4dAsPy3VgKPsXN20hA_aem_hxpcS4jgFBWov0tsvfeqCw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={primaryBtn}
                >
                  Start Your Project
                </Link>
                <a href="#services" className={secondaryBtn}>
                  View Services
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white/75 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.08)] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-500">Why clients choose us</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-zinc-950">
                Consistent quality across every format.
              </h2>
              <ul className="mt-6 space-y-3 text-zinc-700">
                <li>Dedicated editor and creative lead</li>
                <li>Fast turnaround and structured revisions</li>
                <li>Long-form, short-form, and ad creative workflow</li>
              </ul>
              <a href="#portfolio" className="mt-7 inline-flex rounded-full border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50">
                See portfolio
              </a>
            </div>
          </div>
        </section>

        <section id="services" className="border-y border-zinc-200 bg-white/55 px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto w-full max-w-7xl">
            <p className="inline-flex rounded-full border border-zinc-300 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-700">
              Services
            </p>
            <h2 className={sectionTitle}>One clean visual style from the first frame to final delivery.</h2>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((item) => (
                <article key={item.title} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_12px_28px_rgba(0,0,0,0.06)] transition hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(0,0,0,0.1)]">
                  <h3 className="text-2xl font-semibold tracking-tight text-zinc-950">{item.title}</h3>
                  <p className="mt-3 text-zinc-700">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto w-full max-w-7xl">
            <p className="inline-flex rounded-full border border-zinc-300 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-700">
              Portfolio
            </p>
            <h2 className={sectionTitle}>Recent client work with premium storytelling and pacing.</h2>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {portfolioVideos.map((url, idx) => (
                <div
                  key={`${url}-${idx}`}
                  className="aspect-video overflow-hidden rounded-xl border border-zinc-200 bg-black shadow-[0_12px_28px_rgba(0,0,0,0.15)]"
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${getYouTubeVideoId(url)}`}
                    title={`Portfolio Video ${idx + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-zinc-200 bg-white/55 px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto w-full max-w-7xl">
            <p className="inline-flex rounded-full border border-zinc-300 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-700">
              Testimonials
            </p>
            <h2 className={sectionTitle}>Trusted by founders, creators, and growth teams.</h2>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((item) => (
                <article key={item.author} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_12px_28px_rgba(0,0,0,0.06)]">
                  <p className="text-zinc-800">&quot;{item.text}&quot;</p>
                  <div className="mt-6 border-t border-zinc-200 pt-4">
                    <p className="font-semibold text-zinc-950">{item.author}</p>
                    <p className="text-sm text-zinc-600">{item.company}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="inline-flex rounded-full border border-zinc-300 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-700">
                Why Moonstudios
              </p>
              <h2 className={sectionTitle}>Design consistency, faster output, better content quality.</h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
                <h3 className="text-2xl font-semibold tracking-tight text-rose-700">Typical workflow</h3>
                <ul className="mt-4 space-y-2 text-zinc-700">
                  <li>Inconsistent style</li>
                  <li>Slow delivery loops</li>
                  <li>No clear content system</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <h3 className="text-2xl font-semibold tracking-tight text-emerald-700">Our workflow</h3>
                <ul className="mt-4 space-y-2 text-zinc-700">
                  <li>Consistent visual identity</li>
                  <li>Reliable weekly schedule</li>
                  <li>Scalable content pipeline</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-zinc-200 bg-white/55 px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto w-full max-w-4xl">
            <p className="inline-flex rounded-full border border-zinc-300 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-700">
              FAQ
            </p>
            <h2 className={sectionTitle}>Everything you need before starting.</h2>

            <div className="mt-10 space-y-3">
              {faqs.map((faq) => (
                <details key={faq.q} className="rounded-xl border border-zinc-200 bg-white p-4 open:shadow-[0_10px_22px_rgba(0,0,0,0.06)]">
                  <summary className="cursor-pointer list-none pr-2 text-base font-semibold text-zinc-950">{faq.q}</summary>
                  <p className="mt-3 text-zinc-700">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-14 pt-16 sm:px-6 sm:pb-20 sm:pt-24">
          <div className="mx-auto w-full max-w-5xl rounded-3xl border border-zinc-200 bg-white p-7 text-center shadow-[0_18px_40px_rgba(0,0,0,0.08)] sm:p-10">
            <p className="inline-flex rounded-full border border-zinc-300 bg-zinc-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-700">
              Ready to grow
            </p>
            <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight text-zinc-950 sm:text-5xl">
              Let&apos;s build your premium content system.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-700 sm:text-lg">
              Book a strategy call and we will map your workflow, style direction, and weekly output.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="https://calendly.com/muntasinr/30min?month=2026-03&fbclid=PAZnRzaAQiM7BleHRuA2FlbQIxMABzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAaedNvqg3fEX-N17-IZhWgfizKmNBF0ZiL2xhY-YkzPM4dAsPy3VgKPsXN20hA_aem_hxpcS4jgFBWov0tsvfeqCw"
                target="_blank"
                rel="noopener noreferrer"
                className={primaryBtn}
              >
                Book Your Call
              </Link>
              <a href="#services" className={secondaryBtn}>
                See Services
              </a>
            </div>
          </div>
        </section>

        <section className="px-4 pb-16 sm:px-6 sm:pb-20">
          <div className="mx-auto w-full max-w-3xl text-center">
            <h3 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">Get weekly editing insights</h3>
            <p className="mt-3 text-zinc-600">Hooks, pacing, storytelling, and growth ideas in your inbox.</p>
            <form onSubmit={handleNewsletterSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full rounded-full border border-zinc-300 bg-white px-5 py-3.5 outline-none transition focus:border-zinc-500"
              />
              <button type="submit" className={primaryBtn}>
                {subscribed ? 'Subscribed' : 'Subscribe'}
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 px-4 py-10 sm:px-6">
        <div className="mx-auto grid w-full max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <Image src="/moooon.png" alt="Moonstudios Logo" width={28} height={28} className="rounded-md" />
              <p className="text-2xl font-semibold tracking-tight">Moonstudios</p>
            </div>
            <p className="mt-3 max-w-xs text-sm text-zinc-600">
              Premium video editing and content systems for modern brands.
            </p>
          </div>
          <div>
            <p className="font-semibold text-zinc-950">Services</p>
            <ul className="mt-2 space-y-1 text-sm text-zinc-600">
              <li>YouTube Editing</li>
              <li>Short Form</li>
              <li>Podcast Editing</li>
              <li>VSL Creative</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-zinc-950">Company</p>
            <ul className="mt-2 space-y-1 text-sm text-zinc-600">
              <li><a href="#portfolio" className="hover:text-zinc-900">Portfolio</a></li>
              <li><a href="#services" className="hover:text-zinc-900">Services</a></li>
              <li>
                <a
                  href="https://calendly.com/muntasinr/30min?month=2026-03&fbclid=PAZnRzaAQiM7BleHRuA2FlbQIxMABzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAaedNvqg3fEX-N17-IZhWgfizKmNBF0ZiL2xhY-YkzPM4dAsPy3VgKPsXN20hA_aem_hxpcS4jgFBWov0tsvfeqCw"
                  className="hover:text-zinc-900"
                >
                  Book a Call
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-zinc-950">Contact</p>
            <ul className="mt-2 space-y-1 text-sm text-zinc-600">
              <li>hello@moonstudios.com</li>
              <li>Dhaka, Bangladesh</li>
              <li>Mon - Sat</li>
            </ul>
          </div>
        </div>
        <p className="mx-auto mt-8 w-full max-w-7xl border-t border-zinc-200 pt-5 text-sm text-zinc-500">
          © 2026 Moonstudios. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
