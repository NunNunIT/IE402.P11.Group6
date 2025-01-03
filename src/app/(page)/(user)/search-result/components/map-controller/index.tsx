"use client";

import { createContext, PropsWithChildren, useContext, useState } from "react";

interface IMapControllerProviderProps {
  zoomController: number;
  centerController: TPosition;
  setZoomController: (__zoom: number) => void;
  setCenterController: (__center: TPosition) => void;
  district: string;
  setDistrict: (__district: string) => void;
}

const MapControllerContext = createContext<IMapControllerProviderProps>({} as IMapControllerProviderProps);

export const useMapController = () => {
  return useContext(MapControllerContext);
}

export function MapControllerProvider({ children }: PropsWithChildren) {
  const [zoomController, setZoomController] = useState<number>(10);
  const [centerController, setCenterController] = useState<TPosition>(undefined);
  const [district, setDistrict] = useState<string>("");

  return (
    <MapControllerContext.Provider value={{
      zoomController,
      centerController,
      setZoomController,
      setCenterController,
      district,
      setDistrict,
    }}>
      {children}
    </MapControllerContext.Provider>
  )
}