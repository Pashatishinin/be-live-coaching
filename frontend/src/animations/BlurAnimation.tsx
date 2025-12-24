"use client";

import { useRef, ReactElement, cloneElement } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface BlurAnimationProps {
  children: ReactElement<any>;
  animateOnScroll?: boolean;
  delay?: number;
  start?: string;
  // По умолчанию анимируем самого ребенка, если селектор не передан
  selector?: string;
}

const BlurAnimation = ({
  children,
  animateOnScroll = true,
  delay = 0,
  start = "top 80%",
  selector,
}: BlurAnimationProps) => {
  const containerRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      if (!containerRef.current || !animateOnScroll) return;

      let targets: any;

      if (selector) {
        // Если передан селектор, ищем внутри
        targets = containerRef.current.querySelectorAll(selector);
      } else {
        // Если селектора нет, анимируем непосредственно сам элемент (наш div)
        targets = containerRef.current;
      }

      if (targets) {
        gsap.from(targets, {
          autoAlpha: 0,
          scale: 1.1, // Для div лучше чуть меньше scale, чем для SVG
          y: 20, // Добавим немного движения по вертикали для "мягкости"
          filter: "blur(20px)",
          stagger: 0.1,
          duration: 1.5,
          ease: "power3.out",
          delay,
          scrollTrigger: {
            trigger: containerRef.current,
            start: start,
            once: true,
          },
        });
      }
    },
    { scope: containerRef }
  );

  return cloneElement(children, {
    ref: containerRef,
    // Важно: гарантируем, что элемент не скрыт через CSS до начала анимации
    style: { ...children.props.style, visibility: "visible" },
  });
};

export default BlurAnimation;
