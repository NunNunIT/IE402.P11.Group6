"use client";

import { Button } from "@/components/ui/button";
import { MockData } from "@/types/item";
import { useState } from "react";
import dynamic from "next/dynamic";

const RealEstateCard = dynamic(() => import("@/components/card/realestate"));
const LocationCard = dynamic(() => import("@/components/card/location"));

export default function SavedCards({
  typeCard,
  data,
  savedCardLink,
}: {
  typeCard?: string;
  data?: MockData[];
  savedCardLink?: string;
}) {
  const mockDataAll: MockData[] =
    data ??
    ([
      {
        type: "realEstate",
        value: {
          image: "/decorate/searchTab.jpg",
          title: "Real Estate Title",
          location: "New York",
          distance: "5km",
          price: "$500,000",
        },
      },
      {
        type: "location",
        value: {
          image: "/decorate/searchTab.jpg",
          title: "Workshop Location",
          location: "California",
          duration: "3 days",
          workshopType: "Technology",
          rating: 4.5,
        },
      },
      {
        type: "location",
        value: {
          image: "/decorate/searchTab.jpg",
          title: "Workshop Location 2",
          location: "Texas",
          duration: "2 days",
          workshopType: "Art",
          rating: 4.0,
        },
      },
      {
        type: "realEstate",
        value: {
          image: "/decorate/searchTab.jpg",
          title: "Luxury Apartment",
          location: "California",
          distance: "2km",
          price: "$1,000,000",
        },
      },
      {
        type: "location",
        value: {
          image: "/decorate/searchTab.jpg",
          title: "Workshop Location 3",
          location: "Chicago",
          duration: "1 day",
          workshopType: "Health",
          rating: 5.0,
        },
      },
      {
        type: "realEstate",
        value: {
          image: "/decorate/searchTab.jpg",
          title: "Modern House",
          location: "Florida",
          distance: "10km",
          price: "$350,000",
        },
      },
    ] as const);

  const [itemData, setItemData] = useState<MockData[]>(mockDataAll);

  const removeItem = (index: number) => {
    setItemData((prevData) => prevData.filter((_, i) => i !== index));
  };

  const RenderCard = () => {
    switch (typeCard) {
      case "location":
        return <RenderLocation />;
      case "realEstate":
        return <RenderRealEstate />;
      default:
        return <div>No matching card type found.</div>;
    }
  };

  const RenderLocation = () => (
    <>
      {itemData
        .filter((item) => item.type === "location")
        .map((item, index) => (
          // <LocationCard key={index} />
          <LocationCard key={index} />
        ))}
    </>
  );

  const RenderRealEstate = () => (
    <>
      {itemData
        .filter((item) => item.type === "realEstate")
        .map((item, index) => (
          // <RealEstateCard key={index} />
          <RealEstateCard key={index} />
        ))}
    </>
  );

  return (
    <div className="w-full grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3">
      {RenderCard()}
    </div>
  );
}
