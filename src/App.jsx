import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Download,
  Mail,
  Phone,
  Linkedin,
  Github,
  ArrowUpRight,
  Code2,
  Sparkles,
  Cpu,
  Layers,
  Terminal,
  Briefcase,
  GraduationCap,
  MapPin,
  Calendar,
  CheckCircle2,
  Send,
  Zap,
  Copy,
  Check,
  X,
  Loader2,
  User,
  MessageSquare
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const containerRef = useRef(null);
  const [navScrolled, setNavScrolled] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeSkillCategory, setActiveSkillCategory] = useState(0);

  // Contact modal & form state
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'Application Web / SaaS',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'sending' | 'success'

  // Scroll lock and escape key handler when modal is open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isContactModalOpen) {
        setIsContactModalOpen(false);
      }
    };

    if (isContactModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isContactModalOpen]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
    }, 1200);
  };

  const handleResetForm = () => {
    setFormState({
      name: '',
      email: '',
      subject: 'Application Web / SaaS',
      message: ''
    });
    setFormStatus('idle');
  };

  // Skill data
  const skills = [
    {
      name: "React 19 & Écosystème Frontend",
      level: 98,
      category: "Frontend Core",
      desc: "Architecture modulaire, Server Components, Hooks avancés, Next.js 15",
      tags: ["React 19", "Next.js", "State Machines", "Zustand"]
    },
    {
      name: "TypeScript & Architecture Node",
      level: 95,
      category: "Backend & Systems",
      desc: "Typage strict, APIs REST & GraphQL haute performance, microservices scalables",
      tags: ["TypeScript", "Node.js", "Express", "GraphQL"]
    },
    {
      name: "GSAP & Motion Cinématique",
      level: 94,
      category: "Creative Motion",
      desc: "Chorégraphies interactives fluides 60fps, ScrollTrigger, micro-interactions 1:1",
      tags: ["GSAP 3", "ScrollTrigger", "SVG Motion", "Canvas"]
    },
    {
      name: "Tailwind CSS & Design Systems",
      level: 96,
      category: "Design Architecture",
      desc: "Création de tokens rigoureux, accessibilité WCAG, interfaces ultra-polies",
      tags: ["Tailwind 3/4", "Figma Tokens", "Responsive UI", "Dark Mode"]
    },
    {
      name: "Architecture Cloud & DevOps",
      level: 89,
      category: "Infrastructure",
      desc: "Pipelines CI/CD automatisés, Docker, déploiements Edge, monitoring & sécurité",
      tags: ["Docker", "AWS / Vercel", "CI/CD", "PostgreSQL"]
    }
  ];

  // Experiences
  const experiences = [
    {
      period: "2022 — PRÉSENT",
      role: "Lead Fullstack Engineer",
      company: "Tech Solutions",
      location: "Hybride / Dakar & International",
      description:
        "Direction technique et conception d'architectures SaaS modulaires à haute disponibilité. Optimisation des performances web critiques (-40% de temps de chargement), encadrement d'une équipe de 8 ingénieurs et mise en place des standards de vibe coding et d'ingénierie moderne.",
      achievements: [
        "Architecture d'une plateforme SaaS gérant 1.2M de requêtes quotidiennes",
        "Conception d'une bibliothèque de composants React 19 unifiée",
        "Pipeline de déploiement continu à zéro interruption"
      ],
      skills: ["React 19", "Node.js", "TypeScript", "Tailwind CSS", "Architecture Cloud"]
    },
    {
      period: "2020 — 2022",
      role: "Senior Frontend Architect",
      company: "Studio Digital",
      location: "Remote",
      description:
        "Création d'expériences interactives immersives primées et de design systems haute fidélité pour des marques internationales. Standardisation de l'animation GSAP cinématique et réduction drastique du Time to Interactive sur des applications complexes.",
      achievements: [
        "Direction du pôle créatif frontend sur plus de 15 projets clients majeurs",
        "Intégration d'effets visuels complexes et transitions cinématiques 60fps",
        "Amélioration des scores Core Web Vitals atteignant 98/100"
      ],
      skills: ["GSAP 3", "React", "Next.js", "Design Systems", "Web Performance"]
    },
    {
      period: "2018 — 2020",
      role: "Ingénieur Web Fullstack",
      company: "Agency Innovation",
      location: "Dakar",
      description:
        "Développement d'applications web réactives, portails transactionnels et plateformes e-commerce à fort trafic. Mise en œuvre d'APIs RESTful sécurisées et d'interfaces centrées sur l'accessibilité et l'ergonomie utilisateur.",
      achievements: [
        "Livraison de plus de 20 applications web robustes et résilientes",
        "Refonte complète de l'infrastructure API et base de données relationnelle",
        "Mise en place de tests automatisés réduisant les régressions de 65%"
      ],
      skills: ["JavaScript ES6+", "React", "Node.js", "PostgreSQL", "Docker"]
    }
  ];

  // Education
  const education = [
    {
      period: "2016 — 2018",
      degree: "Master en Génie Logiciel & Systèmes d'Information",
      institution: "Institut Supérieur de Technologie & Management",
      details: "Spécialisation architectures distribuées, ingénierie logicielle avancée et sécurité des systèmes informatiques."
    },
    {
      period: "2013 — 2016",
      degree: "Licence en Informatique & Développement Web",
      institution: "Faculté des Sciences & Technologies",
      details: "Fondations algorithmiques, bases de données relationnelles, conception orientée objet et protocoles web."
    },
    {
      period: "2023",
      degree: "Certification Spécialiste Cloud & Frontend Architecture",
      institution: "Cloud & Web Standards Alliance",
      details: "Architectures Serverless, scalabilité horizontale et patterns d'optimisation frontend contemporains."
    }
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("1993badousall@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  // GSAP Animations lifecycle
  useEffect(() => {
    // Scroll listener for floating pill navbar
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setNavScrolled(true);
      } else {
        setNavScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // GSAP context
    const ctx = gsap.context(() => {
      // 1. Hero Entrance: GSAP Stagger fade-up (0.12s delay between elements)
      const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      heroTl
        .fromTo(
          '.hero-avatar-anim',
          { scale: 0.85, opacity: 0, y: 30 },
          { scale: 1, opacity: 1, y: 0, duration: 0.9, delay: 0.1 }
        )
        .fromTo(
          '.hero-name-anim',
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          '-=0.6'
        )
        .fromTo(
          '.hero-title-anim',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 },
          '-=0.7'
        )
        .fromTo(
          '.hero-stats-anim',
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.6'
        )
        .fromTo(
          '.hero-cta-anim',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, stagger: 0.1 },
          '-=0.5'
        );

      // 2. About section animation: Fade-up with ScrollTrigger
      gsap.fromTo(
        '.about-content-anim',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#about',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // 3. Experience cards: Slide-in from alternating sides with ScrollTrigger
      const expCardsLeft = gsap.utils.toArray('.exp-card-left');
      expCardsLeft.forEach((card) => {
        gsap.fromTo(
          card,
          { x: -70, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });

      const expCardsRight = gsap.utils.toArray('.exp-card-right');
      expCardsRight.forEach((card) => {
        gsap.fromTo(
          card,
          { x: 70, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });

      // Dots pulse on scroll entry
      const dots = gsap.utils.toArray('.timeline-dot');
      dots.forEach((dot) => {
        gsap.fromTo(
          dot,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: 'back.out(2)',
            scrollTrigger: {
              trigger: dot,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });

      // 4. Skills Dashboard: circular progress stroke & counters animation
      gsap.fromTo(
        '.skill-gauge-anim',
        { strokeDashoffset: 283 },
        {
          strokeDashoffset: (i, target) => {
            const targetVal = parseFloat(target.getAttribute('data-target') || '0');
            return 283 - (283 * targetVal) / 100;
          },
          duration: 1.6,
          ease: 'power2.inOut',
          stagger: 0.12,
          scrollTrigger: {
            trigger: '#skills',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // 5. Education section: Fade-up stagger
      gsap.fromTo(
        '.edu-card-anim',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#education',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // 6. Contact section: stagger icons & buttons
      gsap.fromTo(
        '.contact-item-anim',
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#contact',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, containerRef);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#0A0A14] text-[#F0EFF4] font-sans selection:bg-[#7B61FF] selection:text-white">
      {/* 
        ========================================================================
        GLOBAL VISUAL TEXTURE: SVG TURBULENCE NOISE OVERLAY
        ========================================================================
      */}
      <svg className="fixed inset-0 w-full h-full pointer-events-none opacity-[0.045] z-50 mix-blend-screen" aria-hidden="true">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      {/* Decorative Aura Blobs in background */}
      <div className="fixed top-[-10%] left-[-10%] w-[55vw] h-[55vw] rounded-full bg-[#7B61FF]/15 blur-[140px] pointer-events-none -z-10" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#00F5D4]/10 blur-[150px] pointer-events-none -z-10" />
      <div className="fixed top-[40%] right-[15%] w-[35vw] h-[35vw] rounded-full bg-[#FF2A85]/10 blur-[130px] pointer-events-none -z-10" />

      {/* 
        ========================================================================
        A. NAVBAR — "LA SIGNATURE FLOTTANTE"
        ========================================================================
      */}
      <header className="fixed top-5 inset-x-0 z-40 flex justify-center px-4 pointer-events-none">
        <nav
          className={`pointer-events-auto flex items-center gap-2 sm:gap-6 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-500 ${
            navScrolled
              ? 'bg-[#0A0A14]/75 backdrop-blur-xl border border-[#7B61FF]/30 shadow-neon-subtle shadow-black/60'
              : 'bg-white/[0.04] backdrop-blur-md border border-white/10'
          }`}
        >
          {/* Logo / Initials */}
          <a
            href="#hero"
            className="flex items-center gap-2 text-sm sm:text-base font-bold tracking-tight text-white interactive-lift"
          >
            <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#7B61FF] to-[#00F5D4] flex items-center justify-center text-xs font-mono font-black text-black shadow-neon">
              AS
            </span>
            <span className="hidden sm:inline font-mono tracking-wider text-xs text-white/90">
              ALIOU.DEV
            </span>
          </a>

          {/* Navigation links */}
          <div className="flex items-center gap-1 sm:gap-5 text-xs sm:text-sm font-medium text-white/70">
            <a
              href="#about"
              className="px-2.5 py-1 rounded-full hover:text-white hover:bg-white/5 interactive-lift transition-colors"
            >
              À propos
            </a>
            <a
              href="#experience"
              className="px-2.5 py-1 rounded-full hover:text-white hover:bg-white/5 interactive-lift transition-colors"
            >
              Expérience
            </a>
            <a
              href="#skills"
              className="px-2.5 py-1 rounded-full hover:text-white hover:bg-white/5 interactive-lift transition-colors"
            >
              Compétences
            </a>
            <button
              type="button"
              onClick={() => setIsContactModalOpen(true)}
              className="hidden md:inline px-2.5 py-1 rounded-full hover:text-white hover:bg-white/5 interactive-lift transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* CTA Download button */}
          <a
            href="/cv-aliou-daouda-sall.pdf"
            download="CV_Aliou_Daouda_SALL.pdf"
            className="btn-magnetic flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#7B61FF] text-white text-xs sm:text-sm font-medium hover:bg-[#684cf0] shadow-neon"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Télécharger CV</span>
            <span className="sm:hidden">CV</span>
          </a>
        </nav>
      </header>

      {/* 
        ========================================================================
        B. SECTION HERO — "LA PREMIÈRE IMPRESSION"
        ========================================================================
      */}
      <section
        id="hero"
        className="relative min-h-[100dvh] flex flex-col items-center justify-center px-4 pt-28 pb-16 text-center overflow-hidden"
      >
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff07_1px,transparent_1px),linear-gradient(to_bottom,#ffffff07_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none -z-10"
        />

        <div className="max-w-5xl mx-auto flex flex-col items-center">
          {/* Profile Photo Placeholder with Glowing Neon Accent border */}
          <div className="hero-avatar-anim relative mb-7 group">
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-[#7B61FF] via-[#00F5D4] to-[#FF2A85] opacity-75 blur-md group-hover:opacity-100 transition duration-700 animate-pulse" />
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full border-2 border-[#7B61FF]/80 p-1 bg-[#121222] shadow-neon">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-[#1E1B38] via-[#121222] to-[#0A0A14] flex flex-col items-center justify-center border border-white/10 overflow-hidden relative">
                {/* Stylized monogram & digital aesthetic portrait */}
                <span className="text-3xl sm:text-4xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-tr from-white via-[#F0EFF4] to-[#7B61FF]">
                  ADS
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#00F5D4] mt-0.5">
                  Verified Dev
                </span>
              </div>
            </div>
            <div className="absolute bottom-1 right-2 w-4 h-4 rounded-full bg-[#00F5D4] border-2 border-[#0A0A14] shadow-[0_0_12px_#00F5D4]" title="En ligne & Disponible" />
          </div>

          {/* Name: Massif Sans Bold with Accent Glow */}
          <h1 className="hero-name-anim text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white mb-3">
            Aliou Daouda <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E0DCFF] to-[#7B61FF] aura-glow-text">SALL</span>
          </h1>

          {/* Professional Title: Serif Italique Dramatique */}
          <p className="hero-title-anim font-serif italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#7B61FF] font-normal tracking-wide mb-6">
            Lead Développeur Fullstack & Creative Technologist
          </p>

          {/* 3 Stats in Monospace */}
          <div className="hero-stats-anim flex flex-wrap items-center justify-center gap-2 sm:gap-4 font-mono text-xs sm:text-sm text-white/70 py-2 px-5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-8">
            <span className="flex items-center gap-1.5 text-white/90">
              <Zap className="w-3.5 h-3.5 text-[#00F5D4]" />
              <strong className="text-white">8+ ans</strong> d'expérience
            </span>
            <span className="text-[#7B61FF]">|</span>
            <span className="flex items-center gap-1.5 text-white/90">
              <Briefcase className="w-3.5 h-3.5 text-[#7B61FF]" />
              <strong className="text-white">45+ projets</strong> livrés
            </span>
            <span className="text-[#7B61FF]">|</span>
            <span className="flex items-center gap-1.5 text-white/90">
              <MapPin className="w-3.5 h-3.5 text-[#FF2A85]" />
              Dakar & International
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="hero-cta-anim flex flex-wrap items-center justify-center gap-4">
            <a
              href="/cv-aliou-daouda-sall.pdf"
              download="CV_Aliou_Daouda_SALL.pdf"
              className="btn-magnetic flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#7B61FF] hover:bg-[#684cf0] text-white font-semibold text-sm sm:text-base shadow-neon-strong transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              <span>Télécharger CV</span>
            </a>

            <button
              type="button"
              onClick={() => setIsContactModalOpen(true)}
              className="btn-magnetic flex items-center gap-2.5 px-7 py-4 rounded-full bg-transparent hover:bg-white/5 border border-white/20 hover:border-[#7B61FF]/60 text-white font-semibold text-sm sm:text-base backdrop-blur-sm transition-all duration-300 cursor-pointer"
            >
              <Mail className="w-4 h-4 text-[#00F5D4]" />
              <span>Me contacter</span>
            </button>
          </div>
        </div>

        {/* Scroll indicator prompt */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-xs font-mono">
          <span className="tracking-widest uppercase">Scroll pour explorer</span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-[#7B61FF] animate-bounce" />
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        C. À PROPOS — "LE MANIFESTE PERSONNEL"
        (Section pleine largeur avec fond clair, 2 colonnes, ligne accent 2px)
        ========================================================================
      */}
      <section id="about" className="relative py-28 px-6 sm:px-10 lg:px-16 bg-[#F0EFF4] text-[#18181B] rounded-[3rem] my-10 mx-3 sm:mx-6 shadow-2xl overflow-hidden">
        {/* Subtle geometric lines */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#7B61FF]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Colonne Gauche: Titre "À propos" en serif italique dramatique */}
            <div className="lg:col-span-5 about-content-anim">
              <span className="inline-block font-mono text-xs uppercase tracking-widest text-[#7B61FF] font-semibold mb-3">
                // MANIFESTE PERSONNEL
              </span>
              <h2 className="font-serif italic text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#18181B] leading-none mb-6">
                À propos
              </h2>
              <p className="font-mono text-sm text-[#18181B]/60 leading-relaxed max-w-sm">
                Concevoir des produits numériques qui conjuguent haute rigueur d'ingénierie et émotions visuelles durables.
              </p>
            </div>

            {/* Ligne verticale accent fine (2px) séparant les deux colonnes */}
            <div className="hidden lg:block lg:col-span-1 h-64 w-[2px] bg-[#7B61FF] mx-auto rounded-full about-content-anim opacity-80" />

            {/* Colonne Droite: Le texte de présentation, sans-serif, 18-20px, interligne généreux */}
            <div className="lg:col-span-6 space-y-6 about-content-anim">
              <p className="text-xl sm:text-2xl font-normal leading-relaxed text-[#18181B]">
                Ingénieur passionné par le <strong className="font-semibold text-black">web moderne</strong>, 
                l'architecture logicielle et les interfaces cinématographiques. Je conçois des solutions 
                digitales d'envergure alliant <span className="text-[#7B61FF] font-medium">performance millimétrée</span> et élégance visuelle.
              </p>

              <p className="text-base sm:text-lg text-[#18181B]/80 leading-relaxed font-light">
                À la croisée de l'ingénierie logicielle avancée et du creative engineering, je transforme des problématiques business complexes en applications fluides, ultra-réactives et pérennes. De la conception du socle API jusqu'aux micro-interactions 60 FPS, chaque pixel et chaque fonction sont pensés pour délivrer une expérience utilisateur sans compromis.
              </p>

              <div className="pt-4 flex flex-wrap gap-4 font-mono text-xs">
                <span className="px-3.5 py-1.5 rounded-full bg-black/5 border border-black/10 text-[#18181B] font-medium">
                  Architecture Cloud Native
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-[#7B61FF]/10 border border-[#7B61FF]/30 text-[#7B61FF] font-semibold">
                  Creative UI Motion
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-black/5 border border-black/10 text-[#18181B] font-medium">
                  High Performance & Scale
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        D. EXPÉRIENCE — "LA TIMELINE VIVANTE"
        ========================================================================
      */}
      <section id="experience" className="relative py-28 px-4 sm:px-8 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="font-mono text-xs uppercase tracking-widest text-[#00F5D4] block mb-2">
            // TRAJECTOIRE & IMPACT
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Expériences Principales
          </h2>
          <p className="font-serif italic text-xl sm:text-2xl text-[#7B61FF]">
            Une progression continue au cœur des projets les plus exigeants
          </p>
        </div>

        {/* Vertical Timeline container */}
        <div className="relative">
          {/* Central Line (Desktop) / Left Line (Mobile) */}
          <div className="absolute left-4 sm:left-6 lg:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#7B61FF] via-[#00F5D4] to-[#7B61FF]/30 lg:-translate-x-1/2 pointer-events-none" />

          <div className="space-y-12 sm:space-y-16">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`relative flex flex-col lg:flex-row items-start ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot with pulse effect */}
                  <div className="timeline-dot absolute left-4 sm:left-6 lg:left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-[#0A0A14] border-2 border-[#7B61FF] shadow-neon z-10 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00F5D4]" />
                  </div>

                  {/* Spacer for 50% width on desktop */}
                  <div className="hidden lg:block lg:w-1/2" />

                  {/* Card Content */}
                  <div
                    className={`w-full lg:w-1/2 pl-12 sm:pl-16 lg:pl-0 ${
                      isEven ? 'lg:pr-14 exp-card-left' : 'lg:pl-14 exp-card-right'
                    }`}
                  >
                    <div className="card-hover relative bg-[#121222] border border-white/10 hover:border-[#7B61FF]/60 rounded-[2rem] p-6 sm:p-8 shadow-card-glow backdrop-blur-sm group">
                      {/* Top Period & Tag */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <span className="font-mono text-xs uppercase tracking-widest text-[#7B61FF] font-semibold bg-[#7B61FF]/10 px-3 py-1 rounded-full border border-[#7B61FF]/25">
                          {exp.period}
                        </span>
                        <span className="font-mono text-xs text-white/50 flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[#00F5D4]" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Job Title & Company */}
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#E0DCFF] transition-colors mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-sm sm:text-base text-white/70 font-medium mb-4 flex items-center gap-1.5">
                        <span className="text-[#00F5D4]">@</span> {exp.company}
                      </p>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-white/75 leading-relaxed mb-5 font-light">
                        {exp.description}
                      </p>

                      {/* Key achievements bullet points */}
                      <ul className="space-y-2 mb-6">
                        {exp.achievements.map((item, i) => (
                          <li key={i} className="text-xs sm:text-sm text-white/70 flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#7B61FF] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Skills pills */}
                      <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                        {exp.skills.map((s, i) => (
                          <span
                            key={i}
                            className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/[0.04] text-white/80 border border-white/5"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        E. COMPÉTENCES — "LE TABLEAU DE BORD"
        (Radar & Grille de Maîtrise avec cercles SVG animés et jauges néon)
        ========================================================================
      */}
      <section id="skills" className="relative py-28 px-4 sm:px-8 max-w-6xl mx-auto">
        <div className="relative bg-[#0D0D1C] border border-[#7B61FF]/25 rounded-[3rem] p-6 sm:p-12 lg:p-16 shadow-neon-subtle overflow-hidden">
          {/* Subtle glow header */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-28 bg-[#7B61FF]/15 blur-3xl pointer-events-none" />

          <div className="text-center max-w-2xl mx-auto mb-16 relative">
            <span className="font-mono text-xs uppercase tracking-widest text-[#7B61FF] block mb-2">
              // TABLEAU DE BORD TECHNIQUE
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
              Compétences Clés & Maîtrise
            </h2>
            <p className="font-serif italic text-xl sm:text-2xl text-[#00F5D4]">
              Visualisation en temps réel du spectre d'expertise
            </p>
          </div>

          {/* Grille de Maîtrise : 5 Cartes de compétences avec jauges circulaires SVG animées */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skills.map((skill, index) => {
              // Circle circumference = 2 * PI * r = 2 * 3.14159 * 45 ≈ 283
              return (
                <div
                  key={index}
                  onMouseEnter={() => setActiveSkillCategory(index)}
                  className={`card-hover relative bg-[#141428] rounded-[2rem] p-6 border transition-all duration-300 ${
                    activeSkillCategory === index
                      ? 'border-[#7B61FF] shadow-neon bg-[#181832]'
                      : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div>
                      <span className="font-mono text-[11px] text-[#00F5D4] uppercase tracking-wider block mb-1">
                        {skill.category}
                      </span>
                      <h3 className="text-lg font-bold text-white leading-tight">
                        {skill.name}
                      </h3>
                    </div>

                    {/* Circular SVG Gauge */}
                    <div className="relative w-16 h-16 shrink-0 flex items-center justify-center">
                      <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 100 100">
                        {/* Background track */}
                        <circle
                          cx="50"
                          cy="50"
                          r="42"
                          stroke="rgba(255, 255, 255, 0.08)"
                          strokeWidth="7"
                          fill="transparent"
                        />
                        {/* Animated progress circle */}
                        <circle
                          className="skill-gauge-anim transition-all duration-1000"
                          data-target={skill.level}
                          cx="50"
                          cy="50"
                          r="42"
                          stroke="url(#neonGradient)"
                          strokeWidth="7"
                          strokeDasharray="264"
                          strokeDashoffset="264"
                          strokeLinecap="round"
                          fill="transparent"
                        />
                        <defs>
                          <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#7B61FF" />
                            <stop offset="100%" stopColor="#00F5D4" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <span className="absolute font-mono text-xs font-bold text-white">
                        {skill.level}%
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-white/70 leading-relaxed mb-4">
                    {skill.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {skill.tags.map((t, i) => (
                      <span
                        key={i}
                        className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-white/[0.04] text-white/80 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Sixth card: Radar Summary & Philosophy */}
            <div className="card-hover relative bg-gradient-to-br from-[#181832] to-[#0D0D1C] rounded-[2rem] p-6 border border-[#00F5D4]/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-[#00F5D4]" />
                  <span className="font-mono text-[11px] text-[#00F5D4] uppercase tracking-wider">
                    Creative Vibe
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Standard Haute Fidélité
                </h3>
                <p className="text-xs text-white/70 leading-relaxed mb-4">
                  Zéro template générique. Des composants réactifs construits sur-mesure avec un sens aigu de la performance et de la narration interactive.
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between font-mono text-xs text-white/60">
                <span>Core Web Vitals</span>
                <span className="text-[#00F5D4] font-bold">100 / 100</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        F. FORMATION — "LES FONDATIONS"
        ========================================================================
      */}
      <section id="education" className="relative py-24 px-4 sm:px-8 max-w-5xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#7B61FF] block mb-2">
            // FONDATIONS ACADÉMIQUES & TITRES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
            Formation & Certifications
          </h2>
          <p className="font-serif italic text-lg sm:text-xl text-white/60">
            Un socle théorique rigoureux allié à la pratique contemporaine
          </p>
        </div>

        <div className="space-y-5">
          {education.map((item, idx) => (
            <div
              key={idx}
              className="edu-card-anim card-hover bg-[#121222] border border-white/10 hover:border-[#7B61FF]/40 rounded-[2rem] p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <span className="font-mono text-xs font-semibold text-[#00F5D4] tracking-wider block">
                  {item.period}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {item.degree}
                </h3>
                <p className="text-sm text-[#7B61FF] font-medium">
                  {item.institution}
                </p>
                <p className="text-xs sm:text-sm text-white/60 pt-1">
                  {item.details}
                </p>
              </div>

              <div className="shrink-0 self-start sm:self-center">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60">
                  <GraduationCap className="w-5 h-5 text-[#7B61FF]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 
        ========================================================================
        G. CONTACT — "LE PONT"
        ========================================================================
      */}
      <section id="contact" className="relative py-24 px-4 sm:px-8 max-w-6xl mx-auto my-12">
        <div className="relative bg-gradient-to-br from-[#121225] via-[#16122e] to-[#0a0a16] border border-[#7B61FF]/40 rounded-[3rem] p-8 sm:p-14 lg:p-20 shadow-neon text-center overflow-hidden">
          {/* Neon aura background rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7B61FF]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-3xl mx-auto relative z-10">
            <span className="contact-item-anim font-mono text-xs uppercase tracking-widest text-[#00F5D4] block mb-3">
              // COLLABORATION IMMÉDIATE
            </span>

            {/* Titre Serif Italique Dramatique */}
            <h2 className="contact-item-anim font-serif italic text-4xl sm:text-6xl md:text-7xl text-white font-normal mb-6">
              Travaillons ensemble
            </h2>

            <p className="contact-item-anim text-base sm:text-xl text-white/80 font-light leading-relaxed mb-12">
              Vous avez un projet ambitieux, une plateforme à architecturer ou une interface cinématographique à donner vie ? Échangeons dès aujourd'hui.
            </p>

            {/* Contact quick links with lift and interactive feedback */}
            <div className="contact-item-anim grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 text-left">
              {/* Email */}
              <div
                onClick={handleCopyEmail}
                className="card-hover p-4 rounded-[1.5rem] bg-white/[0.03] border border-white/10 hover:border-[#7B61FF]/60 cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-2">
                  <Mail className="w-5 h-5 text-[#7B61FF]" />
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-[#00F5D4]" />
                  ) : (
                    <Copy className="w-4 h-4 text-white/40 group-hover:text-white" />
                  )}
                </div>
                <div className="text-xs font-mono text-white/50">Email professionnel</div>
                <div className="text-sm font-semibold text-white truncate">
                  contact@aliou-sall.dev
                </div>
                <div className="text-[10px] text-[#00F5D4] mt-1 font-mono">
                  {copiedEmail ? 'Copié dans le presse-papier !' : 'Cliquer pour copier'}
                </div>
              </div>

              {/* Téléphone */}
              <a
                href="tel:+221770000000"
                className="card-hover p-4 rounded-[1.5rem] bg-white/[0.03] border border-white/10 hover:border-[#7B61FF]/60 block group"
              >
                <div className="flex items-center justify-between mb-2">
                  <Phone className="w-5 h-5 text-[#00F5D4]" />
                  <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <div className="text-xs font-mono text-white/50">Ligne directe</div>
                <div className="text-sm font-semibold text-white">
                  +221 77 000 00 00
                </div>
                <div className="text-[10px] text-white/40 mt-1 font-mono">
                  Appel & WhatsApp
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/aliou-daouda-sall"
                target="_blank"
                rel="noreferrer"
                className="card-hover p-4 rounded-[1.5rem] bg-white/[0.03] border border-white/10 hover:border-[#7B61FF]/60 block group"
              >
                <div className="flex items-center justify-between mb-2">
                  <Linkedin className="w-5 h-5 text-[#7B61FF]" />
                  <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <div className="text-xs font-mono text-white/50">Réseau pro</div>
                <div className="text-sm font-semibold text-white">
                  Aliou Daouda SALL
                </div>
                <div className="text-[10px] text-white/40 mt-1 font-mono">
                  Connexion LinkedIn
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/aliou-daouda-sall"
                target="_blank"
                rel="noreferrer"
                className="card-hover p-4 rounded-[1.5rem] bg-white/[0.03] border border-white/10 hover:border-[#7B61FF]/60 block group"
              >
                <div className="flex items-center justify-between mb-2">
                  <Github className="w-5 h-5 text-[#00F5D4]" />
                  <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <div className="text-xs font-mono text-white/50">Codebase & Open Source</div>
                <div className="text-sm font-semibold text-white">
                  @aliou-daouda-sall
                </div>
                <div className="text-[10px] text-white/40 mt-1 font-mono">
                  Projets & Contributions
                </div>
              </a>
            </div>

            {/* Principal magnetic CTA buttons */}
            <div className="contact-item-anim flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => setIsContactModalOpen(true)}
                className="btn-magnetic flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#7B61FF] hover:bg-[#684cf0] text-white font-semibold text-base shadow-neon-strong transition-all duration-300 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Envoyer un message</span>
              </button>

              <a
                href="/cv-aliou-daouda-sall.pdf"
                download="CV_Aliou_Daouda_SALL.pdf"
                className="btn-magnetic flex items-center gap-2.5 px-8 py-4 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/20 text-white font-semibold text-base backdrop-blur-md transition-all duration-300"
              >
                <Download className="w-4 h-4 text-[#00F5D4]" />
                <span>Télécharger le CV complet</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        H. PIED DE PAGE
        (Minimaliste, fond sombre profond, rounded-t-[4rem], point vert pulsant)
        ========================================================================
      */}
      <footer className="relative bg-[#06060D] border-t border-white/5 rounded-t-[4rem] pt-14 pb-12 px-6 text-center text-white/50 text-xs sm:text-sm">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
          {/* Status badge: point vert pulsant + monospace */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#00F5D4]/10 border border-[#00F5D4]/30 font-mono text-xs text-[#00F5D4]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F5D4] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00F5D4]"></span>
            </span>
            <span>EN LIGNE — DISPONIBLE POUR NOUVEAUX PROJETS</span>
          </div>

          <p className="font-mono text-xs tracking-wider text-white/70">
            Aliou Daouda SALL — Fait avec le vibe coding — 2026
          </p>

          <p className="text-white/40 text-[11px] max-w-md">
            Conçu avec React 19, GSAP ScrollTrigger & Tailwind CSS. Direction esthétique : Aura Digitale (Créatif Néon).
          </p>
        </div>
      </footer>

      {/* 
        ========================================================================
        MODAL: FORMULAIRE DE CONTACT CINÉMATOGRAPHIQUE
        ========================================================================
      */}
      {isContactModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        >
          {/* Backdrop with blur & click to close */}
          <div
            onClick={() => setIsContactModalOpen(false)}
            className="fixed inset-0 bg-[#06060E]/80 backdrop-blur-2xl transition-opacity animate-in fade-in duration-300"
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-xl bg-gradient-to-br from-[#131326] via-[#15122B] to-[#0D0D1C] border border-[#7B61FF]/40 rounded-[2.5rem] p-6 sm:p-10 shadow-neon-strong text-white z-10 my-auto transform transition-all duration-300 overflow-hidden">
            {/* Ambient glows inside modal */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#7B61FF]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00F5D4]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Close button */}
            <button
              type="button"
              onClick={() => setIsContactModalOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors z-20 cursor-pointer"
              aria-label="Fermer le formulaire"
            >
              <X className="w-5 h-5" />
            </button>

            {formStatus === 'success' ? (
              /* Success screen */
              <div className="py-8 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#00F5D4]/15 border border-[#00F5D4]/40 flex items-center justify-center text-[#00F5D4] mb-5 shadow-[0_0_25px_#00F5D4]">
                  <CheckCircle2 className="w-8 h-8 text-[#00F5D4]" />
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#00F5D4] block mb-2">
                  // MESSAGE TRANSMIS
                </span>
                <h3 className="font-serif italic text-3xl sm:text-4xl text-white mb-3">
                  Merci, {formState.name || 'cher visiteur'} !
                </h3>
                <p className="text-white/75 text-sm sm:text-base leading-relaxed max-w-md mb-8">
                  Votre message a bien été envoyé. Je reviendrai vers vous à l'adresse <strong className="text-white font-mono">{formState.email}</strong> dans un délai de 24h.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <button
                    type="button"
                    onClick={() => {
                      handleResetForm();
                      setIsContactModalOpen(false);
                    }}
                    className="btn-magnetic px-6 py-3 rounded-full bg-[#7B61FF] hover:bg-[#684cf0] text-white font-medium text-sm shadow-neon cursor-pointer"
                  >
                    Terminé
                  </button>
                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="btn-magnetic px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white/80 font-medium text-sm cursor-pointer"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              </div>
            ) : (
              /* Contact Form */
              <div>
                <div className="mb-6 pr-8">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#7B61FF] block mb-1">
                    // FORMULAIRE DE CONTACT
                  </span>
                  <h3 className="font-serif italic text-3xl sm:text-4xl text-white font-normal mb-2">
                    Démarrons un projet
                  </h3>
                  <p className="text-white/70 text-xs sm:text-sm">
                    Remplissez ce formulaire et je vous recontacterai directement.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/60 mb-1.5">
                      Nom complet *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-[#7B61FF] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="ex: Alexandre Fall"
                        className="w-full bg-[#0E0E1B] border border-white/10 focus:border-[#7B61FF] focus:ring-1 focus:ring-[#7B61FF] rounded-2xl pl-10 pr-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/60 mb-1.5">
                      Adresse Email *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-[#00F5D4] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="alexandre@entreprise.com"
                        className="w-full bg-[#0E0E1B] border border-white/10 focus:border-[#7B61FF] focus:ring-1 focus:ring-[#7B61FF] rounded-2xl pl-10 pr-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject selector */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/60 mb-1.5">
                      Type de projet / Besoin
                    </label>
                    <div className="grid grid-cols-2 gap-2 text-xs font-medium">
                      {[
                        'Application Web / SaaS',
                        'Architecture Frontend',
                        'UI Motion & GSAP',
                        'Autre opportunité'
                      ].map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setFormState({ ...formState, subject: item })}
                          className={`px-3 py-2 rounded-xl text-left border transition-all cursor-pointer ${
                            formState.subject === item
                              ? 'bg-[#7B61FF]/20 border-[#7B61FF] text-white'
                              : 'bg-[#0E0E1B] border-white/10 text-white/60 hover:border-white/20'
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/60 mb-1.5">
                      Votre Message *
                    </label>
                    <div className="relative">
                      <textarea
                        required
                        rows="3"
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder="Présentez brièvement vos besoins, objectifs et délais..."
                        className="w-full bg-[#0E0E1B] border border-white/10 focus:border-[#7B61FF] focus:ring-1 focus:ring-[#7B61FF] rounded-2xl px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={formStatus === 'sending'}
                      className="btn-magnetic w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#7B61FF] to-[#6042f5] hover:from-[#6d4df2] hover:to-[#5334e8] text-white font-semibold text-sm shadow-neon-strong transition-all duration-300 disabled:opacity-50 cursor-pointer"
                    >
                      {formStatus === 'sending' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-[#00F5D4]" />
                          <span>Transmission en cours...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Envoyer le message</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Direct mail alternative */}
                  <div className="text-center pt-2">
                    <a
                      href={`mailto:contact@aliou-sall.dev?subject=${encodeURIComponent(
                        formState.subject
                      )}&body=${encodeURIComponent(formState.message)}`}
                      className="text-[11px] font-mono text-white/40 hover:text-[#00F5D4] transition-colors"
                    >
                      Ou préférer envoyer un mail direct via votre messagerie →
                    </a>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
