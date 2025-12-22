"use client";

import { useRef, ReactElement, cloneElement } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

// Регистрируем плагины вне компонента
gsap.registerPlugin(ScrollTrigger, SplitText);

interface TextEffectProps {
  children: ReactElement<any>;
  animateOnScroll?: boolean;
  delay?: number;
  start?: string;
}

const TextEffect = ({
  children,
  animateOnScroll = true,
  delay = 0,
  start = "top 90%",
}: TextEffectProps) => {
  const containerRef = useRef<HTMLElement | null>(null);
  const splitRef = useRef<SplitText | null>(null);
  const maskSplitRef = useRef<SplitText | null>(null);

  const { contextSafe } = useGSAP({ scope: containerRef });

  const runSplitAndAnim = contextSafe(() => {
    if (!containerRef.current) return;

    const el = containerRef.current;
    const tagsToAdjust = ["H1", "H2", "H3"];

    if (tagsToAdjust.includes(el.tagName)) {
      el.style.lineHeight = "1.2em";
    }

    if (splitRef.current) splitRef.current.revert();
    if (maskSplitRef.current) maskSplitRef.current.revert();

    maskSplitRef.current = new SplitText(containerRef.current, {
      type: "lines",
      linesClass: "overflow-hidden",
    });

    splitRef.current = new SplitText(maskSplitRef.current.lines, {
      type: "lines",
    });

    if (animateOnScroll) {
      gsap.from(splitRef.current.lines, {
        yPercent: 100,
        autoAlpha: 0,
        stagger: 0.08,
        duration: 0.8,
        ease: "power3.out",
        delay,
        scrollTrigger: {
          trigger: containerRef.current,
          start: start,
          once: true,
        },
      });
    }

    containerRef.current.removeAttribute("aria-label");
  });

  useGSAP(
    () => {
      document.fonts.ready.then(() => {
        runSplitAndAnim();
      });

      const handleResize = () => {
        runSplitAndAnim();
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    },
    { scope: containerRef }
  );

  return cloneElement(children, {
    ref: containerRef,

    style: { ...children.props.style, visibility: "visible" },
  });
};

export default TextEffect;
