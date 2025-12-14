"use client";

import { useRef, ReactElement, cloneElement } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface ImageEffectProps {
  children: ReactElement<any>;

  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

const ParallaxEffect = ({
  children,
  top = 0,
  bottom = 0,
  left = 0,
  right = 0,
}: ImageEffectProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      gsap.fromTo(
        containerRef.current,
        {
          clipPath: `inset(${bottom}% ${left}% ${top}% ${right}%)`,
        },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          delay: 0.3,
          duration: 1.1,
          ease: "power1.in",

          immediateRender: false,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "clamp(top 70%)",
            end: "clamp(top 20%)",
          },
        }
      );
    },
    { scope: containerRef, dependencies: [top, bottom, left, right] }
  );

  return cloneElement(children, {
    ref: containerRef,
  });
};

export default ParallaxEffect;
