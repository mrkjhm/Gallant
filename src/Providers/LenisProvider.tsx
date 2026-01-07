"use client";

import Lenis from "lenis";
import { ReactNode, useEffect } from "react";

interface Props {
  children: ReactNode;
}

export default function LenisProvider({ children }: Props) {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
    });

    // 🔥 expose globally
    (window as any).lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
