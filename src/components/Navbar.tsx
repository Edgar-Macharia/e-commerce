import { useState } from 'react';
import { navLinks } from '../constants';
import logo from '../assets/logo.svg';
import Search from './Search';


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("");

  return (
    <nav className="w-full flex md:px-20 px-2 py-6 justify-between items-center bg-snow z-30 navbar">
      <h2 className='flex text-2xl font-bold cursor-pointer'>Ec
        <span>
          <img src={logo} alt='ecommerce' className='w-[28px] h-[36px] pb-2' />
        </span>
        mmerce
      </h2>

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        <li className='mx-10'>
          <Search />
        </li>
        <li className='mr-10 active:text-yellow'>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 56 56">
            <path fill="currentColor" d="M20.008 39.649H47.36c.913 0 1.71-.75 1.71-1.758s-.797-1.758-1.71-1.758H20.406c-1.336 0-2.156-.938-2.367-2.367l-.375-2.461h29.742c3.422 0 5.18-2.11 5.672-5.461l1.875-12.399a7 7 0 0 0 .094-.89c0-1.125-.844-1.899-2.133-1.899H14.641l-.446-2.976c-.234-1.805-.89-2.72-3.28-2.72H2.687c-.937 0-1.734.822-1.734 1.76c0 .96.797 1.781 1.735 1.781h7.921l3.75 25.734c.493 3.328 2.25 5.414 5.649 5.414m31.054-25.454L49.4 25.422c-.188 1.453-.961 2.344-2.344 2.344l-29.906.023l-1.993-13.594ZM21.86 51.04a3.766 3.766 0 0 0 3.797-3.797a3.78 3.78 0 0 0-3.797-3.797c-2.132 0-3.82 1.688-3.82 3.797c0 2.133 1.688 3.797 3.82 3.797m21.914 0c2.133 0 3.82-1.664 3.82-3.797c0-2.11-1.687-3.797-3.82-3.797c-2.109 0-3.82 1.688-3.82 3.797c0 2.133 1.711 3.797 3.82 3.797" />
          </svg>
        </li>

        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`cursor-pointer ${active === nav.id ? 'text-yellow' : 'text-primary'} ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
          onClick={() => setActive(nav.id)}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <button className='mr-4 active:text-yellow'>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 56 56">
            <path fill="currentColor" d="M20.008 39.649H47.36c.913 0 1.71-.75 1.71-1.758s-.797-1.758-1.71-1.758H20.406c-1.336 0-2.156-.938-2.367-2.367l-.375-2.461h29.742c3.422 0 5.18-2.11 5.672-5.461l1.875-12.399a7 7 0 0 0 .094-.89c0-1.125-.844-1.899-2.133-1.899H14.641l-.446-2.976c-.234-1.805-.89-2.72-3.28-2.72H2.687c-.937 0-1.734.822-1.734 1.76c0 .96.797 1.781 1.735 1.781h7.921l3.75 25.734c.493 3.328 2.25 5.414 5.649 5.414m31.054-25.454L49.4 25.422c-.188 1.453-.961 2.344-2.344 2.344l-29.906.023l-1.993-13.594ZM21.86 51.04a3.766 3.766 0 0 0 3.797-3.797a3.78 3.78 0 0 0-3.797-3.797c-2.132 0-3.82 1.688-3.82 3.797c0 2.133 1.688 3.797 3.82 3.797m21.914 0c2.133 0 3.82-1.664 3.82-3.797c0-2.11-1.687-3.797-3.82-3.797c-2.109 0-3.82 1.688-3.82 3.797c0 2.133 1.711 3.797 3.82 3.797" />
          </svg>
        </button>

        <button onClick={() => setToggle((prev) => !prev)} className='z-40'>
          {toggle ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
              <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <path d="M12 12H12" opacity="0" />
                <path d="M5 5L19 19M5 19L19 5" />
              </g>
            </svg>) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12h16M4 6h16M4 18h16" />
            </svg>
          )}</button>

        <div className={`${toggle ? 'flex' : 'hidden'} fixed inset-0 z-30 bg-black bg-opacity-50`}>
          <div className='p-6 bg-snow w-[60%] h-full shadow-lg sidebar z-400 relative'>
            <h2 className="text-2xl font-bold mb-8 text-center">Ec<span><img src={logo} alt="ecommerce" className="w-[28px] h-[36px] inline-block pb-2" /></span>mmerce</h2>

            <ul className='list-none flex flex-col mt-8 items-center flex-1'>
              <li className='mb-10'>Search</li>
              {navLinks.map((nav, index) => (
                <li key={nav.id} className={`cursor-pointer ${active === nav.id ? 'text-yellow' : 'text-primary'} ${index === navLinks.length - 1 ? 'mb-0' : 'mb-10'}`}
                onClick={() => setActive(nav.id)}
                >
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar