import { ReactNode } from "react";
import { Navigation } from "../navigation/navigation";

export interface LayoutProps {
  children: ReactNode;
}
export const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navigation />
      <main className="pt-24 container flex justify-between mx-8 flex-wrap mx-auto">
        {children}
      </main>
    </div>
  );
};
