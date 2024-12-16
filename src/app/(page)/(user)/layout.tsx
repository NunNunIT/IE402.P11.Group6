import type { Metadata } from "next";
import NavBar from "@/partial/nav";
import { BreadcrumbCustom } from "@/components";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />
      <BreadcrumbCustom />
      {children}
    </>
  );
}
