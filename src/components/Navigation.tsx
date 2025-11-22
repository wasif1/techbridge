import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  AppBar, 
  Toolbar, 
  Button, 
  Box, 
  Container,
  Menu,
  MenuItem,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  IconButton,
  Drawer,
  useMediaQuery,
  useTheme
} from "@mui/material";
import { 
  Code, 
  People, 
  LocalShipping, 
  Cloud,
  ArrowForward,
  Menu as MenuIcon,
  Close
} from "@mui/icons-material";

const services = [
  {
    title: "HR Services",
    path: "/services/hr",
    icon: <People />,
    description: "Complete workforce management solutions"
  },
  {
    title: "Software Development",
    path: "/services/software-development",
    icon: <Code />,
    description: "Custom software and enterprise solutions"
  },
  {
    title: "Supply Chain Services",
    path: "/services/supply-chain",
    icon: <LocalShipping />,
    description: "End-to-end logistics management"
  },
  {
    title: "SaaS Products",
    path: "/services/saas",
    icon: <Cloud />,
    description: "Cloud-based business solutions"
  }
];

export default function Navigation() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMobileMenuClose = () => {
    setMobileOpen(false);
    handleClose();
  };

  useEffect(() => {
    // expose a CSS variable for nav height so content can be offset when nav is fixed
    try { document.documentElement.style.setProperty('--nav-height', '64px'); } catch (e) {}
    return () => { try { document.documentElement.style.removeProperty('--nav-height'); } catch (e) {} };
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <AppBar 
      position="fixed" 
      elevation={0}
      sx={(theme) => ({ 
        // offset by the top headline height if present
        top: 'var(--top-headline-height, 0)',
        position: 'fixed',
        zIndex: (theme as any).zIndex?.appBar ? (theme as any).zIndex.appBar + 40 : 1250,
        bgcolor: 'background.paper',
        borderBottom: '1px solid',
        borderColor: 'divider'
      })}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
            <Link to="/" style={{ textDecoration: "none" }}>
            <Typography 
              variant="h5" 
              component="div" 
              sx={{ 
                fontWeight: 700,
                background: 'linear-gradient(135deg, var(--hero-color, hsl(var(--primary))) 0%, var(--hero-color-to, hsl(var(--primaryLight))) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                transition: 'background var(--hero-transition-duration) ease'
              }}
            >
              Tech Bridge
            </Typography>
          </Link>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: "center" }}>
            <Button 
              component={Link} 
              to="/"
              sx={{ 
                color: isActive('/') ? 'var(--hero-color, hsl(var(--primary)))' : 'text.primary',
                fontWeight: isActive('/') ? 600 : 400,
                transition: 'color var(--hero-transition-duration) ease',
                '&:hover': { color: 'var(--hero-color, hsl(var(--primary)))' }
              }}
            >
              Home
            </Button>

            <Button 
              onClick={() => scrollToSection('about')}
              sx={{ 
                color: 'text.primary',
                transition: 'color var(--hero-transition-duration) ease',
                '&:hover': { color: 'var(--hero-color, hsl(var(--primary)))' }
              }}
            >
              About
            </Button>

            <Button
              onClick={handleClick}
              endIcon={<ArrowForward sx={{ transform: open ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />}
              sx={{ 
                color: location.pathname.includes('/services') ? 'var(--hero-color, hsl(var(--primary)))' : 'text.primary',
                fontWeight: location.pathname.includes('/services') ? 600 : 400,
                transition: 'color var(--hero-transition-duration) ease',
                '&:hover': { color: 'var(--hero-color, hsl(var(--primary)))' }
              }}
            >
              Services
            </Button>

            <Button 
              onClick={() => scrollToSection('contact')}
              sx={{ 
                color: 'text.primary',
                transition: 'color var(--hero-transition-duration) ease',
                '&:hover': { color: 'var(--hero-color, hsl(var(--primary)))' }
              }}
            >
              Contact
            </Button>

            <Button 
              variant="contained"
              onClick={() => scrollToSection('contact')}
              sx={{ 
                ml: 2,
                background: 'var(--hero-color, hsl(var(--primary)))',
                boxShadow: 'var(--shadow-elegant)',
                transition: 'background var(--hero-transition-duration) ease',
                '&:hover': {
                  boxShadow: '0 15px 40px -15px rgba(0,0,0,0.15)',
                }
              }}
            >
              Get Started
            </Button>
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            sx={{ display: { xs: 'flex', md: 'none' }, color: 'text.primary' }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            mt: 1,
            minWidth: 700,
            borderRadius: 3,
            boxShadow: 'var(--shadow-elegant)',
            overflow: 'visible',
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 20,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            }
          }
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Paper elevation={0} sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Box sx={{ flex: '0 0 60%' }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Our Services
              </Typography>
              <List sx={{ p: 0 }}>
                {services.map((service) => (
                  <ListItem
                    key={service.path}
                    component={Link}
                    to={service.path}
                    onClick={handleClose}
                    sx={{
                      borderRadius: 2,
                      mb: 1,
                      transition: 'all 0.2s',
                      '&:hover': {
                        bgcolor: 'action.hover',
                        transform: 'translateX(8px)'
                      }
                    }}
                  >
                    <ListItemIcon sx={{ color: 'var(--hero-color, hsl(var(--primary)))', minWidth: 40, transition: 'color var(--hero-transition-duration) ease' }}>
                      {service.icon}
                    </ListItemIcon>
                    <ListItemText 
                      primary={service.title}
                      secondary={service.description}
                      primaryTypographyProps={{ fontWeight: 600 }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
            <Box sx={{ flex: '0 0 37%' }}>
                  <Box
                    sx={{
                      height: '100%',
                      borderRadius: 3,
                      // use the hero color (solid) as a reliable fallback for the menu panel
                      background: 'var(--hero-color, hsl(var(--hero-gradient-from)))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      p: 3,
                      color: 'white',
                      transition: 'background var(--hero-transition-duration) ease'
                    }}
                  >
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                    Ready to Scale?
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 3, opacity: 0.9 }}>
                    Let's discuss how we can accelerate your business growth
                  </Typography>
                  <Button 
                    variant="contained"
                    component={Link}
                    to="/#contact"
                    onClick={handleClose}
                    sx={{ 
                      bgcolor: 'white',
                      color: 'var(--hero-color)',
                      transition: 'color var(--hero-transition-duration) ease',
                      '&:hover': { 
                        bgcolor: 'rgba(255,255,255,0.9)' 
                      }
                    }}
                  >
                    Contact Us
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Menu>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            width: '80%', 
            maxWidth: 360,
            bgcolor: 'background.paper'
          }
        }}
      >
        <Box sx={{ p: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, color: 'var(--hero-color, hsl(var(--primary)))', transition: 'color var(--hero-transition-duration) ease' }}>
              Tech Bridge
            </Typography>
            <IconButton onClick={handleDrawerToggle}>
              <Close />
            </IconButton>
          </Box>

          <Stack spacing={1}>
            <Button 
              component={Link} 
              to="/"
              onClick={handleMobileMenuClose}
              fullWidth
              sx={{ 
                justifyContent: 'flex-start',
                color: isActive('/') ? 'var(--hero-color, hsl(var(--primary)))' : 'text.primary',
                fontWeight: isActive('/') ? 600 : 400,
                py: 1.5
              }}
            >
              Home
            </Button>

            <Button 
              onClick={() => {
                scrollToSection('about');
                handleMobileMenuClose();
              }}
              fullWidth
              sx={{ 
                justifyContent: 'flex-start',
                color: 'text.primary',
                py: 1.5
              }}
            >
              About
            </Button>

            <Box>
              <Typography 
                variant="subtitle2" 
                sx={{ 
                  px: 2, 
                  py: 1.5, 
                  fontWeight: 600,
                  color: 'text.secondary',
                  textTransform: 'uppercase',
                  fontSize: '0.75rem'
                }}
              >
                Services
              </Typography>
              <List sx={{ p: 0 }}>
                {services.map((service) => (
                  <ListItem
                    key={service.path}
                    component={Link}
                    to={service.path}
                    onClick={handleMobileMenuClose}
                    sx={{
                      py: 1.5,
                      pl: 4,
                      '&:hover': {
                        bgcolor: 'action.hover'
                      }
                    }}
                  >
                    <ListItemIcon sx={{ color: 'var(--hero-color, hsl(var(--primary)))', minWidth: 36, transition: 'color var(--hero-transition-duration) ease' }}>
                      {service.icon}
                    </ListItemIcon>
                    <ListItemText 
                      primary={service.title}
                      primaryTypographyProps={{ fontSize: '0.95rem' }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>

            <Button 
              onClick={() => {
                scrollToSection('contact');
                handleMobileMenuClose();
              }}
              fullWidth
              sx={{ 
                justifyContent: 'flex-start',
                color: 'text.primary',
                py: 1.5
              }}
            >
              Contact
            </Button>

            <Button 
              variant="contained"
              onClick={() => {
                scrollToSection('contact');
                handleMobileMenuClose();
              }}
              fullWidth
              sx={{ 
                mt: 2,
                background: 'var(--hero-color, hsl(var(--primary)))',
                transition: 'background var(--hero-transition-duration) ease',
                py: 1.5
              }}
            >
              Get Started
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </AppBar>
  );
}
