import Link from "../Link"

function NavItem({ url, children }) {
  return (
    <li>
      <Link href={url}>{children}</Link>
    </li>
  )
}

function Nav({ className, children }) {
  return <ul className={className}>{children}</ul>
}

export { Nav, NavItem }
