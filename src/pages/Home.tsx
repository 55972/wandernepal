import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { 
  heroConfig, 
  narrativeTextConfig, 
  cardStackConfig, 
  breathSectionConfig, 
  zigZagGridConfig,
  nepalStats,
  essentialInfo,
  places,
  blogPosts
} from '../config';

gsap.registerPlugin(ScrollTrigger);

// Hero Section Component
function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current || !imageRef.current || !contentRef.current) return;

    const ctx = gsap.context(() => {
      // Ken Burns effect on hero image
      gsap.fromTo(
        imageRef.current,
        { scale: 1.1 },
        { 
          scale: 1, 
          duration: 8, 
          ease: 'power1.out' 
        }
      );

      // Parallax scroll effect
      gsap.to(imageRef.current, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Content fade in
      gsap.fromTo(
        contentRef.current?.children || [],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          delay: 0.5,
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        ref={imageRef}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src={heroConfig.backgroundImage}
          alt={heroConfig.backgroundAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Content */}
      <div 
        ref={contentRef}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"
      >
        <span className="text-kaleo-cream/80 text-sm md:text-base uppercase tracking-[0.3em] mb-4">
          {heroConfig.subtitle}
        </span>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-kaleo-cream mb-6">
          {heroConfig.title}
        </h1>
        <p className="text-kaleo-cream/90 text-lg md:text-xl max-w-2xl mb-8">
          Where the Gods Reside, the Mountains Touch the Sky, and Every Path Tells a Story
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            asChild
            size="lg"
            className="bg-kaleo-terracotta hover:bg-kaleo-cream hover:text-kaleo-charcoal text-white px-8"
          >
            <Link to="/places">
              Explore Destinations
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          <Button 
            asChild
            variant="outline"
            size="lg"
            className="border-kaleo-cream text-kaleo-cream hover:bg-kaleo-cream hover:text-kaleo-charcoal px-8"
          >
            <Link to="/tour-plans">
              View Tour Plans
            </Link>
          </Button>
        </div>

        {/* Stats */}
        <div className="absolute bottom-12 left-0 right-0">
          <div className="max-w-4xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {nepalStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-serif font-bold text-kaleo-cream">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-kaleo-cream/70 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Narrative Text Section
function NarrativeText() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !textRef.current) return;

    const ctx = gsap.context(() => {
      const lines = textRef.current?.querySelectorAll('.narrative-line');
      if (!lines) return;

      gsap.fromTo(
        lines,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-kaleo-sand">
      <div ref={textRef} className="max-w-5xl mx-auto px-4 text-center">
        <p className="narrative-line font-serif text-2xl md:text-4xl lg:text-5xl text-kaleo-charcoal leading-relaxed mb-8">
          {narrativeTextConfig.line1}
        </p>
        <p className="narrative-line font-serif text-xl md:text-2xl lg:text-3xl text-kaleo-terracotta italic leading-relaxed mb-8">
          {narrativeTextConfig.line2}
        </p>
        <p className="narrative-line text-sm md:text-base uppercase tracking-[0.2em] text-kaleo-charcoal/60">
          {narrativeTextConfig.line3}
        </p>
      </div>
    </section>
  );
}

// Featured Destinations Card Stack
function FeaturedDestinations() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !cardsRef.current) return;

    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll('.destination-card');
      if (!cards) return;

      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 100 + index * 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Get featured places from config
  const featuredPlaces = places.slice(0, 6);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-kaleo-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-[0.2em] text-kaleo-terracotta mb-4 block">
            {cardStackConfig.sectionSubtitle}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-kaleo-charcoal">
            {cardStackConfig.sectionTitle}
          </h2>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPlaces.map((place, index) => (
            <Link
              key={place.id}
              to={`/places/${place.id}`}
              className="destination-card group"
            >
              <div 
                className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300"
                style={{ transform: `rotate(${index % 2 === 0 ? -1 : 1}deg)` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={place.images[0]}
                    alt={place.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs uppercase tracking-wider text-kaleo-terracotta mb-2 block">
                    {place.category}
                  </span>
                  <h3 className="font-serif text-xl text-kaleo-charcoal mb-2 group-hover:text-kaleo-terracotta transition-colors">
                    {place.name}
                  </h3>
                  <p className="text-sm text-kaleo-charcoal/60 line-clamp-2">
                    {place.shortDescription}
                  </p>
                  <div className="mt-4 flex items-center text-kaleo-terracotta text-sm font-medium">
                    Explore
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            asChild
            variant="outline"
            size="lg"
            className="border-kaleo-terracotta text-kaleo-terracotta hover:bg-kaleo-terracotta hover:text-white"
          >
            <Link to="/places">
              View All Destinations
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

// Breath Section
function BreathSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !imageRef.current || !contentRef.current) return;

    const ctx = gsap.context(() => {
      // Scale up animation
      gsap.fromTo(
        imageRef.current,
        { scale: 0.8, borderRadius: '2rem' },
        {
          scale: 1,
          borderRadius: '0rem',
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 20%',
            scrub: true,
          },
        }
      );

      // Content fade in
      gsap.fromTo(
        contentRef.current?.children || [],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 50%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-kaleo-sand overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={imageRef}
          className="relative h-[60vh] md:h-[70vh] overflow-hidden"
        >
          <img
            src={breathSectionConfig.backgroundImage}
            alt={breathSectionConfig.backgroundAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div 
            ref={contentRef}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
          >
            <span className="text-kaleo-cream/80 text-sm uppercase tracking-[0.3em] mb-4">
              {breathSectionConfig.subtitle}
            </span>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-kaleo-cream mb-6">
              {breathSectionConfig.title}
            </h2>
            <p className="text-kaleo-cream/90 text-lg md:text-xl max-w-2xl">
              {breathSectionConfig.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ZigZag Grid Section
function ZigZagGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const items = sectionRef.current?.querySelectorAll('.zigzag-item');
      if (!items) return;

      items.forEach((item) => {
        const image = item.querySelector('.zigzag-image');
        const content = item.querySelector('.zigzag-content');

        gsap.fromTo(
          image,
          { x: item.classList.contains('reverse') ? 50 : -50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        gsap.fromTo(
          content,
          { x: item.classList.contains('reverse') ? -50 : 50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-kaleo-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-[0.2em] text-kaleo-terracotta mb-4 block">
            {zigZagGridConfig.sectionLabel}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-kaleo-charcoal">
            {zigZagGridConfig.sectionTitle}
          </h2>
        </div>

        <div className="space-y-24">
          {zigZagGridConfig.items.map((item) => (
            <div 
              key={item.id}
              className={`zigzag-item grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${item.reverse ? 'reverse' : ''}`}
            >
              <div className={`zigzag-image ${item.reverse ? 'lg:order-2' : ''}`}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className={`zigzag-content ${item.reverse ? 'lg:order-1' : ''}`}>
                <span className="text-xs uppercase tracking-[0.2em] text-kaleo-terracotta mb-4 block">
                  {item.subtitle}
                </span>
                <h3 className="font-serif text-3xl md:text-4xl text-kaleo-charcoal mb-6">
                  {item.title}
                </h3>
                <p className="text-kaleo-charcoal/70 leading-relaxed mb-8">
                  {item.description}
                </p>
                <Button 
                  asChild
                  variant="outline"
                  className="border-kaleo-terracotta text-kaleo-terracotta hover:bg-kaleo-terracotta hover:text-white"
                >
                  <Link to="/places">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Essential Info Section
function EssentialInfo() {
  return (
    <section className="py-24 md:py-32 bg-kaleo-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-[0.2em] text-kaleo-terracotta mb-4 block">
            Plan Your Trip
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-kaleo-charcoal">
            Essential Travel Information
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {essentialInfo.map((info, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-kaleo-charcoal mb-2">{info.topic}</h3>
              <p className="text-sm text-kaleo-charcoal/70">{info.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Latest Blog Posts
function LatestBlog() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-24 md:py-32 bg-kaleo-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-sm uppercase tracking-[0.2em] text-kaleo-terracotta mb-4 block">
              Travel Stories
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-kaleo-charcoal">
              Latest from Our Blog
            </h2>
          </div>
          <Button 
            asChild
            variant="outline"
            className="mt-4 md:mt-0 border-kaleo-terracotta text-kaleo-terracotta hover:bg-kaleo-terracotta hover:text-white"
          >
            <Link to="/blog">
              View All Posts
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs uppercase tracking-wider text-kaleo-terracotta mb-2 block">
                    {post.category}
                  </span>
                  <h3 className="font-serif text-lg text-kaleo-charcoal mb-2 group-hover:text-kaleo-terracotta transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-kaleo-charcoal/60 line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-kaleo-charcoal/50">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="py-24 md:py-32 bg-kaleo-charcoal">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-kaleo-cream mb-6">
          Ready to Explore Nepal?
        </h2>
        <p className="text-kaleo-cream/70 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Let our expert team help you plan the perfect Nepal adventure. From trekking to cultural tours, we've got you covered.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild
            size="lg"
            className="bg-kaleo-terracotta hover:bg-kaleo-cream hover:text-kaleo-charcoal text-white px-8"
          >
            <Link to="/tour-plans">
              Browse Tour Plans
            </Link>
          </Button>
          <Button 
            asChild
            variant="outline"
            size="lg"
            className="border-kaleo-cream text-kaleo-cream hover:bg-kaleo-cream hover:text-kaleo-charcoal px-8"
          >
            <Link to="/tour-guides">
              Meet Our Guides
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

// Main Home Component
export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <NarrativeText />
      <FeaturedDestinations />
      <BreathSection />
      <ZigZagGrid />
      <EssentialInfo />
      <LatestBlog />
      <CTASection />
    </div>
  );
}
