'use client'

import { useState, useEffect } from 'react';
import { navMenu } from '../data/navMenu';
import { useTheme } from '@/app/nextThemeProvider';
import { VscHome, VscAccount, VscGithubProject } from 'react-icons/vsc';
import { IoIosContact } from "react-icons/io";
import Dock from './dock';


const NavBar = () => {

  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    setTheme(theme !== 'dark' ? "dark" : "light")
  };


  const items = [
    { icon: <VscHome size={18} />, label: 'Home', onClick: () => alert('Home!') },
    { icon: <VscGithubProject size={18} />, label: 'Project', onClick: () => alert('Archive!') },
    { icon: <VscAccount size={18} />, label: 'About Me', onClick: () => alert('Profile!') },
    { icon: <IoIosContact size={18} />, label: 'Contact', onClick: () => alert('Settings!') },
  ];

  return (
    <div className='flex justify-center'>
      <nav
        className={`pointer-events-auto top-4  flex z-100 fixed dark:bg-black/70 bg-white/70 w-full items-center justify-between gap-6 dark:text-white rounded-full px-4 py-1 transition-all sm:px-6 sm:pr-4 ${scrolled ? "" : "bg-none"}`}
        style={{
          width: '100%',
          maxWidth: scrolled ? '600px' : '1280px',
          backdropFilter: scrolled ? 'blur(12px)' : 'blur(0px)',
          // outline: scrolled ? '1px solid var(--bg-800)' : 'transparent solid 1px',
          opacity: 1,
          transform: 'none',
          transition: ''
        }}
      >
        <a className="font-clash-display text-2xl font-medium sm:text-xl dark:text-zinc-100 dark:drop-shadow-[0_0_8px_#e5e7eb]" href="/">
          BW
        </a>

        {/* Desktop Nav Links */}
        <ul className="text-text-secondary hidden gap-6 text-sm sm:flex">
          {navMenu.map((nav) => (
            <li key={nav.id} className="group relative dark:text-zinc-100 dark:drop-shadow-[0_0_8px_#e5e7eb]">
              <a className={true ? 'active-link' : ''} href={nav.href}>
                <span className="relative inline-flex overflow-hidden h-auto">
                  {/* Front Text */}
                  <span
                    className="translate-y-0 skew-y-0 transform-gpu transition-transform duration-500 group-hover:-translate-y-[120%] group-hover:skew-y-12 flex items-center"
                  >
                    {nav.name}
                  </span>
                  {/* Back Text */}
                  <span
                    className="text-text-primary absolute translate-y-[120%] skew-y-6 transform-gpu transition-transform duration-500 group-hover:translate-y-0 group-hover:skew-y-0 flex items-center"
                  >
                    {nav.name}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* Theme Toggle Button */}
        <div className="flex items-center justify-center gap-4 dark:text-zinc-100 dark:drop-shadow-[0_0_8px_#e5e7eb]">
          <button
            onClick={toggleTheme}
            className="ring-offset-background focus-visible:outline-hidden focus-visible:ring-highlight-primary inline-flex cursor-pointer items-center justify-center whitespace-nowrap text-sm font-semibold focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-11 w-11 border-bg-700 bg-backdrop text-text-primary relative rounded-full border shadow backdrop-blur-md transition-all active:scale-90 sm:h-10 sm:w-10 sm:border-none sm:bg-transparent sm:shadow-none sm:backdrop-blur-none"
          >
            {/* Sun Icon (Light Mode) */}
            <div
              className="absolute inset-0 flex items-center justify-center transition-all text-black"
              style={{ opacity: theme === "dark" ? 0 : 1, transform: theme === 'dark' ? 'scale(0.5) rotate(180deg)' : 'none' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </svg>
            </div>

            {/* Moon Icon (Dark Mode) */}
            <div
              className="absolute inset-0 flex items-center justify-center transition-all text-white"
              style={{ opacity: theme === 'dark' ? 1 : 0, transform: theme === 'dark' ? 'none' : 'scale(0.5) rotate(180deg)' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </svg>
            </div>

            <span className="sr-only">Toggle theme</span>
          </button>
        </div>
      </nav>
      <div className='md:hidden flex'>
        <Dock
          className='text-black dark:text-white z-100'
          items={items}
          panelHeight={68}
          baseItemSize={45}
          magnification={0}
        />
      </div>
    </div>
  );
};

export default NavBar;
