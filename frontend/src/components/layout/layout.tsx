import { ReactNode } from "react";
import { Navigation } from "../navigation/navigation";

export interface LayoutProps {
  children: ReactNode;
}
export const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
    </div>
  );
};
