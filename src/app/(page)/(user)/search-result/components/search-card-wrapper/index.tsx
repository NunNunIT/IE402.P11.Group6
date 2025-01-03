"use client";

import { ENUM_MARKER_SYMBOL, parseObjectToSearchParams } from "@/utils";
import { useEffect, useRef } from "react";

import { SearchResultCard } from "@/components/card";
import dynamic from "next/dynamic";
import useSWRInfinite from "swr/infinite";
import SearchRe from "@/components/search/searchTab/searchRe";
import { useMapController } from "..";
import VNLocationData from "@/components/VNLocationSelector/data.json";

const GISMap = dynamic(() => import("@/components/gis-map"), { ssr: false });

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch data");

  const payload = await res.json();
  return payload.data as { rows: any[], total: number };
};

export const SearchCardWrapper = ({ searchParams }: IDefaultPageProps) => {
  const observerRef = useRef<HTMLDivElement | null>(null);
  const { setZoomController, setCenterController } = useMapController();
  useEffect(() => {
    const province = searchParams.province;
    const district = searchParams.district;
    if (!district) return;
    const center = (VNLocationData
      .find((item) => item.Name === province)
      ?.Districts
      .find((item) => item.Name === district) as any)
      ?.Center;
    setZoomController(12);
    if (!center) return;
    setCenterController(center);
  }, [])

  const getKey = (pageIndex: number, previousPageData: any[]) => {
    if (previousPageData && previousPageData.length === 0) return null; // End of data
    const baseParams = parseObjectToSearchParams(searchParams);
    return `/api/real-estates?${baseParams}&page=${pageIndex + 1}&limit=10`;
  };

  const { centerController, zoomController } = useMapController();
  const { data, error, isLoading, size, setSize } = useSWRInfinite(
    getKey,
    fetcher,
    {
      revalidateFirstPage: false,
      revalidateOnFocus: false,
    }
  );

  const flattenedData = data ? data.map(item => item.rows).flat() : [];
  const isLoadingMore =
    isLoading || (size > 0 && data && typeof data[size - 1] === "undefined");
  const hasMoreData = !data || (data[size - 1] && data[size - 1].rows.length > 0);

  useEffect(() => {
    const observerElement = observerRef.current;
    if (!observerElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isLoadingMore && hasMoreData) {
          setSize(size + 1);
        }
      },
      { threshold: 1.0 }
    );

    observer.observe(observerElement);

    return () => {
      observer.disconnect();
    };
  }, [size, isLoadingMore, hasMoreData, setSize]);

  return (
    <>
      <div className="w-full h-full bg-white dark:bg-zinc-900 p-3 space-y-3">
        <div className="w-full max-w-4xl mx-auto my-auto z-10 md:px-0">
          <SearchRe />
        </div>
        <div className="flex flex-col">
          <div className="px-4 mb-4">
            <h1>
              Bất động sản tại{" "}
              <span className="text-orange-500">
                {!!searchParams.ward && `${searchParams.ward}, `}
                {!!searchParams.district && `${searchParams.district}, `}
                {searchParams.province}
              </span>
            </h1>
            {!(isLoading || error) && (
              <p>Hiện có {data[0].total}+ tin đăng bán tại khu vực này</p>
            )}
          </div>

          {flattenedData.length > 0 ? (
            <div className="w-full flex flex-col gap-3 md:p-0 p-2">
              {flattenedData.map((item, index) => (
                <SearchResultCard key={index} {...item} />
              ))}
            </div>
          ) : (
            !isLoadingMore && (
              <div className="flex justify-center items-center h-96">
                <p>Không có kết quả nào</p>
              </div>
            )
          )}

          {/* Loading Indicator */}
          {isLoadingMore && <p>Loading...</p>}

          {/* Intersection Observer Target */}
          {hasMoreData && <div ref={observerRef} className="h-10" />}
        </div>
      </div>
      <GISMap
        zoom={15}
        isShowDistrict
        {...(zoomController ? { zoom: zoomController } : {})}
        {...(centerController ? { center: centerController } : {})}
        points={flattenedData?.map((data) => ({
          ...data.locate,
          title: data.title,
          type: ENUM_MARKER_SYMBOL.REAL_ESTATE,
        }))}
      />
    </>
  );
};

export default SearchCardWrapper;
