"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type HoverImageProps = {
  src: string;
  activeSrc: string;
  alt: string;
  width: number;
  height: number;
  href: string;
  className?: string;
  style?: React.CSSProperties;
};

export function HoverImage({
  src,
  activeSrc,
  alt,
  width,
  height,
  href,
  className,
  style,
}: HoverImageProps) {
  const [hover, setHover] = useState(false);

  return (
    <Link
      href={href}
      className={`${className} absolute block cursor-pointer`}
      style={{ ...style, width, height }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Image
        src={hover ? activeSrc : src}
        alt={alt}
        fill
        className="object-contain select-none"
      />
    </Link>
  );
}
