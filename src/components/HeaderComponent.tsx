import Logo from "../assets/images/logo.svg";
import { Button, Link } from "@heroui/react";
function HeaderComponent() {
  return (
    <nav
      id="navbar"
      className="flex sm:gap-2 mt-3 w-full justify-between items-center"
    >
      <div className="flex items-center gap-2 lg:ml-28 ml-6 md:ml-16">
        <img src={Logo} alt="Logo" className="lg:w-8 lg:h-8 w-6 h-6" />
        <p className="font-bold text-inherit lg:text-lg text-sm">LaslesVPN</p>
      </div>
      <div id="navbar-links" className="hidden lg:flex">
        <ul className="flex items-center gap-20 md:gap-10">
          <li className="cursor-pointer">
            <Link href="#Home" className="text-slate-700">
              Home
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href="#About" className="text-slate-700">
              About
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href="#Features" className="text-slate-700">
              Features
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href="#Pricing" className="text-slate-700">
              Pricing
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href="#Contact" className="text-slate-700">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div
        id="navbar-buttons"
        className="flex items-center lg:gap-10 gap-6 lg:mr-28 mr-10"
      >
        <Link href="#Login" className="text-slate-700 lg:text-lg text-sm">
          Login
        </Link>
        <Button
          variant="bordered"
          color="danger"
          className="rounded-full lg:w-36 h-8 lg:h-12 w-28"
        >
          Sign Up
        </Button>
      </div>
    </nav>
  );
}

export default HeaderComponent;
