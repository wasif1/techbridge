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
  Button,
  Avatar,
  Chip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Tooltip,
  Fade
} from "@mui/material";
import { FormatQuote, Launch, Facebook, Twitter, LinkedIn, Instagram, CheckCircle, WhatsApp } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Code, LocalShipping, People, Cloud } from "@mui/icons-material";
import { slides as slidesData, servicesSummary, testimonials as testimonialsData, projects as projectsData, getSlideTheme, heroTitle, heroSubtitle, heroCTA, about, servicesSection, testimonialsSection, projectsSection, contactSection, whyChooseUs } from '@/content/home';
import Navigation from "@/components/Navigation";
import { Link } from 'react-router-dom';
import Footer from "@/components/Footer";
import { themeConfig } from "@/config/theme.config";

  const testimonials = testimonialsData;
  const projects = projectsData;

export default function Index() {
  // Image slider for the home hero. Each slide provides an image and a matching accent color
  // Services pages remain static and use their per-page theme classes.
  // Build slides from content constants and theme config so visuals stay data-driven
  const slides = slidesData.map((s) => {
    const colors = getSlideTheme(s.theme);
    return {
      img: s.img,
      from: `hsl(${colors.primary})`,
      to: `hsl(${colors.secondary})`
    };
  });

  const [active, setActive] = useState(0);
  const [selectedService, setSelectedService] = useState('');
  // support both possible shapes (contactSection.whatsapp or contactSection.info.whatsapp)
  const whatsappInfo = ((contactSection as any).whatsapp) || ((contactSection.info as any).whatsapp);
  const [showWhatsAppTooltip, setShowWhatsAppTooltip] = useState(false);

  useEffect(() => {
    if (!whatsappInfo?.number) return;
    // show tooltip briefly on first load (3s), then allow normal hover behavior
    setShowWhatsAppTooltip(true);
    const t = setTimeout(() => setShowWhatsAppTooltip(false), 3000);
    return () => clearTimeout(t);
  }, [whatsappInfo?.number]);

  // Build the wa.me link and optionally prefill text using the template from content.
  const whatsappTemplate = ((contactSection as any).whatsappMessageTemplate) || ((contactSection as any).info?.whatsappMessageTemplate) || ((contactSection as any).whatsapp?.message) || '';
  const buildWhatsAppHref = () => {
    if (!whatsappInfo?.number) return `https://wa.me/${whatsappInfo?.number || ''}`;
    const serviceText = selectedService || 'your services';
    let text = whatsappTemplate || `Hello! 👋 Welcome to Tech Bridge — I'd like to connect about ${serviceText}. Could you share more details?`;
    text = text.replace('{service}', serviceText);
    const encoded = encodeURIComponent(text);
    return `https://wa.me/${whatsappInfo.number}?text=${encoded}`;
  };

  useEffect(() => {
    const id = setInterval(() => setActive((s) => (s + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);

  const heroBg = `linear-gradient(180deg, rgba(2,6,23,0.35), rgba(2,6,23,0.15)), url(${slides[active].img})`;
  const heroColor = slides[active].from;
  const heroColorTo = slides[active].to;

  // expose accent color to the document root so header/footer and other components
  // reliably pick up the dynamic hue while on the home page
  useEffect(() => {
    try {
      document.documentElement.style.setProperty('--hero-color', heroColor);
      document.documentElement.style.setProperty('--hero-color-to', heroColorTo);
      document.documentElement.style.setProperty('--hero-transition-duration', '2200ms');
    } catch (e) {
      // SSR or environments without document
    }
  }, [heroColor, heroColorTo]);

  return (
  <div className="min-h-screen" style={{ overflowX: 'hidden' }}>

      {/* Top headline is now global (rendered from App) */}

      <Navigation />

      {/* Hero Section */}
      <Box
        component="section"
        id="home"
        sx={{
          color: 'white',
          py: { xs: 10, md: 14 },
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
        {/* Layered hero backgrounds for smooth fade */}
        {slides.map((s, i) => (
          <Box
            key={i}
            sx={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `linear-gradient(180deg, rgba(2,6,23,0.35), rgba(2,6,23,0.15)), url(${s.img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transition: 'opacity var(--hero-transition-duration) ease',
              opacity: i === active ? 1 : 0,
              zIndex: 0
            }}
            aria-hidden={i === active ? 'false' : 'true'}
          />
        ))}

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
                  mb: 4,
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  lineHeight: { xs: 1.08, md: 1.04 },
                  letterSpacing: '-0.02em',
                  textShadow: '0 4px 20px rgba(0,0,0,0.2)'
                }}
              >
                {heroTitle}
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
                {heroSubtitle}
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
                    color: 'var(--hero-color, hsl(var(--primary)))',
                    px: 8,
                    py: 2.5,
                    borderRadius: 3,
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
                    transition: 'all 0.3s ease, color var(--hero-transition-duration) ease',
                    '&:hover': {
                      boxShadow: '0 15px 50px rgba(0,0,0,0.3)',
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  {heroCTA}
                </Box>
              </motion.a>
            </motion.div>

              {/* service banners removed as requested (keeps hero compact) */}
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
                      color: 'var(--hero-color, hsl(var(--primary)))', 
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    letterSpacing: '0.15em',
                    transition: 'color var(--hero-transition-duration) ease'
                  }}
                >
                  {about.overline}
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: 700, mb: 3, mt: 1 }}>
                  {about.title}
                </Typography>
                {about.paragraphs.map((p, i) => (
                  <Typography key={i} variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.9, fontSize: '1.1rem', mb: 2 }}>
                    {p}
                  </Typography>
                ))}
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
                    background: `linear-gradient(135deg, var(--hero-color, ${heroColor}) 0%, var(--hero-color-to, ${heroColor}) 100%)`,
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
                  <Box sx={{ position: 'relative', zIndex: 1, textAlign: 'center', width: '100%' }}>
                    <Typography variant="h4" sx={{ color: 'white', fontWeight: 700, mb: 2 }}>
                      Trusted by Businesses Worldwide
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.95)', maxWidth: 520, mx: 'auto' }}>
                      {about.paragraphs[1]}
                    </Typography>

                    <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', mt: 6, flexWrap: 'wrap' }}>
                      {about.stats.map((s, i) => (
                        <Box key={i} sx={{ textAlign: 'center' }}>
                          <Typography variant="h2" sx={{ color: 'white', fontWeight: 800 }}>
                            {s.value}
                          </Typography>
                          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                            {s.label}
                          </Typography>
                        </Box>
                      ))}
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
            {servicesSection.title}
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
            {servicesSection.description}
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }, gap: 4 }}>
            {servicesSummary.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  component={Link}
                  to={service.path}
                  sx={(theme) => {
                    const t = (themeConfig as any)[service.theme];
                    const primary = `hsl(${t.colors.primary})`;
                    const secondary = `hsl(${t.colors.secondary})`;
                    const cardBg = `linear-gradient(135deg, ${primary} 0%, ${secondary} 100%)`;
                    return {
                      height: '100%',
                      background: cardBg,
                      color: 'white',
                      borderRadius: 3,
                      overflow: 'hidden',
                      transition: 'all 0.45s cubic-bezier(0.2,0.8,0.2,1)',
                      boxShadow: 'var(--shadow-elegant)',
                      textDecoration: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      '&:hover': {
                        transform: 'translateY(-12px) scale(1.01)',
                        boxShadow: themeConfig.shared.shadows.glow,
                        borderColor: 'transparent'
                      }
                    };
                  }}
                >
                  {/* Decorative element removed to prevent layout overflow and improve contrast */}

                  <CardContent sx={{ p: 4, textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    <Box 
                      sx={{ 
                        mb: 3,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <Box sx={{
                        width: 72,
                        height: 72,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: 'rgba(255,255,255,0.12)',
                        color: 'white',
                        boxShadow: '0 8px 30px rgba(0,0,0,0.12)'
                      }}>
                        {
                          (() => {
                            const map: Record<string, any> = {
                              Code: <Code fontSize="large" />,
                              People: <People fontSize="large" />,
                              LocalShipping: <LocalShipping fontSize="large" />,
                              Cloud: <Cloud fontSize="large" />
                            };
                            return map[service.iconKey] ?? <Code fontSize="large" />;
                          })()
                        }
                      </Box>
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, color: 'white' }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.8 }}>
                      {service.description}
                    </Typography>
                  </CardContent>

                  <Box sx={{ p: 3, borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'center' }}>
                    <Button size="small" variant="outlined" sx={{ borderColor: 'rgba(255,255,255,0.18)', color: 'white', px: 3, py: 1 }}>
                      Learn more
                    </Button>
                  </Box>
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
            {testimonialsSection.title}
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              textAlign: 'center', 
              color: 'text.secondary', 
              mb: 6,
              maxWidth: 700,
              mx: 'auto'
            }}
          >
            {testimonialsSection.subtitle}
          </Typography>

          {/* Marquee-style testimonials: duplicate list for smooth infinite scroll */}
          <Box sx={{ overflow: 'hidden', position: 'relative' }}>
            <Box
              sx={{
                display: 'flex',
                gap: 3,
                alignItems: 'stretch',
                animation: 'marquee 36s linear infinite',
                '&:hover': { animationPlayState: 'paused' },
                '@keyframes marquee': {
                  '0%': { transform: 'translateX(0)' },
                  '100%': { transform: 'translateX(-50%)' }
                }
              }}
            >
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  style={{ flex: '0 0 320px' }}
                >
                  <Card
                    sx={(theme) => ({
                      height: '100%',
                      minHeight: 180,
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'all 0.25s ease',
                      borderLeft: `6px solid var(--hero-color, hsl(var(--primary)))`,
                      boxShadow: '0 8px 30px rgba(2,6,23,0.06)',
                      '&:hover': { transform: 'translateY(-6px)' }
                    })}
                  >
                    <CardContent sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Avatar sx={{ bgcolor: 'var(--hero-color, hsl(var(--primary)))', width: 48, height: 48, transition: 'background var(--hero-transition-duration) ease' }}>
                          {testimonial.name.split(' ').map(n => n[0]).slice(0,2).join('')}
                        </Avatar>
                        <Box>
                          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                            {testimonial.name}
                          </Typography>
                          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                            {testimonial.role}, {testimonial.company}
                          </Typography>
                        </Box>
                        <Box sx={{ ml: 'auto', color: 'var(--hero-color, hsl(var(--primary)))', transition: 'color var(--hero-transition-duration) ease' }}>
                          {'★'.repeat(testimonial.rating)}
                        </Box>
                      </Box>

                      <Typography variant="body2" sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
                        {testimonial.text}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Projects Section */}
      <Box component="section" id="projects" sx={{ py: 12, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ fontWeight: 700, textAlign: 'center', mb: 3 }}>
            {projectsSection.title}
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
            {projectsSection.description}
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
                  sx={(theme) => ({
                    height: '100%',
                    transition: 'all 0.35s ease',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-8px) scale(1.01)',
                      boxShadow: 'var(--shadow-elegant)'
                    }
                  })}
                >
                  <Box sx={(theme) => ({ height: 180, display: 'flex', alignItems: 'end', p: 2, backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url(${project.image})` })}>
                    <Box sx={{ ml: 0 }}>
                      <Box sx={{ bgcolor: 'rgba(0,0,0,0.5)', color: 'white', px: 2, py: 0.5, borderRadius: 1, fontWeight: 700, fontSize: '0.8rem' }}>
                        {project.category}
                      </Box>
                    </Box>
                  </Box>

                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 2 }}>
                      <Typography variant="h5" sx={{ fontWeight: 700 }}>
                        {project.title}
                      </Typography>
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
                        <Chip key={tagIndex} label={tag} size="small" variant="outlined" sx={{ mr: 1, mb: 1 }} />
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Why Choose Us Section (moved above Contact) */}
      <Box component="section" id="why-choose-us" sx={{ py: 10, background: `linear-gradient(135deg, var(--hero-color, ${heroColor}) 0%, var(--hero-color-to, ${heroColorTo}) 100%)`, color: 'white' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ fontWeight: 700, textAlign: 'center', mb: 1 }}>{whyChooseUs.title}</Typography>
          <Typography variant="body1" sx={{ textAlign: 'center', color: 'rgba(255,255,255,0.92)', mb: 4, maxWidth: 920, mx: 'auto' }}>{whyChooseUs.subtitle}</Typography>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 3, mt: 4 }}>
            {whyChooseUs.items.map((item, idx) => (
              <Box key={idx} sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                <CheckCircle sx={{ color: 'white', mt: '6px' }} />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: 'white' }}>{item.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)' }}>{item.description}</Typography>
                </Box>
              </Box>
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
          bgcolor: 'common.white',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" sx={{ fontWeight: 700, color: 'text.primary', mb: 3 }}>
              {contactSection.title}
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                color: 'text.secondary',
                maxWidth: 700,
                mx: 'auto',
                lineHeight: 1.7
              }}
            >
              {contactSection.subtitle}
            </Typography>
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' }, gap: 4 }}>
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
                <FormControl fullWidth required>
                  <InputLabel id="service-select-label">Service of Interest</InputLabel>
                  <Select
                    labelId="service-select-label"
                    id="service-select"
                    value={selectedService}
                    label="Service of Interest"
                    onChange={(e) => setSelectedService(e.target.value as string)}
                  >
                    {servicesSummary.map((s, i) => (
                      <MenuItem key={i} value={s.title}>{s.title}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
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
                  fullWidth
                  disabled={!selectedService}
                  sx={{
                    background: heroColor,
                    transition: 'background var(--hero-transition-duration) ease, color var(--hero-transition-duration) ease',
                    color: 'white',
                    py: 1.5,
                    fontWeight: 600,
                    '&:hover': {
                      boxShadow: '0 8px 25px rgba(0,0,0,0.2)'
                    }
                  }}
                >
                  {contactSection.formButton}
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
                          bgcolor: 'var(--hero-color, hsl(var(--primary)))', 
                          color: 'white',
                          p: 1.5,
                          borderRadius: 2,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'background var(--hero-transition-duration) ease'
                        }}
                      >
                        <Mail size={24} />
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
                          {contactSection.info.emailHeading}
                        </Typography>
                        {contactSection.info.emails.map((e, i) => (
                          <Typography key={i} variant="body2" sx={{ color: 'text.secondary' }}>
                            {e}
                          </Typography>
                        ))}
                      </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'start', gap: 2 }}>
                      <Box 
                        sx={{ 
                          bgcolor: 'var(--hero-color, hsl(var(--primary)))', 
                          color: 'white',
                          p: 1.5,
                          borderRadius: 2,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'background var(--hero-transition-duration) ease'
                        }}
                      >
                        <Phone size={24} />
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
                          {contactSection.info.callHeading}
                        </Typography>
                        {contactSection.info.phones.map((p, i) => (
                          <Typography key={i} variant="body2" sx={{ color: 'text.secondary' }}>
                            {p}
                          </Typography>
                        ))}
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          Mon-Fri: 9AM - 6PM GMT
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'start', gap: 2 }}>
                      <Box 
                        sx={{ 
                          bgcolor: 'var(--hero-color, hsl(var(--primary)))', 
                          color: 'white',
                          p: 1.5,
                          borderRadius: 2,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'background var(--hero-transition-duration) ease'
                        }}
                      >
                        <MapPin size={24} />
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
                          {contactSection.info.visitHeading}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {contactSection.info.address}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          Available for global projects
                        </Typography>
                      </Box>
                    </Box>

                    {/* WhatsApp / Chatbot Contact */}
                    {whatsappInfo?.number && (
                      <Box sx={{ display: 'flex', alignItems: 'start', gap: 2 }}>
                        <Box sx={{ bgcolor: 'var(--hero-color, hsl(var(--primary)))', color: 'white', p: 1.5, borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background var(--hero-transition-duration) ease' }}>
                          <WhatsApp sx={{ fontSize: 20 }} />
                        </Box>
                        <Box>
                          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>{whatsappInfo.label}</Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            <a href={buildWhatsAppHref()} target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                              +{whatsappInfo.number}
                            </a>
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Chatbot available for quick questions — human support during business hours.
                          </Typography>
                        </Box>
                      </Box>
                    )}
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
      {/* Floating WhatsApp FAB */}
      {whatsappInfo?.number && (
        <Box sx={{ position: 'fixed', right: { xs: 12, md: 24 }, bottom: { xs: 12, md: 24 }, zIndex: 1400 }}>
          <Tooltip
            title={whatsappInfo?.tooltip ?? 'Contact Us'}
            placement="top"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 300 }}
            open={showWhatsAppTooltip ? true : undefined}
          >
            <a href={buildWhatsAppHref()} target="_blank" rel="noreferrer" aria-label="Chat with us on WhatsApp">
              <Box
                sx={{
                  width: 56,
                  height: 56,
                  borderRadius: '50%',
                  bgcolor: '#25D366',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
                  transition: 'transform 0.12s ease, box-shadow 0.12s ease',
                  '&:hover': { transform: 'translateY(-4px) scale(1.02)', boxShadow: '0 14px 40px rgba(0,0,0,0.28)' }
                }}
              >
                <WhatsApp sx={{ fontSize: 28 }} />
              </Box>
            </a>
          </Tooltip>
        </Box>
      )}
    </div>
  );
}
