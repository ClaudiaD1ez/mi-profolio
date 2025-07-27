import './globals.css'
import { ThemeProvider } from "@/src/components/theme-provider"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio | Tu nombre",
  description: "Desarrollador Front-End con enfoque moderno",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}