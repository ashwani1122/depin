
import "./globals.css";
import {
  ClerkProvider
} from '@clerk/nextjs'
import { ThemeProvider } from "@/components/theme-provider";
import Appbar from "@/components/Appbar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <html lang="en">
      <ClerkProvider>
        <body>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Appbar />
            {children}
          </ThemeProvider>
        </body>
      </ClerkProvider>
    </html>
    </>
  );
}