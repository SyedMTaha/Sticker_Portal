import React from 'react'
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useLocalContext } from '../context/context';

const Home = () => {

    const { loggedInUser, setLoggedInUser, admin,setAdmin } = useLocalContext();
    function handleLogout() {
        signOut(auth).then(() => {
            setLoggedInUser(null);
            setAdmin(null);
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <div className="h-full w-full">
            <nav className='bg-[#212529] h-[4rem] flex text-white justify-between items-center px-6 text-xl font-semibold'>
                <div className="">
                    <Link to='/'>AU Sticker Portal </Link>
                </div>
                {/* <Route path='/form' element={<RegForm/>} />
            <Route path='/admin' element={<AdminDashboard/>}/> */}
                <div className="flex items-center gap-5">
                    {loggedInUser &&
                        <>
                            <Link to='/form' >Registration Form</Link>
                            <span className='bg-white h-[2rem] w-[0.2rem]' />
                        </>}
                    {admin &&
                        <>
                            <Link to='/admin' >Admin Portal</Link>
                            <span className='bg-white h-[2rem] w-[0.2rem]' />
                        </>
                    }
                    
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </nav>
        </div>
    )
}

export default Home