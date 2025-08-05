"use client";

import Banner from "@/components/banner/Banner";
import Weapons from "@/components/store/Weapons";
import React from "react";

const Store = () => {
  return (
    <div className="pt-8 gap-8">
      <Banner
        title="Blue Orb"
        description="Lorem ipsum dolor sit amet consectetur. Diam risus odio non magna volutpat gravida malesuada. Sem in a faucibus cursus. Quis eget quam id nunc convallis gravida interdum diam amet."
        imageUrl="/img/banner.png"
        overlayClassName="bg-transparent"
      />
      <Weapons />
    </div>
  );
};

export default Store;
