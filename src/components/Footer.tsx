import { Box, Container, Typography, IconButton, Stack } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { themeConfig } from '@/config/theme.config';
import { 
  Facebook, 
  Twitter, 
  LinkedIn, 
  Instagram,
  YouTube,
  Email,
  Phone,
  LocationOn
} from "@mui/icons-material";

export default function Footer() {
  const navigate = useNavigate();

  const navTo = (id: string) => {
    navigate('/');
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 80);
  };

  return (
    <Box
      component="footer"
      sx={{
        /* Static footer background chosen to work well with all theme accents */
        background: '#111827',
        color: 'white',
        pt: 8,
        pb: 4,
        mt: 'auto'
      }}
    >
        <Container maxWidth="lg">
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(4, 1fr)' }, gap: 4, mb: 6 }}>
          {/* Company Info */}
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              Tech Bridge
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, opacity: 0.9, lineHeight: 1.7 }}>
              Empowering businesses through innovative technology solutions, logistics management, and workforce optimization.
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  color: 'white', 
                  bgcolor: 'rgba(255,255,255,0.1)',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' }
                }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  color: 'white', 
                  bgcolor: 'rgba(255,255,255,0.1)',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' }
                }}
              >
                <Twitter />
              </IconButton>
              <IconButton
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  color: 'white', 
                  bgcolor: 'rgba(255,255,255,0.1)',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' }
                }}
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  color: 'white', 
                  bgcolor: 'rgba(255,255,255,0.1)',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' }
                }}
              >
                <Instagram />
              </IconButton>
              <IconButton
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  color: 'white', 
                  bgcolor: 'rgba(255,255,255,0.1)',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' }
                }}
              >
                <YouTube />
              </IconButton>
            </Stack>
          </Box>

          {/* Services */}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Services
            </Typography>
            <Stack spacing={1.5}>
              <Link to="/services/hr" style={{ color: 'var(--hero-color, hsl(var(--primary)))', textDecoration: 'none', opacity: 0.95, fontSize: '0.9rem', transition: 'color var(--hero-transition-duration) ease' }}>
                HR Services
              </Link>
              <Link to="/services/software-development" style={{ color: 'var(--hero-color, hsl(var(--primary)))', textDecoration: 'none', opacity: 0.95, fontSize: '0.9rem', transition: 'color var(--hero-transition-duration) ease' }}>
                Software Development
              </Link>
              <Link to="/services/supply-chain" style={{ color: 'var(--hero-color, hsl(var(--primary)))', textDecoration: 'none', opacity: 0.95, fontSize: '0.9rem', transition: 'color var(--hero-transition-duration) ease' }}>
                Supply Chain
              </Link>
              <Link to="/services/saas" style={{ color: 'var(--hero-color, hsl(var(--primary)))', textDecoration: 'none', opacity: 0.95, fontSize: '0.9rem', transition: 'color var(--hero-transition-duration) ease' }}>
                SaaS Products
              </Link>
            </Stack>
          </Box>

          {/* Quick Links */}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Company
            </Typography>
            <Stack spacing={1.5}>
              <a href="#about" onClick={(e) => { e.preventDefault(); navTo('about'); }} style={{ color: 'var(--hero-color, hsl(var(--primary)))', textDecoration: 'none', opacity: 0.95, fontSize: '0.9rem', transition: 'color var(--hero-transition-duration) ease', cursor: 'pointer' }}>
                About Us
              </a>
              <a href="#testimonials" onClick={(e) => { e.preventDefault(); navTo('testimonials'); }} style={{ color: 'var(--hero-color, hsl(var(--primary)))', textDecoration: 'none', opacity: 0.95, fontSize: '0.9rem', transition: 'color var(--hero-transition-duration) ease', cursor: 'pointer' }}>
                Testimonials
              </a>
              <a href="#projects" onClick={(e) => { e.preventDefault(); navTo('projects'); }} style={{ color: 'var(--hero-color, hsl(var(--primary)))', textDecoration: 'none', opacity: 0.95, fontSize: '0.9rem', transition: 'color var(--hero-transition-duration) ease', cursor: 'pointer' }}>
                Projects
              </a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); navTo('contact'); }} style={{ color: 'var(--hero-color, hsl(var(--primary)))', textDecoration: 'none', opacity: 0.95, fontSize: '0.9rem', transition: 'color var(--hero-transition-duration) ease', cursor: 'pointer' }}>
                Contact
              </a>
            </Stack>
          </Box>

          {/* Contact Info */}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Contact Us
            </Typography>
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Email sx={{ fontSize: '1.2rem', color: 'var(--hero-color, hsl(var(--primary)))', transition: 'color var(--hero-transition-duration) ease' }} />
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  info@techbridge.co.uk
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Phone sx={{ fontSize: '1.2rem', color: 'var(--hero-color, hsl(var(--primary)))', transition: 'color var(--hero-transition-duration) ease' }} />
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  +44 20 1234 5678
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'start', gap: 1.5 }}>
                <LocationOn sx={{ fontSize: '1.2rem', color: 'var(--hero-color, hsl(var(--primary)))', transition: 'color var(--hero-transition-duration) ease' }} />
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  London, United Kingdom
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Box>

        {/* Bottom Bar */}
        <Box
          sx={{
            pt: 4,
            borderTop: '1px solid rgba(255,255,255,0.2)',
            textAlign: 'center'
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.9 }}>
            © {new Date().getFullYear()} Tech Bridge. All rights reserved. | Privacy Policy | Terms of Service
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
