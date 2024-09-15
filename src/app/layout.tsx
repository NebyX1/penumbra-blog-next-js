import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "Penumbra",
  description: "Disfrutamos de la polémica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main className="bg-gray-900">
          <div className="min-h-[85vh]">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
