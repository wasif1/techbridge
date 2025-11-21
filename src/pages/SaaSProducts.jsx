import React from "react";
import { Box, Typography } from "@mui/material";

export default function SaaSProducts() {
  return (
    <Box p={6}>
      <Typography variant="h4" fontWeight={600} mb={2}>SaaS Products</Typography>
      <Typography>
        Cloud-based B2B tools for HR, logistics, and automation workflows.
      </Typography>
    </Box>
  );
}
