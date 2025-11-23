export const title = 'SaaS Products';
export const subtitle = 'Powerful cloud-based solutions to streamline your business operations and drive growth';

export const products = [
  'Business Management Platform',
  'HR & Payroll System',
  'Supply Chain Management Tool',
  'Project Management Software',
  'Customer Relationship Management (CRM)',
  'Analytics & Reporting Dashboard',
  'Team Collaboration Suite',
  'Inventory Management System'
];

export const features = [
  { iconKey: 'Cloud', title: 'Cloud-Based', description: 'Access your data anytime, anywhere from any device' },
  { iconKey: 'Autorenew', title: 'Automatic Updates', description: 'Always stay current with the latest features and improvements' },
  { iconKey: 'Security', title: 'Enterprise Security', description: 'Bank-level encryption and security protocols' },
  { iconKey: 'Speed', title: 'High Performance', description: 'Lightning-fast response times and reliable uptime' },
  { iconKey: 'TrendingUp', title: 'Scalable', description: 'Grows with your business from startup to enterprise' },
  { iconKey: 'Groups', title: 'Collaborative', description: 'Built for teams to work together seamlessly' }
];

export const pricing = [
  { tier: 'Starter', price: '$49', period: '/month', features: ['Up to 10 users', '5GB storage', 'Basic support', 'Core features'] },
  { tier: 'Professional', price: '$149', period: '/month', features: ['Up to 50 users', '50GB storage', 'Priority support', 'Advanced features', 'Custom integrations'], highlighted: true },
  { tier: 'Enterprise', price: 'Custom', period: '', features: ['Unlimited users', 'Unlimited storage', '24/7 support', 'All features', 'Dedicated account manager', 'Custom development'] }
];

export default { title, subtitle, products, features, pricing };

export const overview = {
  title: 'Modern Software for Modern Business',
  paragraphs: [
    'Our SaaS products are designed to help businesses operate more efficiently. With intuitive interfaces, powerful features, and seamless integrations, our cloud-based solutions enable teams to work smarter, not harder.',
    'No installation, no maintenance, no hassle. Just log in and start working. We handle all the technical details so you can focus on growing your business.'
  ]
};

export const pricingTitle = 'Simple, Transparent Pricing';

export const cta = {
  title: 'Ready to Get Started?',
  subtitle: 'Try our SaaS products free for 14 days, no credit card required',
  button: 'Start Free Trial'
};
