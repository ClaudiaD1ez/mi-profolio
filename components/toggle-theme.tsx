'use client'

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ToggleTheme() {
  const { setTheme } = useTheme()

  return (
    <div className="toggleContainer">
      <button className="toggleBtn" onClick={() => setTheme("light")}>
        <Sun style={{ width: "1.2rem", height: "1.2rem" }} />
      </button>
      <button className="toggleBtn" onClick={() => setTheme("dark")}>
        <Moon style={{ width: "1.2rem", height: "1.2rem" }} />
      </button>
    </div>
  )
}