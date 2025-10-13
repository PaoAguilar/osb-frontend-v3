"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";

interface DialogSuccessfullProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onGoInventory?: () => void;
  quantity?: number;
}

const DialogSuccessfull = ({
  open,
  onOpenChange,
  onGoInventory,
  quantity,
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
          <div className="flex justify-center">
            <Image
              src="/img/ball.svg"
              alt="Basketball icon"
              width={96}
              height={96}
            />
          </div>

          <div className="text-center">
            <p className=" text-base font-light text-card-bg font-helvetica">
              You’re about to buy{" "}
              <span className="text-secondary font-helvetica">{`${quantity} Item${
                quantity || 0 > 0 ? "s" : ""
              }`}</span>{" "}
              . Please make sure everything looks right before continuing.
            </p>

            <Button
              onClick={onGoInventory}
              className="mt-4 w-full rounded-full bg-black hover:bg-black/70 py-5 text-base font-extrabold uppercase tracking-widest cursor-pointer"
            >
              Confirm
            </Button>
            <Button
              onClick={() => onOpenChange(false)}
              variant="link"
              className="text-white"
            >
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogSuccessfull;
