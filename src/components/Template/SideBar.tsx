'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import ContactIcons from '../Contact/ContactIcons';

const SideBar: React.FC = () => {
  const pathname = usePathname();

  return (
    <section id="sidebar">
      <section id="intro">
        <Link href="/" className="logo">
          <Image src="/images/me.jpg" alt="Shuqin Zhu" width={200} height={200} priority />
        </Link>
        <header>
          <h2>Shuqin Zhu</h2>
          <p>
            <a href="shuqin:shuqinzh@usc.edu">shuqinzh@usc.edu</a>
          </p>
        </header>
      </section>

      <section className="blurb">
        <h2>About</h2>
        <p>
          Hi, I’m Shuqin Zhu. I am a third-year Computer Science Ph.D. candidate at the
          University of Southern California, advised by Professor Shahram
          Ghandeharizadeh. I am affiliated with{' '}
          <a href="https://www.flslab.org/">FLS (Flying Light Specks) Lab</a>. My
          research focuses on UAVs (drones), robotics, haptics, and multi-agent drone
          systems.
        </p>

        <ul className="actions">
          <li>
            {pathname && !pathname.includes('/resume') ? (
              <Link href="/resume" className="button">
                Learn More
              </Link>
            ) : (
              <Link href="/about" className="button">
                About Me
              </Link>
            )}
          </li>
        </ul>
      </section>

      <section id="footer">
        <ContactIcons />
        <p className="copyright">
          &copy; Michael D&apos;Angelo <Link href="/">mldangelo.com</Link>.
        </p>
      </section>
    </section>
  );
};

export default SideBar;
