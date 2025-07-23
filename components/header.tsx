import { itemsNavbar } from "@/data"
import Image from "next/image"
import { ToggleTheme } from "./toggle-theme"
import Link from "next/link"
import "../components/styles/header.css"

const Header = () => {
  return (
    <header className="headerSection" id="header">
      <div className="container headerContainer">
        <Image src="/icons/logo.svg" alt="logo" className="logo-header" width={100} height={60}/>

        <nav className="z-20">
          <div className="nav">
            {itemsNavbar.map((item) => (
              <div key={item.id} className="options">
                <Link href={item.link}>
                  {item.icon}
                  {item.title}
                </Link>
              </div>
            ))}
            <ToggleTheme />
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header