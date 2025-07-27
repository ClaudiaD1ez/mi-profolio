import Navbar from "@/src/components/navbar";
import Introduction from "@/src/components/introduction"
// import Image from "next/image";
import AboutMe from "@/src/components/about-me";
import Services from "@/src/components/services";
import Portfolio from "@/src/components/portfolio";
import Footer from "@/src/components/footer";
import Header from "@/src/components/header";
import Franja from "@/src/components/franja";
import Skills from "@/src/components/skills";


export default function Home() {
  return (
    <main className="bodyContainer">
      <Header/>
      {/* <Navbar/> */}
      <Introduction/>
      <Franja/>
      <AboutMe/>
      <Portfolio />
      <Skills />
      <Services />
      {/* <Contact/> */}
      <Footer/>
    </main>
  );
}
