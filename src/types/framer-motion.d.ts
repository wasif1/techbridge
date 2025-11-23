// Lightweight shim to avoid TypeScript errors from framer-motion prop typings
// This file narrows the surface area and lets us progress while keeping runtime
// behavior intact. If you prefer, replace this with the proper framer-motion
// types once the project migrates to fully-compatible versions.
declare module 'framer-motion' {
  import * as React from 'react';

  // Expose motion and m as `any` so JSX usages with animation props (initial, animate, etc.)
  // do not trigger type errors while we iterate on the UI.
  export const motion: any;
  export const m: any;

  // Generic motion prop type - keep as any to avoid excessive friction from version mismatches.
  export type HTMLMotionProps<T extends keyof JSX.IntrinsicElements> = any;

  const _default: any;
  export default _default;
}
