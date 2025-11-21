import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  Stack,
  TextField,
  Button
} from "@mui/material";
import { Code, LocalShipping, People, Cloud } from "@mui/icons-material";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Tech Innovations Ltd",
    role: "CTO",
    text: "Tech Bridge transformed our development process. Their team delivered a scalable solution that exceeded our expectations.",
    rating: 5
  },
  {
    name: "Michael Chen",
    company: "Global Logistics Corp",
    role: "Operations Director",
    text: "Outstanding logistics management. They optimized our supply chain and reduced costs by 30% in just 6 months.",
    rating: 5
  },
  {
    name: "Emma Williams",
    company: "HR Solutions Inc",
    role: "CEO",
    text: "Their HR services are exceptional. Professional, efficient, and truly understand the needs of growing businesses.",
    rating: 5
  }
];

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Software Development",
    description: "Built a complete e-commerce solution with inventory management, payment integration, and real-time analytics.",
    tags: ["React", "Node.js", "PostgreSQL"]
  },
  {
    title: "Supply Chain Optimization",
    category: "Logistics",
    description: "Streamlined international shipping operations for a major retailer, reducing delivery times by 40%.",
    tags: ["Logistics", "Automation", "Analytics"]
  },
  {
    title: "HR Management System",
    category: "HR Services",
    description: "Developed a comprehensive HR platform for employee onboarding, payroll, and performance tracking.",
    tags: ["SaaS", "Cloud", "Automation"]
  },
  {
    title: "Business Intelligence Dashboard",
    category: "SaaS Product",
    description: "Created a data visualization platform that helps businesses make informed decisions with real-time insights.",
    tags: ["Analytics", "Cloud", "AI"]
  }
];

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <Box
        component="section"
        id="home"
        sx={{
          background: 'linear-gradient(135deg, hsl(var(--hero-gradient-from)) 0%, hsl(var(--hero-gradient-to)) 100%)',
          color: 'white',
          py: { xs: 12, md: 18 },
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)',
            pointerEvents: 'none'
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography 
                variant="h1" 
                component="h1" 
                sx={{ 
                  fontWeight: 800, 
                  mb: 3,
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  letterSpacing: '-0.02em',
                  textShadow: '0 4px 20px rgba(0,0,0,0.2)'
                }}
              >
                Empowering Innovation Through Technology & Logistics
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Typography 
                variant="h5" 
                sx={{ 
                  mb: 6, 
                  opacity: 0.95,
                  maxWidth: 900,
                  mx: 'auto',
                  lineHeight: 1.8,
                  fontSize: { xs: '1.1rem', md: '1.3rem' },
                  fontWeight: 400
                }}
              >
                Tech Bridge connects businesses to next-generation IT solutions, logistics operations, 
                and workforce management — helping companies grow efficiently across the globe.
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ textDecoration: 'none', display: 'inline-block' }}
              >
                <Box
                  component="button"
                  sx={{
                    bgcolor: 'white',
                    color: 'primary.main',
                    px: 8,
                    py: 2.5,
                    borderRadius: 3,
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 15px 50px rgba(0,0,0,0.3)',
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  Explore Services
                </Box>
              </motion.a>
            </motion.div>
          </motion.div>
        </Container>
      </Box>

      {/* About Section */}
      <Box component="section" id="about" sx={{ py: 12, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 8, alignItems: 'center' }}>
            <Box sx={{ flex: 1 }}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Typography 
                  variant="overline" 
                  sx={{ 
                    color: 'primary.main', 
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    letterSpacing: '0.15em'
                  }}
                >
                  WHO WE ARE
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: 700, mb: 3, mt: 1 }}>
                  About Tech Bridge
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.9, fontSize: '1.1rem' }}>
                  Founded by a dynamic team of four leaders — each an expert in their field — Tech Bridge 
                  integrates IT software development, logistics procurement, HR management, and marketing 
                  into one cohesive powerhouse. Our mission is to simplify business operations and empower 
                  global expansion.
                </Typography>
              </motion.div>
            </Box>
            <Box sx={{ flex: 1 }}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    background: 'linear-gradient(135deg, hsl(var(--hero-gradient-from)) 0%, hsl(var(--hero-gradient-to)) 100%)',
                    borderRadius: 4,
                    p: 8,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: 320,
                    boxShadow: 'var(--shadow-elegant)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: '-50%',
                      right: '-50%',
                      width: '100%',
                      height: '100%',
                      background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)',
                      animation: 'pulse 4s ease-in-out infinite'
                    },
                    '@keyframes pulse': {
                      '0%, 100%': { transform: 'scale(1)', opacity: 1 },
                      '50%': { transform: 'scale(1.1)', opacity: 0.8 }
                    }
                  }}
                >
                  <Box sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <Typography variant="h4" sx={{ color: 'white', fontWeight: 700, mb: 2 }}>
                      Trusted by Businesses Worldwide
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 4, justifyContent: 'center', mt: 4 }}>
                      <Box>
                        <Typography variant="h2" sx={{ color: 'white', fontWeight: 800 }}>
                          500+
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                          Projects
                        </Typography>
                      </Box>
                      <Box>
                        <Typography variant="h2" sx={{ color: 'white', fontWeight: 800 }}>
                          50+
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                          Countries
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Services Section */}
      <Box component="section" id="services" sx={{ py: 12, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ fontWeight: 700, textAlign: 'center', mb: 3 }}>
            Our Services
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              textAlign: 'center', 
              color: 'text.secondary', 
              mb: 8,
              maxWidth: 700,
              mx: 'auto'
            }}
          >
            Comprehensive solutions to empower your business across technology, logistics, and workforce management
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }, gap: 4 }}>
            {[
              {
                icon: <Code fontSize="large" />,
                title: "Software Development",
                description: "Custom web, mobile, cloud systems, and enterprise solutions designed for scalability and performance.",
                gradient: 'linear-gradient(135deg, hsl(142 76% 36% / 0.1), hsl(173 58% 39% / 0.1))',
                path: '/services/software-development'
              },
              {
                icon: <People fontSize="large" />,
                title: "HR Services",
                description: "Recruitment, payroll, and structure setup to streamline workforce management.",
                gradient: 'linear-gradient(135deg, hsl(271 91% 65% / 0.1), hsl(291 64% 42% / 0.1))',
                path: '/services/hr'
              },
              {
                icon: <LocalShipping fontSize="large" />,
                title: "Supply Chain",
                description: "End-to-end logistics management, supply chain optimization, and vendor coordination.",
                gradient: 'linear-gradient(135deg, hsl(24 100% 50% / 0.1), hsl(36 100% 50% / 0.1))',
                path: '/services/supply-chain'
              },
              {
                icon: <Cloud fontSize="large" />,
                title: "SaaS Products",
                description: "Cloud-based solutions and software-as-a-service platforms for modern businesses.",
                gradient: 'linear-gradient(135deg, hsl(221 83% 53% / 0.1), hsl(230 94% 82% / 0.1))',
                path: '/services/saas'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  component="a"
                  href={service.path}
                  sx={{
                    height: '100%',
                    background: service.gradient,
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    border: '1px solid',
                    borderColor: 'transparent',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-12px)',
                      boxShadow: 'var(--shadow-elegant)',
                      borderColor: 'primary.main'
                    }
                  }}
                >
                  <CardContent sx={{ p: 4, textAlign: 'center' }}>
                    <Box 
                      sx={{ 
                        color: 'primary.main', 
                        mb: 3,
                        display: 'flex',
                        justifyContent: 'center',
                        '& svg': {
                          fontSize: '3rem'
                        }
                      }}
                    >
                      {service.icon}
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: 'text.primary' }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box component="section" id="testimonials" sx={{ py: 12, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ fontWeight: 700, textAlign: 'center', mb: 3 }}>
            What Our Clients Say
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              textAlign: 'center', 
              color: 'text.secondary', 
              mb: 8,
              maxWidth: 700,
              mx: 'auto'
            }}
          >
            Don't just take our word for it — hear from the businesses we've helped transform.
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 4 }}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 'var(--shadow-elegant)'
                    }
                  }}
                >
                  <CardContent sx={{ p: 4, flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ mb: 2, color: 'primary.main' }}>
                      {'★'.repeat(testimonial.rating)}
                    </Box>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: 'text.secondary', 
                        lineHeight: 1.7,
                        mb: 3,
                        flex: 1,
                        fontStyle: 'italic'
                      }}
                    >
                      "{testimonial.text}"
                    </Typography>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {testimonial.role}, {testimonial.company}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Projects Section */}
      <Box component="section" id="projects" sx={{ py: 12, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ fontWeight: 700, textAlign: 'center', mb: 3 }}>
            Recent Projects
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              textAlign: 'center', 
              color: 'text.secondary', 
              mb: 8,
              maxWidth: 700,
              mx: 'auto'
            }}
          >
            Explore some of the innovative solutions we've delivered for our clients.
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 4 }}>
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: '100%',
                    transition: 'all 0.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 'var(--shadow-elegant)'
                    }
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 2 }}>
                      <Typography variant="h5" sx={{ fontWeight: 600 }}>
                        {project.title}
                      </Typography>
                      <Box
                        sx={{
                          bgcolor: 'primary.main',
                          color: 'white',
                          px: 2,
                          py: 0.5,
                          borderRadius: 2,
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          whiteSpace: 'nowrap'
                        }}
                      >
                        {project.category}
                      </Box>
                    </Box>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: 'text.secondary', 
                        lineHeight: 1.7,
                        mb: 3
                      }}
                    >
                      {project.description}
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                      {project.tags.map((tag, tagIndex) => (
                        <Box
                          key={tagIndex}
                          sx={{
                            bgcolor: 'grey.100',
                            color: 'text.primary',
                            px: 2,
                            py: 0.5,
                            borderRadius: 1,
                            fontSize: '0.875rem'
                          }}
                        >
                          {tag}
                        </Box>
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box 
        component="section" 
        id="contact" 
        sx={{ 
          py: 12, 
          background: 'linear-gradient(135deg, hsl(var(--hero-gradient-from)) 0%, hsl(var(--hero-gradient-to)) 100%)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)',
            pointerEvents: 'none'
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" sx={{ fontWeight: 700, color: 'white', mb: 3 }}>
              Let's Start Your Journey
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                color: 'rgba(255,255,255,0.9)',
                maxWidth: 700,
                mx: 'auto',
                lineHeight: 1.7
              }}
            >
              Ready to transform your business? Get in touch with our team and let's discuss 
              how we can help you achieve your goals.
            </Typography>
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '7fr 5fr' }, gap: 4 }}>
            {/* Contact Form */}
            <Card 
              sx={{ 
                p: 4,
                height: '100%',
                boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
                Send us a Message
              </Typography>
              <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
                  <TextField
                    fullWidth
                    label="First Name"
                    variant="outlined"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Last Name"
                    variant="outlined"
                    required
                  />
                </Box>
                <TextField
                  fullWidth
                  label="Email Address"
                  type="email"
                  variant="outlined"
                  required
                />
                <TextField
                  fullWidth
                  label="Phone Number"
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Company Name"
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="How can we help you?"
                  multiline
                  rows={4}
                  variant="outlined"
                  required
                />
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<Send />}
                  sx={{
                    background: 'linear-gradient(135deg, hsl(var(--hero-gradient-from)), hsl(var(--hero-gradient-to)))',
                    color: 'white',
                    py: 1.5,
                    fontWeight: 600,
                    '&:hover': {
                      boxShadow: '0 8px 25px rgba(0,0,0,0.2)'
                    }
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Card>

            {/* Contact Info */}
            <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Card 
                  sx={{ 
                    p: 4,
                    bgcolor: 'rgba(255,255,255,0.95)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
                    Contact Information
                  </Typography>
                  <Stack spacing={3}>
                    <Box sx={{ display: 'flex', alignItems: 'start', gap: 2 }}>
                      <Box 
                        sx={{ 
                          bgcolor: 'primary.main', 
                          color: 'white',
                          p: 1.5,
                          borderRadius: 2,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Mail size={24} />
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
                          Email Us
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          info@techbridge.co.uk
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          support@techbridge.co.uk
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'start', gap: 2 }}>
                      <Box 
                        sx={{ 
                          bgcolor: 'primary.main', 
                          color: 'white',
                          p: 1.5,
                          borderRadius: 2,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Phone size={24} />
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
                          Call Us
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          +44 20 1234 5678
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          Mon-Fri: 9AM - 6PM GMT
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'start', gap: 2 }}>
                      <Box 
                        sx={{ 
                          bgcolor: 'primary.main', 
                          color: 'white',
                          p: 1.5,
                          borderRadius: 2,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <MapPin size={24} />
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
                          Visit Us
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          London, United Kingdom
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          Available for global projects
                        </Typography>
                      </Box>
                    </Box>
                  </Stack>
                </Card>

                <Card 
                  sx={{ 
                    p: 4,
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.85))',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                    textAlign: 'center'
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                    Response Time
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                    We typically respond within 24 hours during business days. 
                    For urgent matters, please call us directly.
                  </Typography>
                </Card>
              </Box>
            </Box>
          </Container>
        </Box>

        <Footer />
    </div>
  );
}
