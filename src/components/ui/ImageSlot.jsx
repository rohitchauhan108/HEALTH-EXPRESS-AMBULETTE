"use client";
/**
 * ImageSlot – drop-in image placeholder.
 *
 * Put your photo / AI image at the `src` path (public/images/...) and it
 * appears automatically. Until the file exists, the SVG illustration for
 * `variant` is shown instead, so the layout never looks broken.
 */
import React, { useEffect, useRef, useState } from "react";
import { PlaceholderArt } from "../art/Art";

export default function ImageSlot({ src, alt = "", variant = "van", className = "", imgClassName = "", priority = false }) {
  const [failed, setFailed] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (el && el.complete && el.naturalWidth === 0) setFailed(true);
  }, []);

  if (failed || !src) {
    return (
      <div className={className} role="img" aria-label={alt}>
        <PlaceholderArt variant={variant} />
      </div>
    );
  }
  return (
    <div className={className}>
      <img
        ref={ref}
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onError={() => setFailed(true)}
        className={`w-full h-full object-cover ${imgClassName}`}
      />
    </div>
  );
}
