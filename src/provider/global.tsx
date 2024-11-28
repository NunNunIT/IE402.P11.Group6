import { AuthDialogProvider, ThemeProvider } from ".";

import { SessionProvider } from "next-auth/react"
import { Toaster } from "@/components/ui/sonner";
import { auth } from "@/lib/auth";

export async function GlobalProvider({ children }: { children: React.ReactNode }) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <AuthDialogProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </AuthDialogProvider>
    </SessionProvider>
  )
}
