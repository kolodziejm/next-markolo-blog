import { useState } from 'react';
import Link from 'next/link';
import { IoMdMenu } from 'react-icons/io';
import { ROOT_ROUTE, ABOUT_ROUTE } from '../../config/routes';
import breakpoints from '../../config/breakpoints';
import tw, { styled }  from 'twin.macro';

const Logo = styled.img`
  ${tw`block w-full cursor-pointer`};

  max-width: 80px;

  @media only screen and (min-width: ${breakpoints.tablet}) {
    max-width: 108px;
  }
`;

function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  function toggleMobileMenu() {
    setShowMobileMenu((prevState) => !prevState);
  }

  return (
    <header className="shadow-md py-3 px-4 md:py-6 mb-5">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={ROOT_ROUTE}>
          <Logo 
            src="/logo.png" 
            alt="" 
          />
        </Link>

        <nav>
          <button className="md:hidden" onClick={toggleMobileMenu}>
            <IoMdMenu size={24} />
          </button>

          <ul className="list-none hidden md:flex">
            <li className="mr-8 text-primary hover:text-gray-500">
              <Link href={ROOT_ROUTE}>
                <a>Posts</a>
              </Link>
            </li>
            <li className="text-primary hover:text-gray-500">
              <Link href={ABOUT_ROUTE}>
                <a>About me</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {showMobileMenu && (
        <ul className="pt-5 md:hidden">
          <li className="mb-3">
            <Link href={ROOT_ROUTE}>
              <a>Posts</a>
            </Link>
          </li>
          <li>
            <Link href={ABOUT_ROUTE}>
              <a>About me</a>
            </Link>
          </li>
        </ul>
      )}
    </header >
  );
}

export default Navbar;
