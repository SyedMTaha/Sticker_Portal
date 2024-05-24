import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import db, { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useLocalContext } from '../context/context';
import img3 from '../assets/sticker.png'
import { collection, onSnapshot } from 'firebase/firestore';
import Requests from "./Requests";

const AdminDashboard = () => {

    const navigate = useNavigate();
    const { setLoggedInUser, setAdmin, loggedInMail } = useLocalContext();
    const [requests, setRequests] = useState({});
    function handleLogout() {
        signOut(auth).then(() => {
            setLoggedInUser(null);
            setAdmin(null);
            navigate('/');
        }).catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        // const mail = 'ahsan@students.au.edu.pk';
        const stickerCollectionRef = collection(db, `stickerRequest`) ;
        const unsubscribe = onSnapshot(stickerCollectionRef, (querySnapshot) => {
            const documentsData = [];
            // console.log(querySnapshot.docs);
            querySnapshot.forEach((doc) => {
                documentsData.push({
                    id: doc.id,
                    ...doc.data()
                });
            });
            setRequests(documentsData);
        });
    }, [])

    console.log(requests);

    return (
        <div className="h-full w-full">
            <nav className='bg-[#212529] h-[4rem] flex text-white justify-between items-center px-6 text-xl font-semibold'>
                <div className="">
                    <Link to='/'>AU Sticker Portal</Link>
                </div>
                <div className="flex items-center gap-5">
                    {/*             
                <span className='bg-white h-[2rem] w-[0.2rem]' /> */}
                    
                    
                    <a href="">Registered Vehicles</a>
                    <span className='bg-white h-[2rem] w-[0.2rem]' />
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </nav>
            <div className="h-[37rem] bg-[#4879c7] flex items-center justify-center">
                <div className="rounded-md bg-[#000000] opacity-100 flex flex-col items-center gap-6 w-[60rem] h-[28rem] py-6">
                    <p className='text-white text-center text-xl font-semibold'>HERE YOU WILL FIND STUDENT FORMS FOR REGISTRATION</p>
                    {/* <div className="rounded-md bg-white w-[18rem] p-3 flex flex-col gap-2">
                        <h1 className='font-semibold'>StudentsForm</h1>
                        <p className=''>Click to open Submitted Forms</p>
                        <button className='p-4 font-semibold text-white rounded-md bg-blue-400'>FORMS!</button>
                    </div> */}
                    <p className='text-white font-semibold text-2xl'>Pending Requests</p>
                    <div className="h-13 overflow-hidden flex flex-col gap-3">
                        <div className="border-2 overflow-y-auto"> {/* New wrapper class */}
                            {requests.length > 0 && (
                                requests.map((request) => (
                                    <Requests key={request.id} data={request} />
                                ))
                            )}
                        </div>
                    </div>

                    
                </div>
                <div className="absolute top-[39rem]">
                    <p className='text-white'>
                    © - 2024 Air University - All Rights Reserved 
                    </p>
                </div>
            </div>
                    

        </div>
        


    )
}

export default AdminDashboard