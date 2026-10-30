import React from "react";
import { useEffect, useRef } from "react";

function colorToHue(red, green, blue) {
  const r = red / 255;
  const g = green / 255;
  const b = blue / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;

  if (!delta) return null;

  const saturation = delta / max;
  if (saturation < 0.2 || max < 0.16) return null;

  let hue;
  if (max === r) hue = ((g - b) / delta) % 6;
  else if (max === g) hue = (b - r) / delta + 2;
  else hue = (r - g) / delta + 4;

  return Math.round((hue * 60 + 360) % 360);
}

function getPageHue(x, y) {
  const element = document.elementFromPoint(x, y);
  let current = element;

  while (current && current !== document.body) {
    const style = window.getComputedStyle(current);
    const colors = `${style.backgroundImage} ${style.backgroundColor}`.match(
      /rgba?\(([^)]+)\)/g,
    );

    for (const color of colors ?? []) {
      const channels = color
        .slice(color.indexOf("(") + 1, -1)
        .split(/[,\s/]+/)
        .slice(0, 3)
        .map(Number);
      if (channels.length !== 3 || channels.some(Number.isNaN)) continue;

      const hue = colorToHue(...channels);
      if (hue !== null) return hue;
    }

    if (current.matches("section, main, header, footer")) break;
    current = current.parentElement;
  }

  return 216;
}

export default function CursorBubbles() {
  const trailRef = useRef(null);

  useEffect(() => {
    const trail = trailRef.current;
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const pointerPreference = window.matchMedia("(hover: hover) and (pointer: fine)");

    if (!trail || motionPreference.matches || !pointerPreference.matches) {
      return undefined;
    }

    let lastBubbleAt = 0;
    const handlePointerMove = (event) => {
      if (event.pointerType === "touch") return;

      const now = performance.now();
      if (now - lastBubbleAt < 36) return;
      lastBubbleAt = now;

      while (trail.childElementCount >= 30) {
        trail.firstElementChild?.remove();
      }

      const bubble = document.createElement("span");
      const size = 12 + Math.random() * 16;
      bubble.className = "cursor-bubble";
      bubble.style.left = `${event.clientX - size / 2}px`;
      bubble.style.top = `${event.clientY - size / 2}px`;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.setProperty("--bubble-hue", getPageHue(event.clientX, event.clientY));
      bubble.style.setProperty("--bubble-drift", `${Math.round(Math.random() * 42 - 21)}px`);
      bubble.style.setProperty("--bubble-rise", `${48 + Math.round(Math.random() * 32)}px`);
      if (Math.random() > 0.62) bubble.classList.add("cursor-bubble-soft");
      trail.appendChild(bubble);
      bubble.addEventListener("animationend", () => bubble.remove(), { once: true });
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return <div className="cursor-bubble-trail" ref={trailRef} aria-hidden="true" />;
}
