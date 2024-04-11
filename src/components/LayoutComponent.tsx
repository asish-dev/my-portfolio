import { FC } from "react";
import Header from "./Header";
import About from "./About";

interface LayoutComponentProps {
  children: React.ReactNode;
}

const LayoutComponent: FC<LayoutComponentProps> = ({ children }) => {
  return (
    <main className="flex flex-col items-center py-8 px-2 w-full max-w-[620px]">
      <Header />
      {children}
    </main>
  );
};

export default LayoutComponent;
