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
  LocalShipping, 
  Inventory, 
  TrendingUp,
  PublicOutlined,
  AssessmentOutlined
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function SupplyChain() {
  const services = [
    "End-to-End Logistics Management",
    "Supply Chain Optimization",
    "Vendor & Supplier Coordination",
    "Inventory Management Systems",
    "Warehouse Operations",
    "Distribution & Transportation",
    "Procurement Services",
    "Real-Time Tracking & Analytics"
  ];

  const benefits = [
    {
      icon: <LocalShipping sx={{ fontSize: 48 }} />,
      title: "Efficient Logistics",
      description: "Streamlined operations for faster delivery and reduced costs"
    },
    {
      icon: <Inventory sx={{ fontSize: 48 }} />,
      title: "Smart Inventory",
      description: "Optimized inventory levels to minimize waste and maximize availability"
    },
    {
      icon: <TrendingUp sx={{ fontSize: 48 }} />,
      title: "Cost Reduction",
      description: "Identify and eliminate inefficiencies to boost profitability"
    },
    {
      icon: <PublicOutlined sx={{ fontSize: 48 }} />,
      title: "Global Reach",
      description: "International logistics expertise for worldwide operations"
    },
    {
      icon: <AssessmentOutlined sx={{ fontSize: 48 }} />,
      title: "Data Analytics",
      description: "Real-time insights for informed supply chain decisions"
    }
  ];

  return (
    <div className="min-h-screen theme-supply-chain">
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
              Supply Chain Services
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, opacity: 0.95, maxWidth: 800 }}>
              Comprehensive logistics and supply chain solutions to optimize your operations and drive efficiency
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
              Optimize Your Supply Chain
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
                Streamline Your Supply Chain
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 3 }}>
                Our supply chain services are designed to optimize every aspect of your logistics operations. 
                From procurement to final delivery, we ensure your products move efficiently through the supply 
                chain while minimizing costs and maximizing customer satisfaction.
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                With our global network and advanced technology solutions, we provide end-to-end visibility 
                and control over your supply chain operations.
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
                  Our Services
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

      {/* Benefits Section */}
      <Box sx={{ py: 10, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ fontWeight: 700, textAlign: 'center', mb: 8 }}>
            Why Choose Our Supply Chain Services
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

      {/* Process Section */}
      <Box sx={{ py: 10, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ fontWeight: 700, textAlign: 'center', mb: 2 }}>
            Our Approach
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center', color: 'text.secondary', mb: 8, maxWidth: 700, mx: 'auto' }}>
            We follow a systematic approach to optimize your supply chain operations
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' }, gap: 4 }}>
            {[
              { step: "01", title: "Analysis", description: "Comprehensive assessment of your current supply chain" },
              { step: "02", title: "Strategy", description: "Custom optimization plan aligned with your goals" },
              { step: "03", title: "Implementation", description: "Seamless integration of new processes and systems" },
              { step: "04", title: "Monitoring", description: "Continuous tracking and improvement of operations" }
            ].map((item, index) => (
              <Box key={index} sx={{ textAlign: 'center' }}>
                <Typography 
                  variant="h2" 
                  sx={{ 
                    fontWeight: 700, 
                    color: 'primary.main', 
                    opacity: 0.2,
                    mb: 2
                  }}
                >
                  {item.step}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {item.description}
                </Typography>
              </Box>
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
            Ready to Transform Your Supply Chain?
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary', mb: 5 }}>
            Let's discuss how we can optimize your logistics operations
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
