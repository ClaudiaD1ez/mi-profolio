import Navbar from "@/components/navbar";
import Introduction from "@/components/introduction"
// import Image from "next/image";
import AboutMe from "@/components/about-me";
import Services from "@/components/services";
import Portfolio from "@/components/portfolio";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Franja from "@/components/franja";
import Skills from "@/components/skills";


export default function Home() {
  return (
    <main className="bodyContainer">
      <Header/>
      {/* <Navbar/> */}
      <Introduction/>
      <Franja/>
      <AboutMe/>
      <Skills />
      <Services />
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact/>
      <Footer/>
    </main>
  );
}
