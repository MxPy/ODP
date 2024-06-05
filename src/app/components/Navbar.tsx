"use client"

import Link from 'next/link'
import React, { useContext } from 'react'

export const Navbar = () => {
    
  return (
    <div className="navbar z-10 glass fixed [--glass-opacity:0.2] [--glass-blur:2px] px-5">
        <div className="navbar-start">
            <div className="dropdown">
            
            <div tabIndex={0} role="button" className="btn btn-outline lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            </div>
            <Link className="btn  btn-ghost text-xl" href="/">ODP</Link>
            
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
            <li>
                <details>
                <summary>Odkrywaj</summary>
                <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
                </details>
            </li>
            <li><Link href="/future">Przyszłość</Link></li>
            <li><Link href="/pricing">O Nas</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            </ul>
        </div>
        <div className="navbar-end">
                <Link href="/login" className="btn btn-outline mx-2 text-white">Logowanie</Link>
                <a className="btn btn-outline text-white">Rejestracja</a>
        </div>
        </div>
  )
}