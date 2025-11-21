import React from "react";
import { Box, Typography, Button, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";

import teamworkImg from "../assets/react.svg";
import profile from "../assets/react.svg";

export default function Home() {
  const leaders = [
    { name: "Wasif Mujahid", role: "Head of IT & Technology" },
    { name: "Mrs. Wasif", role: "Head of HR & Operations" },
    { name: "Zain Mujahid", role: "Head of Logistics & Procurement" },
    { name: "Abdul Rehman Basat", role: "Head of Marketing & Business Development" },
  ];

  return (
    <Box>
      {/* HERO */}
      <Box
        sx={{
          textAlign: "center",
          py: 12,
          px: 4,
          background: "linear-gradient(to right, #E3F2FD, #BBDEFB)",
        }}
      >
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}>
          <Typography variant="h3" fontWeight={700} mb={2}>
            Empowering Innovation Through Technology & Logistics
          </Typography>
          <Typography variant="h6" color="gray" maxWidth={600} mx="auto" mb={4}>
            Tech Bridge connects businesses to next-generation IT solutions,
            logistics operations, and HR services — enabling global growth.
          </Typography>
          <Button variant="contained" size="large" sx={{ borderRadius: 3 }}>
            Explore Services
          </Button>
        </motion.div>
      </Box>

      {/* ABOUT */}
      <Grid container spacing={5} sx={{ p: 6 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight={600} mb={2}>
            About Tech Bridge
          </Typography>
          <Typography color="gray">
            Tech Bridge is founded by four leaders specializing in IT, HR,
            logistics, and business growth. Together, we unify technology and
            operations into one high-performance engine for global companies.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4, borderRadius: 4 }}>
            <img src={teamworkImg} alt="team" width="100%" />
          </Paper>
        </Grid>
      </Grid>

      {/* TEAM */}
      <Box sx={{ p: 6, textAlign: "center" }}>
        <Typography variant="h4" fontWeight={600} mb={4}>
          Our Leadership Team
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {leaders.map((m, i) => (
            <Grid item xs={12} md={3} key={i}>
              <Paper elevation={3} sx={{ p: 4, borderRadius: 4 }}>
                <img
                  src={profile}
                  width="90"
                  style={{
                    borderRadius: "50%",
                    border: "3px solid #1976D2",
                    marginBottom: 12,
                  }}
                />
                <Typography variant="h6">{m.name}</Typography>
                <Typography color="gray" fontSize={14}>
                  {m.role}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
