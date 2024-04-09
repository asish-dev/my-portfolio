import About from '@/components/About';
import Header from '@/components/Header';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 pt-20 w-96">
      <Header />
      <About />
    </main>
  );
}
