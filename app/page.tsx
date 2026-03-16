'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ArrowRight, ArrowUpRight, Check, Menu, X } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const BOOK_URL = 'https://calendly.com/muntasinr/30min?month=2026-03&fbclid=PAZnRzaAQiM7BleHRuA2FlbQIxMABzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAaedNvqg3fEX-N17-IZhWgfizKmNBF0ZiL2xhY-YkzPM4dAsPy3VgKPsXN20hA_aem_hxpcS4jgFBWov0tsvfeqCw';

const portfolioVideos = [
  'https://youtu.be/-0HRHk66G0Y?si=jnRAkz-iam-P6nUv',
  'https://youtu.be/nRHA08e-4bI?si=6WnVw_3MvFkc73Ly',
  'https://youtu.be/41GreOQlm3g?si=rDLutmHF1IiNyCcC',
  'https://youtu.be/zhNwnRtLOtQ?si=SzmIzpAxdx0AKDrB',
  'https://youtu.be/FF1M4R-hUNs?si=M9h7c440ekraYvfJ',
  'https://youtu.be/hLVatzjlgM8?si=07pu3hQLiqGLhfml',
];

const services = [
  { icon: '▶', title: 'YouTube Videos', desc: 'Long-form edits focused on retention, pacing, and higher watch time.', tag: '01' },
  { icon: '📱', title: 'Short Form', desc: 'Reels, Shorts, TikToks, and LinkedIn clips optimized for reach.', tag: '02' },
  { icon: '🎙️', title: 'Podcast Editing', desc: 'Audio cleanup, structure, captions, and polished final exports.', tag: '03' },
  { icon: '💰', title: 'Ad Creatives & VSL', desc: 'Direct response edits built to stop scroll and drive action.', tag: '04' },
  { icon: '💡', title: 'Explainer Videos', desc: 'Complex product messaging transformed into clear visual stories.', tag: '05' },
  { icon: '💼', title: 'LinkedIn Brand', desc: 'Authority content for founders who want consistent inbound leads.', tag: '06' },
];

const testimonials = [
  { text: 'The quality and speed are excellent. We now publish consistently without stress.', author: 'Marcus Engel', role: 'Founder, 301 Studios', color: '#f59e0b' },
  { text: 'Communication is clean and the edits match our voice every single time.', author: 'Lara Acosta', role: 'Founder, LA Digital', color: '#60a5fa' },
  { text: 'From short form to long form, they created a reliable content system for us.', author: 'Niall Ratcliffe', role: 'Co-founder, Ratcliffe Brothers', color: '#34d399' },
];

const faqs = [
  { q: 'How fast will I receive videos?', a: 'Most videos are delivered in 48-72 hours depending on complexity and queue.' },
  { q: 'How do revisions work?', a: 'You share feedback in one place and we revise quickly with clear version tracking.' },
  { q: 'Can you handle weekly volume?', a: 'Yes. We are built for recurring weekly and monthly content output.' },
  { q: 'What platforms do you support?', a: 'YouTube, Instagram, TikTok, LinkedIn, and paid channels.' },
];

const getYouTubeVideoId = (url: string) => {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
  return match ? match[1] : '';
};

const clients = ['ClientOne', 'BrandX', 'CreatorCo', 'MediaHouse', 'GrowthAgency', 'StudioHub', 'ViralLabs', 'ContentPro'];

export default function Home() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cursor, setCursor] = useState({ x: -300, y: -300 });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => setCursor({ x: e.clientX, y: e.clientY });
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('scroll', onScroll);
    return () => { window.removeEventListener('mousemove', onMove); window.removeEventListener('scroll', onScroll); };
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('in'); }),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.anim').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const handleSub = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => { setEmail(''); setSubscribed(false); }, 2500);
  };

  return (
    <>
      <div className="cursor-glow" style={{ left: cursor.x, top: cursor.y }} />
      <div className="grain-overlay" />

      <div className="page-root">

        {/* NAV */}
        <header className={`site-nav${scrolled ? ' nav-scrolled' : ''}`}>
          <div className="nav-inner">
            <Link href="/" className="nav-logo">
              <Image src="/moooon.png" alt="Moonstudios" width={28} height={28} className="logo-img" />
              <span className="logo-name">Moonstudios</span>
            </Link>
            <nav className="nav-links">
              {[['About', '#about'], ['Results', '#results'], ['Services', '#services'], ['FAQs', '#faqs']].map(([l, h]) => (
                <a key={l} href={h} className="nav-link">{l}</a>
              ))}
              <Link href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="nav-cta">
                Book a call <ArrowUpRight size={12} />
              </Link>
            </nav>
            <button className="hamburger" onClick={() => setMobileMenuOpen(p => !p)} aria-label="Toggle menu">
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
          {mobileMenuOpen && (
            <div className="mob-menu">
              {[['About', '#about'], ['Results', '#results'], ['Services', '#services'], ['FAQs', '#faqs']].map(([l, h]) => (
                <a key={l} href={h} className="mob-link" onClick={() => setMobileMenuOpen(false)}>{l}</a>
              ))}
              <Link href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="btn btn-amber mob-cta" onClick={() => setMobileMenuOpen(false)}>Book a call</Link>
            </div>
          )}
        </header>

        <main>
          {/* HERO */}
          <section className="hero" id="about">
            <div className="blob b-amber" /><div className="blob b-blue" /><div className="blob b-pink" />
            <div className="hero-lines">{[...Array(5)].map((_, i) => <div key={i} className="hline" style={{ top: `${18 + i * 15}%`, animationDelay: `${i * 0.35}s` }} />)}</div>

            <div className="hero-body">
              <div className="trust-pill anim fade-up" style={{ '--d': '0s' } as React.CSSProperties}>
                <div className="trust-avs">
                  {['#f59e0b','#3b82f6','#10b981','#8b5cf6','#ef4444'].map((c, i) => (
                    <div key={i} className="trust-av" style={{ background: c }} />
                  ))}
                </div>
                <span className="trust-txt">Trusted by 20+ brands & creators</span>
                <span className="live-dot" />
              </div>

              <h1 className="hero-h1 anim fade-up" style={{ '--d': '0.08s' } as React.CSSProperties}>
                <span className="hl">Really <em className="ital">cool</em> videos,</span>
                <span className="hl hl-dim">edited &amp; delivered</span>
                <span className="hl">in <mark className="amber-mark">24 hours.</mark></span>
              </h1>

              <p className="hero-sub anim fade-up" style={{ '--d': '0.18s' } as React.CSSProperties}>
                Affordable, fast, human-powered video editing.<br />Real editors. No AI fillers. Always on time.
              </p>

              <div className="hero-btns anim fade-up" style={{ '--d': '0.26s' } as React.CSSProperties}>
                <Link href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="btn btn-amber btn-lg">Book a free call <ArrowUpRight size={15} /></Link>
                <a href="#results" className="btn btn-ghost btn-lg">See our work <ArrowRight size={15} /></a>
              </div>

              <div className="stats-row anim fade-up" style={{ '--d': '0.34s' } as React.CSSProperties}>
                {[['48h','Avg Turnaround'],['120+','Projects Done'],['4.9★','Client Rating'],['20+','Happy Brands']].map(([n, l], i) => (
                  <div key={l} className="stat-item">
                    {i > 0 && <div className="stat-sep" />}
                    <div className="stat-inner"><span className="stat-n">{n}</span><span className="stat-l">{l}</span></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="scroll-hint anim fade-up" style={{ '--d': '0.5s' } as React.CSSProperties}>
              <div className="scroll-bar" /><span>scroll</span>
            </div>
          </section>

          {/* MARQUEE 1 */}
          <div className="marquee-band">
            <p className="mq-label">Trusted by modern creators & founders</p>
            <div className="mq-mask"><div className="mq-row">{[...clients,...clients,...clients].map((c,i) => <span key={i} className="mq-word">{c} <span className="mq-star">✦</span></span>)}</div></div>
          </div>

          {/* WORKFLOW */}
          <section className="sec" id="workflow">
            <div className="sec-inner split">
              <div className="split-l anim slide-r" style={{ '--d': '0s' } as React.CSSProperties}>
                <span className="eyebrow">How It Works</span>
                <h2 className="sec-h2">We manage<br />the entire<br /><em className="ital">editing lifecycle.</em></h2>
                <p className="sec-body">You focus on creating. We handle everything else — editing, formatting, revisions, and delivery.</p>
                <ul className="checklist">
                  {['Dedicated professional editor matching your style','Lightning-fast revisions via Frame.io or Notion','Ready for TikTok, Shorts, IG Reels & YouTube'].map(t => (
                    <li key={t}><span className="check-ic"><Check size={12} /></span>{t}</li>
                  ))}
                </ul>
                <a href="#results" className="btn btn-outline mt-28">View our past work <ArrowRight size={13} /></a>
              </div>

              <div className="split-r anim slide-l" style={{ '--d': '0.1s' } as React.CSSProperties}>
                <div className="wf-card">
                  <div className="wf-head"><div className="live-dot" /><span className="wf-lbl">The Workflow</span></div>
                  {[
                    { n: '01', t: 'You share raw footage + brief', s: 'Via Google Drive, Dropbox, or Frame.io' },
                    { n: '02', t: 'Editor cuts, grades & adds captions', s: 'Matched to your brand voice and style' },
                    { n: '03', t: 'You leave timestamped feedback', s: 'Quick async review — no meetings' },
                    { n: '04', t: 'Final file delivered & ready to post', s: 'All formats. Always on time.' },
                  ].map(({ n, t, s }) => (
                    <div key={n} className="wf-row">
                      <span className="wf-n">{n}</span>
                      <div><p className="wf-t">{t}</p><p className="wf-s">{s}</p></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* MARQUEE 2 */}
          <div className="marquee-band marquee-alt">
            <div className="mq-mask"><div className="mq-row mq-rev">{['YouTube','TikTok','Instagram','LinkedIn','Podcast','VSL','Shorts','Reels','YouTube','TikTok','Instagram','LinkedIn','Podcast','VSL','Shorts','Reels'].map((c,i) => <span key={i} className="mq-word mq-alt-word">{c} <span className="mq-star">✦</span></span>)}</div></div>
          </div>

          {/* SERVICES */}
          <section className="sec sec-dark" id="services">
            <div className="sec-inner">
              <div className="sec-head anim fade-up" style={{ '--d': '0s' } as React.CSSProperties}>
                <span className="eyebrow">Our Expertise</span>
                <h2 className="sec-h2 centered">One team for every<br /><em className="ital">video format</em> you need.</h2>
                <p className="sec-body centered">From high-retention YouTube essays to perfectly paced TikToks — editors who specialize in formats that drive views.</p>
              </div>
              <div className="sv-grid">
                {services.map((item, idx) => (
                  <div key={item.title} className={`sv-card anim fade-up${idx === 0 || idx === 3 ? ' sv-wide' : ''}`} style={{ '--d': `${idx * 0.06}s` } as React.CSSProperties}>
                    <div className="sv-top"><span className="sv-num">{item.tag}</span><span className="sv-icon">{item.icon}</span></div>
                    <h3 className="sv-title">{item.title}</h3>
                    <p className="sv-desc">{item.desc}</p>
                    <div className="sv-foot"><div className="sv-bar" /><ArrowUpRight size={13} className="sv-arr" /></div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* RESULTS */}
          <section className="sec" id="results">
            <div className="sec-inner">
              <div className="sec-head anim fade-up" style={{ '--d': '0s' } as React.CSSProperties}>
                <span className="eyebrow">Our Work</span>
                <h2 className="sec-h2 centered">Edits that drive<br /><em className="ital">millions</em> of organic views.</h2>
              </div>
              <div className="portfolio">
                {portfolioVideos.map((url, idx) => (
                  <div key={url} className={`vid-item anim ${idx % 2 === 0 ? 'slide-r' : 'slide-l'}`} style={{ '--d': `${idx * 0.07}s`, alignSelf: idx % 2 === 0 ? 'flex-start' : 'flex-end' } as React.CSSProperties}>
                    <span className="vid-ghost">{String(idx + 1).padStart(2, '0')}</span>
                    <div className="vid-frame">
                      <iframe src={`https://www.youtube.com/embed/${getYouTubeVideoId(url)}?controls=0&rel=0`} title={`Video ${idx + 1}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="vid-iframe" />
                      <div className="vid-shine" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="center-btn anim fade-up" style={{ '--d': '0.2s' } as React.CSSProperties}>
                <Link href="https://youtube.com" target="_blank" className="btn btn-outline">View full portfolio <ArrowRight size={13} /></Link>
              </div>
            </div>
          </section>

          {/* COMPARE */}
          <section className="sec sec-dark">
            <div className="sec-inner">
              <div className="sec-head anim fade-up" style={{ '--d': '0s' } as React.CSSProperties}>
                <span className="eyebrow">The Alternative</span>
                <h2 className="sec-h2 centered">Why top creators<br />choose <em className="ital">Moonstudios.</em></h2>
              </div>
              <div className="cmp-wrap anim fade-up" style={{ '--d': '0.1s' } as React.CSSProperties}>
                <div className="cmp-col cmp-bad">
                  <div className="cmp-head"><span className="cmp-icon-bad">✕</span><h3 className="cmp-title">Typical Agencies</h3></div>
                  <ul className="cmp-list">{['Slow communication and ghosting','Only cut clips, no content strategy','Hidden fees and unpredictable pricing','Low quality outsourced editing'].map(t => <li key={t}><span className="xmark">✕</span>{t}</li>)}</ul>
                </div>
                <div className="cmp-vs"><span>VS</span></div>
                <div className="cmp-col cmp-good">
                  <div className="cmp-head"><span className="cmp-icon-good">✓</span><h3 className="cmp-title-good">Moonstudios</h3></div>
                  <ul className="cmp-list">{['Fast, proactive async communication','Strategy-first approach for every platform','Transparent flat-rate or custom tiers','Direct access to a premium dedicated editor'].map(t => <li key={t}><span className="vmark">✓</span>{t}</li>)}</ul>
                </div>
              </div>
            </div>
          </section>

          {/* TESTIMONIALS */}
          <section className="sec">
            <div className="sec-inner">
              <div className="sec-head anim fade-up" style={{ '--d': '0s' } as React.CSSProperties}>
                <span className="eyebrow">Testimonials</span>
                <h2 className="sec-h2 centered">There&apos;s a reason people<br /><em className="ital">rave</em> about us.</h2>
              </div>
              <div className="testi-grid">
                {testimonials.map((item, i) => (
                  <div key={item.author} className="testi-card anim fade-up" style={{ '--d': `${i * 0.1}s` } as React.CSSProperties}>
                    <div className="testi-accent" style={{ background: item.color }} />
                    <div className="testi-stars">★★★★★</div>
                    <p className="testi-text">&ldquo;{item.text}&rdquo;</p>
                    <div className="testi-author">
                      <div className="testi-av" style={{ background: `linear-gradient(135deg,${item.color},${item.color}88)` }}>{item.author[0]}</div>
                      <div><p className="testi-name">{item.author}</p><p className="testi-role">{item.role}</p></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="sec sec-dark" id="faqs">
            <div className="sec-inner narrow">
              <div className="sec-head anim fade-up" style={{ '--d': '0s' } as React.CSSProperties}>
                <span className="eyebrow">FAQ</span>
                <h2 className="sec-h2 centered">Common questions,<br /><em className="ital">answered.</em></h2>
              </div>
              <div className="faq-box anim fade-up" style={{ '--d': '0.1s' } as React.CSSProperties}>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, i) => (
                    <AccordionItem key={faq.q} value={`q${i}`} className="faq-item">
                      <AccordionTrigger className="faq-q">{faq.q}</AccordionTrigger>
                      <AccordionContent className="faq-a">{faq.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="sec">
            <div className="sec-inner narrow">
              <div className="cta-box anim fade-up" style={{ '--d': '0s' } as React.CSSProperties}>
                <div className="cta-orb cta-orb-l" /><div className="cta-orb cta-orb-r" />
                <div className="cta-in">
                  <span className="eyebrow">Newsletter</span>
                  <h3 className="cta-h3">Join 5,000+ creators<br /><em className="ital">growing faster.</em></h3>
                  <p className="cta-sub">Weekly editing ideas, content strategies, and growth insights.</p>
                  <form onSubmit={handleSub} className="cta-form">
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com" required className="cta-input" />
                    <button type="submit" className="btn btn-amber">{subscribed ? '✓ Subscribed!' : 'Get Notified'}</button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* FOOTER */}
        <footer className="site-footer">
          <div className="ft-grid">
            <div className="ft-brand">
              <div className="nav-logo">
                <Image src="/moooon.png" alt="Moonstudios" width={26} height={26} className="logo-img" />
                <span className="logo-name">Moonstudios</span>
              </div>
              <p className="ft-tagline">Fast, human-powered video edits for creators and modern brands.</p>
              <div className="ft-socials">
                {[
                  { l: 'Twitter', d: 'M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z' },
                  { l: 'LinkedIn', d: 'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-1.85 0-2.58 1-3 1.66v-1.42h-2.6v9.3h2.6v-4.93c0-.68.12-1.35.93-1.35.8 0 .8 1 .8 1.4v4.88h2.63M7.5 8.5A1.5 1.5 0 0 0 6 7a1.5 1.5 0 0 0 0 3 1.5 1.5 0 0 0 1.5-1.5m1.3 10H6.2V9h2.6v9.5z' },
                ].map(({ l, d }) => (
                  <a key={l} href="#" aria-label={l} className="soc-btn"><svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d={d} /></svg></a>
                ))}
              </div>
            </div>
            {[
              { title: 'Services', links: ['YouTube Videos', 'Short Form', 'Podcast Editing', 'VSL Editing'] },
              { title: 'Company', links: ['Services', 'Results', 'FAQ', 'Book a Call'] },
              { title: 'Contact', links: ['hello@moonstudios.com', 'Dhaka, Bangladesh', 'Mon – Sat'] },
            ].map(({ title, links }) => (
              <div key={title} className="ft-col">
                <p className="ft-col-h">{title}</p>
                <ul className="ft-list">{links.map(l => <li key={l}><a href="#">{l}</a></li>)}</ul>
              </div>
            ))}
          </div>
          <div className="ft-bottom">
            <p>© 2026 Moonstudios. All rights reserved.</p>
            <div className="ft-legal"><a href="#">Privacy Policy</a><a href="#">Terms of Service</a></div>
          </div>
        </footer>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=Outfit:wght@300;400;500;600;700&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}

        .cursor-glow{position:fixed;width:480px;height:480px;border-radius:50%;pointer-events:none;z-index:0;transform:translate(-50%,-50%);background:radial-gradient(circle,rgba(245,158,11,0.05) 0%,transparent 65%);transition:left .1s ease,top .1s ease;will-change:left,top;}

        .grain-overlay{position:fixed;inset:0;z-index:999;pointer-events:none;opacity:.025;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-size:128px 128px;}

        .page-root{background:#080808;color:#d4cec6;font-family:'Outfit',sans-serif;overflow-x:hidden;min-height:100vh;position:relative;z-index:1;}

        /* NAV */
        .site-nav{position:sticky;top:0;z-index:50;padding:0 28px;transition:background .35s,border-color .35s,backdrop-filter .35s;border-bottom:1px solid transparent;}
        .nav-scrolled{background:rgba(8,8,8,.9);backdrop-filter:blur(22px);-webkit-backdrop-filter:blur(22px);border-color:rgba(255,255,255,.05);}
        .nav-inner{max-width:1240px;margin:0 auto;height:68px;display:flex;align-items:center;justify-content:space-between;}
        .nav-logo{display:flex;align-items:center;gap:10px;text-decoration:none;}
        .logo-img{border-radius:7px;}
        .logo-name{font-family:'Cormorant Garamond',serif;font-size:1.28rem;font-weight:600;color:#fff;letter-spacing:.02em;}
        .nav-links{display:none;align-items:center;gap:4px;}
        @media(min-width:768px){.nav-links{display:flex;}}
        .nav-link{padding:7px 14px;font-size:.84rem;font-weight:500;color:#625d57;text-decoration:none;border-radius:999px;transition:color .2s,background .2s;}
        .nav-link:hover{color:#d4cec6;background:rgba(255,255,255,.05);}
        .nav-cta{display:inline-flex;align-items:center;gap:5px;padding:9px 18px;font-size:.82rem;font-weight:600;background:#f59e0b;color:#0a0a0a;border-radius:999px;text-decoration:none;transition:background .2s,transform .15s,box-shadow .2s;box-shadow:0 2px 18px rgba(245,158,11,.28);}
        .nav-cta:hover{background:#fbbf24;transform:translateY(-1px);box-shadow:0 4px 22px rgba(245,158,11,.38);}
        .hamburger{display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.09);border-radius:9px;padding:9px;color:#d4cec6;cursor:pointer;}
        @media(min-width:768px){.hamburger{display:none;}}
        .mob-menu{border-top:1px solid rgba(255,255,255,.07);padding:14px 0;display:flex;flex-direction:column;gap:2px;}
        .mob-link{padding:12px 16px;font-size:.93rem;font-weight:500;color:#625d57;text-decoration:none;border-radius:10px;transition:color .2s,background .2s;}
        .mob-link:hover{color:#d4cec6;background:rgba(255,255,255,.05);}
        .mob-cta{margin:8px 16px 0;justify-content:center;}

        /* BUTTONS */
        .btn{display:inline-flex;align-items:center;gap:7px;font-family:'Outfit',sans-serif;font-size:.9rem;font-weight:600;border-radius:999px;padding:12px 24px;text-decoration:none;cursor:pointer;transition:transform .18s,box-shadow .18s,background .18s;border:none;outline:none;white-space:nowrap;}
        .btn:hover{transform:translateY(-1px);}
        .btn-amber{background:#f59e0b;color:#0a0a0a;box-shadow:0 4px 22px rgba(245,158,11,.28);}
        .btn-amber:hover{background:#fbbf24;box-shadow:0 6px 28px rgba(245,158,11,.4);}
        .btn-lg{padding:14px 30px;font-size:.94rem;}
        .btn-ghost{background:rgba(255,255,255,.07);color:#d4cec6;border:1px solid rgba(255,255,255,.1);}
        .btn-ghost:hover{background:rgba(255,255,255,.11);}
        .btn-outline{background:transparent;color:#d4cec6;border:1px solid rgba(255,255,255,.17);}
        .btn-outline:hover{background:rgba(255,255,255,.06);}
        .mt-28{margin-top:28px;}

        /* EYEBROW */
        .eyebrow{display:inline-flex;font-size:.68rem;font-weight:600;text-transform:uppercase;letter-spacing:.18em;color:#f59e0b;background:rgba(245,158,11,.08);border:1px solid rgba(245,158,11,.18);padding:5px 13px;border-radius:999px;margin-bottom:18px;}
        .ital{font-family:'Cormorant Garamond',serif;font-style:italic;font-weight:400;}

        /* HERO */
        .hero{min-height:95vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:90px 28px 70px;text-align:center;position:relative;overflow:hidden;}
        .blob{position:absolute;border-radius:50%;pointer-events:none;filter:blur(80px);animation:fb 10s ease-in-out infinite;}
        .b-amber{width:440px;height:440px;top:-80px;left:-100px;background:rgba(245,158,11,.08);}
        .b-blue{width:380px;height:380px;top:60px;right:-80px;background:rgba(96,165,250,.06);animation-delay:-4s;}
        .b-pink{width:300px;height:300px;bottom:0;left:40%;background:rgba(244,114,182,.04);animation-delay:-7s;}
        @keyframes fb{0%,100%{transform:translate(0,0) scale(1);}50%{transform:translate(20px,-20px) scale(1.06);}}
        .hero-lines{position:absolute;inset:0;pointer-events:none;overflow:hidden;}
        .hline{position:absolute;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(255,255,255,.025) 20%,rgba(255,255,255,.025) 80%,transparent);animation:lf 4s ease-in-out infinite;}
        @keyframes lf{0%,100%{opacity:0;}50%{opacity:1;}}
        .hero-body{position:relative;z-index:2;display:flex;flex-direction:column;align-items:center;max-width:980px;}
        .trust-pill{display:inline-flex;align-items:center;gap:10px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:999px;padding:8px 16px 8px 8px;margin-bottom:40px;}
        .trust-avs{display:flex;}
        .trust-av{width:24px;height:24px;border-radius:50%;border:2px solid #080808;margin-right:-7px;flex-shrink:0;}
        .trust-av:last-child{margin-right:0;}
        .trust-txt{font-size:.75rem;font-weight:500;color:#625d57;margin-left:10px;}
        .live-dot{width:7px;height:7px;border-radius:50%;background:#10b981;box-shadow:0 0 8px #10b981;animation:pg 2s ease-in-out infinite;margin-left:4px;}
        @keyframes pg{0%,100%{opacity:1;box-shadow:0 0 8px #10b981;}50%{opacity:.45;box-shadow:0 0 3px #10b981;}}
        .hero-h1{font-family:'Cormorant Garamond',serif;font-size:clamp(3.3rem,8.5vw,7rem);line-height:.96;letter-spacing:-.02em;color:#fff;margin-bottom:26px;}
        .hl{display:block;}
        .hl-dim{color:rgba(255,255,255,.42);font-weight:400;}
        .amber-mark{background:none;background:linear-gradient(90deg,#f59e0b,#fb923c 50%,#f43f5e);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;font-style:italic;padding:0 4px;}
        .hero-sub{font-size:clamp(.98rem,2vw,1.16rem);color:#625d57;max-width:450px;line-height:1.72;margin-bottom:40px;}
        .hero-btns{display:flex;gap:12px;flex-wrap:wrap;justify-content:center;margin-bottom:52px;}
        .stats-row{display:flex;align-items:center;flex-wrap:wrap;justify-content:center;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:18px;overflow:hidden;}
        .stat-item{display:flex;align-items:center;}
        .stat-inner{padding:17px 26px;display:flex;flex-direction:column;align-items:center;gap:3px;}
        .stat-sep{width:1px;height:38px;background:rgba(255,255,255,.07);}
        .stat-n{font-family:'Cormorant Garamond',serif;font-size:1.75rem;color:#fff;letter-spacing:-.02em;line-height:1;}
        .stat-l{font-size:.67rem;font-weight:600;text-transform:uppercase;letter-spacing:.1em;color:#36312c;}
        .scroll-hint{position:absolute;bottom:30px;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:8px;font-size:.64rem;font-weight:600;text-transform:uppercase;letter-spacing:.18em;color:#2a2520;z-index:2;}
        .scroll-bar{width:1px;height:34px;background:linear-gradient(180deg,rgba(255,255,255,.14),transparent);animation:sa 2s ease-in-out infinite;}
        @keyframes sa{0%,100%{transform:scaleY(1);opacity:1;}50%{transform:scaleY(.35);opacity:.35;}}

        /* MARQUEE */
        .marquee-band{border-top:1px solid rgba(255,255,255,.05);border-bottom:1px solid rgba(255,255,255,.05);background:rgba(255,255,255,.015);padding:24px 0;overflow:hidden;}
        .marquee-alt{background:rgba(245,158,11,.02);}
        .mq-label{text-align:center;font-size:.64rem;font-weight:600;text-transform:uppercase;letter-spacing:.18em;color:#2a2520;margin-bottom:12px;}
        .mq-mask{overflow:hidden;}
        .mq-row{display:flex;width:max-content;animation:mqs 28s linear infinite;}
        .mq-rev{animation:mqr 22s linear infinite;}
        @keyframes mqs{from{transform:translateX(0);}to{transform:translateX(-50%);}}
        @keyframes mqr{from{transform:translateX(-50%);}to{transform:translateX(0);}}
        .mq-word{font-family:'Cormorant Garamond',serif;font-size:1.45rem;color:rgba(255,255,255,.09);padding:0 30px;white-space:nowrap;letter-spacing:-.01em;}
        .mq-alt-word{font-size:1.25rem;color:rgba(245,158,11,.11);}
        .mq-star{font-size:.45rem;vertical-align:middle;color:rgba(245,158,11,.28);}

        /* SECTIONS */
        .sec{padding:96px 28px;}
        .sec-dark{background:rgba(255,255,255,.014);border-top:1px solid rgba(255,255,255,.05);border-bottom:1px solid rgba(255,255,255,.05);}
        .sec-inner{max-width:1200px;margin:0 auto;}
        .narrow{max-width:720px;}
        .sec-head{text-align:center;margin-bottom:60px;display:flex;flex-direction:column;align-items:center;}
        .sec-h2{font-family:'Cormorant Garamond',serif;font-size:clamp(2.1rem,4.7vw,3.8rem);line-height:1.05;letter-spacing:-.02em;color:#fff;max-width:660px;}
        .centered{text-align:center;margin:0 auto 14px;}
        .sec-body{font-size:.97rem;color:#52504c;line-height:1.76;max-width:490px;}
        .center-btn{text-align:center;margin-top:48px;}

        /* SPLIT */
        .split{display:grid;grid-template-columns:1fr;gap:52px;align-items:start;}
        @media(min-width:900px){.split{grid-template-columns:1fr 1fr;}}
        .split-l{display:flex;flex-direction:column;align-items:flex-start;}
        .split-l .sec-h2{text-align:left;margin:0 0 14px;}
        .split-l .eyebrow{margin-bottom:12px;}
        .split-l .sec-body{margin-top:12px;}
        .checklist{list-style:none;padding:0;margin-top:22px;display:flex;flex-direction:column;gap:12px;}
        .checklist li{display:flex;align-items:center;gap:10px;font-size:.88rem;color:#8a8480;}
        .check-ic{width:21px;height:21px;border-radius:50%;background:rgba(16,185,129,.1);border:1px solid rgba(16,185,129,.18);display:flex;align-items:center;justify-content:center;color:#10b981;flex-shrink:0;}

        /* WORKFLOW CARD */
        .wf-card{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:22px;padding:30px;position:relative;overflow:hidden;}
        .wf-card::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(245,158,11,.28),transparent);}
        .wf-head{display:flex;align-items:center;gap:9px;font-size:.66rem;font-weight:600;text-transform:uppercase;letter-spacing:.16em;color:#36312c;margin-bottom:26px;}
        .wf-lbl{}
        .wf-row{display:flex;align-items:flex-start;gap:16px;padding:15px 0;border-bottom:1px solid rgba(255,255,255,.05);}
        .wf-row:last-child{border-bottom:none;padding-bottom:0;}
        .wf-n{font-family:'Cormorant Garamond',serif;font-size:1.9rem;color:rgba(255,255,255,.09);min-width:38px;line-height:1;}
        .wf-t{font-size:.88rem;font-weight:500;color:#bab4ac;margin-bottom:3px;}
        .wf-s{font-size:.76rem;color:#36312c;}

        /* SERVICES */
        .sv-grid{display:grid;grid-template-columns:1fr;gap:13px;}
        @media(min-width:640px){.sv-grid{grid-template-columns:1fr 1fr;}}
        @media(min-width:1024px){.sv-grid{grid-template-columns:repeat(4,1fr);}}
        .sv-card{background:rgba(255,255,255,.023);border:1px solid rgba(255,255,255,.07);border-radius:20px;padding:25px;display:flex;flex-direction:column;gap:9px;cursor:default;transition:transform .25s,border-color .25s,background .25s;position:relative;overflow:hidden;}
        .sv-card::after{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(245,158,11,.035),transparent 60%);opacity:0;transition:opacity .3s;}
        .sv-card:hover{transform:translateY(-4px);border-color:rgba(245,158,11,.16);}
        .sv-card:hover::after{opacity:1;}
        @media(min-width:1024px){.sv-wide{grid-column:span 2;}}
        .sv-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:3px;}
        .sv-num{font-size:.64rem;font-weight:700;letter-spacing:.14em;color:#262220;text-transform:uppercase;}
        .sv-icon{font-size:1.35rem;}
        .sv-title{font-family:'Cormorant Garamond',serif;font-size:1.22rem;color:#fff;letter-spacing:-.01em;line-height:1.1;}
        .sv-desc{font-size:.83rem;color:#46433f;line-height:1.65;flex:1;}
        .sv-foot{display:flex;align-items:center;justify-content:space-between;padding-top:14px;border-top:1px solid rgba(255,255,255,.05);margin-top:4px;}
        .sv-bar{height:2px;width:18px;background:rgba(245,158,11,.22);border-radius:2px;transition:width .3s;}
        .sv-card:hover .sv-bar{width:42px;background:#f59e0b;}
        .sv-arr{color:#262220;transition:transform .2s,color .2s;}
        .sv-card:hover .sv-arr{transform:translate(3px,-3px);color:#f59e0b;}

        /* PORTFOLIO */
        .portfolio{display:flex;flex-direction:column;gap:40px;}
        .vid-item{width:100%;position:relative;}
        @media(min-width:768px){.vid-item{width:65%;}}
        .vid-ghost{font-family:'Cormorant Garamond',serif;font-size:4.8rem;font-weight:600;color:rgba(255,255,255,.038);line-height:1;display:block;margin-bottom:-20px;padding-left:10px;}
        .vid-frame{position:relative;aspect-ratio:16/9;border-radius:18px;overflow:hidden;border:1px solid rgba(255,255,255,.08);box-shadow:0 22px 56px rgba(0,0,0,.55);transition:border-color .3s,box-shadow .3s;}
        .vid-item:hover .vid-frame{border-color:rgba(245,158,11,.2);box-shadow:0 28px 72px rgba(0,0,0,.65),0 0 0 1px rgba(245,158,11,.07);}
        .vid-iframe{width:100%;height:100%;display:block;background:#111;}
        .vid-shine{position:absolute;inset:0;pointer-events:none;background:linear-gradient(135deg,rgba(255,255,255,.025) 0%,transparent 50%);}

        /* COMPARE */
        .cmp-wrap{display:grid;grid-template-columns:1fr;overflow:hidden;border:1px solid rgba(255,255,255,.07);border-radius:22px;}
        @media(min-width:768px){.cmp-wrap{grid-template-columns:1fr auto 1fr;}}
        .cmp-col{padding:36px 32px;}
        .cmp-bad{background:rgba(239,68,68,.028);}
        .cmp-good{background:rgba(16,185,129,.028);}
        .cmp-vs{display:flex;align-items:center;justify-content:center;padding:0 22px;background:rgba(255,255,255,.02);border-left:1px solid rgba(255,255,255,.06);border-right:1px solid rgba(255,255,255,.06);}
        @media(max-width:767px){.cmp-vs{padding:16px;border:none;border-top:1px solid rgba(255,255,255,.06);border-bottom:1px solid rgba(255,255,255,.06);}}
        .cmp-vs span{width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);display:flex;align-items:center;justify-content:center;font-size:.7rem;font-weight:700;color:#46433f;}
        .cmp-head{display:flex;align-items:center;gap:9px;margin-bottom:20px;}
        .cmp-icon-bad{font-size:1.05rem;color:#f87171;font-weight:700;}
        .cmp-icon-good{font-size:1.05rem;color:#34d399;font-weight:700;}
        .cmp-title{font-family:'Cormorant Garamond',serif;font-size:1.35rem;color:#fff;}
        .cmp-title-good{font-family:'Cormorant Garamond',serif;font-size:1.35rem;color:#34d399;}
        .cmp-list{list-style:none;padding:0;display:flex;flex-direction:column;gap:12px;}
        .cmp-list li{display:flex;align-items:center;gap:9px;font-size:.86rem;color:#6b6560;}
        .xmark{color:#f87171;font-weight:700;flex-shrink:0;}
        .vmark{color:#34d399;font-weight:700;flex-shrink:0;}

        /* TESTIMONIALS */
        .testi-grid{display:grid;grid-template-columns:1fr;gap:13px;}
        @media(min-width:768px){.testi-grid{grid-template-columns:repeat(3,1fr);}}
        .testi-card{background:rgba(255,255,255,.023);border:1px solid rgba(255,255,255,.07);border-radius:20px;padding:26px;position:relative;overflow:hidden;transition:transform .25s,border-color .25s;}
        .testi-card:hover{transform:translateY(-4px);border-color:rgba(255,255,255,.1);}
        .testi-accent{position:absolute;top:0;left:26px;width:42px;height:3px;border-radius:0 0 4px 4px;}
        .testi-stars{color:#f59e0b;font-size:.8rem;letter-spacing:2px;margin-bottom:13px;}
        .testi-text{font-size:.87rem;color:#6b6560;line-height:1.78;margin-bottom:20px;font-style:italic;}
        .testi-author{display:flex;align-items:center;gap:10px;}
        .testi-av{width:34px;height:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.8rem;font-weight:700;color:#fff;flex-shrink:0;}
        .testi-name{font-size:.83rem;font-weight:600;color:#d4cec6;}
        .testi-role{font-size:.7rem;color:#36312c;}

        /* FAQ */
        .faq-box{background:rgba(255,255,255,.023);border:1px solid rgba(255,255,255,.07);border-radius:20px;overflow:hidden;}
        .faq-item{border-bottom:1px solid rgba(255,255,255,.05)!important;}
        .faq-item:last-child{border-bottom:none!important;}
        .faq-q{padding:21px 26px!important;font-size:.93rem!important;font-weight:600!important;color:#bab4ac!important;text-align:left!important;transition:color .2s!important;}
        .faq-q:hover{color:#f59e0b!important;}
        .faq-a{padding:0 26px 21px!important;font-size:.87rem!important;color:#52504c!important;line-height:1.75!important;}

        /* CTA */
        .cta-box{position:relative;overflow:hidden;border:1px solid rgba(255,255,255,.07);border-radius:26px;padding:62px 38px;text-align:center;}
        .cta-orb{position:absolute;border-radius:50%;pointer-events:none;}
        .cta-orb-l{width:440px;height:440px;top:-170px;left:-150px;background:radial-gradient(circle,rgba(245,158,11,.08),transparent 60%);}
        .cta-orb-r{width:400px;height:400px;bottom:-150px;right:-130px;background:radial-gradient(circle,rgba(96,165,250,.065),transparent 60%);}
        .cta-in{position:relative;z-index:2;display:flex;flex-direction:column;align-items:center;}
        .cta-h3{font-family:'Cormorant Garamond',serif;font-size:clamp(2.1rem,4.4vw,3.1rem);color:#fff;letter-spacing:-.02em;margin:5px 0 13px;line-height:1.1;}
        .cta-sub{font-size:.93rem;color:#52504c;max-width:400px;line-height:1.72;}
        .cta-form{display:flex;flex-direction:column;gap:10px;width:100%;max-width:430px;margin-top:26px;}
        @media(min-width:580px){.cta-form{flex-direction:row;}}
        .cta-input{flex:1;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.09);border-radius:999px;padding:12px 20px;font-size:.87rem;color:#d4cec6;outline:none;font-family:'Outfit',sans-serif;transition:border-color .2s;}
        .cta-input::placeholder{color:#28231e;}
        .cta-input:focus{border-color:rgba(245,158,11,.28);}

        /* FOOTER */
        .site-footer{background:#040404;border-top:1px solid rgba(255,255,255,.05);padding:62px 28px 30px;}
        .ft-grid{max-width:1200px;margin:0 auto 46px;display:grid;grid-template-columns:1fr;gap:38px;}
        @media(min-width:640px){.ft-grid{grid-template-columns:2fr 1fr 1fr 1fr;}}
        .ft-brand{display:flex;flex-direction:column;gap:13px;}
        .ft-tagline{font-size:.82rem;color:#28231e;line-height:1.65;max-width:215px;}
        .ft-socials{display:flex;gap:8px;}
        .soc-btn{width:31px;height:31px;border-radius:8px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07);display:flex;align-items:center;justify-content:center;color:#46433f;text-decoration:none;transition:color .2s,background .2s;}
        .soc-btn:hover{color:#f59e0b;background:rgba(245,158,11,.07);}
        .ft-col{display:flex;flex-direction:column;}
        .ft-col-h{font-weight:700;font-size:.82rem;color:#d4cec6;margin-bottom:13px;}
        .ft-list{list-style:none;padding:0;display:flex;flex-direction:column;gap:9px;}
        .ft-list a{font-size:.8rem;color:#28231e;text-decoration:none;transition:color .2s;}
        .ft-list a:hover{color:#f59e0b;}
        .ft-bottom{max-width:1200px;margin:0 auto;padding-top:20px;border-top:1px solid rgba(255,255,255,.05);display:flex;flex-direction:column;gap:9px;align-items:center;justify-content:space-between;}
        @media(min-width:640px){.ft-bottom{flex-direction:row;}}
        .ft-bottom p{font-size:.74rem;color:#28231e;}
        .ft-legal{display:flex;gap:20px;}
        .ft-legal a{font-size:.74rem;color:#28231e;text-decoration:none;transition:color .2s;}
        .ft-legal a:hover{color:#d4cec6;}

        /* SCROLL REVEAL */
        .anim{transition-property:opacity,transform;transition-timing-function:cubic-bezier(0.16,1,0.3,1);transition-duration:.92s;transition-delay:var(--d,0s);}
        .fade-up{opacity:0;transform:translateY(32px);}
        .slide-r{opacity:0;transform:translateX(-46px);}
        .slide-l{opacity:0;transform:translateX(46px);}
        .in{opacity:1!important;transform:translate(0,0)!important;}
      `}</style>
    </>
  );
}
