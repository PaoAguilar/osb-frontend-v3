"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { StoreItem } from "@/types/store-items";
import { Minus, Plus } from "lucide-react";

interface WeaponPreviewProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  weapon: StoreItem;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export default function WeaponPreview({
  open,
  onOpenChange,
  weapon,
  quantity,
  onIncrease,
  onDecrease,
}: WeaponPreviewProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTitle></DialogTitle>
      <DialogContent
        className="max-w-[500px] rounded-[1.5rem] border-none 
                   bg-gradient-to-b from-[#531700] to-black 
                   text-white p-0"
      >
        <div className="p-6 space-y-6">
          <div className="flex justify-center">
            <Image
              src={"/img/gun.svg"}
              alt={weapon.name}
              width={300}
              height={200}
              className="object-contain"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white">{weapon.name}</h2>
            <p className="text-gray-300 text-base mt-2 leading-relaxed">
              {weapon.description}
            </p>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-2xl font-mono">{`$ ${weapon.price}`}</p>
            <div className="flex items-center gap-3">
              <button
                aria-label="Decrease quantity"
                className="grid place-items-center w-8 h-8 rounded-full border-2 border-white/90 text-white
                             hover:bg-white hover:text-black transition-colors"
                onClick={onDecrease}
              >
                <Minus className="w-4 h-4 stroke-[3]" />
              </button>

              <div className="grid place-items-center w-7 h-9 text-sm">
                {quantity}
              </div>

              <button
                aria-label="Increase quantity"
                className="grid place-items-center w-8 h-8 rounded-full border-2 border-white/90 text-white
                             hover:bg-white hover:text-black transition-colors"
                onClick={onIncrease}
              >
                <Plus className="w-4 h-4 stroke-[3]" />
              </button>
            </div>
          </div>
          <Button className="bg-secondary hover:bg-secondary-500 text-black rounded-full px-6 py-2">
            Buy Item
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
