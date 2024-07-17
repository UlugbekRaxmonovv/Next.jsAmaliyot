"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import rasm from '../images/Mask group.jpg'
import Navbar from '../components/Navbar/Navbar';
import uslugi from '../images/uslugi.png'
import spisalnostic from '../images/spisalnosni.png'
import wishlist from '../images/цшырдшые.png'
import bolizni from '../images/болизни.png'
import { VscAdd } from "react-icons/vsc";
import { RiDeleteBinLine } from "react-icons/ri";
import { RiEdit2Line } from "react-icons/ri";
import { redirect } from 'next/navigation';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

import './Admin.scss'
const Page = ({children}) => {
  const [menu ,setMenu] = useState(false)

  // let isLogin = null
  // if(!isLogin){
  //   return redirect('/')
  // }
  return (
       <>
       <Navbar />
       <div className="container">
       <div className="saidbar ">
       <div className={`admin_panel ${menu ? "show" : ""}`}>
          <div className="img">
          <div className="img_home">
          {
            menu ?   <FaChevronRight onClick={() => setMenu(false)}/>
            : <Link href={'/'}><Image src={rasm}  alt='my.doc'/></Link> 

          }
            </div>
            <FaChevronLeft onClick={() =>setMenu(!menu)}/>
          </div>

            <ul>
            <li>
            <Link href={'/admin/uslugi'}>
                      <div className={`uslugi ${menu ? "show1" : ""}`}>
                      <div className="uslugi_link">
                        <Image src={uslugi} alt='uslugi' />
                        </div>
                        <div className={`uslugi_link ${menu ? "show" : ""}`}>
                        <p>Услуги</p>
                        </div>
                      
                      </div>
                    </Link>
                </li>
                <li>
                <Link href={'/'}>
                      <div className={`uslugi ${menu ? "show1" : ""}`}>
                      <div className="uslugi_link">
                        <Image src={spisalnostic} alt='uslugi' />
                        </div>
                        <div className={`uslugi_link ${menu ? "show" : ""}`}>
                        <p>Специальности</p>
                        </div>
                      
                      </div>
                    </Link>
                    
                </li>
             
                <li>
                <Link href={'/'}>
                      <div className={`uslugi ${menu ? "show1" : ""}`}>
                      <div className="uslugi_link">
                        <Image src={bolizni} alt='uslugi' />
                        </div>
                        <div className={`uslugi_link ${menu ? "show" : ""}`}>
                        <p>Болизни</p>
                        </div>
                      
                      </div>
                    </Link>
                </li>
                <li>
                <Link href={'/'}>
                      <div className={`uslugi ${menu ? "show1" : ""}`}>
                      <div className="uslugi_link">
                        <Image src={wishlist} alt='uslugi' />
                        </div>
                        <div className={`uslugi_link ${menu ? "show" : ""}`}>
                        <p>Органи</p>
                        </div>  
                      
                      </div>
                    </Link>
                </li>
            </ul>
        </div>
        <div className="admin_panels ">
          {children}
         <div className="admin__">
        <div className="admin_row">
        <div className="admin_list__">
            <input type="text" placeholder='Название' />
          </div>
          <div className="admin_list__s">
          <VscAdd />
          </div>
        </div>
        <div className="admin_row">
        <div className="admin_list__w">
        <div className="checs">
          <input type="checkbox" placeholder='Название' className='checkbox' />
          </div>
          <div className="chec">
          <p>Все</p>
          </div>
       
          </div>
        <div className="admin_list__">
            <input type="text" placeholder='Название' />
          </div>
          <div className="admin_list__s">
          <VscAdd />
          </div>
          <div className="delets">
      <div className="admin_list__delet">
      <RiDeleteBinLine/>
          </div>
          <div className="admin_list__delet">
            <p>Удалить</p>
          </div>
      </div>
        </div>
        <div className="admin_row">
      <div className="delet">
      <div className="admin_list__delet">
      <RiDeleteBinLine/>
          </div>
          <div className="admin_list__delet">
            <p>Удалить</p>
          </div>
      </div>
        </div>
       
         </div>
          <div className={`klinika ${menu ? "klinika_show" : ""}`}>
            <div className="klinika_list_all">
            <div className="klnw">
        <div className="kliniki">
          <p>Клинила</p>
         </div>
         <div className="klinikis">
          <p>Для врачей</p>
         </div>
        </div>
            </div>
            <div className="klinika_list_all">
            <div className="grid_well">
              <div className="grid_all">
            <div className="list">
            <div className="grid_rows">
                  <input className='checkbox' type="checkbox" />
                </div>
                <div className="grid_row">
                  <p>Акшерство</p>
                </div>
            </div>
            <RiEdit2Line/>

              </div>
            </div>
            </div>
            
          </div>
        </div>
       </div>
       </div>
   
       </>
    );
}

export default Page;