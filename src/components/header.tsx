'use client'

import { itemsNavbar } from "@/src/data"
import { ToggleTheme } from "./toggle-theme"
import Link from "next/link"
import { LogoImage } from "./ui/logo-img"
import { headerMovile } from '@/src/hooks/header'

import "../styles/header.scss"

const Header = () => {

  headerMovile();

  return (
    <header className="headerSection" id="header">
      <div className="container headerContainer">
        <LogoImage />

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
          </div>
        </nav>

        <div className="menuButton">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ToggleTheme />
      </div>
    </header>
  )
}

export default Header