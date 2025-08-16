import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
} from "@/components/ui/card";
import Image from "next/image";

interface Inventory {
  name: string;
  level?: string;
  src: string;
}
interface InventoryCardProps {
  inventory: Inventory;
  isSelected: boolean;
  onClick: (inventory: Inventory) => void;
}

const InventoryCard = ({
  inventory,
  onClick,
  isSelected,
}: InventoryCardProps) => {
  return (
    <Card
      className={`group pt-2 text-white font-bold border-2 transition-colors duration-300 cursor-pointer
        ${
          isSelected
            ? "shadow-lg bg-transparent border-secondary"
            : "bg-orange-24 border-transparent hover:shadow-lg hover:bg-transparent hover:border-secondary"
        }`}
      onClick={() => onClick(inventory)}
    >
      <CardHeader className="px-2">
        <div className="bg-card-bg rounded-lg flex justify-center py-5">
          <Image
            src={inventory.src || ""}
            alt={inventory.name}
            width={108}
            height={60}
            className="object-contain"
          />
        </div>
        <CardContent className="px-2">
          <div className="flex justify-between pt-10">
            <p className="text-2xl">{inventory.name}</p>
            <p className="text-secondary">{`lvl ${inventory.level}`}</p>
          </div>
        </CardContent>
      </CardHeader>
    </Card>
  );
};

export default InventoryCard;
