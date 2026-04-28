"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';

// --- Components ---


const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-160 md:min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.6) 100%), url('/landingIMG.jpg')`
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/30 px-4 py-1.5 rounded-full text-xs text-white mb-6 animate-fade-up cursor-default">
          <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
          Utility prices have steadily increased
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-[#F5E6C8] leading-tight tracking-tight animate-fade-up cursor-default" style={{ animationDelay: '0.1s' }}>
          Energy Saving<br />Renewable Solar
        </h1>

        <p className="mt-6 text-sm md:text-base text-white/80 max-w-lg mx-auto leading-relaxed font-light animate-fade-up cursor-default" style={{ animationDelay: '0.2s' }}>
          We have become a preferred partner to leading biofuel refiners, major oil companies, blenders, retailers, and other commodity companies.
        </p>

        <div className="mt-8 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <button
            onClick={scrollToContact}
            className="bg-white text-gray-900 px-8 py-3 rounded-md font-medium text-sm hover:bg-[#EDE8DF] hover:-translate-y-0.5 transition-all shadow-lg"
          >
            Get a Free Quote
          </button>
        </div>
      </div>
    </section>
  );
};

const WhyChoose = () => {
  const features = [
    { title: "Cost Saving", desc: "Solar energy can significantly reduce electricity bills over time, offering long-term savings on utility costs." },
    { title: "Environmental Benefits", desc: "Solar power is a clean, renewable energy source that reduces carbon footprint and helps combat climate change." },
    { title: "Energy Independence", desc: "Solar panels provide homeowners with more control over their energy usage, reducing reliance on traditional energy sources." },
    { title: "Increased Home Value", desc: "Homes with solar panels typically sell at a premium and are more attractive to eco-conscious buyers." },
    { title: "Government Incentives", desc: "Many governments offer incentives, rebates, and tax credits for installing solar panels, making it more affordable." },
    { title: "Long-Term Reliability", desc: "Solar panels have minimal maintenance requirements and often come with warranties lasting 25 years." },
  ];

  return (
    <section id="why" className="bg-[#EDE8DF] py-12 md:py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12 items-start reveal-on-scroll">
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight text-gray-900">
            Why Choose<br />Residential Solar<br />Panels?
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed pt-2">
            There are many significant benefits to installing residential solar panels on your home's roof. With minimal maintenance and long-term reliability, residential solar is an excellent choice for those seeking both financial and ecological benefits.
          </p>
        </div>

        <hr className="border-black/10 mb-12" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
          {features.map((f, i) => (
            <div key={i} className="reveal-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
              <h4 className="text-base font-semibold mb-3 text-gray-900">{f.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Solutions = () => {
  const [activeCard, setActiveCard] = useState(2); // Default to 3rd card (index 2)

  const solutions = [
    { title: "Residential Solar Systems", desc: "Power your home with clean energy, cut electricity bills, and enjoy long-term savings with reliable solar panels." },
    { title: "Commercial Solar Systems", desc: "Reduce business costs, boost sustainability, and make your company future-ready with efficient solar solutions." },
    { title: "Industrial Solar Systems", desc: "large-scale, high-capacity photovoltaic (PV) installations designed to meet the heavy energy demands.", dark: true },
    { title: "Maintenance and Support", desc: "Keep your system performing at its best with regular monitoring, servicing, and expert assistance." },
  ];

  return (
    <section id="solutions" className="relative h-[75vh] flex flex-col items-center pt-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('landingIMG3.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 text-center px-6 mb-12 reveal-on-scroll">
        <h2 className="text-3xl md:text-5xl text-white font-medium tracking-tight">Our Solar Solutions</h2>
        <p className="text-white/70 mt-4 text-sm max-w-md mx-auto leading-relaxed">
          There are many significant benefits to installing residential solar panels on your home's roof.
        </p>
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {solutions.map((sol, idx) => {
          const isDark = activeCard === idx;
          return (
            <div
              key={idx}
              onMouseEnter={() => setActiveCard(idx)}
              onMouseLeave={() => setActiveCard(2)}
              className={`p-8 min-h-65 md:min-h-75 flex flex-col justify-between border-r border-black/5 transition-colors duration-300 cursor-default ${isDark ? 'bg-[#2E2C28] text-white' : 'bg-[#F5F2EC] text-gray-900'
                }`}
            >
              <h3 className="text-lg font-semibold leading-tight tracking-tight">{sol.title}</h3>
              <div>
                <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-white/70' : 'text-gray-600'}`}>
                  {sol.desc}
                </p>
                <Link href="/services"><button className={`text-xs font-medium px-4 py-2 rounded border transition-all ${isDark
                  ? 'border-white/40 hover:bg-white/20 text-white'
                  : 'border-gray-900/20 hover:bg-gray-900 hover:text-white text-gray-900'
                  }`}>
                  Explore Now
                </button></Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const EcoStats = () => {
  const stats = [
    {
      n1: '₹6.4M', l1: 'Most Cost-effective', d1: 'Helped customers save millions in energy costs with affordable solar solutions.',
      n2: '100K+', l2: 'Successfully Installation', d2: 'Delivered reliable solar systems for homes and businesses across the country.'
    },
    {
      n1: '15MW+', l1: 'Clean Energy Generated', d1: 'Produced massive amounts of renewable energy to power thousands of homes and businesses.',
      n2: '1,050+', l2: 'Businesses Empowered', d2: 'Supported companies in reducing costs and achieving sustainability goals through solar power.'
    },
  ];

  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % stats.length);
        setIsAnimating(false);
      }, 300);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const current = stats[index];

  return (
    <section id="eco" className="bg-[#EDE8DF] py-16 md:py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-16 reveal-on-scroll">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900">
            Eco Technology<br />Integration
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed max-w-md">
            We integrate smart solar solutions with eco-friendly technology to boost efficiency, cut costs, and protect the environment.
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_60px_1fr] gap-0 items-center reveal-on-scroll">
          {/* Left Stat */}
          <div className={`text-left transition-all duration-500 ${isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
            <div className="text-6xl md:text-8xl font-medium tracking-tighter text-gray-900 mb-4">{current.n1}</div>
            <div className="text-lg font-semibold text-gray-900 mb-2">{current.l1}</div>
            <p className="text-sm text-gray-600 max-w-xs leading-relaxed">{current.d1}</p>
          </div>

          {/* Divider */}
          <div className="hidden md:flex flex-col items-center h-full relative">
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-black/10 -translate-x-1/2" />
            <div className="w-11 h-11 rounded-full bg-[#2A2620] flex items-center justify-center text-white relative z-10 mt-12">
              🌿
            </div>
          </div>

          {/* Right Stat */}
          <div className={`md:pl-12 text-left transition-all duration-500 ${isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
            <div className="text-6xl md:text-8xl font-medium tracking-tighter text-gray-900 mb-4">{current.n2}</div>
            <div className="text-lg font-semibold text-gray-900 mb-2">{current.l2}</div>
            <p className="text-sm text-gray-600 max-w-xs leading-relaxed">{current.d2}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const scrollRef = useRef(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 440, behavior: 'smooth' });
    }
  };

  const steps = [
    { title: "Free Consultation", desc: "Our experts assess your home or business energy needs, location, and budget to design a solar plan tailored just for you.", tags: ["Expert Guidance", "Energy Audit"], dark: false },
    { title: "Custom Design", desc: "We create a smart solar system layout that maximizes efficiency and blends seamlessly with your property.", tags: ["Smart Layout", "High Efficiency"], dark: true },
    { title: "Professional Installation", desc: "Certified technicians install your solar panels quickly and safely, ensuring top-quality performance from day one.", tags: ["Hassle-Free Setup", "Certified Experts"], dark: false },
    { title: "Save & Enjoy", desc: "Once your system is live, you start lowering bills, and enjoying energy independence from day one.", tags: ["Lower Costs", "Clean Energy"], dark: true },
  ];

  return (
    <section id="process" className="bg-[#EDE8DF] pt-6 pb-0 overflow-hidden">
      <div className="px-6 lg:px-12 max-w-7xl mx-auto mb-12">
        <div className="grid md:grid-cols-2 gap-12 items-start reveal-on-scroll">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-tight">
            Simple Process.<br />Maximum Efficiency.
          </h2>
          <div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-sm mb-6">
              We make switching to solar easy with a clear, hassle-free process designed to save you time, money, and energy.
            </p>
            <button
              onClick={scrollRight}
              className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:underline underline-offset-4"
            >
              Keep Scrolling to Explore »
            </button>
          </div>
        </div>
      </div>

      <div ref={scrollRef} className="overflow-x-auto pb-12 scrollbar-hide">
        <div className="flex w-max pl-6 lg:pl-12">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`w-95 md:w-105 min-h-80 p-10 flex flex-col justify-between border-r border-black/5 shrink-0 ${step.dark ? 'bg-[#2E2C28] text-white' : 'bg-[#F5F2EC] text-gray-900'
                }`}
            >
              <div>
                <h3 className="text-2xl font-semibold tracking-tight mb-6">{step.title}</h3>
                <p className={`text-sm leading-relaxed ${step.dark ? 'text-white/70' : 'text-gray-600'}`}>
                  {step.desc}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-8">
                {step.tags.map(tag => (
                  <span key={tag} className={`text-xs font-medium px-3 py-1.5 rounded border ${step.dark ? 'border-white/30 text-white/80' : 'border-gray-900/20 text-gray-600'
                    }`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Impact = () => {
  const stats = [
    { num: "1,250+", label: "Solar Systems Installed", desc: "Helping families and companies switch to renewable energy seamlessly." },
    { num: "₹3.5M+", label: "In Energy Savings", desc: "Our clients reduced electricity costs significantly with solar solutions." },
    { num: "8,500+", label: "Tons of CO₂ Reduced", desc: "Making a positive impact on the environment by lowering carbon emissions." },
    { num: "95%", label: "Customer Satisfaction", desc: "We proudly maintain high ratings thanks to reliable service and support." },
  ];

  return (
    <section id="impact" className="grid md:grid-cols-2 min-h-[60vh] bg-[#EDE8DF]">
      <div
        className="bg-cover bg-center rounded-r-full min-h-75 md:min-h-full"
        style={{ backgroundImage: `url('/landingIMG2.jpg')` }}
      />
      <div className="bg-[#EDE8DF] p-12 lg:p-20 flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-12">
          Our Impact in the<br />Last Year
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {stats.map((stat, i) => (
            <div key={i} className="reveal-on-scroll">
              <div className="text-3xl font-semibold tracking-tight text-gray-900 mb-2">{stat.num}</div>
              <div className="text-sm font-semibold text-gray-900 mb-1">{stat.label}</div>
              <p className="text-xs text-gray-600 leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const [offset, setOffset] = useState(0);
  const trackRef = useRef(null);

  const testimonials = [
    { name: "Kinjal ", role: "Homeowner, Ahmedabad", text: "Switching to solar was the best decision we made. Our bills dropped instantly, and the team made the whole process stress-free.", dark: false },
    { name: "Himani", role: "Business Owner, Surat", text: "As a small business owner, reducing overhead was crucial. With solar, we save thousands every year and show our clients we care about sustainability.", dark: true },
    { name: "Avin", role: "Homeowner, Rajkot", text: "From consultation to installation, everything was handled professionally. I never thought going solar could be this easy.", dark: false },
    { name: "Harshal", role: "Property Developer, Mehesana", text: "The system works perfectly, and the after-sales support has been outstanding. I recommend them to anyone considering solar.", dark: true },
    { name: "Isha", role: "Homeowner, Bhavnagar", text: "The installation was quick, and the results were immediate. My electricity bills are nearly cut in half — highly recommend!", dark: false },
    { name: "Kanchan", role: "Landlord, Vadodara", text: "Professional team with excellent communication. They explained every step clearly, and now my office runs on clean energy.", dark: true },
  ];

  const move = (dir) => {
    // Simple logic for carousel movement
    const cardWidth = trackRef.current?.children[0]?.offsetWidth + 20 || 320;
    const maxOffset = (testimonials.length * cardWidth) - trackRef.current?.parentElement?.offsetWidth;

    let newOffset = offset + (dir * cardWidth);
    if (newOffset < 0) newOffset = 0;
    if (newOffset > maxOffset) newOffset = maxOffset;

    setOffset(newOffset);
  };

  return (
    <section id="testimonials" className="bg-[#EDE8DF] py-6 md:py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-tight reveal-on-scroll">
            What Our Happy<br />Customers Say
          </h2>
          <div className="flex gap-3">
            <button onClick={() => move(-1)} className="w-12 h-12 rounded-full border border-gray-900/20 flex items-center justify-center hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all">
              «
            </button>
            <button onClick={() => move(1)} className="w-12 h-12 rounded-full border border-gray-900/20 flex items-center justify-center hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all">
              »
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg">
          <div
            ref={trackRef}
            className="flex gap-5 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${offset}px)` }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`shrink-0 w-75 md:w-[calc(25%-15px)] p-8 rounded-lg flex flex-col min-h-70 ${t.dark ? 'bg-[#2E2C28] text-white' : 'bg-white text-gray-900'
                  }`}
              >
                <div className='flex justify-between items-center'>
                  <img src='avatar.png' alt={t.name} className="w-12 h-12 rounded-full object-cover mb-6" />
                  <img src='google.webp' alt="Google Review" className="w-9 h-9 mb-6" />
                </div>
                <div className={`text-4xl mb-4 ${t.dark ? 'text-white/40' : 'text-gray-400'}`}>"</div>
                <p className="text-sm leading-relaxed flex-1 opacity-90">{t.text}</p>
                <div className="mt-6">
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className={`text-xs mt-1 ${t.dark ? 'text-white/50' : 'text-gray-500'}`}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CTABanner = () => {
  return (
    <section className="bg-[#E5DFD3] py-20 px-6 text-center relative overflow-hidden">
      {/* Decorative SVGs */}
      <svg className="absolute bottom-0 left-0 w-64 opacity-30 hidden md:block" viewBox="0 0 260 200" fill="none">
        <rect x="10" y="80" width="160" height="100" rx="4" stroke="#7a6a50" strokeWidth="1.5" />
        <rect x="10" y="80" width="160" height="100" rx="4" stroke="#7a6a50" strokeWidth="1.5" />
        <line x1="10" y1="110" x2="170" y2="110" stroke="#7a6a50" strokeWidth="1" />
        <line x1="10" y1="140" x2="170" y2="140" stroke="#7a6a50" strokeWidth="1" />
        <line x1="63" y1="80" x2="63" y2="180" stroke="#7a6a50" strokeWidth="1" />
        <line x1="116" y1="80" x2="116" y2="180" stroke="#7a6a50" strokeWidth="1" />
        <line x1="60" y1="185" x2="60" y2="200" stroke="#7a6a50" strokeWidth="1.5" />
        <line x1="120" y1="185" x2="120" y2="200" stroke="#7a6a50" strokeWidth="1.5" />
        <line x1="40" y1="200" x2="140" y2="200" stroke="#7a6a50" strokeWidth="1.5" />
        <line x1="210" y1="200" x2="210" y2="50" stroke="#7a6a50" strokeWidth="1.5" />
        <line x1="210" y1="70" x2="210" y2="30" stroke="#7a6a50" strokeWidth="1.5" transform="rotate(-30 210 70)" />
        <line x1="210" y1="70" x2="210" y2="30" stroke="#7a6a50" strokeWidth="1.5" transform="rotate(90 210 70)" />
        <line x1="210" y1="70" x2="210" y2="30" stroke="#7a6a50" strokeWidth="1.5" transform="rotate(210 210 70)" />
        <circle cx="210" cy="70" r="4" stroke="#7a6a50" strokeWidth="1.5" />
      </svg>
      <svg className="absolute bottom-0 right-0 w-64 opacity-30 hidden md:block transform scale-x-[-1]" viewBox="0 0 260 200" fill="none">
        <rect x="10" y="80" width="160" height="100" rx="4" stroke="#7a6a50" strokeWidth="1.5" />
        <line x1="10" y1="110" x2="170" y2="110" stroke="#7a6a50" strokeWidth="1" />
        <line x1="10" y1="140" x2="170" y2="140" stroke="#7a6a50" strokeWidth="1" />
        <line x1="63" y1="80" x2="63" y2="180" stroke="#7a6a50" strokeWidth="1" />
        <line x1="116" y1="80" x2="116" y2="180" stroke="#7a6a50" strokeWidth="1" />
        <line x1="60" y1="185" x2="60" y2="200" stroke="#7a6a50" strokeWidth="1.5" />
        <line x1="120" y1="185" x2="120" y2="200" stroke="#7a6a50" strokeWidth="1.5" />
        <line x1="40" y1="200" x2="140" y2="200" stroke="#7a6a50" strokeWidth="1.5" />
        <line x1="210" y1="200" x2="210" y2="50" stroke="#7a6a50" strokeWidth="1.5" />
        <line x1="210" y1="70" x2="210" y2="30" stroke="#7a6a50" strokeWidth="1.5" transform="rotate(-30 210 70)" />
        <line x1="210" y1="70" x2="210" y2="30" stroke="#7a6a50" strokeWidth="1.5" transform="rotate(90 210 70)" />
        <line x1="210" y1="70" x2="210" y2="30" stroke="#7a6a50" strokeWidth="1.5" transform="rotate(210 210 70)" />
      </svg>

      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-8">
          Ready to Embrace<br />a Greener Future?
        </h2>
        <Link href="/projects">
          <button
            className="bg-[#2A2620] text-white px-8 py-3 rounded-md font-medium text-sm hover:bg-gray-800 transition-colors"
          >
            Explore our solar solution
          </button>
        </Link>
      </div>
    </section>
  );
};

const last = () => {
  <Footer />;
}

// --- Main Page Component ---

export default function Home() {
  useEffect(() => {
    // Intersection Observer for scroll reveals
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-sans text-gray-900 bg-white overflow-x-hidden">
      <Head>
        <title>KK ENTERPRISE – Energy Saving Renewable Solar</title>
        <meta name="description" content="Leading solar energy solutions for residential and commercial needs." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap" rel="stylesheet" />
      </Head>

      <style jsx global>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fadeUp 0.8s ease forwards;
        }
        .reveal-on-scroll {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal-on-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>

      <main>
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "KK Enterprise Solar",
              url: "https://kkenterprisesolar.com",
              telephone: "+919925590208",
              address: {
                "@type": "PostalAddress",
                streetAddress: "609-610, Rajvi Icon, Nikol",
                addressLocality: "Ahmedabad",
                addressRegion: "Gujarat",
                postalCode: "382350",
                addressCountry: "IN",
              },
              areaServed: [
                "Ahmedabad",
                "Saurastra",
                "Surat",
                "Vadodara",
                "Rajkot",
                "Bhavnagar",
                "Jamnagar",
                "Amreli",
                "Mehesana",
                "Junagadh",
                "All Cities in Gujarat",
              ],
              serviceType: [
                "Residential Solar Installation",
                "Commercial Solar Installation",
                "Industrial Solar Installation",
              ],
            }),
          }}
        />
        <Hero />
        <WhyChoose />
        <Solutions />
        <EcoStats />
        <Process />
        <Impact />
        <Testimonials />
        <CTABanner />
      </main>
    </div>
  );
}
