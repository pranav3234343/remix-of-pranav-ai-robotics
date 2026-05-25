import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Subtle watermark — large logo absolutely positioned in a section,
 * very low opacity, decorative only.
 */
export function LogoWatermark({
  className,
  size = 520,
  src,
}: {
  className?: string;
  size?: number;
  src: string;
}) {
  return (
    <img
      src={src}
      alt=""
      aria-hidden
      width={size}
      height={size}
      loading="lazy"
      className={cn("watermark-logo", className)}
      style={{ width: size, height: size }}
    />
  );
}
