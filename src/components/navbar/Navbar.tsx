"use client";
import { useAuth } from "@/contexts/AuthContext";
import SiteLogo from "../siteLogo/SiteLogo";
import NavMenu from "./NavMenu";
import UserProfile from "./UserProfile";
import { navLinks } from "./navLinks";

const Navbar = () => {
  const { isAuthenticated, isGuest, user } = useAuth();
  return (
    <header className="flex h-[6.5rem] items-center justify-between p-4 bg-transparent">
      <SiteLogo size="medium" imageSrc="/img/logo_horizontal.svg" />
      <NavMenu links={navLinks} />
      <UserProfile
        name={isGuest ? "Guest" : user?.name || "User"}
        avatar={"/img/user-example.jpg"}
        href={isAuthenticated ? "/profile" : "/login"}
      />
    </header>
  );
};

export default Navbar;
