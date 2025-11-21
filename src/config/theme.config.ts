/**
 * Theme Configuration
 * Centralized theme settings for all pages
 * Each page has its own unique color scheme and styling
 */

export const themeConfig = {
  // ==================== HOME PAGE THEME ====================
  home: {
    name: 'Home - Tech Bridge',
    colors: {
      primary: '217 91% 60%',        // Vibrant Blue
      primaryLight: '217 91% 70%',   // Light Blue
      primaryDark: '217 91% 50%',    // Dark Blue
      secondary: '189 94% 43%',      // Teal
      accent: '199 89% 48%',         // Bright Cyan
      background: '210 40% 98%',     // Very Light Blue
      surface: '0 0% 100%',          // White
      text: '222 84% 5%',            // Dark Blue-Gray
      textSecondary: '215 16% 47%',  // Medium Gray
    },
    gradients: {
      hero: 'linear-gradient(135deg, hsl(217 91% 60%) 0%, hsl(189 94% 43%) 100%)',
      card: 'linear-gradient(145deg, hsl(217 91% 60% / 0.05) 0%, hsl(189 94% 43% / 0.05) 100%)',
    },
    fonts: {
      heading: 'Poppins',
      body: 'Inter',
    }
  },

  // ==================== HR SERVICES PAGE THEME ====================
  hrServices: {
    name: 'HR Services',
    colors: {
      primary: '271 91% 65%',        // Rich Purple
      primaryLight: '271 91% 75%',   // Light Purple
      primaryDark: '271 91% 55%',    // Dark Purple
      secondary: '291 64% 42%',      // Deep Violet
      accent: '316 71% 60%',         // Magenta
      background: '270 20% 98%',     // Very Light Purple
      surface: '0 0% 100%',          // White
      text: '271 36% 20%',           // Dark Purple-Gray
      textSecondary: '271 15% 45%',  // Medium Purple-Gray
    },
    gradients: {
      hero: 'linear-gradient(135deg, hsl(271 91% 65%) 0%, hsl(291 64% 42%) 100%)',
      card: 'linear-gradient(145deg, hsl(271 91% 65% / 0.08) 0%, hsl(291 64% 42% / 0.08) 100%)',
    },
    fonts: {
      heading: 'Poppins',
      body: 'Inter',
    }
  },

  // ==================== SOFTWARE DEVELOPMENT PAGE THEME ====================
  softwareDevelopment: {
    name: 'Software Development',
    colors: {
      primary: '142 76% 36%',        // Forest Green
      primaryLight: '142 76% 46%',   // Light Green
      primaryDark: '142 76% 26%',    // Dark Green
      secondary: '173 58% 39%',      // Teal Green
      accent: '160 84% 39%',         // Emerald
      background: '140 20% 98%',     // Very Light Green
      surface: '0 0% 100%',          // White
      text: '142 30% 15%',           // Dark Green-Gray
      textSecondary: '142 15% 45%',  // Medium Green-Gray
    },
    gradients: {
      hero: 'linear-gradient(135deg, hsl(142 76% 36%) 0%, hsl(173 58% 39%) 100%)',
      card: 'linear-gradient(145deg, hsl(142 76% 36% / 0.06) 0%, hsl(173 58% 39% / 0.06) 100%)',
    },
    fonts: {
      heading: 'Poppins',
      body: 'Inter',
    }
  },

  // ==================== SUPPLY CHAIN PAGE THEME ====================
  supplyChain: {
    name: 'Supply Chain & Logistics',
    colors: {
      primary: '24 100% 50%',        // Vibrant Orange
      primaryLight: '24 100% 60%',   // Light Orange
      primaryDark: '24 100% 40%',    // Dark Orange
      secondary: '36 100% 50%',      // Golden Yellow
      accent: '14 100% 57%',         // Coral
      background: '30 40% 98%',      // Very Light Orange
      surface: '0 0% 100%',          // White
      text: '24 30% 15%',            // Dark Orange-Gray
      textSecondary: '24 15% 45%',   // Medium Orange-Gray
    },
    gradients: {
      hero: 'linear-gradient(135deg, hsl(24 100% 50%) 0%, hsl(36 100% 50%) 100%)',
      card: 'linear-gradient(145deg, hsl(24 100% 50% / 0.06) 0%, hsl(36 100% 50% / 0.06) 100%)',
    },
    fonts: {
      heading: 'Poppins',
      body: 'Inter',
    }
  },

  // ==================== SAAS PRODUCTS PAGE THEME ====================
  saasProducts: {
    name: 'SaaS Products',
    colors: {
      primary: '231 48% 48%',        // Indigo
      primaryLight: '231 48% 58%',   // Light Indigo
      primaryDark: '231 48% 38%',    // Dark Indigo
      secondary: '217 91% 60%',      // Blue
      accent: '262 83% 58%',         // Purple Blue
      background: '230 20% 98%',     // Very Light Indigo
      surface: '0 0% 100%',          // White
      text: '231 25% 18%',           // Dark Indigo-Gray
      textSecondary: '231 15% 45%',  // Medium Indigo-Gray
    },
    gradients: {
      hero: 'linear-gradient(135deg, hsl(231 48% 48%) 0%, hsl(262 83% 58%) 100%)',
      card: 'linear-gradient(145deg, hsl(231 48% 48% / 0.07) 0%, hsl(262 83% 58% / 0.07) 100%)',
    },
    fonts: {
      heading: 'Poppins',
      body: 'Inter',
    }
  },

  // ==================== SHARED STYLES ====================
  shared: {
    shadows: {
      sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
      xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
      elegant: '0 10px 40px -10px',
      glow: '0 0 40px',
    },
    transitions: {
      fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
      normal: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
      slow: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
    },
    borderRadius: {
      sm: '0.375rem',
      md: '0.5rem',
      lg: '0.75rem',
      xl: '1rem',
      '2xl': '1.5rem',
    }
  }
};

export type PageTheme = keyof Omit<typeof themeConfig, 'shared'>;
