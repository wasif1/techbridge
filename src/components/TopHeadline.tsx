import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';
import { themeConfig } from '@/config/theme.config';

export default function TopHeadline() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const location = useLocation();

  // We show the headline on all routes (including home). Use the router
  // location only to restart the animation when navigation occurs.

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;

    if (!themeConfig.siteHeadline?.enabled) {
      try { document.documentElement.style.setProperty('--top-headline-height', '0px'); } catch (e) {}
      return;
    }

  // Always expose the headline height when enabled so the nav can offset itself
  const height = 36; // px (reduced per request)
    try { document.documentElement.style.setProperty('--top-headline-height', `${height}px`); } catch (e) {}

    if (!container || !content) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      content.style.transform = 'translateX(0)';
      return;
    }

    const run = () => {
      const containerWidth = container.getBoundingClientRect().width;
      const contentWidth = content.getBoundingClientRect().width;
      const start = containerWidth;
      const end = -contentWidth;
      const pxPerSecond = 140;
      const distance = start - end;
      const duration = Math.max(4000, (distance / pxPerSecond) * 1000);

      const prev = (content as any)._headlineAnim as Animation | undefined;
      if (prev) prev.cancel();

      const anim = content.animate(
        [ { transform: `translateX(${start}px)` }, { transform: `translateX(${end}px)` } ],
        { duration, iterations: Infinity, easing: 'linear' }
      );
      (content as any)._headlineAnim = anim;

      const onEnter = () => anim.pause();
      const onLeave = () => anim.play();
      container.addEventListener('mouseenter', onEnter);
      container.addEventListener('mouseleave', onLeave);

      return () => {
        anim.cancel();
        container.removeEventListener('mouseenter', onEnter);
        container.removeEventListener('mouseleave', onLeave);
      };
    };

    // Run now and whenever location changes (so navigation restarts the animation)
    let cleanup = run();
    const onResize = () => { if (cleanup) cleanup(); cleanup = run(); };
    window.addEventListener('resize', onResize);
    return () => {
      try { document.documentElement.style.removeProperty('--top-headline-height'); } catch (e) {}
      window.removeEventListener('resize', onResize);
      if (cleanup) cleanup();
    };
  }, [location]);

  if (!themeConfig.siteHeadline?.enabled) return null;

  const text = themeConfig.siteHeadline.text;

  return (
    <Box
      ref={containerRef}
      sx={{
        width: '100%',
        height: 36,
        position: 'fixed', // use fixed so it doesn't reserve layout space
        left: 0,
        top: 0,
        zIndex: 1400,
        // allow clicks to pass through to the navbar beneath when possible
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        bgcolor: '#111827', // match footer static background
        color: 'white',
        overflow: 'hidden',
        px: 2
      }}
    >
      <Box sx={{ overflow: 'hidden', flex: 1 }}>
        <Box ref={contentRef} sx={{ display: 'inline-block', whiteSpace: 'nowrap', fontWeight: 600 }}>
          {text}
        </Box>
      </Box>

      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', ml: 2 }}>
        {/* Render social icons based on config in theme.config.ts */}
        { (themeConfig as any).socialIcons?.enabled && (themeConfig as any).socialIcons?.show?.linkedin && (
          <IconButton
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            sx={{
              color: 'white',
              pointerEvents: 'auto',
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
            <LinkedIn fontSize="small" />
          </IconButton>
        )}

        { (themeConfig as any).socialIcons?.enabled && (themeConfig as any).socialIcons?.show?.upwork && (
          <IconButton
            href="https://www.upwork.com"
            target="_blank"
            rel="noreferrer"
            sx={{
              color: 'white',
              pointerEvents: 'auto',
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
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.5 12c0-2.485 2.015-4.5 4.5-4.5 1.242 0 2.364.497 3.178 1.304l1.06-1.06A6.002 6.002 0 0 0 11 6.5C7.962 6.5 5.25 9.212 5.25 12.25S7.962 18 11 18c2.174 0 4.01-1.319 4.74-3.203l-1.14-.456A3.5 3.5 0 0 1 11 15.5c-1.933 0-3.5-1.567-3.5-3.5z" fill="currentColor" />
            </svg>
          </IconButton>
        )}
      </Box>
    </Box>
  );
}
