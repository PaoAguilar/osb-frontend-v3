import React from "react";
import SiteLogo from "../siteLogo/SiteLogo";
import Button from "../commons/button/Button";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-transparent">
      <SiteLogo size="medium" imageSrc="/img/logo_horizontal.svg" />
      <nav className="flex items-center space-x-6 text-white">
        <Button variant="link">Control Panel</Button>
        <Button variant="link">Store</Button>
        <Button variant="link">Inventory</Button>
        <Button variant="link">Playing</Button>
      </nav>
      <div className="flex items-center space-x-3 rounded-full cursor-pointer hover:border-1 hover:border-primary-orange px-2.5 py-1.5">
        <img
          src="/img/user-example.jpg"
          alt="Avatar del usuario"
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="text-white font-medium">Usuario</span>
      </div>
    </header>
  );
};

export default Navbar;
