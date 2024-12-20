"use client";

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemProps,
  useComboboxContext,
} from "@/components/customize-ui/combobox";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { FaLocationDot } from "react-icons/fa6";
import { Input } from "@/components/ui/input";
import { IoSearchOutline } from "react-icons/io5";
import { SelectorLocationDialogSheet } from "@/components";
import VNLocationData from "../../VNLocationSelector/data.json";
import { cn } from "@/lib/utils";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SearchRe() {
  const [searchProvince, setSearchProvince] = useState<string>("Hồ Chí Minh");

  const [value, onValueChange] = useState<string>("");
  const [currentPosition, setCurrentPosition] = useState<TPosition>(undefined);
  const [propertyType, setPropertyType] = useState(undefined);
  const [priceRange, setPriceRange] = useState(undefined);
  const [areaRange, setAreaRange] = useState(undefined);

  const ward = useMemo(() => {
    const context = value.split(",");
    if (context.length === 2) return undefined;
    return context[0]
      .replace("Xã ", "")
      .replace("Thị trấn ", "")
      .replace("Phường ", "");
  }, [value]);
  const district = useMemo(() => {
    const context = value.split(",");
    if (context.length === 2) return context[0];
    return context[1];
  }, [value]);

  return (
    <form
      action={`/search-result`}
      method="GET"
      className={cn("flex flex-col gap-2")}
    >
      <>
        <div
          className={cn(
            "gap-2 flex md:flex-row flex-col w-full rounded-md",
            "border border-zinc-200 bg-white px-4 py-2 text-sm",
            "ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium",
            "placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2",
            "focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed",
            "disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:ring-offset-zinc-950",
            "dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300"
          )}
        >
          <input type="hidden" name="ward" value={ward} />
          <input type="hidden" name="district" value={district} />
          <input type="hidden" name="province" value={searchProvince} />
          <SelectorLocationDialogSheet
            search={true}
            multiChoice={false}
            selectedValue={searchProvince}
            setSelectedValue={setSearchProvince}
            typeTrigger={2}
            positioning
            currentPosition={currentPosition}
            setCurrentPosition={setCurrentPosition}
            typeOptions={2}
          />
          <Combobox value={value} onValueChange={onValueChange}>
            <ComboboxInput
              startIcon={<IoSearchOutline className="size-6" />}
              placeholder="Nhập địa điểm tìm kiếm"
            />
            <ComboboxContent>
              {VNLocationData.find(
                (province) => province.Name === searchProvince
              )?.Districts.map(({ Wards: wards, ...district }) => {
                const key = `${district.Id}`;
                const label = `${district.Name}, ${searchProvince}`;
                return [
                  <ComboboxItem
                    key={key}
                    value={label}
                    label={label}
                    className="justify-start"
                  >
                    <CustomizeComboboxItemChildren
                      value={label}
                      label={label}
                    />
                  </ComboboxItem>,
                  ...wards.map((ward) => {
                    const key = `${district.Id + (ward as any)?.Id}`;
                    const label = `${ward.Level} ${(ward as any)?.Name}, ${
                      district.Name
                    }, ${searchProvince}`;
                    return (
                      <ComboboxItem
                        key={key}
                        value={label}
                        label={label}
                        className="justify-start"
                      >
                        <CustomizeComboboxItemChildren
                          value={label}
                          label={label}
                        />
                      </ComboboxItem>
                    );
                  }),
                ];
              })}
              <ComboboxEmpty>Không tìm thấy</ComboboxEmpty>
            </ComboboxContent>
          </Combobox>
          <Button type="submit">
            <IoSearchOutline className="size-6" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-2">
          {/* Loại nhà đất */}
          <Select value={propertyType} onValueChange={setPropertyType}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Loại nhà đất" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Loại nhà đất</SelectLabel>
                <SelectItem value="all">Tất cả nhà đất</SelectItem>
                <SelectItem value="land">Đất</SelectItem>
                <SelectItem value="house">Nhà</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <input type="hidden" name="propertyType" value={propertyType} />

          {/* Mức giá */}
          <Select value={priceRange} onValueChange={setPriceRange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Mức giá" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Mức giá</SelectLabel>
                <SelectItem value="all">Tất cả mức giá</SelectItem>
                <SelectItem value="under500tr">Dưới 500 triệu</SelectItem>
                <SelectItem value="500tr-800tr">500 - 800 triệu</SelectItem>
                <SelectItem value="800tr-1ty">800 triệu - 1 tỷ</SelectItem>
                <SelectItem value="up1ty">Trên 1 tỷ</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <input type="hidden" name="priceRange" value={priceRange} />

          {/* Diện tích */}
          <Select value={areaRange} onValueChange={setAreaRange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Diện tích" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Diện tích</SelectLabel>
                <SelectItem value="all">Tất cả diện tích</SelectItem>
                <SelectItem value="under30m">Dưới 30 m²</SelectItem>
                <SelectItem value="30m-50m">30 - 50 m²</SelectItem>
                <SelectItem value="50m-80m">50 - 80 m²</SelectItem>
                <SelectItem value="up80m">Trên 80 m²</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <input type="hidden" name="areaRange" value={areaRange} />
        </div>
      </>
    </form>
  );
}

function CustomizeComboboxItemChildren({ label, value }: ComboboxItemProps) {
  const { selectedItem } = useComboboxContext();
  const isSelected = selectedItem?.value === value;

  return (
    <>
      <FaLocationDot className="size-5 mr-2" />
      <span className="text-sm">{label}</span>
      {isSelected && (
        <span className="ml-auto flex h-full items-center justify-center">
          <Check className="size-4" />
        </span>
      )}
    </>
  );
}
