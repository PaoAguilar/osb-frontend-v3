import React from "react";
import SiteLogo from "../siteLogo/SiteLogo";
import Button from "../commons/button/Button";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-transparent">
      <SiteLogo size="medium" imageSrc="/img/logo_horizontal.svg" />
      <nav className="flex items-center space-x-6 text-white">
        <Button variant="outline">Control Panel</Button>
        <Button>Store</Button>
        <Button>Inventory</Button>
        <Button>Playing</Button>
      </nav>
      <div className="flex items-center space-x-3">
        <img
          src="/img/avatar-placeholder.jpg"
          alt="Avatar del usuario"
          className="w-10 h-10 rounded-full object-cover border-2 border-gray-200"
        />
        <span className="text-gray-700 font-medium">Usuario</span>
      </div>
    </header>
  );
};

export default Navbar;
