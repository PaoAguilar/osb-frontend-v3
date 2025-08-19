import React from "react";
import Image from "next/image";
import Link from "next/link";

interface UserProfileProps {
  name: string;
  avatar?: string;
  className?: string;
  href: string;
}

const UserProfile = (props: UserProfileProps) => {
  const {
    name,
    avatar = "/img/user-example.jpg",
    className = "",
    href,
  } = props;

  return (
    <Link
      href={href}
      className={`flex items-center space-x-3 group cursor-pointer hover:bg-white/10 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 transition-colors rounded-full px-3 py-1.5 ${className}`}
      aria-label={`User profile for ${name}`}
    >
      <div className="relative w-10 h-10 rounded-full overflow-hidden">
        <Image
          src={avatar}
          alt={`Avatar of ${name}`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <span className="text-white font-medium hidden sm:inline-block">
        {name}
      </span>
    </Link>
  );
};

export default UserProfile;
