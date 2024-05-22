import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useLocalContext } from '../context/context';

const AdminDashboard = () => {

    const navigate =useNavigate();
    const { setLoggedInUser,setAdmin } = useLocalContext();
    function handleLogout() {
        signOut(auth).then(() => {
            setLoggedInUser(null);
            setAdmin(null);
            navigate('/');
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <div className="h-full w-full">
            <nav className='bg-[#212529] h-[4rem] flex text-white justify-between items-center px-6 text-xl font-semibold'>
                <div className="">
                    <Link to='/'>AU Sticker Portal</Link>
                </div>
                <div className="flex items-center gap-5">
                    {/*             
                <span className='bg-white h-[2rem] w-[0.2rem]' /> */}
                    <a href="">Approved Candidates</a>
                    <span className='bg-white h-[2rem] w-[0.2rem]' />
                    <a href="">Registered Vehicles</a>
                    <span className='bg-white h-[2rem] w-[0.2rem]' />
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </nav>
            <div className="h-[36.7rem] bg-[#4879c7] flex items-center justify-center">
                <div className="rounded-md bg-black opacity-70 flex flex-col items-center gap-6 w-[60rem] h-[28rem] py-6">
                    <p className='text-white text-center text-xl font-semibold'>HERE YOU WILL FIND STUDENT FORMS FOR REGISTRATION</p>
                    <div className="rounded-md bg-white w-[18rem] p-3 flex flex-col gap-2">
                        <h1 className='font-semibold'>StudentsForm</h1>
                        <p className=''>Click to open Submitted Forms</p>
                        <button className='p-4 font-semibold text-white rounded-md bg-blue-400'>FORMS!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard