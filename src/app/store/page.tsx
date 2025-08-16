"use client";

import Banner from "@/components/banner/Banner";
import Weapons from "@/components/store/Weapons";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import React from "react";

const Store = () => {
  return (
    <div className="pt-8 gap-8">
      <Banner
        showTagline
        taglinePrimary="BEST"
        taglineSecondary="WEAPON"
        title="Blue Orb"
        description="Lorem ipsum dolor sit amet consectetur. Diam risus odio non magna volutpat gravida malesuada. Sem in a faucibus cursus. Quis eget quam id nunc convallis gravida interdum diam amet."
        imageUrl="/img/banner.png"
        contentImageUrl="/img/gun.svg"
        overlayClassName="bg-transparent"
      />
      <p className="text-white text-sm normal-case mt-10">
        Select Your Loadouts
      </p>
      <div className="mt-4 flex justify-between">
        <Select>
          <SelectTrigger className="w-[300px] text-white bg-orange-dark cursor-pointer">
            <SelectValue className="text-white" placeholder="Weapons" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="ships">Ships</SelectItem>
              <SelectItem value="skills">Skills</SelectItem>
              <SelectItem value="weapons">Weapons</SelectItem>
              <SelectItem value="ammunition">Ammunition</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <div className="relative w-[300px]">
          <Search className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 size-4 pointer-events-none" />
          <Input
            type="text"
            placeholder="Search"
            className="pl-8 bg-orange-24 text-white"
          />
        </div>
      </div>
      <Weapons />
    </div>
  );
};

export default Store;
