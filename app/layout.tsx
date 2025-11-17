import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Berntsen Multiservice",
  description: "Profesjonelle tjenester for hjem og bedrift",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body>{children}</body>
    </html>
  );
}

