import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { heroConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const statueRef = useRef<HTMLDivElement>(null);
  const leftTextRef = useRef<HTMLDivElement>(null);
  const rightTextRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  if (!heroConfig.brandLeft && !heroConfig.brandRight) return null;

  useEffect(() => {
    const section = sectionRef.current;
    const statue = statueRef.current;
    const leftText = leftTextRef.current;
    const rightText = rightTextRef.current;
    const nav = navRef.current;
    const badge = badgeRef.current;
    const bottom = bottomRef.current;

    if (!section || !statue || !leftText || !rightText || !nav || !badge || !bottom) return;

    // Set initial states
    gsap.set([leftText, rightText], { opacity: 0, y: 60 });
    gsap.set(statue, { opacity: 0, scale: 1.08, y: 40 });
    gsap.set(nav, { opacity: 0, y: -20 });
    gsap.set(badge, { opacity: 0, y: 20 });
    gsap.set(bottom, { opacity: 0 });

    // Entrance timeline
    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' },
      delay: 0.3,
    });

    tl.to(statue, { opacity: 1, scale: 1, y: 0, duration: 1.4 })
      .to(leftText, { opacity: 1, y: 0, duration: 1 }, '-=1')
      .to(rightText, { opacity: 1, y: 0, duration: 1 }, '-=0.85')
      .to(nav, { opacity: 1, y: 0, duration: 0.7 }, '-=0.7')
      .to(badge, { opacity: 1, y: 0, duration: 0.6 }, '-=0.5')
      .to(bottom, { opacity: 1, duration: 0.5 }, '-=0.3');

    // Scroll parallax — statue moves slower, text drifts outward
    const scrollTrigger = ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: 'bottom top',
      scrub: 0.6,
      onUpdate: (self) => {
        const p = self.progress;
        const isMobile = window.innerWidth < 1024;
        gsap.set(statue, { y: p * 120 });
        gsap.set(leftText, { y: p * 200, x: isMobile ? p * -20 : p * -60 });
        gsap.set(rightText, { y: p * 180, x: isMobile ? p * 20 : p * 60 });
        gsap.set(badge, { y: p * 80 });
      },
    });
    triggersRef.current.push(scrollTrigger);

    return () => {
      triggersRef.current.forEach((t) => t.kill());
      triggersRef.current = [];
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen lg:h-screen w-full overflow-hidden bg-[#8c8c91] py-20 lg:py-0"
    >
      {/* Navigation */}
      <nav
        ref={navRef}
        className="absolute top-0 left-0 w-full z-50 px-6 lg:px-16 py-6 flex items-center justify-between will-change-transform"
      >
        <div className="museo-label text-white/70 font-bold tracking-widest">{heroConfig.brandLeft} {heroConfig.brandRight}</div>
        
        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {heroConfig.navLinks.map((link, i) => (
            <a key={i} href={link.href} className="museo-label text-white/70 hover:text-white transition-colors">{link.label}</a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white/70 hover:text-white"
          onClick={() => {
            const menu = document.getElementById('mobile-menu');
            if (menu) {
              menu.classList.toggle('translate-x-full');
              document.body.classList.toggle('overflow-hidden');
            }
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>

        {/* Mobile Menu Overlay */}
        <div 
          id="mobile-menu"
          className="fixed inset-0 bg-[#050505] z-[100] translate-x-full transition-transform duration-500 flex flex-col items-center justify-center gap-8 lg:hidden"
        >
          <button 
            className="absolute top-8 right-8 text-white/70 hover:text-white"
            onClick={() => {
              const menu = document.getElementById('mobile-menu');
              if (menu) {
                menu.classList.add('translate-x-full');
                document.body.classList.remove('overflow-hidden');
              }
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          {heroConfig.navLinks.map((link, i) => (
            <a 
              key={i} 
              href={link.href} 
              className="museo-headline text-white text-3xl"
              onClick={() => {
                const menu = document.getElementById('mobile-menu');
                if (menu) {
                  menu.classList.add('translate-x-full');
                  document.body.classList.remove('overflow-hidden');
                }
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Main hero content — 3-column: text | statue | text (stacks on mobile) */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-[calc(100vh-100px)] lg:h-full px-6 lg:px-12 gap-8 lg:gap-0">
        
        {/* Left text block */}
        <div
          ref={leftTextRef}
          className="flex flex-col items-center lg:items-end text-center lg:text-right flex-1 lg:pr-12 will-change-transform"
        >
          <h1 className="museo-headline text-white text-[12vw] md:text-[15vw] lg:text-[7vw] leading-[0.8] lg:leading-[0.85]">
            {heroConfig.brandLeft}
          </h1>
          <p className="museo-body text-white/60 text-sm md:text-base max-w-[240px] mt-6 hidden lg:block">
            {heroConfig.tagline}
          </p>
          <div className="hidden lg:flex items-center gap-4 mt-6">
            {heroConfig.socialLinks.map((link, i) => (
              <a key={i} href={link.href} className="museo-label text-white/40 hover:text-white transition-colors text-[10px]" data-cursor="hover">{link.label}</a>
            ))}
          </div>
        </div>

        {/* Center statue */}
        <div
          ref={statueRef}
          className="relative flex-shrink-0 w-[60vw] md:w-[40vw] lg:w-[26vw] max-w-[480px] will-change-transform"
        >
          {/* Badge above statue */}
          <div
            ref={badgeRef}
            className="absolute -top-8 lg:-top-10 left-1/2 -translate-x-1/2 museo-label text-white/50 text-[8px] lg:text-[10px] whitespace-nowrap will-change-transform"
          >
            {heroConfig.badge}
          </div>
          <img
            src={heroConfig.heroImage}
            alt={heroConfig.heroImageAlt}
            className="w-full h-auto object-contain"
            style={{
              maskImage: 'radial-gradient(ellipse 72% 78% at 50% 45%, black 45%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse 72% 78% at 50% 45%, black 45%, transparent 100%)',
            }}
          />
        </div>

        {/* Right text block */}
        <div
          ref={rightTextRef}
          className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1 lg:pl-12 will-change-transform"
        >
          <h1 className="museo-headline text-white text-[12vw] md:text-[15vw] lg:text-[7vw] leading-[0.8] lg:leading-[0.85]">
            {heroConfig.brandRight}
          </h1>
          <p className="museo-label text-white/40 mt-4 lg:mt-6 text-[8px] lg:text-[10px]">{heroConfig.since}</p>
          <p className="museo-body text-white/60 text-xs mt-6 max-w-[240px] lg:hidden">
            {heroConfig.tagline}
          </p>
          {heroConfig.email && (
            <a
              href={`mailto:${heroConfig.email}`}
              className="museo-label text-white/40 hover:text-white transition-colors text-[10px] mt-4"
              data-cursor="hover"
            >
              {heroConfig.email}
            </a>
          )}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        ref={bottomRef}
        className="absolute bottom-0 left-0 w-full z-20 px-6 lg:px-16 py-5 flex items-center justify-between border-t border-white/10 bg-[#8c8c91]/80 backdrop-blur-md lg:bg-transparent"
      >
        <p className="museo-label text-white/40 text-[7px] lg:text-[10px]">{heroConfig.scrollText}</p>
        <p className="museo-label text-white/40 text-[7px] lg:text-[10px]">{heroConfig.copyrightText}</p>
      </div>
    </section>
  );
};

export default Hero;
