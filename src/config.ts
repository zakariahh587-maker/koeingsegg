// Site configuration
// Koenigsegg Jesko - The Ultimate Hypercar Experience

export interface SiteConfig {
  language: string;
  title: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface HeroConfig {
  brandLeft: string;
  brandRight: string;
  tagline: string;
  badge: string;
  since: string;
  email: string;
  heroImage: string;
  heroImageAlt: string;
  scrollText: string;
  copyrightText: string;
  navLinks: NavLink[];
  socialLinks: SocialLink[];
}

export interface GalleryImage {
  src: string;
  alt: string;
  label: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface AboutConfig {
  label: string;
  headline: string;
  description: string;
  bottomText: string;
  galleryImages: GalleryImage[];
  stats: StatItem[];
}

export interface Exhibition {
  id: number;
  title: string;
  image: string;
  date: string;
}

export interface ExhibitionsConfig {
  label: string;
  headline: string;
  ctaText: string;
  exhibitions: Exhibition[];
}

export interface Collection {
  id: number;
  title: string;
  year: string;
  description: string;
  image: string;
}

export interface CollectionsConfig {
  label: string;
  headline: string;
  ctaText: string;
  collections: Collection[];
}

export interface TestimonialsConfig {
  quote: string;
  authorName: string;
  authorTitle: string;
  authorImage: string;
}

export interface InfoCard {
  icon: string;
  title: string;
  content: string;
}

export interface VisitConfig {
  label: string;
  headline: string;
  description: string;
  ctaText: string;
  infoCards: InfoCard[];
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterConfig {
  marqueeText: string;
  brandName: string;
  brandDescription: string;
  socialLinks: SocialLink[];
  quickLinks: FooterLink[];
  quickLinksTitle: string;
  contactTitle: string;
  contactItems: string[];
  bottomLinks: FooterLink[];
}

export const siteConfig: SiteConfig = {
  language: "en",
  title: "Koenigsegg Jesko | The Ultimate Hypercar",
  description: "Experience the Koenigsegg Jesko - 1,600 HP of pure engineering excellence. Two variants, one legacy. Discover the Attack and Absolut.",
};

export const heroConfig: HeroConfig = {
  brandLeft: "JESKO",
  brandRight: "KOENIGSEGG",
  tagline: "Engineered to Redefine Limits",
  badge: "Ängelholm, Sweden",
  since: "Est. 1994",
  email: "info@koenigsegg.com",
  heroImage: "/images/jesko-hero.png",
  heroImageAlt: "Koenigsegg Jesko Hypercar - Carbon Fiber with Orange Accents",
  scrollText: "Scroll to Explore",
  copyrightText: "© 2024 Koenigsegg Automotive AB",
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Variants", href: "#variants" },
    { label: "Innovation", href: "#innovation" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  socialLinks: [
    { label: "Instagram", href: "https://instagram.com/koenigsegg" },
    { label: "YouTube", href: "https://youtube.com/koenigsegg" },
    { label: "Facebook", href: "https://facebook.com/koenigsegg" },
  ],
};

export const aboutConfig: AboutConfig = {
  label: "Named in Honor",
  headline: "A Legacy of Innovation",
  description: "The Jesko is named after Jesko von Koenigsegg, father of founder Christian von Koenigsegg, who helped establish the company in 1994. This hypercar represents the pinnacle of Swedish engineering - where artistry meets unprecedented performance. With a 5.0-liter twin-turbo V8 producing up to 1,600 horsepower on E85 biofuel, the Jesko pushes the boundaries of what's possible in a road-legal production car.",
  bottomText: "Every Jesko is a bespoke masterpiece, handcrafted in Ängelholm, Sweden. Only 125 units will ever exist, making each one a rare collector's item and a testament to automotive excellence.",
  galleryImages: [
    { src: "/images/jesko-engine.jpg", alt: "5.0L Twin-Turbo V8 Engine", label: "Powertrain" },
    { src: "/images/jesko-chassis.jpg", alt: "Carbon Fiber Monocoque", label: "Monocoque" },
    { src: "/images/jesko-interior.jpg", alt: "Jesko Interior Cockpit", label: "Cockpit" },
    { src: "/images/jesko-rear.jpg", alt: "Rear View with Diffuser", label: "Aerodynamics" },
    { src: "/images/jesko-doors.jpg", alt: "Dihedral Synchro-Helix Doors", label: "Doors" },
    { src: "/images/jesko-wheels.jpg", alt: "Aircore Carbon Wheels", label: "Wheels" },
  ],
  stats: [
    { value: "1,600", label: "Max HP (E85)" },
    { value: "500+", label: "Top Speed km/h" },
    { value: "125", label: "Units Produced" },
    { value: "0.278", label: "Drag Coefficient" },
  ],
};

export const exhibitionsConfig: ExhibitionsConfig = {
  label: "Two Distinct Personalities",
  headline: "Choose Your Weapon",
  ctaText: "Explore Variant",
  exhibitions: [
    {
      id: 1,
      title: "Jesko Attack",
      image: "/images/jesko-attack.jpg",
      date: "Track Dominance",
    },
    {
      id: 2,
      title: "Jesko Absolut",
      image: "/images/jesko-absolut.jpg",
      date: "Speed Record Breaker",
    },
    {
      id: 3,
      title: "Light Speed Transmission",
      image: "/images/jesko-transmission.jpg",
      date: "Revolutionary Tech",
    },
    {
      id: 4,
      title: "The V8 Heart",
      image: "/images/jesko-engine.jpg",
      date: "Engineering Marvel",
    },
  ],
};

export const collectionsConfig: CollectionsConfig = {
  label: "Engineering Excellence",
  headline: "Innovation at Every Level",
  ctaText: "Discover More",
  collections: [
    {
      id: 1,
      title: "Light Speed Transmission",
      year: "2024",
      description: "The world's first 9-speed multi-clutch transmission capable of near-instantaneous gear changes between any gears. UPOD technology selects the optimal gear for maximum acceleration, bypassing sequential shifts entirely.",
      image: "/images/jesko-transmission.jpg",
    },
    {
      id: 2,
      title: "Carbon Fiber Mastery",
      year: "2024",
      description: "From the monocoque chassis to the Aircore wheels weighing under 7kg each, carbon fiber is woven into every aspect of the Jesko. The result: a power-to-weight ratio exceeding 1,111 hp per tonne.",
      image: "/images/jesko-chassis.jpg",
    },
    {
      id: 3,
      title: "Aerodynamic Precision",
      year: "2024",
      description: "Over 3,000 hours of CFD analysis refined every surface. The Attack generates 1,400kg of downforce at speed, while the Absolut achieves a record-breaking 0.278 Cd drag coefficient.",
      image: "/images/jesko-rear.jpg",
    },
    {
      id: 4,
      title: "Driver-Centric Interior",
      year: "2024",
      description: "SmartWheel touchscreens, a rotating SmartCluster display, and an analog G-force meter blend cutting-edge technology with classic racing heritage. Every control is within perfect reach.",
      image: "/images/jesko-interior.jpg",
    },
  ],
};

export const testimonialsConfig: TestimonialsConfig = {
  quote: "If one car can be said to define the hypercar class, then it's the Koenigsegg Jesko. Its combination of engineering innovation, stunning design and raw, shocking power is unlike anything else. It's a fabulously rewarding car to drive, more usable and less intimidating than you'd ever expect.",
  authorName: "Matt Crisara",
  authorTitle: "Automotive Journalist, Top Gear",
  authorImage: "/images/testimonial-author.jpg",
};

export const visitConfig: VisitConfig = {
  label: "Experience the Extraordinary",
  headline: "Visit Koenigsegg<br />in Ängelholm",
  description: "Step into the world of Koenigsegg and witness firsthand how we craft the world's most advanced hypercars. From the carbon fiber workshop to the final assembly line, every step of the Jesko's creation is a masterclass in precision engineering.",
  ctaText: "Schedule a Visit",
  infoCards: [
    {
      icon: "MapPin",
      title: "Factory Location",
      content: "Koenigsegg Automotive AB<br />Bäckstugan 1<br />262 72 Ängelholm, Sweden",
    },
    {
      icon: "Clock",
      title: "Tours Available",
      content: "Monday - Friday<br />10:00 AM - 4:00 PM<br />By appointment only",
    },
    {
      icon: "Calendar",
      title: "Private Viewings",
      content: "Exclusive Jesko presentations<br />Available for qualified buyers<br />Contact us to arrange",
    },
    {
      icon: "Ticket",
      title: "Events",
      content: "Track days & owner events<br />Geneva Motor Show appearances<br />Follow us for updates",
    },
  ],
};

export const footerConfig: FooterConfig = {
  marqueeText: "JESKO • 1,600 HP • LIGHT SPEED TRANSMISSION • CARBON FIBER MASTERY • SWEDISH ENGINEERING • JESKO • 1,600 HP • LIGHT SPEED TRANSMISSION • CARBON FIBER MASTERY • SWEDISH ENGINEERING • ",
  brandName: "KOENIGSEGG",
  brandDescription: "Creating the ultimate performance cars through innovative engineering and meticulous craftsmanship since 1994.",
  socialLinks: [
    { label: "Instagram", href: "https://instagram.com/koenigsegg" },
    { label: "YouTube", href: "https://youtube.com/koenigsegg" },
    { label: "Facebook", href: "https://facebook.com/koenigsegg" },
    { label: "Linkedin", href: "https://linkedin.com/company/koenigsegg" },
  ],
  quickLinks: [
    { label: "Jesko Attack", href: "#variants" },
    { label: "Jesko Absolut", href: "#variants" },
    { label: "Gemera", href: "#" },
    { label: "Regera", href: "#" },
    { label: "News", href: "#" },
  ],
  quickLinksTitle: "Models",
  contactTitle: "Contact",
  contactItems: [
    "info@koenigsegg.com",
    "+46 431 45 44 60",
    "Bäckstugan 1, 262 72",
    "Ängelholm, Sweden",
  ],
  bottomLinks: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Use", href: "#" },
    { label: "Cookies", href: "#" },
  ],
};
