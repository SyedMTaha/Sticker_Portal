import React from 'react'
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useLocalContext } from '../context/context';



const Home = () => {
    const { loggedInUser, setLoggedInUser, admin, setAdmin } = useLocalContext();

    function handleLogout() {
        signOut(auth).then(() => {
            setLoggedInUser(null);
            setAdmin(null);
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <div className="h-full w-full flex flex-col">
            <nav className='bg-[#212529] h-[4rem] flex text-[#ffffff] justify-between items-center px-6 text-xl font-semibold'>
                <div>
                    <Link to='/'>AU Sticker Portal</Link>
                </div>
                <div className="flex items-center gap-5">
                    {loggedInUser && (
                        <>
                            <Link to='/form'>Registration Form</Link>
                            <span className='bg-white h-[2rem] w-[0.2rem]' />
                        </>
                    )}
                    {admin && (
                        <>
                            <Link to='/admin'>Admin Portal</Link>
                            <span className='bg-white h-[2rem] w-[0.2rem]' />
                        </>
                    )}
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </nav>
            <div className="flex-grow  flex items-center justify-center p-4  bg-[#2f5593]">
                <div className="bg-[#ffffff] p-8 rounded-lg shadow-md">
                <img src= "/images/air_w.png"  className="absolute bottom-10 left-10 h-50 w-50 " />
                <div>
                    <h2 className="text-2xl font-bold mb-4 text-center">Welcome to the AU Sticker Portal</h2>
                    <p className="text-center"></p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Home;
