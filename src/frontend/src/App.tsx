import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitInquiry } from "@/hooks/useQueries";
import {
  Award,
  Briefcase,
  CheckCircle2,
  ChevronRight,
  Facebook,
  FileText,
  Globe,
  GraduationCap,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Plane,
  Shield,
  Star,
  Ticket,
  Twitter,
  Users,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        }
      },
      { threshold: 0.12 },
    );
    const els = document.querySelectorAll(".section-fade");
    for (const el of els) {
      observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);
}

const NAV_LINKS = [
  { label: "Home", href: "#home", ocid: "nav.home.link" },
  { label: "About", href: "#about", ocid: "nav.about.link" },
  { label: "Services", href: "#services", ocid: "nav.services.link" },
  { label: "Why Us", href: "#whyus", ocid: "nav.whyus.link" },
  { label: "Countries", href: "#countries", ocid: "nav.countries.link" },
  { label: "Contact", href: "#contact", ocid: "nav.contact.link" },
];

const SERVICES = [
  {
    icon: Plane,
    title: "Tourist Visa Assistance",
    desc: "Expert guidance for tourist visas to your dream destinations worldwide.",
  },
  {
    icon: GraduationCap,
    title: "Student Visa Guidance",
    desc: "Comprehensive support for student visas to top universities globally.",
  },
  {
    icon: Briefcase,
    title: "Work Visa Processing",
    desc: "Streamlined work visa processing for professionals seeking opportunities abroad.",
  },
  {
    icon: FileText,
    title: "Visa Documentation Support",
    desc: "Meticulous document preparation to ensure your visa application is flawless.",
  },
  {
    icon: Ticket,
    title: "Flight Booking Assistance",
    desc: "Best-value flight options coordinated with your visa timelines.",
  },
  {
    icon: Globe,
    title: "Travel Consultation",
    desc: "End-to-end travel planning and consultation for a seamless journey.",
  },
];

const WHY_US = [
  {
    icon: Award,
    title: "Expert Visa Consultants",
    desc: "Our certified team has helped thousands of clients secure visas successfully.",
  },
  {
    icon: Zap,
    title: "Fast Documentation Process",
    desc: "We work efficiently to ensure your documents are ready well ahead of deadlines.",
  },
  {
    icon: Shield,
    title: "Transparent Guidance",
    desc: "Clear, honest advice at every step — no hidden fees, no surprises.",
  },
  {
    icon: Star,
    title: "High Visa Success Rate",
    desc: "Our 95%+ success rate reflects our deep expertise and careful preparation.",
  },
  {
    icon: Users,
    title: "Personalized Support",
    desc: "Dedicated consultants who understand your unique situation and goals.",
  },
];

const COUNTRIES = [
  { flag: "🇺🇸", name: "USA", desc: "B1/B2, F1, H1B & more" },
  { flag: "🇨🇦", name: "Canada", desc: "Visitor, Study & Work" },
  { flag: "🇬🇧", name: "United Kingdom", desc: "Standard Visitor & Tier" },
  { flag: "🇦🇺", name: "Australia", desc: "Subclass 600, 500 & more" },
  { flag: "🇪🇺", name: "Europe (Schengen)", desc: "26 countries, one visa" },
];

export default function App() {
  useScrollReveal();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    destinationCountry: "",
    visaType: "",
    message: "",
  });

  const submitInquiry = useSubmitInquiry();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitInquiry.mutate(form);
  };

  const goToContact = () => {
    setChatOpen(false);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen font-sans">
      {/* NAV */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-navy shadow-navy py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <span className="text-gold text-2xl">✦</span>
            <span className="font-display font-bold text-xl text-white tracking-wide">
              Prince Visa Overseas
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.ocid}
                href={link.href}
                data-ocid={link.ocid}
                className="px-4 py-2 text-sm font-medium text-white/80 hover:text-gold transition-colors rounded-md"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 px-5 py-2 rounded-md bg-gold text-navy-dark font-semibold text-sm hover:bg-gold/90 transition-colors"
            >
              Apply for Visa
            </a>
          </nav>
          <button
            type="button"
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden bg-navy-dark border-t border-white/10 px-4 py-4 flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.ocid}
                href={link.href}
                data-ocid={link.ocid}
                onClick={() => setMobileOpen(false)}
                className="py-2 text-white/80 hover:text-gold transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-bg.dim_1920x1080.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-navy-dark/70" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.72 0.12 75) 1px, transparent 1px), linear-gradient(90deg, oklch(0.72 0.12 75) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/40 text-gold text-sm font-medium mb-8 bg-gold/10">
            <Globe size={14} />
            Trusted by 10,000+ Visa Applicants Across India
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Prince Visa
            <br />
            <span className="text-gold">Overseas</span>
          </h1>
          <p className="text-xl md:text-2xl text-gold/90 font-medium mb-6 font-display italic">
            Your Trusted Partner for Global Visa &amp; Travel Assistance
          </p>
          <p className="text-white/75 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            We help Indian individuals and families achieve their international
            travel dreams with professional visa guidance, documentation
            support, and travel assistance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              data-ocid="hero.primary_button"
              className="px-8 py-4 rounded-md bg-gold text-navy-dark font-bold text-base hover:bg-gold/90 transition-all shadow-gold flex items-center gap-2 group"
            >
              Apply for Visa
              <ChevronRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#contact"
              data-ocid="hero.secondary_button"
              className="px-8 py-4 rounded-md border-2 border-white text-white font-bold text-base hover:bg-white/10 transition-all"
            >
              Contact Us
            </a>
          </div>
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { n: "10K+", label: "Clients Served" },
              { n: "95%", label: "Success Rate" },
              { n: "50+", label: "Countries" },
              { n: "12+", label: "Years Experience" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl font-bold text-gold">
                  {stat.n}
                </div>
                <div className="text-white/60 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="section-fade">
              <span className="inline-block text-gold font-semibold text-sm uppercase tracking-widest mb-3">
                About Prince Visa Overseas
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-6 leading-snug">
                Navigating Your Path
                <span className="text-gold"> to the World</span>
              </h2>
              <p className="text-foreground/70 text-lg leading-relaxed mb-6">
                Prince Visa Overseas is a trusted visa consultancy based in
                Kadi, Gujarat, dedicated to helping Indian individuals,
                families, and professionals navigate the complex world of
                international travel and immigration.
              </p>
              <p className="text-foreground/70 leading-relaxed mb-8">
                With years of expertise, our team provides reliable
                documentation support, expert guidance, and personalized
                consultation to ensure your visa journey is smooth and
                successful. We pride ourselves on building lasting relationships
                based on trust, transparency, and results.
              </p>
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-gold/30" />
                <span className="text-gold font-display italic text-lg">
                  Your journey starts here
                </span>
                <div className="h-px flex-1 bg-gold/30" />
              </div>
            </div>
            <div className="section-fade relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-navy shadow-navy">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-40"
                  style={{
                    backgroundImage:
                      "url('/assets/generated/hero-bg.dim_1920x1080.jpg')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-navy/80 to-navy-dark/90" />
                <div className="relative z-10 p-10 flex flex-col justify-end h-full">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { n: "10,000+", label: "Happy Clients" },
                      { n: "50+", label: "Countries" },
                      { n: "95%", label: "Approval Rate" },
                      { n: "12+", label: "Years" },
                    ].map((s) => (
                      <div key={s.label} className="bg-white/10 rounded-xl p-4">
                        <div className="font-display text-2xl font-bold text-gold">
                          {s.n}
                        </div>
                        <div className="text-white/70 text-sm">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full border-4 border-gold/30 -z-10" />
              <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full border-2 border-gold/20 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-navy">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 section-fade">
            <span className="inline-block text-gold font-semibold text-sm uppercase tracking-widest mb-3">
              What We Offer
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Comprehensive visa and travel services tailored to your specific
              needs and destination.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc, i) => (
              <div
                key={svc.title}
                className="section-fade group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-gold/40 transition-all duration-300"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gold/20 flex items-center justify-center mb-6 group-hover:bg-gold/30 transition-colors">
                  <svc.icon className="text-gold" size={26} />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">
                  {svc.title}
                </h3>
                <p className="text-white/60 leading-relaxed text-sm">
                  {svc.desc}
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="whyus" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 section-fade">
            <span className="inline-block text-gold font-semibold text-sm uppercase tracking-widest mb-3">
              Our Advantage
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-4">
              Why Choose Us
            </h2>
            <p className="text-foreground/60 max-w-xl mx-auto">
              We bring expertise, integrity, and commitment to every visa
              application.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {WHY_US.map((item, i) => (
              <div
                key={item.title}
                className="section-fade flex gap-5 p-6 rounded-2xl border border-border hover:border-gold/40 hover:shadow-gold transition-all duration-300 bg-white"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                  <item.icon className="text-gold" size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-navy text-base mb-1">
                    {item.title}
                  </h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COUNTRIES */}
      <section id="countries" className="py-24 bg-navy-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 section-fade">
            <span className="inline-block text-gold font-semibold text-sm uppercase tracking-widest mb-3">
              Visa Destinations
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Countries We Assist For
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              We help Indian citizens obtain visas for the most sought-after
              destinations worldwide.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {COUNTRIES.map((country, i) => (
              <div
                key={country.name}
                className="section-fade group relative w-48 h-56 rounded-2xl border-2 border-gold/30 bg-white/5 hover:border-gold hover:bg-white/10 transition-all duration-300 flex flex-col items-center justify-center gap-3 cursor-default"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="text-6xl leading-none">{country.flag}</span>
                <div className="text-center">
                  <div className="font-display font-bold text-white text-lg">
                    {country.name}
                  </div>
                  <div className="text-white/50 text-xs mt-1">
                    {country.desc}
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 section-fade">
            <span className="inline-block text-gold font-semibold text-sm uppercase tracking-widest mb-3">
              Get in Touch
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-4">
              Contact &amp; Visa Inquiry
            </h2>
            <p className="text-foreground/60 max-w-xl mx-auto">
              Ready to start your visa journey? Fill out the form or reach us
              directly.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="section-fade space-y-8">
              <div>
                <h3 className="font-display text-2xl font-bold text-navy mb-6">
                  Contact Information
                </h3>
                <div className="space-y-5">
                  {[
                    { icon: Phone, label: "Phone", value: "+91 81414 19149" },
                    {
                      icon: Mail,
                      label: "Email",
                      value: "info@princevisa.com",
                    },
                    {
                      icon: MapPin,
                      label: "Office",
                      value: "Kadi - 382715, Mehsana, Gujarat, India",
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-4 items-start">
                      <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="text-gold" size={20} />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-foreground/40 uppercase tracking-wider">
                          {item.label}
                        </div>
                        <div className="text-navy font-medium mt-0.5">
                          {item.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-navy text-white">
                <div className="text-gold font-display text-4xl leading-none mb-2">
                  &ldquo;
                </div>
                <p className="text-white/80 italic leading-relaxed">
                  Our mission is to make every visa application a success story.
                  Your dreams are our commitment.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center">
                    <span className="text-navy font-bold text-xs">PV</span>
                  </div>
                  <span className="text-gold font-medium text-sm">
                    Prince Visa Overseas Team
                  </span>
                </div>
              </div>
            </div>

            <div className="section-fade">
              <div className="bg-white rounded-2xl border border-border shadow-navy p-8">
                <h3 className="font-display text-xl font-bold text-navy mb-6">
                  Visa Inquiry Form
                </h3>
                {submitInquiry.isSuccess ? (
                  <div
                    data-ocid="contact.success_state"
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                      <CheckCircle2 className="text-green-600" size={32} />
                    </div>
                    <h4 className="font-display text-xl font-bold text-navy mb-2">
                      Inquiry Submitted!
                    </h4>
                    <p className="text-foreground/60">
                      Thank you! Our team will contact you within 24 hours to
                      discuss your visa requirements.
                    </p>
                    <Button
                      className="mt-6 bg-navy hover:bg-navy-light text-white"
                      onClick={() => submitInquiry.reset()}
                    >
                      Submit Another Inquiry
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {submitInquiry.isError && (
                      <div
                        data-ocid="contact.error_state"
                        className="p-4 rounded-lg bg-destructive/10 border border-destructive/30 text-destructive text-sm"
                      >
                        Something went wrong. Please try again or call us
                        directly.
                      </div>
                    )}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label
                          htmlFor="fullName"
                          className="text-navy font-medium text-sm"
                        >
                          Full Name *
                        </Label>
                        <Input
                          id="fullName"
                          data-ocid="contact.input"
                          placeholder="Your Full Name"
                          required
                          value={form.fullName}
                          onChange={(e) =>
                            setForm({ ...form, fullName: e.target.value })
                          }
                          className="border-border focus:border-gold focus:ring-gold/30"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label
                          htmlFor="email"
                          className="text-navy font-medium text-sm"
                        >
                          Email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="yourname@email.com"
                          required
                          value={form.email}
                          onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                          }
                          className="border-border focus:border-gold"
                        />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="phone"
                        className="text-navy font-medium text-sm"
                      >
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        placeholder="+91 XXXXX XXXXX"
                        value={form.phoneNumber}
                        onChange={(e) =>
                          setForm({ ...form, phoneNumber: e.target.value })
                        }
                        className="border-border focus:border-gold"
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label className="text-navy font-medium text-sm">
                          Destination Country *
                        </Label>
                        <Select
                          onValueChange={(v) =>
                            setForm({ ...form, destinationCountry: v })
                          }
                        >
                          <SelectTrigger className="border-border">
                            <SelectValue placeholder="Select country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="USA">🇺🇸 USA</SelectItem>
                            <SelectItem value="Canada">🇨🇦 Canada</SelectItem>
                            <SelectItem value="UK">
                              🇬🇧 United Kingdom
                            </SelectItem>
                            <SelectItem value="Australia">
                              🇦🇺 Australia
                            </SelectItem>
                            <SelectItem value="Europe">
                              🇪🇺 Europe / Schengen
                            </SelectItem>
                            <SelectItem value="Other">🌍 Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-navy font-medium text-sm">
                          Visa Type *
                        </Label>
                        <Select
                          onValueChange={(v) =>
                            setForm({ ...form, visaType: v })
                          }
                        >
                          <SelectTrigger className="border-border">
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Tourist">Tourist</SelectItem>
                            <SelectItem value="Student">Student</SelectItem>
                            <SelectItem value="Work">Work</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="message"
                        className="text-navy font-medium text-sm"
                      >
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your travel plans and any specific requirements..."
                        rows={4}
                        value={form.message}
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                        className="border-border focus:border-gold resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      data-ocid="contact.submit_button"
                      disabled={submitInquiry.isPending}
                      className="w-full bg-navy hover:bg-navy-light text-white font-semibold py-6 text-base rounded-xl"
                    >
                      {submitInquiry.isPending
                        ? "Submitting..."
                        : "Submit Visa Inquiry"}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-navy-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-gold text-2xl">✦</span>
                <span className="font-display font-bold text-xl text-white">
                  Prince Visa Overseas
                </span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Your trusted partner for global visa and travel assistance,
                proudly serving Indian citizens from Kadi, Gujarat.
              </p>
              <div className="flex gap-3 mt-6">
                {[
                  { icon: Facebook, label: "Facebook" },
                  { icon: Twitter, label: "Twitter" },
                  { icon: Instagram, label: "Instagram" },
                  { icon: Linkedin, label: "LinkedIn" },
                ].map(({ icon: Icon, label }) => (
                  <button
                    type="button"
                    key={label}
                    aria-label={label}
                    className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-gold hover:text-gold transition-colors"
                  >
                    <Icon size={16} />
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4 uppercase tracking-wider text-sm">
                Quick Links
              </h4>
              <div className="flex flex-col gap-2">
                <a
                  href="#home"
                  data-ocid="footer.home.link"
                  className="text-white/60 hover:text-gold text-sm transition-colors"
                >
                  Home
                </a>
                <a
                  href="#services"
                  data-ocid="footer.services.link"
                  className="text-white/60 hover:text-gold text-sm transition-colors"
                >
                  Services
                </a>
                <a
                  href="#contact"
                  data-ocid="footer.contact.link"
                  className="text-white/60 hover:text-gold text-sm transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4 uppercase tracking-wider text-sm">
                Contact
              </h4>
              <div className="space-y-2 text-sm text-white/60">
                <div>📞 +91 81414 19149</div>
                <div>✉️ info@princevisa.com</div>
                <div>📍 Kadi - 382715, Mehsana, Gujarat, India</div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
            <span>
              © {new Date().getFullYear()} Prince Visa Overseas. All Rights
              Reserved.
            </span>
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              Built with ❤️ using caffeine.ai
            </a>
          </div>
        </div>
      </footer>

      {/* FLOATING CHAT BUTTON */}
      <button
        type="button"
        data-ocid="chat.open_modal_button"
        onClick={() => setChatOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gold shadow-gold flex items-center justify-center hover:bg-gold/90 transition-all hover:scale-110"
        aria-label="Open live chat"
      >
        <MessageCircle className="text-navy-dark" size={24} />
      </button>

      {/* Chat Modal */}
      <Dialog open={chatOpen} onOpenChange={setChatOpen}>
        <DialogContent data-ocid="chat.modal" className="max-w-sm">
          <DialogHeader>
            <DialogTitle className="font-display text-navy">
              Live Chat Support
            </DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="text-gold" size={32} />
            </div>
            <p className="text-center text-foreground/70 leading-relaxed">
              Chat support is coming soon! In the meantime, please{" "}
              <strong className="text-navy">call us</strong> at +91 81414 19149
              or{" "}
              <button
                type="button"
                className="text-gold hover:underline"
                onClick={goToContact}
              >
                fill out our inquiry form
              </button>
              .
            </p>
          </div>
          <button
            type="button"
            data-ocid="chat.close_button"
            onClick={() => setChatOpen(false)}
            className="w-full py-2.5 rounded-lg bg-navy text-white font-medium hover:bg-navy-light transition-colors"
          >
            Close
          </button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
