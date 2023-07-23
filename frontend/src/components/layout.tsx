import { ReactNode } from "react";
import { Navigation } from "./navigation";

export interface LayoutProps {
  children: ReactNode;
}
export const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navigation />

      {children}
    </div>
  );
};
