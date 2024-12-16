"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type DataColumns = {
  _id: string;
  title: string;
  price: number;
  area: number;
  imageUrl: string;
  locate: locate;
};

export const columns: ColumnDef<DataColumns>[] = [
  {
    accessorKey: "imageUrl",
    header: () => <div className="text-left font-semibold"></div>,
    cell: ({ row }) => {
      return (
        <Image
          src={row.getValue("imageUrl")}
          alt={"Hình ảnh"}
          className="object-cover aspect-square"
          width={100}
          height={100}
          unoptimized
        />
      );
    },
  },
  {
    accessorKey: "title",
    header: () => <div className="text-left font-semibold">Tiêu đề</div>,
    cell: ({ row }) => {
      return (
        <div className="text-left font-medium">{row.getValue("title")}</div>
      );
    },
  },
  {
    accessorKey: "price",
    header: () => <div className="text-right font-semibold">Giá</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("price"));

      return <div className="text-right font-medium">{amount} tỷ</div>;
    },
  },
  {
    accessorKey: "area",
    header: () => <div className="text-right font-semibold">Diện tích</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("area"));

      return (
        <div className="text-right font-medium">
          {amount} m<sup>2</sup>
        </div>
      );
    },
  },
  {
    accessorKey: "locate",
    header: () => <div className="text-right font-semibold">Địa chỉ</div>,
    cell: ({ row }) => {
      const locate = row.original.locate; // Truy cập toàn bộ locate object
      return (
        <div className="text-right font-medium">
          {locate.diachi}, {locate.xa}, {locate.huyen}, {locate.tinh}
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Hành động</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Xem</DropdownMenuItem>
            <DropdownMenuItem>Xóa</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];