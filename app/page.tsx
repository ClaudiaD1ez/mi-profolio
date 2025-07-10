import Navbar from "@/components/navbar";
import Introduction from "@/components/introduction"
import Image from "next/image";
import AboutMe from "@/components/about-me";
import Experience from "@/components/experience";
import Services from "@/components/services";
import Portfolio from "@/components/portfolio";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";


export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <Introduction/>
      <AboutMe/>
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact/>
    </main>
  );
}
