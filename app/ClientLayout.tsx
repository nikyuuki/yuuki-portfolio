"use client";

import TopNavbarLayout from "./topnavbar";
import AOSInitializer from "./AOSInitializer";
import FireflyCursor from "./components/FireflyCursor";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AOSInitializer />
      <FireflyCursor />
      <TopNavbarLayout>{children}</TopNavbarLayout>
    </>
  );
}
