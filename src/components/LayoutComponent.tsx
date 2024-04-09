import { FC } from 'react';
import Header from './Header';
import About from './About';

interface LayoutComponentProps {
  children: React.ReactNode;
}

const LayoutComponent: FC<LayoutComponentProps> = ({ children }) => {
  return (
    <main className="flex flex-col items-center py-8 w-96">
      <Header />
      {children}
    </main>
  );
};

export default LayoutComponent;
