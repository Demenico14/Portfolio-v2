"use client";

import { MotionConfig } from "motion/react";

/**
 * Honours the OS "reduce motion" setting for every motion/react animation on the site:
 * transform and layout animations are skipped, opacity fades are kept so content still appears.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
