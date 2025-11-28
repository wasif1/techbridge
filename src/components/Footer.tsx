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
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, background: 'linear-gradient(135deg, var(--hero-color, hsl(var(--primary))) 0%, var(--hero-color-to, hsl(var(--secondary))) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Tech Bridge
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, opacity: 0.9, lineHeight: 1.7 }}>
              Empowering businesses through innovative technology solutions, logistics management, and workforce optimization.
            </Typography>
            <Stack direction="row" spacing={1}>
              {/* Social icons: render only those enabled in themeConfig.socialIcons.show
                  Icons remain in code so you can toggle them on later from the config. */}
              {
                (themeConfig as any).socialIcons?.enabled && (themeConfig as any).socialIcons?.show?.linkedin && (
                  <IconButton
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: 'rgba(255,255,255,0.9)',
                      bgcolor: 'rgba(255,255,255,0.04)',
                      transition: 'all 0.18s ease',
                      '&:hover': {
                        bgcolor: 'transparent',
                        '& svg': {
                          background: 'linear-gradient(135deg, var(--hero-color, hsl(var(--primary))) 0%, var(--hero-color-to, hsl(var(--secondary))) 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text'
                        }
                      }
                    }}
                  >
                    <LinkedIn sx={{ fontSize: 20 }} />
                  </IconButton>
                )
              }

              {
                (themeConfig as any).socialIcons?.enabled && (themeConfig as any).socialIcons?.show?.upwork && (
                  <IconButton
                    href="https://www.upwork.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: 'rgba(255,255,255,0.9)',
                      bgcolor: 'rgba(255,255,255,0.04)',
                      transition: 'all 0.18s ease',
                      '&:hover': {
                        bgcolor: 'transparent',
                        '& svg': {
                          background: 'linear-gradient(135deg, var(--hero-color, hsl(var(--primary))) 0%, var(--hero-color-to, hsl(var(--secondary))) 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text'
                        }
                      }
                    }}
                  >
                    {/* Simple Upwork-like mark as inline SVG so we don't add a dependency. Replace later if you have a branded SVG. */}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.5 12c0-2.485 2.015-4.5 4.5-4.5 1.242 0 2.364.497 3.178 1.304l1.06-1.06A6.002 6.002 0 0 0 11 6.5C7.962 6.5 5.25 9.212 5.25 12.25S7.962 18 11 18c2.174 0 4.01-1.319 4.74-3.203l-1.14-.456A3.5 3.5 0 0 1 11 15.5c-1.933 0-3.5-1.567-3.5-3.5z" fill="currentColor" />
                    </svg>
                  </IconButton>
                )
              }

              {/* Other icons kept in code - hidden by default via config (do not remove) */}
              {
                (themeConfig as any).socialIcons?.enabled && (themeConfig as any).socialIcons?.show?.facebook && (
                  <IconButton href="https://facebook.com" target="_blank" rel="noopener noreferrer" sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.04)', '&:hover': { bgcolor: 'transparent', '& svg': { background: 'linear-gradient(135deg, var(--hero-color, hsl(var(--primary))) 0%, var(--hero-color-to, hsl(var(--secondary))) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' } } }}>
                    <Facebook />
                  </IconButton>
                )
              }

              {
                (themeConfig as any).socialIcons?.enabled && (themeConfig as any).socialIcons?.show?.twitter && (
                  <IconButton href="https://twitter.com" target="_blank" rel="noopener noreferrer" sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.04)', '&:hover': { bgcolor: 'transparent', '& svg': { background: 'linear-gradient(135deg, var(--hero-color, hsl(var(--primary))) 0%, var(--hero-color-to, hsl(var(--secondary))) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' } } }}>
                    <Twitter />
                  </IconButton>
                )
              }

              {
                (themeConfig as any).socialIcons?.enabled && (themeConfig as any).socialIcons?.show?.instagram && (
                  <IconButton href="https://instagram.com" target="_blank" rel="noopener noreferrer" sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.04)', '&:hover': { bgcolor: 'transparent', '& svg': { background: 'linear-gradient(135deg, var(--hero-color, hsl(var(--primary))) 0%, var(--hero-color-to, hsl(var(--secondary))) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' } } }}>
                    <Instagram />
                  </IconButton>
                )
              }

              {
                (themeConfig as any).socialIcons?.enabled && (themeConfig as any).socialIcons?.show?.youtube && (
                  <IconButton href="https://youtube.com" target="_blank" rel="noopener noreferrer" sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.04)', '&:hover': { bgcolor: 'transparent', '& svg': { background: 'linear-gradient(135deg, var(--hero-color, hsl(var(--primary))) 0%, var(--hero-color-to, hsl(var(--secondary))) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' } } }}>
                    <YouTube />
                  </IconButton>
                )
              }
            </Stack>
          </Box>

          {/* Services */}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, background: 'linear-gradient(135deg, var(--hero-color, hsl(var(--primary))) 0%, var(--hero-color-to, hsl(var(--secondary))) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Services
            </Typography>
            <Stack spacing={1.5}>
              <Link to="/services/hr" style={{ background: 'linear-gradient(135deg, var(--hero-color, hsl(var(--primary))) 0%, var(--hero-color-to, hsl(var(--secondary))) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', textDecoration: 'none', opacity: 0.95, fontSize: '0.9rem', transition: 'opacity 0.3s ease' }}>
                HR Services
              </Link>
              <Link to="/services/software-development" style={{ background: 'linear-gradient(135deg, var(--hero-color, hsl(var(--primary))) 0%, var(--hero-color-to, hsl(var(--secondary))) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', textDecoration: 'none', opacity: 0.95, fontSize: '0.9rem', transition: 'opacity 0.3s ease' }}>
                Software Development
              </Link>
              <Link to="/services/supply-chain" style={{ background: 'linear-gradient(135deg, var(--hero-color, hsl(var(--primary))) 0%, var(--hero-color-to, hsl(var(--secondary))) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', textDecoration: 'none', opacity: 0.95, fontSize: '0.9rem', transition: 'opacity 0.3s ease' }}>
                Supply Chain
              </Link>
              <Link to="/services/saas" style={{ background: 'linear-gradient(135deg, var(--hero-color, hsl(var(--primary))) 0%, var(--hero-color-to, hsl(var(--secondary))) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', textDecoration: 'none', opacity: 0.95, fontSize: '0.9rem', transition: 'opacity 0.3s ease' }}>
                SaaS Products
              </Link>
            </Stack>
          </Box>

          {/* Quick Links */}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, background: 'linear-gradient(135deg, var(--hero-color, hsl(var(--primary))) 0%, var(--hero-color-to, hsl(var(--secondary))) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Company
            </Typography>
            <Stack spacing={1.5}>
              <a href="#about" onClick={(e) => { e.preventDefault(); navTo('about'); }} style={{ background: 'linear-gradient(135deg, var(--hero-color, hsl(var(--primary))) 0%, var(--hero-color-to, hsl(var(--secondary))) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', textDecoration: 'none', opacity: 0.95, fontSize: '0.9rem', transition: 'opacity 0.3s ease', cursor: 'pointer' }}>
                About Us
              </a>
              <a href="#testimonials" onClick={(e) => { e.preventDefault(); navTo('testimonials'); }} style={{ background: 'linear-gradient(135deg, var(--hero-color, hsl(var(--primary))) 0%, var(--hero-color-to, hsl(var(--secondary))) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', textDecoration: 'none', opacity: 0.95, fontSize: '0.9rem', transition: 'opacity 0.3s ease', cursor: 'pointer' }}>
                Testimonials
              </a>
              <a href="#projects" onClick={(e) => { e.preventDefault(); navTo('projects'); }} style={{ background: 'linear-gradient(135deg, var(--hero-color, hsl(var(--primary))) 0%, var(--hero-color-to, hsl(var(--secondary))) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', textDecoration: 'none', opacity: 0.95, fontSize: '0.9rem', transition: 'opacity 0.3s ease', cursor: 'pointer' }}>
                Projects
              </a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); navTo('contact'); }} style={{ background: 'linear-gradient(135deg, var(--hero-color, hsl(var(--primary))) 0%, var(--hero-color-to, hsl(var(--secondary))) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', textDecoration: 'none', opacity: 0.95, fontSize: '0.9rem', transition: 'opacity 0.3s ease', cursor: 'pointer' }}>
                Contact
              </a>
            </Stack>
          </Box>

          {/* Contact Info */}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, background: 'linear-gradient(135deg, var(--hero-color, hsl(var(--primary))) 0%, var(--hero-color-to, hsl(var(--secondary))) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Contact Us
            </Typography>
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Email sx={{ fontSize: '1.2rem', background: 'linear-gradient(135deg, var(--hero-color, hsl(var(--primary))) 0%, var(--hero-color-to, hsl(var(--secondary))) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', transition: 'all 0.3s ease' }} />
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  info@techbridge.co.uk
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Phone sx={{ fontSize: '1.2rem', background: 'linear-gradient(135deg, var(--hero-color, hsl(var(--primary))) 0%, var(--hero-color-to, hsl(var(--secondary))) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', transition: 'all 0.3s ease' }} />
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  +44 20 1234 5678
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'start', gap: 1.5 }}>
                <LocationOn sx={{ fontSize: '1.2rem', background: 'linear-gradient(135deg, var(--hero-color, hsl(var(--primary))) 0%, var(--hero-color-to, hsl(var(--secondary))) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', transition: 'all 0.3s ease' }} />
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
