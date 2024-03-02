import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

export const Navbar = () => {
    return (
        <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
            <div className="flex flex-row gap-3 items-center">

            <div className="relative rounded-full overflow-hidden">
                <Image src="/horseLogo.jpg" alt="logo" width={40} height={40} />
            </div>


                    <h1 className="text-white text-[25px] font-semibold">
                            Software-
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
                            Dev
                        </span>
                    </h1>
            </div>

            <div className="flex flex-row gap-5 mb-2">
                {Socials.map((social) => (
                    <Image
                        key={social.name}
                        src={social.src}
                        alt={social.name}
                        width={28}
                        height={28} />
                ))}
            </div>
        </div>
    );
};
