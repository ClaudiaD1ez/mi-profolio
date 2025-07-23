import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"
import "../styles/buttons.css"

const getButtonClass = (
  variant: string = "default",
  size: string = "default",
  className?: string
) =>
  cn(
    "button",
    `button--${variant}`,
    `button--${size === "default" ? "default-size" : size}`,
    className
  )

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> & {
  variant?: string
  size?: string
  asChild?: boolean
}) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={getButtonClass(variant, size, className)}
      {...props}
    />
  )
}

export { Button }
