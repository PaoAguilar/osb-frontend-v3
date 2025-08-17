"use client";

import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function ClientLayout({ children, className = "" }: Props) {
  const pathname = usePathname();
  const isHangar = pathname?.toLowerCase().startsWith("/hangar");

  const layoutClass = `layout ${isHangar ? "layout--hangar" : "layout--default"}`;

  return <div className={`${layoutClass} ${className}`}>{children}</div>;
}
