import { useEffect } from 'react'

export const headerMovile = () => {
  useEffect(() => {
    const button = document.querySelector("header .menuButton")
    const nav = document.querySelector("header .menuHeader")

    const handleClick = () => {
      button?.classList.toggle("open")
      nav?.classList.toggle("open")
    }

    button?.addEventListener("click", handleClick)
    nav?.addEventListener("click", handleClick)

    return () => {
      button?.removeEventListener("click", handleClick)
      nav?.removeEventListener("click", handleClick)
    }
  }, [])
}