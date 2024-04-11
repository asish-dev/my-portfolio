import About from "@/components/About";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import LayoutComponent from "@/components/LayoutComponent";

export default function Home() {
  return (
    <LayoutComponent>
      <div className="flex flex-col gap-8">
        <About />
        <Experience />
        <Footer />
      </div>
    </LayoutComponent>
  );
}
