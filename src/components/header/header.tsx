import { LinkHome } from '../linkHome/linkHome';
import { MenuMobile } from '../menuMobile/menuMobile';

export function Header() {
  return (
    <header className="p-4 bg-black flex justify-between items-center w-full">
      <nav className="container flex justify-between h-16 mx-auto">
        <LinkHome />
        <ul className="items-stretch hidden space-x-3 md:flex">
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex transition text-white hover:text-orange items-center px-4 -mb-1 border-b-2 dark:border-"
            >
              About
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex transition text-white hover:text-orange items-center text-orange px-4 -mb-1 border-b-2 dark:border- dark:text-violet-600 dark:border-violet-600"
            >
              Blog
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex transition text-white hover:text-orange items-center px-4 -mb-1 border-b-2 dark:border-"
            >
              Projects
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex transition text-white hover:text-orange items-center px-4 -mb-1 border-b-2 dark:border-"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <MenuMobile />
    </header>
  );
}
