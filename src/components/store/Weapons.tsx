'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import Button from "../button/Button";

const Weapons = () => {
  const weapons = [
    {
      name: "BLUE ORB",
      description: "50% extra power",
      price: "$45",
    },
    {
      name: "BLUE SHIELD",
      description: "40% damage resistance",
      price: "$45",
    },
    {
      name: "RED SWORD",
      description: "60% critical hit chance",
      price: "$75",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-normal mb-8 text-secondary-cyan tracking-[33px]">WEAPONS</h1>
      
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
        {weapons.map((weapon, index) => (
          <Card key={index} className="bg-orange-24 hover:shadow-lg transition-shadow text-white font-bold">
            <CardHeader>
              <CardTitle className="text-2xl">{weapon.name}</CardTitle>
              <CardDescription className="text-lg text-white font-light">
                {weapon.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <p className="text-2xl font-bold ">{weapon.price}</p>
            </CardContent>
            
            <CardFooter>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                ADD TO CARD
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    // </div>
  );
};

export default Weapons;