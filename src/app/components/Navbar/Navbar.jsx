"use client";
import React from 'react';
import './Navbar.scss'
import Link from 'next/link';
import { IoIosLogOut } from "react-icons/io";
import { useRouter } from 'next/navigation';
const Navbar = () => {
    const router = useRouter()
    const LoginLogaut = () => {
        // localStorage.removeItem('token');
        router.push('/');
    }
    return (
      <header>
       <div className="container">
       <nav>
      <ul>
      <li>
            <Link href={''}>  Мониторинг</Link>
        </li>
        <li>
            <Link href={''}>  Килиника </Link>
        </li>
        <li>
            <Link href={''}>  Врачи</Link>
        </li>
        <li>
            <Link href={''}>  Препаратнь</Link>
        </li>
        <li>
            <Link href={''}>  Справочник</Link>
        </li>
      </ul>
          <div className="logout" onClick={LoginLogaut}>
          <div className="logout_">
            <p>  Выйти</p>
            </div>
            <div className="logout_">
            <IoIosLogOut />
            </div>
          </div>
      </nav>
       </div>
      </header>
    );
}

export default Navbar;
