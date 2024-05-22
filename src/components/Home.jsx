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
            <div className="flex-grow flex flex-col gap-5 items-center justify-center p-4 h-[36.7rem] bg-[#2f5593]">
                {/* <img src= "/images/air_w.png"  className="absolute bottom-10 left-10 h-50 w-50 " /> */}
                <div className='bg-white rounded-lg w-[30rem] p-6  '>
                    <h2 className="text-3xl font-bold text-center">Welcome to the AU Sticker Portal</h2>
                </div>
                <div className='bg-white rounded-lg flex flex-col gap-6 w-[30rem] p-4 text-center'>
                    <h2 className="text-3xl font-bold  text-center border-b">What is AU Sticker Portal</h2>
                    <p className="text-justify  text-md">
                        The AU Vehicle Sticker Registration Portal is designed to streamline the process of obtaining vehicle access stickers for students and staff at the university. This portal offers a convenient and efficient way to register your vehicle, ensuring that only authorized vehicles are permitted on campus.
                        Utilizing the AU Vehicle Sticker Registration Portal helps maintain a safe and orderly campus environment, benefiting the entire university community.
                    </p>
                    {loggedInUser && (
                        <Link to='/form' className='bg-gradient-to-l rounded-md from-[#5AA4DA] to-[#525EE5] text-white p-4 text-xl font-semibold'>
                            Register Your Vehicles Now!
                        </Link>
                    )}
                    {admin && (
                        <Link to='/admin' className='bg-gradient-to-l rounded-md from-[#5AA4DA] to-[#525EE5] text-white p-4'>
                            Go to your Admin Portal
                        </Link>
                    )}

                </div>
                <div className="absolute top-[39rem]">
                    <p className='text-white'>
                        @CopyRights - Air University 2024
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home;
