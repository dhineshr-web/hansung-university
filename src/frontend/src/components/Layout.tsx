import type { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="uni-app">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
