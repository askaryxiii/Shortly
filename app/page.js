import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import PreFooter from "@/components/PreFooter";
import Shorten from "@/components/Shorten";
import States from "@/components/States";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-5">
      <Hero />
      <Shorten />
      <States />
      <PreFooter />
      <Footer />
    </div>
  );
}
