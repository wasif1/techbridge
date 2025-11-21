import React from "react";
import { Box, Typography } from "@mui/material";

export default function HrServices() {
  return (
    <Box p={6}>
      <Typography variant="h4" fontWeight={600} mb={2}>HR Services</Typography>
      <Typography>
        We provide recruitment, payroll, HRIS setup, compliance and full HR outsourcing.
      </Typography>
    </Box>
  );
}
