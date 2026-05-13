import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RICHEM Worldwide",
  description: "Riches In Christ Evangelical Mission",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}