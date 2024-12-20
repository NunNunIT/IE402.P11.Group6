import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import { AppSidebar } from "@/partial/sidebar";

// import { ENUM_ROLE } from "@/utils";
// import { auth } from "@/lib/auth";
// import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quản trị viên",
  description: "Trang quản trị viên.",
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  // TODO: Uncomment this code to enable authentication
  // const session = await auth();
  // if (![ENUM_ROLE.Admin, ENUM_ROLE.Staff].includes(session?.user?.role)) return notFound();

  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="w-full">
        <div className="w-full sticky top-0 p-3 bg-white dark:bg-zinc-900 z-50">
          <SidebarTrigger />
        </div>
        <div className="w-full max-w-6xl mx-auto px-2">{children}</div>
      </div>
    </SidebarProvider>
  );
}
