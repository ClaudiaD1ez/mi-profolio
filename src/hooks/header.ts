import { useEffect } from 'react'

export const headerMovile = () => {
  useEffect(() => {
    const button = document.querySelector("header .menuButton")

    const handleClick = () => {
      button?.classList.toggle("open")
    }

    button?.addEventListener("click", handleClick)

    return () => {
      button?.removeEventListener("click", handleClick)
    }
  }, [])
}