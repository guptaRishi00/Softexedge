import About from "@/components/homepage/About";
import Herosection from "@/components/homepage/Herosection";
import Workprocess from "@/components/homepage/Workprocess";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#02050a] w-full flex flex-col items-center relative overflow-hidden">
      <Herosection />
      <Workprocess />
      <About />
    </div>
  );
}
