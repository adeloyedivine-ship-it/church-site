import "./globals.css";

import Navbar from "./components/Navbar";
import Whatsapp from "./components/Whatsapp";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        <Navbar />

        {children}

        <Whatsapp />

      </body>
    </html>
  );
}