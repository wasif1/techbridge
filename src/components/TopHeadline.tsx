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
    const height = 48; // px
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
        height: 48,
        position: 'fixed', // use fixed so it doesn't reserve layout space
        left: 0,
        top: 0,
        zIndex: 1400,
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
        <IconButton href="https://facebook.com" target="_blank" rel="noreferrer" sx={{ color: 'white' }}>
          <Facebook fontSize="small" />
        </IconButton>
        <IconButton href="https://twitter.com" target="_blank" rel="noreferrer" sx={{ color: 'white' }}>
          <Twitter fontSize="small" />
        </IconButton>
        <IconButton href="https://linkedin.com" target="_blank" rel="noreferrer" sx={{ color: 'white' }}>
          <LinkedIn fontSize="small" />
        </IconButton>
        <IconButton href="https://instagram.com" target="_blank" rel="noreferrer" sx={{ color: 'white' }}>
          <Instagram fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
}
