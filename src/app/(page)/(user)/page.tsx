import Image from "next/image";
import { SearchTab } from "@/components/search";
import { SeeMoreType1 } from "@/components/seeMore";
import { GroupPicture } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trang chủ",
  description: "Viết đi",
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh]">
      <div className="relative w-full h-fit pt-[8rem] md:pb-36 pb-8 -mt-[11rem] flex justify-center items-center z-10 overflow-hidden">
        <Image
          src="/decorate/searchTab.jpg"
          alt="Background"
          width="1000"
          height="1000"
          className="absolute z-5 w-full h-full object-cover"
        />
        <div className="w-full max-w-4xl mx-auto my-auto z-10 pt-16 md:px-0 px-3">
          <SearchTab />
        </div>
      </div>
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-6 my-6 md:p-0 p-2">
        <SeeMoreType1
          typeCard="realEstate"
          title="Bất động sản"
          linkFetch="/api/real-estates?page=1"
          seeMoreLink="/real-estate"
        />
      </div>

      <div className="w-full bg-teal-100/30 mx-auto flex flex-col gap-6 my-6 py-6 md:px-0 px-2">
        <GroupPicture />
      </div>

      <div className="w-full max-w-6xl mx-auto flex flex-col gap-6 my-6 md:p-0 p-2">
        <SeeMoreType1
          typeCard="news"
          title="Tin tức"
          linkFetch="/api/news?page=1"
          seeMoreLink="/news"
        />
      </div>
    </div>
  );
}
