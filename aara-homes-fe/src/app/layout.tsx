import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import ClientSetup from "./components/ClientSetup";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AaraHomes",
  description: "AaraHomes",
  icons:{
    icon: "/",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}
            <ClientSetup />
        </Providers>
        </body>
    </html>
  );
}
