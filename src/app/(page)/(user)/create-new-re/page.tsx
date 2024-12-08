"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ImageDropZone } from "@/components";
import { Textarea } from "@/components/ui/textarea";
import TranslateKey from "@/lib/func/transfer";

const FormSchema = z.object({
  title: z.string().min(1, "Tên không được bỏ trống."),
  desc: z.string().min(1, "Mô tả không được bỏ trống."),
  imgs: z.array(z.string()).min(1, "Ít nhất một hình ảnh phải được tải lên."),
  type: z.enum(["land", "house"]).optional(),
  area: z.string().min(1, "Diện tích không được bỏ trống."),
  price: z.number().min(1, "Giá bán không được bỏ trống."),
  legal: z.enum(["sodo", "hopdong", "dangchoso", "khac", ""]).optional(),
  interior: z.string().optional(),
  bedroom: z.number().optional(),
  bathroom: z.number().optional(),
  direction: z
    .enum([
      "nam",
      "bac",
      "tay",
      "dong",
      "taynam",
      "taybac",
      "dongbac",
      "dongnam",
    ])
    .optional(),
});

export default function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      desc: "",
      type: undefined,
      area: "",
      price: undefined,
      legal: undefined,
      interior: "",
      bedroom: undefined,
      bathroom: undefined,
      direction: undefined,
      imgs: [],
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    });
  };

  return (
    <div className="relative max-w-5xl w-full mx-auto my-3">
      <h1 className="md:text-4xl text-2xl font-bold my-3">
        Tạo tin đăng bán bất động sản
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="bg-white dark:bg-zinc-900 p-4 rounded-lg">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Tiêu đề</FormLabel>
                  <FormControl>
                    <Input placeholder="Nhập tiêu đề" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="desc"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Mô tả</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Nhập mô tả" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="bg-white dark:bg-zinc-900 p-4 rounded-lg">
            <FormField
              control={form.control}
              name="imgs"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Hình ảnh</FormLabel>
                  <FormControl>
                    <ImageDropZone
                      value={field.value || []} // Đảm bảo giá trị mặc định là []
                      onChange={field.onChange} // Sử dụng field.onChange để cập nhật giá trị
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="bg-white dark:bg-zinc-900 p-4 rounded-lg">
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Loại hình</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={(value) => field.onChange(value)}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Chọn loại hình" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="land">Đất</SelectItem>
                          <SelectItem value="house">Nhà</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="legal"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Giấy tờ</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={(value) => field.onChange(value)}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Chọn loại giấy tờ" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="sodo">Sổ đỏ/ Sổ hồng</SelectItem>
                          <SelectItem value="hopdong">
                            Hợp đồng mua bán
                          </SelectItem>
                          <SelectItem value="dangchoso">Đang chờ sổ</SelectItem>
                          <SelectItem value="khac">Khác</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="area"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Diện tích</FormLabel>
                  <FormControl>
                    <Input placeholder="Nhập diện tích" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Giá bán</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Nhập giá bán"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="bg-white dark:bg-zinc-900 p-4 rounded-lg">
            <FormField
              control={form.control}
              name="interior"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Nội thất</FormLabel>
                  <FormControl>
                    <Input placeholder="Nhập nội thất (nếu có)" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="bedroom"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Số phòng ngủ</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Nhập số phòng ngủ"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="bathroom"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Số phòng tắm</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Nhập số phòng tắm"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="direction"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Hướng</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={(value) => field.onChange(value)}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Chọn loại hướng" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {[
                            "nam",
                            "bac",
                            "tay",
                            "dong",
                            "taynam",
                            "taybac",
                            "dongbac",
                            "dongnam",
                          ].map((item, index) => (
                            <SelectItem key={index} value={item}>
                              {TranslateKey(item)}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="sticky bottom-0 p-2">
            <Button type="submit" className="w-full">
              Gửi
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
