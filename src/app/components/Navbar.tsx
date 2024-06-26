"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export const Navbar = () => {
  const [loggedin, setLoggedin] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [cnt, setCnt] = useState<number>(0);
  const router = useRouter();

  const handleLogout = (event: any) => {

    localStorage.removeItem('login');
    localStorage.removeItem('items');
    // Simulate login process (replace with your actual logic)
    //
    window.location.href = "/"
  };

  useEffect(() => {
    
    const loginValue = localStorage.getItem('login');
    if (loginValue) {
      setLoggedin(1);
    } else {
      setLoggedin(0);
    }

    let prices: number[] = [];
    const storedPrices = localStorage.getItem('items');
    if (storedPrices) {
      prices = JSON.parse(storedPrices);
    }

    const sum = (arr: number[]) => arr.reduce((acc, curr) => acc + curr, 0);
    const len = (arr: number[]) => arr.length;

    setPrice(sum(prices));
    setCnt(len(prices));
  }, []);

  return (
    <div>
      {loggedin === 0 && (
        <div className="navbar z-10 glass fixed [--glass-opacity:0.2] [--glass-blur:2px] px-5">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-outline lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
            </div>
            <Link href="/" className="btn  btn-ghost text-xl">ODP</Link>
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
      )}

      {loggedin === 1 && (
        <div className="navbar z-10 glass fixed [--glass-opacity:0.2] [--glass-blur:2px] px-5">
          <div className="flex-1">
          <Link href="/" className="btn  btn-ghost text-xl">ODP</Link>
          </div>
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  <span className="badge badge-sm indicator-item">{cnt}</span>
                </div>
              </div>
              <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                <div className="card-body">
                  <span className="font-bold text-lg">{cnt} Usług</span>
                  <span className="text-info">Cena całkowita: {price} pln</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">Zobacz Koszyk</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <a className="justify-between">
                    Profil
                    <span className="badge">New</span>
                  </a>
                </li>
                <li><a>Ustawienia</a></li>
                <li><button onClick={handleLogout}>Wyloguj</button></li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
