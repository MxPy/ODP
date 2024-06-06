"use client"
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, { MouseEventHandler, useState } from 'react';

export default function LoginPage() {
  const [login, setLogin] = useState('');

  const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  };

  const handleLoginSubmit = (event: any) => {

    localStorage.setItem('login', login);
    // Simulate login process (replace with your actual logic)
    //
    window.location.href = "/main"
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold">Zaloguj się teraz!</h1>
          <div className=" relative  rounded-box overflow-hidden">
            <img src="https://assets.teenvogue.com/photos/63d7d1ec59b7a162c6fc422a/16:9/w_2560%2Cc_limit/Ent_TaylorSwiftTarot_Jan2023_HEADER.jpg" alt="Avatar" className="brightness-50 object-cover w-full h-full" />
            <div className="absolute w-full py-1.5 bottom-0 inset-x-0 glass text-white font-bold text-xl text-center leading-4">Uzyskaj dostęp do 100 milionów ogłoszeń od zadowolonych uytkowników</div>
          </div>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Login</span>
              </label>
              <input type="email" placeholder="Adam" className="input input-bordered" required onChange={handleLoginChange} value={login} />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Hasło</span>
              </label>
              <input type="password" placeholder="*******" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Zapomniałem hasła?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary" onClick={handleLoginSubmit}>Zaloguj</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
