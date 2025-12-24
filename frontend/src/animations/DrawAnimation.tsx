"use client";

import { useRef, ReactElement, cloneElement } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface DrawAnimationProps {
  children: ReactElement<any>;
  animateOnScroll?: boolean;
  delay?: number;
  start?: string;
  selector?: string;
  duration?: number;
}

const DrawAnimation = ({
  children,
  animateOnScroll = true,
  delay = 0,
  start = "top 80%",
  selector = "path, circle, rect, polyline",
  duration = 2,
}: DrawAnimationProps) => {
  const containerRef = useRef<SVGSVGElement | null>(null);

  useGSAP(
    () => {
      if (!containerRef.current || !animateOnScroll) return;

      const targets = containerRef.current.querySelectorAll(selector);

      if (targets.length > 0) {
        // Подготовка элементов к отрисовке
        targets.forEach((target) => {
          const element = target as SVGGeometryElement;
          const length = element.getTotalLength();

          // Устанавливаем начальное состояние: линия полностью "спрятана"
          gsap.set(element, {
            strokeDasharray: length,
            strokeDashoffset: length,
          });
        });

        // Анимация отрисовки
        gsap.to(targets, {
          strokeDashoffset: 0,
          autoAlpha: 1,
          duration: duration,
          ease: "power2.inOut",
          delay,
          stagger: 0.2, // Рисуем детали по очереди
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
    style: {
      ...children.props.style,
      visibility: "visible",
    },
  });
};

export default DrawAnimation;
