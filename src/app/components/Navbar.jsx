'use client'

import React, { useState, useEffect } from 'react';
import { cn } from '@/app/lib/utils';


const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Instructions", href: "#Instructions"},
    {name: "Contacts", href: "#contacts"},
    
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


  return (
    <nav >
       
    </nav>
  )
}

export default Navbar;
