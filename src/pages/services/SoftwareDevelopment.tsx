import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { 
  Container, 
  Typography, 
  Box, 
  Card, 
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Chip
} from "@mui/material";
import { 
  CheckCircle, 
  Code, 
  CloudQueue, 
  PhoneAndroid,
  Web,
  Security,
  Speed
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function SoftwareDevelopment() {
  const services = [
    "Custom Web Application Development",
    "Mobile App Development (iOS & Android)",
    "Enterprise Software Solutions",
    "Cloud-Based Systems & SaaS",
    "API Development & Integration",
    "E-commerce Platforms",
    "Database Design & Management",
    "DevOps & CI/CD Implementation"
  ];

  const technologies = [
    { name: "Frontend", items: ["React", "Vue.js", "Angular", "Next.js"] },
    { name: "Backend", items: ["Node.js", "Python", "Java", ".NET"] },
    { name: "Mobile", items: ["React Native", "Flutter", "Swift", "Kotlin"] },
    { name: "Cloud", items: ["AWS", "Azure", "Google Cloud", "Docker"] }
  ];

  const features = [
    {
      icon: <Code sx={{ fontSize: 48 }} />,
      title: "Custom Development",
      description: "Tailored solutions built to your exact specifications and business needs"
    },
    {
      icon: <CloudQueue sx={{ fontSize: 48 }} />,
      title: "Cloud-Native",
      description: "Scalable cloud architecture for maximum performance and reliability"
    },
    {
      icon: <PhoneAndroid sx={{ fontSize: 48 }} />,
      title: "Cross-Platform",
      description: "Applications that work seamlessly across all devices and platforms"
    },
    {
      icon: <Web sx={{ fontSize: 48 }} />,
      title: "Modern UI/UX",
      description: "Beautiful, intuitive interfaces that users love to interact with"
    },
    {
      icon: <Security sx={{ fontSize: 48 }} />,
      title: "Secure & Compliant",
      description: "Industry-standard security practices and compliance certifications"
    },
    {
      icon: <Speed sx={{ fontSize: 48 }} />,
      title: "Agile Delivery",
      description: "Fast, iterative development with regular updates and feedback"
    }
  ];

  return (
    <div className="min-h-screen theme-software-dev">
      <Navigation />

      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, hsl(var(--hero-gradient-from)), hsl(var(--hero-gradient-to)))',
          color: 'white',
          py: { xs: 10, md: 14 }
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h2" sx={{ fontWeight: 700, mb: 3 }}>
              Software Development Services
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, opacity: 0.95, maxWidth: 800 }}>
              Transform your ideas into powerful digital solutions with our expert development team
            </Typography>
            <Button 
              variant="contained"
              component={Link}
              to="/#contact"
              size="large"
              sx={{ 
                bgcolor: 'white',
                color: 'primary.main',
                px: 5,
                py: 1.5,
                '&:hover': { 
                  bgcolor: 'rgba(255,255,255,0.9)' 
                }
              }}
            >
              Start Your Project
            </Button>
          </motion.div>
        </Container>
      </Box>

      {/* Overview Section */}
      <Box sx={{ py: 10, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6, alignItems: 'center' }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h3" sx={{ fontWeight: 700, mb: 3 }}>
                Build Innovative Software Solutions
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 3 }}>
                From concept to deployment, we deliver cutting-edge software solutions that drive business 
                growth. Our experienced developers use the latest technologies and best practices to create 
                scalable, maintainable applications.
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Whether you need a web application, mobile app, or enterprise system, we have the expertise 
                to bring your vision to life.
              </Typography>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Box
                sx={{
                  background: 'linear-gradient(135deg, hsl(var(--hero-gradient-from)), hsl(var(--hero-gradient-to)))',
                  borderRadius: 4,
                  p: 5,
                  boxShadow: 'var(--shadow-elegant)'
                }}
              >
                <Typography variant="h4" sx={{ color: 'white', fontWeight: 700, mb: 3 }}>
                  What We Build
                </Typography>
                <List>
                  {services.slice(0, 6).map((service, index) => (
                    <ListItem key={index} sx={{ py: 1, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: 35 }}>
                        <CheckCircle sx={{ color: 'white' }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary={service}
                        sx={{ '& .MuiListItemText-primary': { color: 'white', fontWeight: 500 } }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Technologies Section */}
      <Box sx={{ py: 10, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ fontWeight: 700, textAlign: 'center', mb: 2 }}>
            Technologies We Use
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center', color: 'text.secondary', mb: 6 }}>
            We leverage cutting-edge technologies to build robust, scalable solutions
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' }, gap: 4 }}>
            {technologies.map((tech, index) => (
              <Card key={index} sx={{ height: '100%', textAlign: 'center' }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: 'primary.main' }}>
                    {tech.name}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
                    {tech.items.map((item, i) => (
                      <Chip key={i} label={item} size="small" />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 10, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ fontWeight: 700, textAlign: 'center', mb: 8 }}>
            Why Choose Our Development Services
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' }, gap: 4 }}>
            {features.map((feature, index) => (
              <Card
                key={index}
                sx={{
                  height: '100%',
                  transition: 'all 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 'var(--shadow-elegant)'
                  }
                }}
              >
                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box 
        sx={{ 
          py: 10, 
          bgcolor: 'grey.50',
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 3 }}>
            Ready to Start Your Development Project?
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary', mb: 5 }}>
            Let's discuss how we can turn your ideas into reality
          </Typography>
          <Button 
            variant="contained"
            component={Link}
            to="/#contact"
            size="large"
            sx={{ 
              px: 6,
              py: 2,
              background: 'linear-gradient(135deg, hsl(var(--hero-gradient-from)), hsl(var(--hero-gradient-to)))',
              boxShadow: 'var(--shadow-elegant)',
              '&:hover': {
                boxShadow: '0 15px 40px -15px hsl(217 91% 60% / 0.4)',
              }
            }}
          >
            Get in Touch
          </Button>
        </Container>
      </Box>

      <Footer />
    </div>
  );
}
