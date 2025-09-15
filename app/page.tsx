import Navbar from "@/src/components/navbar";
import Banner from "@/src/components/banner"
import AboutMe from "@/src/components/about-me";
import Services from "@/src/components/services";
import Proyectos from "@/src/components/proyectos";
import Footer from "@/src/components/footer";
import Header from "@/src/components/header";
import Skills from "@/src/components/skills";


export default function Home() {
  return (
    <main className="bodyContainer">
      <Header/>
      <Navbar/>
      <Banner/>
      <AboutMe/>
      <Proyectos />
      <Skills />
      <Services />
      <Footer/>
    </main>
  );
}
