import { themeConfig } from '@/config/theme.config';

// Home page content constants. Keep data-only (no React elements) so this file
// can be edited easily without touching page code.

export const slides = [
  {
    img: 'https://images.unsplash.com/photo-1506765515384-028b60a970df?q=80&w=2000&auto=format&fit=crop',
    theme: 'home'
  },
  {
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop',
    theme: 'softwareDevelopment'
  },
  {
    img: 'https://images.unsplash.com/photo-1520975915464-3f4a8a4b4f3a?q=80&w=2000&auto=format&fit=crop',
    theme: 'hrServices'
  },
  {
    img: 'https://images.unsplash.com/photo-1542736667-069246bdbc6d?q=80&w=2000&auto=format&fit=crop',
    theme: 'supplyChain'
  },
  {
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop',
    theme: 'saasProducts'
  }
];

export const servicesSummary = [
  {
    iconKey: 'Code',
    title: 'Software Development',
    description: 'Custom web, mobile, cloud systems, and enterprise solutions designed for scalability and performance.',
    theme: 'softwareDevelopment',
    path: '/services/software-development'
  },
  {
    iconKey: 'People',
    title: 'HR Services',
    description: 'Recruitment, payroll, and structure setup to streamline workforce management.',
    theme: 'hrServices',
    path: '/services/hr'
  },
  {
    iconKey: 'LocalShipping',
    title: 'Supply Chain',
    description: 'End-to-end logistics management, supply chain optimization, and vendor coordination.',
    theme: 'supplyChain',
    path: '/services/supply-chain'
  },
  {
    iconKey: 'Cloud',
    title: 'SaaS Products',
    description: 'Cloud-based solutions and software-as-a-service platforms for modern businesses.',
    theme: 'saasProducts',
    path: '/services/saas'
  }
];

export const testimonials = [
  {
    name: 'Sarah Johnson',
    company: 'Tech Innovations Ltd',
    role: 'CTO',
    text: 'Tech Bridge transformed our development process. Their team delivered a scalable solution that exceeded our expectations.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    company: 'Global Logistics Corp',
    role: 'Operations Director',
    text: "Outstanding logistics management. They optimized our supply chain and reduced costs by 30% in just 6 months.",
    rating: 5
  },
  {
    name: 'Emma Williams',
    company: 'HR Solutions Inc',
    role: 'CEO',
    text: 'Their HR services are exceptional. Professional, efficient, and truly understand the needs of growing businesses.',
    rating: 5
  },
  {
    name: 'Liam Roberts',
    company: 'Green Retailers',
    role: 'Head of Product',
    text: 'Delivered a flexible platform that scaled with our seasonal demand. Highly recommended.',
    rating: 5
  },
  {
    name: 'Aisha Khan',
    company: 'BrightHire',
    role: 'HR Manager',
    text: 'Helped us build an efficient recruitment pipeline — reduced time-to-hire by 45%.',
    rating: 5
  },
  {
    name: 'Carlos M.',
    company: 'LogiTrans',
    role: 'COO',
    text: 'Proactive team, clear communication, and measurable improvements across our routes.',
    rating: 5
  }
];

export const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Software Development',
    description: 'Built a complete e-commerce solution with inventory management, payment integration, and real-time analytics.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1525909002-6c1b0a4d6f3a?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Supply Chain Optimization',
    category: 'Logistics',
    description: 'Streamlined international shipping operations for a major retailer, reducing delivery times by 40%.',
    tags: ['Logistics', 'Automation', 'Analytics'],
    image: 'https://images.unsplash.com/photo-1542736667-069246bdbc6d?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'HR Management System',
    category: 'HR Services',
    description: 'Developed a comprehensive HR platform for employee onboarding, payroll, and performance tracking.',
    tags: ['SaaS', 'Cloud', 'Automation'],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Business Intelligence Dashboard',
    category: 'SaaS Product',
    description: 'Created a data visualization platform that helps businesses make informed decisions with real-time insights.',
    tags: ['Analytics', 'Cloud', 'AI'],
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop'
  }
];

// Utility to get HSL color values for a slide theme. Pages can use this with themeConfig.
export function getSlideTheme(themeKey: string) {
  // themeConfig is imported above; keep this file data-first but convenient.
  // If the themeKey is missing, fall back to home.
  const key = (themeKey || 'home') as keyof typeof themeConfig;
  const colors = (themeConfig as any)[key]?.colors;
  return colors || themeConfig.home.colors;
}

export default {
  slides,
  servicesSummary,
  testimonials,
  projects,
  getSlideTheme
};

// Additional textual content for the home page (headings, CTAs, descriptions)
export const heroTitle = 'Smart HR, IT Solutions & Supply Chain Solutions for Growing Companies';
export const heroSubtitle = 'Empowering businesses worldwide with seamless HRIS, Recruitment, Payroll, IT Solutions, Supply Chain, and Full HR Outsourcing — all under one trusted global partner.';
export const heroCTA = 'Explore Services';

export const about = {
  overline: 'WHO WE ARE',
  title: 'About Tech Bridge',
  paragraphs: [
    'We are a modern online service agency helping companies around the world simplify their operations across Human Resources, Information Technology, and Supply Chain.',
    "With deep expertise in HR systems, talent acquisition, payroll management, supply chain solutions, and Software Development, we handle your operational backbone so you can focus on innovation and growth.",
    "At our core lies the balance of technology, human insight, and operational excellence.",
    "We believe that exceptional systems and smooth processes are the foundation of every successful business — no matter where you operate."
  ],
  stats: [
    { value: '500+', label: 'Projects' },
    { value: '50+', label: 'Countries' },
    { value: '120+', label: 'Skilled Consultants' }
  ]
};

export const servicesSection = {
  title: 'Our Services',
  description: 'Comprehensive solutions to empower your business across technology, logistics, and workforce management'
};

export const testimonialsSection = {
  title: "What Our Clients Say",
  subtitle: "Don't just take our word for it — hear from the businesses we've helped transform."
};

export const projectsSection = {
  title: 'Recent Projects',
  description: 'Explore some of the innovative solutions we\'ve delivered for our clients.'
};

export const contactSection = {
  title: "Let's Start Your Journey",
  subtitle: "Ready to transform your business? Get in touch with our team and let's discuss how we can help you achieve your goals.",
  formButton: 'Send Message',
  info: {
    emailHeading: 'Email Us',
    emails: ['info@techbridge.co.uk', 'support@techbridge.co.uk'],
    callHeading: 'Call Us',
    phones: ['+44 20 1234 5678'],
    visitHeading: 'Visit Us',
    address: 'London, United Kingdom'
  },
  whatsapp: {
    label: 'WhatsApp Chat',
    tooltip: 'Contact Us',
    // placeholder number, update to your business/chatbot number in E.164 without +
    number: ''
  },

  // Prefilled message template for WhatsApp chat. Use {service} where you want the selected
  // service name to be inserted. Keep this simple and professional.
  whatsappMessageTemplate: 'Hi — I\'m interested in {service}. Could you share details or next steps?',
  response: {
    title: 'Response Time',
    description: 'We typically respond within 24 hours during business days. For urgent matters, please call us directly.'
  }
};

export const whyChooseUs = {
  title: 'Why Choose Us',
  subtitle: 'We combine deep HR, IT, and Supply Chain expertise to deliver secure, scalable, and human-centered solutions across regions.',
  items: [
    {
      title: 'All-in-One Business Partner',
      description: 'HR, IT, and Supply Chain solutions unified under one strategic partnership.'
    },
    {
      title: 'Global Reach, Local Expertise',
      description: 'We operate across countries while adapting to regional rules, systems, and needs.'
    },
    {
      title: 'Scalable & Flexible',
      description: 'Whether you’re expanding teams or operations, our services scale seamlessly with your growth.'
    },
    {
      title: 'Technology-Driven',
      description: 'From HRIS and ERP tools to logistics tracking systems, we leverage the best technology to simplify your processes.'
    },
    {
      title: 'People & Process First',
      description: 'We value both efficiency and experience — delivering professional, reliable, and human-centered solutions.'
    },
    {
      title: 'Trusted & Secure',
      description: 'We follow global standards for data protection, cybersecurity, and compliance across all domains.'
    }
  ]
};
