import type { Child, JSX } from 'hono/jsx'

export type IconProps = Omit<JSX.HTMLAttributes, 'children'> & {
  // Width and height; a number is pixels, a string can be any CSS length (e.g. '1em').
  size?: number | string
  // Accessible name. Omit when the icon sits next to visible text: it's then decorative.
  title?: string
}

// Shared wrapper for 24×24 single-color icons. Color follows `currentColor`,
// so icons pick up the surrounding text color unless styled otherwise.
export function Icon({ size = 24, title, children, ...rest }: IconProps & { children: Child }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : 'true'}
      {...rest}
    >
      {title && <title>{title}</title>}
      {children}
    </svg>
  )
}
