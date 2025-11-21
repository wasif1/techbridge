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
  Button
} from "@mui/material";
import { 
  CheckCircle, 
  People, 
  Business, 
  Timeline,
  School,
  Assessment
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function HRServices() {
  const features = [
    "Talent Acquisition & Recruitment",
    "Employee Onboarding & Training",
    "Payroll & Benefits Management",
    "Performance Management Systems",
    "HR Compliance & Legal Support",
    "Organizational Development",
    "Employee Engagement Programs",
    "Workforce Planning & Analytics"
  ];

  const benefits = [
    {
      icon: <People sx={{ fontSize: 48 }} />,
      title: "Expert Recruitment",
      description: "Access to top talent pools and streamlined hiring processes"
    },
    {
      icon: <Business sx={{ fontSize: 48 }} />,
      title: "Compliance Assured",
      description: "Stay compliant with all employment laws and regulations"
    },
    {
      icon: <Timeline sx={{ fontSize: 48 }} />,
      title: "Scalable Solutions",
      description: "HR systems that grow with your business needs"
    },
    {
      icon: <School sx={{ fontSize: 48 }} />,
      title: "Training & Development",
      description: "Comprehensive employee development programs"
    },
    {
      icon: <Assessment sx={{ fontSize: 48 }} />,
      title: "Data-Driven Insights",
      description: "Analytics and reporting for informed HR decisions"
    }
  ];

  return (
    <div className="min-h-screen theme-hr-services">
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
              HR Services
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, opacity: 0.95, maxWidth: 800 }}>
              Complete workforce management solutions to help you attract, develop, and retain top talent
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
              Get Started
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
                Transform Your Workforce
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 3 }}>
                Our comprehensive HR services are designed to streamline your human resource operations, 
                from recruitment to retirement. We provide strategic HR solutions that align with your 
                business objectives and create a positive workplace culture.
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                With decades of combined experience, our HR team understands the complexities of workforce 
                management in today's dynamic business environment.
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
                  Key Features
                </Typography>
                <List>
                  {features.slice(0, 6).map((feature, index) => (
                    <ListItem key={index} sx={{ py: 1, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: 35 }}>
                        <CheckCircle sx={{ color: 'white' }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary={feature}
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

      {/* Benefits Section */}
      <Box sx={{ py: 10, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ fontWeight: 700, textAlign: 'center', mb: 8 }}>
            Why Choose Our HR Services
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' }, gap: 4 }}>
            {benefits.map((benefit, index) => (
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
                    {benefit.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                    {benefit.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                    {benefit.description}
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
          bgcolor: 'background.paper',
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 3 }}>
            Ready to Optimize Your HR Operations?
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary', mb: 5 }}>
            Let's discuss how our HR services can help your business thrive
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
            Contact Us Today
          </Button>
        </Container>
      </Box>

      <Footer />
    </div>
  );
}
