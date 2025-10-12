"use client";

import Image from "next/image";
import { CheckCircle2, X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";

interface DialogSuccessfullProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onGoInventory?: () => void;
}

const DialogSuccessfull = ({
  open,
  onOpenChange,
  onGoInventory,
}: DialogSuccessfullProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTitle className="sr-only">Purchase successful</DialogTitle>

      <DialogContent
        className={[
          "max-w-[560px] p-0",
          "rounded-3xl border-2 border-primary-orange bg-[rgba(92,54,38,0.96)]",
          "shadow-[0_12px_40px_rgba(0,0,0,0.45)] text-white",
        ].join(" ")}
      >
        <div className="px-8 pb-8 pt-10">
          <div className="mb-6 flex justify-center">
            <Image
              src="/img/ball.svg"
              alt="Basketball icon"
              width={96}
              height={96}
            />
          </div>

          <div className="text-center">
            <p className="text-xl font-extrabold tracking-wide text-white">
              YOUR PURCHASE WAS
            </p>
            <p className="mt-1 text-4xl font-extrabold tracking-widest text-green-500">
              SUCCESSFUL
            </p>

            <div className="mt-4 flex justify-center">
              <CheckCircle2 className="h-16 w-16 text-green-500" />
            </div>

            <p className="mt-6 text-base font-semibold text-white">
              YOU CAN SEE YOUR NEW ITEM IN
            </p>

            <Button
              onClick={onGoInventory}
              className="mt-4 w-full rounded-full bg-black hover:bg-black/70 py-5 text-base font-extrabold uppercase tracking-widest cursor-pointer"
            >
              Inventory
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogSuccessfull;
