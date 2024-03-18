import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Banana Early Learning Centre",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <div className="bg-cover bg-center h-96 bg-[url('/images/childcare_banner.jpg')] flex flex-col">
          <Header />
        </div>
        <div className="grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
