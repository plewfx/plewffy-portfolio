import { NavLinks } from "@/constant"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="py-5 lg:py-6 fixed top-0 left-0 right-0 bg-bg">
      <div className="my-0 mx-auto max-w-[90%] flex items-center justify-between">
        <h3 className="font-semibold text-2xl lg:text-[26px]">Plewffy</h3>
        <ul className="flex items-center gap-[34px] lg:hidden">
            {NavLinks.map(link => (
              <li key={link.text} className="font-medium text-xl">
                <Link href={link.href}>{link.text}</Link>
              </li>
            ))}
            <button className="text-xl font-medium py-3 px-[22px] border border-primary hover:text-white hover:bg-primary">
              find me
            </button>
        </ul>
        <div className="hidden lg:flex flex-col gap-[6px] after:h-1 after:w-7 after:bg-primary before:h-1 before:w-7 before:bg-primary">
            
        </div>
      </div>
    </nav>
  )
}

export default Navbar