// components/LocationCard.tsx
import React from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

import { SaveBtn } from "@/components";

interface LocationCardProps {
  image?: string;
  title?: string;
  location?: string;
  duration?: string;
  workshopType?: string;
  rating?: number;
}

const LocationCard = ({
  data,
}: { data?: LocationCardProps }) => {
  return (
    <div className="group max-w-sm overflow-hidden transition-shadow h-fit">
      <Link href="#">
        {/* Image */}
        <div className="relative">
          <Image
            width={1000}
            height={500}
            src={
              data?.image ??
              "https://kenhhomestay.com/wp-content/uploads/2021/06/quan-an-ngon-bien-hoa-dong-nai-2-2.jpg"
            }
            alt={data?.title ?? "Name"}
            className="object-cover rounded-xl w-full h-48 aspect-[4/3] group-hover:scale-105 ease-in duration-300"
          />
          <div className="absolute bottom-2 left-0 pl-3 pr-8 py-2 bg-gradient-to-r from-black/90 to-black/10 flex items-center">
            <FaStar className={`size-5 text-yellow-500`} />
            <span className="text-sm text-white dark:text-white ml-2">
              {data?.rating ?? "5"}
            </span>
          </div>

          <div className="absolute top-2 right-2 p-2 bg-indigo-600 text-white flex items-center">
            {data?.workshopType ?? "coffee shop"}
          </div>
        </div>

        {/* Content */}
        <div className="p-2">
          <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200 line-clamp-2">
            {data?.title ?? "name"}
          </h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-300">
            {data?.location ?? "dia chi"} • {data?.duration ?? "15m"}
          </p>
        </div>
      </Link>

      <SaveBtn component="location" />

    </div>
  );
};

export default LocationCard;
