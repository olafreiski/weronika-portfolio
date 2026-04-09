"use client";

import { useEffect, useRef, useState } from "react";

interface VideoCardProps {
  embedIframe: string;
  type: "VERTICAL" | "HORIZONTAL";
}

export default function VideoCard({ embedIframe, type }: VideoCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "200px" } // trigger loading before it hits viewport
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const aspectRatioClass = type === "VERTICAL" ? "aspect-[9/16]" : "aspect-video";
  const maxWidthClass = type === "VERTICAL" ? "w-full lg:max-w-[340px]" : "w-full";

  return (
    <div 
      ref={containerRef} 
      className={`relative bg-neutral-200 overflow-hidden ${aspectRatioClass} ${maxWidthClass} mx-auto transition-transform hover:-translate-y-2`}
    >
      {!isVisible && (
        <div className="absolute inset-0 flex items-center justify-center animate-pulse bg-neutral-300">
          <div className="w-12 h-12 rounded-full border-4 border-wero-accent border-t-transparent animate-spin"></div>
        </div>
      )}
      
      {isVisible && (
        <div 
          className="absolute inset-0 w-full h-full [&>iframe]:w-full [&>iframe]:h-full border-none [&>iframe]:border-none"
          dangerouslySetInnerHTML={{ __html: embedIframe }}
        />
      )}
    </div>
  );
}
