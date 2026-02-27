import { useState, useEffect, useRef } from 'react';
import { Menu, X, Shield, Award, Users, Clock, Star, Phone, Mail, MapPin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Marquee } from '@/components/magicui/marquee';
import { NumberTicker } from '@/components/magicui/number-ticker';
import { BorderBeam } from '@/components/magicui/border-beam';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { ShineBorder } from '@/components/magicui/shine-border';
import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text';
import { DotPattern } from '@/components/magicui/dot-pattern';
import { BentoCard, BentoGrid } from '@/components/magicui/bento-grid';
import { ProgressiveBlur } from '@/components/magicui/progressive-blur';
import LightRays from './LightRays';
import DemoBanner from './DemoBanner';
import { cn } from '@/lib/utils';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'why-us', label: 'Why Us' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' }
  ];

  const stats = [
    { value: 350, suffix: '+', label: 'Happy Pets Served' },
    { value: 100, suffix: '%', label: 'Satisfaction Guarantee' },
    { value: 5, suffix: '', label: 'Years of Experience' },
    { value: 24, suffix: '/7', label: 'Emergency Support' }
  ];

  const aboutItems = [
    {
      title: "Expert Veterinarians",
      description: "Certified professionals with years of experience"
    },
    {
      title: "Modern Facilities",
      description: "Clean, comfortable clinic designed for pet comfort"
    },
    {
      title: "Personalized Care",
      description: "Tailored treatments based on each pet's needs"
    },
    {
      title: "Local Community Focus",
      description: "Serving families in domnesti and surrounding areas"
    }
  ];

  const services = [
    {
      name: "Deworming",
      description: "Complete parasite treatment for dogs and cats",
      price: "400 RON"
    },
    {
      name: "Vaccinations",
      description: "Up-to-date immunization schedule for all pets",
      price: "Starting from 250 RON"
    },
    {
      name: "Wellness Checkups",
      description: "Routine examinations to monitor your pet's health",
      price: "Starting from 150 RON"
    },
    {
      name: "Emergency Care",
      description: "Immediate medical attention when needed",
      price: "Variable pricing"
    }
  ];

  const whyUsFeatures = [
    { 
      number: "01", 
      title: "Expertise", 
      description: "Our certified veterinarians provide professional care with decades of combined experience in animal health and treatment" 
    },
    { 
      number: "02", 
      title: "Quality", 
      description: "We maintain the highest standards of hygiene and medical practices, ensuring safe and effective treatments for every pet" 
    },
    { 
      number: "03", 
      title: "Personalized Care", 
      description: "Each pet receives individual attention based on their specific needs, age, breed, and health history" 
    },
    { 
      number: "04", 
      title: "Reliability", 
      description: "Our flexible scheduling and 24/7 emergency support means you'll never be left without help when your pet needs care" 
    }
  ];

  const reviews = [
    {
      name: "Maria G.",
      gender: "F",
      text: "The deworming treatment was so gentle on my puppy. Dr. Elena made sure I understood everything clearly."
    },
    {
      name: "Alex M.",
      gender: "M",
      text: "My cat's vaccination schedule is now completely handled by Darivet. Quick, professional service every time."
    },
    {
      name: "Andreea D.",
      gender: "F",
      text: "We've been coming here for 2 years now. The staff always greets us warmly and our pets love it."
    }
  ];

  const faqItems = [
    {
      question: "How often should I deworm my pet?",
      answer: "We recommend deworming every 3 months for puppies and kittens, and every 6 months for adult pets."
    },
    {
      question: "What is included in a wellness checkup?",
      answer: "Our wellness exams include basic physical examination, weight check, and health assessment to detect any early issues."
    },
    {
      question: "Do you offer emergency services?",
      answer: "Yes, we provide 24/7 emergency care for urgent situations. Contact us immediately if your pet needs immediate attention."
    },
    {
      question: "How can I book an appointment?",
      answer: "You can schedule online through WhatsApp or by calling our office directly during business hours."
    },
    {
      question: "What should I bring to my pet's first visit?",
      answer: "Please bring your pet's vaccination records and any relevant health history information if available."
    },
    {
      question: "Do you offer services outside of domnesti?",
      answer: "We primarily serve the domnesti area but can arrange home visits for emergency cases or special arrangements."
    }
  ];

  const contactItems = [
    { icon: Phone, label: "Phone", value: "+4075728379480" },
    { icon: Mail, label: "Email", value: "contact@darivet.com" },
    { icon: MapPin, label: "Address", value: "domnesti, ilfov, romania" }
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener('resize', handleResize);

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { 
        if (e.isIntersecting) { 
          e.target.classList.add('visible'); 
          observer.unobserve(e.target); 
        } 
      }),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    
    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <DemoBanner />
      
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto mt-4">
          <div className="flex items-center justify-between h-14 px-4 sm:px-6 rounded-full bg-black/60 backdrop-blur-xl border border-white/[0.08]">
            <a href="#" className="font-semibold text-base tracking-tight text-white">Darivet</a>
            
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map(link => (
                <a 
                  key={link.id} 
                  href={`#${link.id}`} 
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                  className="px-3 py-1.5 text-sm text-zinc-400 hover:text-white rounded-full hover:bg-white/[0.05] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white p-2">
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-2 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/[0.08] p-4">
              {navLinks.map(link => (
                <a 
                  key={link.id} 
                  href={`#${link.id}`} 
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.id); setIsMenuOpen(false); }}
                  className="block py-2 text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="pt-40 pb-24 sm:pt-48 sm:pb-32 min-h-screen flex items-center relative overflow-x-clip">
        <div className="absolute inset-0 z-0">
          <LightRays 
            raysOrigin="top-center" 
            raysColor="#07bcd4" 
            raysSpeed={1} 
            lightSpread={isMobile ? 2 : 0.5} 
            rayLength={isMobile ? 3 : 1} 
            followMouse={true} 
            mouseInfluence={0.05} 
            noiseAmount={0} 
            distortion={0} 
            pulsating={false} 
            fadeDistance={1} 
            saturation={1} 
          />
        </div>
        
        <DotPattern opacity={0.15} className="absolute inset-0 z-0" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 text-center">
          <div className="hero-blur hero-delay-1 mb-6">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 backdrop-blur-sm">
              <AnimatedShinyText className="text-sm font-medium">Professional Pet Care</AnimatedShinyText>
            </div>
          </div>
          
          <h1 className="hero-blur hero-delay-2 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent mb-6 max-w-4xl mx-auto">
            Your Pet's Health Matters
          </h1>
          
          <p className="hero-blur hero-delay-3 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Specialized veterinary services in domnesti, Ilfov County. We care for your pets with love and expertise.
          </p>
          
          <div className="hero-blur hero-delay-4 flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <ShimmerButton className="shadow-2xl" background="rgba(7, 188, 212, 1)">
              <span className="text-sm font-medium text-black">Book Appointment</span>
            </ShimmerButton>
            <Button variant="outline" className="h-12 px-6 rounded-full border-white/10 text-white hover:bg-white/5">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>
          
          <div className="hero-blur hero-delay-5 grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12">
            {stats.map((stat, i) => (
              <div key={i} className={cn("text-center", i > 0 && "sm:border-l sm:border-white/10 sm:pl-12")}>
                <NumberTicker 
                  value={stat.value} 
                  suffix={stat.suffix} 
                  className="text-4xl font-black bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(7,188,212,0.6)]" 
                />
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
        <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/[0.07] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/[0.05] rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Our Pet-Focused Approach
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Darivet was founded in 2019 with a mission to provide exceptional pet care services in the Ilfov region. We believe every pet deserves quality healthcare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {aboutItems.map((item, index) => (
              <Card 
                key={index} 
                className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-cyan-500/20 transition-all duration-500 card-hover"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <BorderBeam size={80} duration={20} delay={index * 1.5} colorFrom="#07bcd4" colorTo="#07bcd4" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/15 to-cyan-600/5 border border-cyan-500/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(7,188,212,0.15)] transition-all duration-500">
                      <Shield className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-cyan-50 transition-colors">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/[0.06] rounded-full blur-[130px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Quality Pet Care Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Comprehensive health solutions for your beloved companions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-cyan-500/20 transition-all duration-500 card-hover"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <BorderBeam size={80} duration={20} delay={index * 1.5} colorFrom="#07bcd4" colorTo="#07bcd4" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8">
                  <div className="flex items-start gap-5 mb-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/15 to-cyan-600/5 border border-cyan-500/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(7,188,212,0.15)] transition-all duration-500">
                      <Shield className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-50 transition-colors">{service.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                    </div>
                  </div>
                  
                  <Separator className="mb-5 bg-white/[0.06]" />
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
                      {service.price}
                    </span>
                    <ShimmerButton 
                      className="h-10 px-4 rounded-full shadow-lg" 
                      background="rgba(7, 188, 212, 1)"
                    >
                      <span className="text-xs font-medium text-black">Book Now</span>
                    </ShimmerButton>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why-Us Section */}
      <section id="why-us" className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-cyan-500/[0.05] rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Why Choose Darivet?
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              What makes us the preferred choice for pet owners in Ilfov.
            </p>
          </div>

          <BentoGrid className="lg:grid-rows-2">
            {whyUsFeatures.map((feature, index) => (
              <BentoCard 
                key={index} 
                className={cn(
                  "hover:border-cyan-500/20",
                  index === 0 && "col-span-3 lg:col-span-1",
                  index === 1 && "col-span-3 lg:col-span-2",
                  index === 2 && "col-span-3 lg:col-span-2",
                  index === 3 && "col-span-3 lg:col-span-1"
                )}
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/15 to-cyan-600/5 border border-cyan-500/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(7,188,212,0.15)] transition-all duration-500">
                    <span className="text-lg font-bold text-cyan-400">{feature.number}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-cyan-50 transition-colors">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </BentoCard>
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-cyan-500/[0.06] rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/[0.04] rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Pet Owners Love Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Real experiences from families who trust us with their pets.
            </p>
          </div>

          <div className="relative flex max-w-6xl mx-auto flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:30s]">
              {reviews.map((review, index) => (
                <Card 
                  key={index} 
                  className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-cyan-500/20 transition-all duration-500 card-hover max-w-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <BorderBeam size={80} duration={20} delay={index * 1.5} colorFrom="#07bcd4" colorTo="#07bcd4" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-cyan-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{review.text}</p>
                    <div className="flex items-center">
                      <Avatar className="w-8 h-8 mr-3">
                        <AvatarImage src={`/assets/people/${review.gender === 'M' ? 'boy_1.jpg' : 'girl_1.jpg'}`} alt={review.name} />
                        <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">{review.name}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </Marquee>
            <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
            <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
        <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-500/[0.07] rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Answers to common questions about our pet care services.
            </p>
          </div>

          <Accordion type="multiple" className="w-full max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="animate-on-scroll delay-1 mb-4">
                <AccordionTrigger className="text-left text-lg font-medium hover:bg-white/[0.02] transition-colors duration-200">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-cyan-500/[0.07] rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Ready to Give Your Pet the Care They Deserve?
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Contact us today to schedule an appointment or ask any questions about our services.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              {contactItems.map((item, index) => (
                <Card key={index} className="bg-white/[0.02] border-white/[0.05] backdrop-blur-sm">
                  <div className="p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/15 to-cyan-600/5 border border-cyan-500/10 flex items-center justify-center mr-4">
                        <item.icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">{item.label}</h3>
                        <p className="text-muted-foreground">{item.value}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
              
              <div className="flex flex-col sm:flex-row gap-4">
                <ShimmerButton 
                  className="h-12 px-6 rounded-full shadow-lg" 
                  background="rgba(7, 188, 212, 1)"
                >
                  <span className="text-sm font-medium text-black">WhatsApp</span>
                </ShimmerButton>
                <Button variant="outline" className="h-12 px-6 rounded-full border-white/10 text-white hover:bg-white/5">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </div>
            </div>

            <div className="h-[350px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              <iframe
                src={"https://www.google.com/maps?q=" + encodeURIComponent("domnesti, ilfov, romania") + "&output=embed"}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative pt-8 pb-32">
        <Separator className="mb-8" />
        <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Darivet. All rights reserved.
          </p>
          <div className="flex gap-3 mt-4 sm:mt-0">
            <a href="https://instagram.com/darivet" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-white/[0.05] h-10 w-10 hover:bg-white/[0.1] transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>

      {/* Progressive Blur */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 hidden sm:block">
        <ProgressiveBlur position="bottom" height="250px" />
      </div>
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 sm:hidden">
        <ProgressiveBlur position="bottom" height="150px" />
      </div>
    </>
  );
};

export default App;
