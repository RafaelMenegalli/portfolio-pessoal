"use client";

import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/context/language-context";
import { ResumeProvider } from "@/components/sections/resume-modal";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
      <LanguageProvider>
        <TooltipProvider>
          <ResumeProvider>{children}</ResumeProvider>
          <Toaster position="bottom-center" />
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
