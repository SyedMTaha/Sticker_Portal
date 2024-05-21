import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase'
import { UserCredential, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { useLocalContext } from '../context/context';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const {loggedInUser,setLoggedInUser,setAdmin}=useLocalContext();
    // const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, username, password)
            .then((userCredential) => {
                const user = userCredential;
                console.log("accoutn success")
                console.log(user.user);
            })
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                if (user.email === "admin@students.au.edu.pk") {
                    setAdmin({ id: user.uid, email: user.email });
                    setLoggedInUser(null); // Set loggedInUser to null for admin
                } else {
                    setLoggedInUser({ id: user.uid, email: user.email });
                    setAdmin(null); // Set admin to null for regular user
                }
            } else {
                setLoggedInUser(null);
                setAdmin(null);
            }
        });
    
        return unsubscribe; // Clean up event listener on unmount
    }, []);

    return (
        <div className='h-screen bg-blue-400 w-full flex items-center justify-center'>
            <div className="rounded-md sm:h-[30rem] w-[24rem] p-6 bg-[#f0f0f0]">
                {/* <img src="" alt="" /> */}
                <p className='text-2xl font-bold text-center '>
                    Welcome to vehicle Sticker Registration Portal
                </p>
                <form className='flex flex-col gap-2' action="">
                    <label> Username:</label>
                    <input value={username} onChange={(e)=>setUsername(e.target.value)} className='border-2 h-[2rem]' type="text" />
                    <label> Password:</label>
                    <input value={password} onChange={(e)=>setPassword(e.target.value)} className='border-2 h-[2rem]' type="password" />
                    <button onClick={handleLogin} className='bg-blue-400 rounded-sm h-[2.5rem] text-white font-semibold'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage;