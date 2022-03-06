import React from "react";
import { GoGlobe } from "react-icons/go";
import { BsPiggyBankFill } from "react-icons/bs";
import { GiTrade } from "react-icons/gi";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
          control your own keys
          <br />
          Be your own piggy bank
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          The best choice for buying and selling your crypto assets
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start items-center">
        <ServiceCard
          color="bg-[#2952E3]"
          title="Crypto Currency"
          icon={<GoGlobe fontSize={21} className="text-white" />}
          subtitle="Security is guranteed. Control your own keys to your own money with fast transactions "
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="Defi Bank"
          icon={<BsPiggyBankFill fontSize={21} className="text-white" />}
          subtitle="Security is must for the future. We always maintain privacy and maintain the quality of our services and brand"
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="NFT"
          icon={<GiTrade fontSize={21} className="text-white" />}
          subtitle="When buying selling or trading NFTs, we always maintain another level compared to the rest of the competition"
        />
      </div>
    </div>
  </div>
);

export default Services;
