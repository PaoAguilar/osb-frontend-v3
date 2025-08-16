"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

interface WeaponBannerProps {
  title: string;
  subtitle?: string;
  description: string;
  imageUrl: string;
  contentImageUrl?: string;
  contentImageAlt?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  overlayClassName?: string;
}

export default function WeaponBanner({
  title,
  subtitle,
  description,
  imageUrl,
  contentImageUrl,
  contentImageAlt = "banner-side-img",
  buttonText = "Add to Card",
  onButtonClick,
  overlayClassName = "bg-black/50",
}: WeaponBannerProps) {
  return (
    <section className="relative w-full rounded-2xl overflow-hidden">
      <Image
        src={imageUrl}
        alt={title}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayClassName}`} />

      <div className="relative z-10 p-6 sm:p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-stretch">
          <div className="flex flex-col justify-center gap-4 max-w-2xl">
            {subtitle && (
              <p className="text-orange-500 tracking-widest uppercase text-xs sm:text-sm">
                {subtitle}
              </p>
            )}
            <h2 className="font-bold tracking-widest text-orange-500 text-3xl sm:text-4xl md:text-5xl">
              {title}
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              {description}
            </p>
            <Button
              onClick={onButtonClick}
              className="bg-cyan-400 hover:bg-cyan-500 text-black px-6 py-2 rounded-full w-fit"
            >
              {buttonText.toUpperCase()}
            </Button>
          </div>

          {contentImageUrl && (
            <div className="flex items-center justify-center h-full">
              <div className=" w-full h-full flex items-center justify-center">
                <Image
                  alt={contentImageAlt}
                  src={contentImageUrl}
                  width={500}
                  height={500}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
