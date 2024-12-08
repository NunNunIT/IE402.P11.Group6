"use client";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import { Button } from "../ui/button";
import { Fragment } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { IoIosNotifications } from "react-icons/io";
import { LogoutButton } from "./authentication-button";
import { NAVIGATION_OPTIONS_DATA } from "@/data/navigation.data";
import { useSession } from "next-auth/react";

export const AuthenticationDropdownMenu = () => {
  const { data: session, status } = useSession();

  return (
    status === "authenticated" &&
    !!session?.user?.id && (
      <>
        <Button variant="ghost" size="icon">
          <IoIosNotifications className="size-6 mx-auto" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger className="md:block hidden" asChild>
            <Button variant="ghost" size="icon">
              <HiDotsVertical className="size-6 mx-auto" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            <div className="flex flex-row items-center gap-3 p-2">
              <Avatar>
                <AvatarImage src={session.user.image} alt={session.user.name} />
                <AvatarFallback>{(session.user.name ?? "U")[0]}</AvatarFallback>
              </Avatar>
              <span>{session.user.name}</span>
            </div>
            <DropdownMenuSeparator />
            {NAVIGATION_OPTIONS_DATA.map((data) => (
              (!data.isNeedAuth || session?.user) && (
                <Fragment key={data.title}>
                  <DropdownMenuItem >
                    <Button
                      href={data.link}
                      variant="ghost"
                      className="w-full justify-start"
                    >
                      {data.title}
                    </Button>
                  </DropdownMenuItem>
                  {data?.isNeedSeparator && <DropdownMenuSeparator />}
                </Fragment>
              )
            ))}
            <DropdownMenuItem className="!p-0">
              <LogoutButton className="w-full">Đăng xuất</LogoutButton>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </>
    )
  );
};