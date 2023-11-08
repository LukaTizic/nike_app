import { headerLogo } from "@/public/images";
import Image from "next/image";
import { navLinks } from "@/constants";
import { hamburger } from "@/public/icons";

const Navbar = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <Image src={headerLogo} alt='logo' width={130} height={29} />
        </a>

        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className='fonts-montserrat leading-normal text-lg text-slate-gray hover:underline hover:text-slate-800  
'
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='hidden max-lg:block'>
          <Image src={hamburger} alt='hamburger' width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
