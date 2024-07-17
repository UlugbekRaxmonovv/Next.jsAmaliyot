"use client";
import React from 'react';
import rasm from '../images/login.png'
import Image from 'next/image';
import './Login.scss'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const handelSubmit = (e) => {
        e.preventDefault();
        let  user ={
            username: username,
            password: password
        }
        setUsername("")
        setPassword("")
        router.push('/admin')
        toast.success('Вы успешно авторизованы!')
    }
    return (
        <div className='container'>

            <div className="login_">
            <div className="login_password">
            <Image src={rasm} alt='login' /> 
                </div>
                <div className="login_password">
                    <form action="" onSubmit={handelSubmit}>
                        <h1>Войти в аккаунт</h1>
                        <p>Введите свой логин, чтобЬ получить доступ к своей учетной.</p>
                        <div className="input">
                            <input type="text"  
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder='Login'/>
                         </div>
                         <div className="input">
                            <input type="text"
                             value={password}
                             onChange={(e) => setPassword(e.target.value)}
                            placeholder='Password'/>
                         </div>
                         <div className="input">
                           <button type='submit'>Авторизоваться</button>
                         </div>
                         <div className="input_">
                         <div className="chek">
                           <input type="checkbox" />
                           </div>
                           <div className="chek">
                          <p>Запомни меня на е етом устройстве!</p>
                           </div>
                         </div>

                         <h5>Помните что другие смогут поличить доступ к вашей  учетной записи если вь установите флажок "Запомните меня".</h5>
                        
                    </form>
                </div>
            </div>
         
         </div>
    );
}

export default Login;
