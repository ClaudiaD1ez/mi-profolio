'use client'

import { itemsNavbar } from "@/src/data"
import Image from "next/image"
import { ToggleTheme } from "./toggle-theme"
import Link from "next/link"
import { useTheme } from "next-themes"
import { LogoImage } from "./ui/logo-img"

import "../styles/header.css"

const Header = () => {

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

        <ToggleTheme />
      </div>
    </header>
  )
}

export default Header