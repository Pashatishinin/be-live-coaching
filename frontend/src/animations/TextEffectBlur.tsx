"use client";

import { useRef, ReactElement, cloneElement } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

interface TextEffectBlurProps {
  children: ReactElement<any>;
  animateOnScroll?: boolean;
  delay?: number;
  start?: string;
}

const TextEffectBlur = ({
  children,
  animateOnScroll = true,
  delay = 0,
  start = "top 90%",
}: TextEffectBlurProps) => {
  const containerRef = useRef<HTMLElement | null>(null);
  const splitRef = useRef<SplitText | null>(null);
  const maskSplitRef = useRef<SplitText | null>(null);

  const { contextSafe } = useGSAP({ scope: containerRef });

  const runSplitAndAnim = contextSafe(() => {
    if (!containerRef.current) return;

    const el = containerRef.current;

    // Настройка lineHeight до разделения на строки
    const tagsToAdjust = ["H1", "H2", "H3"];
    if (tagsToAdjust.includes(el.tagName)) {
      el.style.lineHeight = "0.9em";
    }

    if (splitRef.current) splitRef.current.revert();
    if (maskSplitRef.current) maskSplitRef.current.revert();

    // 1. Создаем внешний контейнер для каждой строки с overflow: hidden
    maskSplitRef.current = new SplitText(el, {
      type: "lines",
      linesClass: "split-line-container", // Класс для CSS (см. ниже)
    });

    // 2. Создаем внутренние строки, которые будем двигать
    splitRef.current = new SplitText(maskSplitRef.current.lines, {
      type: "lines",
    });

    if (animateOnScroll) {
      gsap.from(splitRef.current.lines, {
        autoAlpha: 0, // opacity: 0
        scale: "1.1",
        filter: "blur(20px)", // Эффект размытия при появлении
        stagger: 0.1,
        duration: 2,
        ease: "power3.out",
        delay,
        scrollTrigger: {
          trigger: el,
          start: start,
          once: true,
        },
      });
    }

    el.removeAttribute("aria-label");
  });

  useGSAP(
    () => {
      document.fonts.ready.then(() => {
        runSplitAndAnim();
      });

      const handleResize = () => runSplitAndAnim();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    },
    { scope: containerRef }
  );

  return cloneElement(children, {
    ref: containerRef,
    // Устанавливаем начальную видимость
    style: { ...children.props.style, visibility: "visible" },
  });
};

export default TextEffectBlur;
