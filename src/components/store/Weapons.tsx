"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import WeaponPreview from "./WeaponPreview";
import { useState } from "react";

const Weapons = () => {
  const [open, setOpen] = useState(false);
  const [selectedWeapon, setSelectedWeapon] = useState<any>(null);

  const handleOpenDialog = (weapon: any) => {
    setSelectedWeapon(weapon);
    setOpen(true);
  };

  const weapons = [
    { name: "BLUE ORB", description: "50% extra power", price: "$45", src: "/img/gun.svg" },
    { name: "BLUE SHIELD", description: "40% damage resistance", price: "$45", src: "/img/gun.svg" },
    { name: "RED SWORD", description: "60% critical hit chance", price: "$75", src: "/img/gun.svg" },
    { name: "GREEN BOW", description: "30% increased accuracy", price: "$55", src: "/img/gun.svg" },
    { name: "BLACK AXE", description: "70% armor penetration", price: "$85", src: "/img/gun.svg" },
    { name: "GOLDEN STAFF", description: "100% magic boost", price: "$120", src: "/img/gun.svg" },
    { name: "GREEN BOW", description: "30% increased accuracy", price: "$55", src: "/img/gun.svg" },
    { name: "BLACK AXE", description: "70% armor penetration", price: "$85", src: "/img/gun.svg" },
    { name: "GOLDEN STAFF", description: "100% magic boost", price: "$120", src: "/img/gun.svg" },
  ];

  return (
    <div className="h-screen flex flex-col mt-6 mb-6">
      <div className="flex-1 overflow-y-auto custom-scroll-thin pr-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          {weapons.map((weapon, index) => (
            <Card
              key={index}
              className="group bg-orange-24 hover:shadow-lg transition-shadow text-white font-bold border-2 border-transparent hover:bg-transparent hover:border-secondary transition-colors duration-300 cursor-pointer"
              onClick={() => handleOpenDialog(weapon)}
            >
              <CardHeader>
                <div className="bg-card-bg rounded-lg flex justify-center py-5">
                  <Image
                    src={weapon.src || ""}
                    alt={weapon.name}
                    width={108}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <CardTitle className="text-2xl">{weapon.name}</CardTitle>
                <CardDescription className="text-lg text-white font-light">
                  {weapon.description}
                </CardDescription>
              </CardHeader>

              <CardFooter className="gap-8 justify-between">
                <p className="text-2xl font-bold">{weapon.price}</p>
                <Button
                  className="
                    bg-black text-white rounded-full w-fit
                    hover:bg-secondary hover:text-black
                    group-hover:bg-cyan-400 group-hover:text-black
                    transition-colors duration-300
                  "
                >
                  ADD TO CARD
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      {selectedWeapon && (
        <WeaponPreview
          open={open}
          onOpenChange={setOpen}
          weapon={selectedWeapon}
        />
      )}
    </div>
  );
};

export default Weapons;
