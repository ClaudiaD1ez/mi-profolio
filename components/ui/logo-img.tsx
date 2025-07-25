'use client'

import Image from "next/image"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function LogoImage() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Esperar hasta que el componente se monte en el cliente
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null // evitar render hasta que esté montado

  const imageSrc =
    resolvedTheme === "dark"
      ? "/img/logo-dark.png"
      : "/img/logo.png"

  return (
    <Image
      src={imageSrc}
      alt="Foto de portada"
      width={200}
      height={30}
      className="img-portada"
    />
  )
}