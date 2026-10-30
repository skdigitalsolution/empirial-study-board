import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const revealSelector = [
  "#route-content main > div",
  "#route-content section",
  "#route-content article",
  "#route-content h1",
  "#route-content h2",
  "#route-content h3",
  "#route-content form",
  "#route-content iframe",
  '#route-content [class*="rounded-xl"]',
  '#route-content [class*="rounded-2xl"]',
  '#route-content [class*="rounded-3xl"]',
].join(", ");

export default function ScrollAnimations() {
  const { pathname } = useLocation();

  useEffect(() => {
    const root = document.getElementById("route-content");
    if (!root) return undefined;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const elements = new Set();
    const headings = new Set();
    const visibleHeadings = new Set();
    let zigzagIndex = 0;
    let updateScheduled = false;
    const replayWriting = (heading) => {
      heading.classList.remove("scroll-written");
      void heading.offsetWidth;
      heading.classList.add("scroll-written");
      visibleHeadings.add(heading);
    };
    const updateHeadingVisibility = () => {
      updateScheduled = false;
      headings.forEach((heading) => {
        const bounds = heading.getBoundingClientRect();
        const isVisible =
          bounds.top < window.innerHeight - 48 && bounds.bottom > 48;

        if (isVisible && !visibleHeadings.has(heading)) {
          heading.classList.add("scroll-revealed");
          replayWriting(heading);
        } else if (!isVisible && visibleHeadings.has(heading)) {
          visibleHeadings.delete(heading);
          heading.classList.remove("scroll-written");
        }
      });
    };
    const scheduleHeadingUpdate = () => {
      if (updateScheduled) return;
      updateScheduled = true;
      window.requestAnimationFrame(updateHeadingVisibility);
    };
    const observer =
      !reducedMotion && "IntersectionObserver" in window
        ? new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  entry.target.classList.add("scroll-revealed");
                  observer.unobserve(entry.target);
                }
              });
            },
            { threshold: 0.01, rootMargin: "0px 0px -36px 0px" },
          )
        : null;

    const revealElements = (container) => {
      container.querySelectorAll(revealSelector).forEach((element) => {
        if (elements.has(element)) return;
        elements.add(element);

        if (!observer) {
          element.classList.add("scroll-revealed");
          if (element.matches("h1, h2, h3")) {
            element.classList.add("scroll-written");
          }
          return;
        }

        element.classList.add("scroll-reveal");
        if (element.matches("h1, h2, h3")) {
          element.classList.add("scroll-write");
          headings.add(element);
          const characters = Math.max(8, element.textContent.trim().length);
          element.style.setProperty("--write-steps", characters);
          element.style.setProperty(
            "--write-duration",
            `${Math.min(2.4, Math.max(0.7, characters * 0.035))}s`,
          );
        } else if (
          element.matches("#route-content main > section, #route-content main > div")
        ) {
          element.classList.add(zigzagIndex % 2 ? "scroll-zigzag-right" : "scroll-zigzag-left");
          zigzagIndex += 1;
        }
        element.style.setProperty(
          "--reveal-delay",
          `${(elements.size % 4) * 90}ms`,
        );
        if (!element.matches("h1, h2, h3")) {
          observer.observe(element);
        }
      });
      scheduleHeadingUpdate();
    };

    window.addEventListener("scroll", scheduleHeadingUpdate, { passive: true });
    window.addEventListener("resize", scheduleHeadingUpdate, { passive: true });
    revealElements(root);
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            revealElements(node);
          }
        });
      });
    });
    mutationObserver.observe(root, { childList: true, subtree: true });

    return () => {
      observer?.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener("scroll", scheduleHeadingUpdate);
      window.removeEventListener("resize", scheduleHeadingUpdate);
    };
  }, [pathname]);

  return null;
}
