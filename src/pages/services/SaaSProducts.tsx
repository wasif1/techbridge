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
  Cloud, 
  Autorenew, 
  Security,
  Speed,
  TrendingUp,
  Groups
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function SaaSProducts() {
  const products = [
    "Business Management Platform",
    "HR & Payroll System",
    "Supply Chain Management Tool",
    "Project Management Software",
    "Customer Relationship Management (CRM)",
    "Analytics & Reporting Dashboard",
    "Team Collaboration Suite",
    "Inventory Management System"
  ];

  const features = [
    {
      icon: <Cloud sx={{ fontSize: 48 }} />,
      title: "Cloud-Based",
      description: "Access your data anytime, anywhere from any device"
    },
    {
      icon: <Autorenew sx={{ fontSize: 48 }} />,
      title: "Automatic Updates",
      description: "Always stay current with the latest features and improvements"
    },
    {
      icon: <Security sx={{ fontSize: 48 }} />,
      title: "Enterprise Security",
      description: "Bank-level encryption and security protocols"
    },
    {
      icon: <Speed sx={{ fontSize: 48 }} />,
      title: "High Performance",
      description: "Lightning-fast response times and reliable uptime"
    },
    {
      icon: <TrendingUp sx={{ fontSize: 48 }} />,
      title: "Scalable",
      description: "Grows with your business from startup to enterprise"
    },
    {
      icon: <Groups sx={{ fontSize: 48 }} />,
      title: "Collaborative",
      description: "Built for teams to work together seamlessly"
    }
  ];

  const pricing = [
    {
      tier: "Starter",
      price: "$49",
      period: "/month",
      features: ["Up to 10 users", "5GB storage", "Basic support", "Core features"]
    },
    {
      tier: "Professional",
      price: "$149",
      period: "/month",
      features: ["Up to 50 users", "50GB storage", "Priority support", "Advanced features", "Custom integrations"],
      highlighted: true
    },
    {
      tier: "Enterprise",
      price: "Custom",
      period: "",
      features: ["Unlimited users", "Unlimited storage", "24/7 support", "All features", "Dedicated account manager", "Custom development"]
    }
  ];

  return (
    <div className="min-h-screen theme-saas-products">
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
              SaaS Products
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, opacity: 0.95, maxWidth: 800 }}>
              Powerful cloud-based solutions to streamline your business operations and drive growth
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
              Start Free Trial
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
                Modern Software for Modern Business
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 3 }}>
                Our SaaS products are designed to help businesses operate more efficiently. With intuitive 
                interfaces, powerful features, and seamless integrations, our cloud-based solutions enable 
                teams to work smarter, not harder.
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                No installation, no maintenance, no hassle. Just log in and start working. We handle all 
                the technical details so you can focus on growing your business.
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
                  Available Products
                </Typography>
                <List>
                  {products.slice(0, 6).map((product, index) => (
                    <ListItem key={index} sx={{ py: 1, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: 35 }}>
                        <CheckCircle sx={{ color: 'white' }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary={product}
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

      {/* Features Section */}
      <Box sx={{ py: 10, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ fontWeight: 700, textAlign: 'center', mb: 8 }}>
            Why Choose Our SaaS Solutions
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

      {/* Pricing Section */}
      <Box sx={{ py: 10, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ fontWeight: 700, textAlign: 'center', mb: 2 }}>
            Simple, Transparent Pricing
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center', color: 'text.secondary', mb: 8 }}>
            Choose the plan that's right for your business
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 4 }}>
            {pricing.map((plan, index) => (
              <Card
                key={index}
                sx={{
                  height: '100%',
                  position: 'relative',
                  border: plan.highlighted ? '2px solid' : 'none',
                  borderColor: 'primary.main',
                  transition: 'all 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 'var(--shadow-elegant)'
                  }
                }}
              >
                {plan.highlighted && (
                  <Chip 
                    label="Most Popular"
                    color="primary"
                    sx={{ 
                      position: 'absolute',
                      top: 16,
                      right: 16
                    }}
                  />
                )}
                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                    {plan.tier}
                  </Typography>
                  <Box sx={{ mb: 4 }}>
                    <Typography 
                      variant="h3" 
                      component="span"
                      sx={{ fontWeight: 700, color: 'primary.main' }}
                    >
                      {plan.price}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      component="span"
                      sx={{ color: 'text.secondary' }}
                    >
                      {plan.period}
                    </Typography>
                  </Box>
                  <List sx={{ mb: 3 }}>
                    {plan.features.map((feature, i) => (
                      <ListItem key={i} sx={{ py: 1 }}>
                        <ListItemIcon sx={{ minWidth: 35 }}>
                          <CheckCircle color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText 
                          primary={feature}
                          primaryTypographyProps={{ variant: 'body2' }}
                        />
                      </ListItem>
                    ))}
                  </List>
                  <Button 
                    variant={plan.highlighted ? "contained" : "outlined"}
                    fullWidth
                    size="large"
                    component={Link}
                    to="/#contact"
                    sx={{
                      ...(plan.highlighted && {
                        background: 'linear-gradient(135deg, hsl(var(--hero-gradient-from)), hsl(var(--hero-gradient-to)))',
                        boxShadow: 'var(--shadow-elegant)'
                      })
                    }}
                  >
                    Get Started
                  </Button>
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
            Ready to Get Started?
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary', mb: 5 }}>
            Try our SaaS products free for 14 days, no credit card required
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
            Start Free Trial
          </Button>
        </Container>
      </Box>

      <Footer />
    </div>
  );
}
