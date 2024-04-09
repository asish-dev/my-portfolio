import About from '@/components/About';
import Header from '@/components/Header';
import LayoutComponent from '@/components/LayoutComponent';
import Image from 'next/image';

export default function Home() {
  return (
    <LayoutComponent>
      <About />
    </LayoutComponent>
  );
}
