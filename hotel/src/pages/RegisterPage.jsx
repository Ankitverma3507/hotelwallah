import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function RegisterPage(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    async function registeruser(ev){
        ev.preventDefault();
        
        try{
            axios.post('/register', {name, email, password});
            alert('User registered successfully');
        } catch(e){
            alert('Error registering user');  
        }
       
        }
    return  (
        <div className="mt-[20%] max-w-[65%] mx-auto my-auto text-gray-500">
            <h1 className="text-3xl font-bold">Register</h1>
            <br />
            <form className="flex flex-col max-w-[65%] mx-auto my-auto " onSubmit={registeruser}>
            <label htmlFor="text">Name</label>
                <input className="border border-gray-400 rounded-lg p-1" type="text" id="text" name="text" value={name} onChange={ev=>setName(ev.target.value)}/>
            <br />
                <label htmlFor="email">Email</label>
                <input className="border border-gray-400 rounded-lg p-1" type="email" id="email" name="email" value={email} onChange={ev=>setEmail(ev.target.value)}/>
            <br />

                <label htmlFor="password">Password</label>
                <input className="border border-gray-400 rounded-lg p-1" type="password" id="password" name="password" value={password} onChange={ev=> setPassword(ev.target.value)} />
            <br />

                <button className="border bg-black text-white rounded-full mt-2 py-1" type="submit">Register</button>

                <div className='text-center'>
                    Already a member? <Link className='underline text-black' to={'/login'}>Login</Link>
                </div>
            </form>
        </div>
    )
}