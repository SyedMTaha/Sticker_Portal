import { signOut } from 'firebase/auth';
import React from 'react'
import { Link } from 'react-router-dom'
import { useLocalContext } from '../context/context';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';


const RegForm = () => {

  const { loggedInUser, setLoggedInUser,  } = useLocalContext();
  const navigate = useNavigate();
  function handleLogout() 
  {
    signOut(auth).then(() => 
    {
      setLoggedInUser(null);
      navigate('/');
    }).catch((error) => 
    
    {
      console.log(error);
    });
  }

  return (
    <>
      <nav className='bg-[#212529] h-[4rem] flex text-white justify-between items-center px-6 text-xl font-semibold'>
        <div className="">
          <Link to='/'>AU Sticker Portal </Link>
        </div>
        {/* <Route path='/form' element={<RegForm/>} />
            <Route path='/admin' element={<AdminDashboard/>}/> */}
        <div className="flex items-center gap-5">
          <Link to='/form' >Registration Form</Link>
          <span className='bg-white h-[2rem] w-[0.2rem]' />
          <button onClick={handleLogout}>Logout</button>
        </div>
      </nav>
      <div className="h-full w-full flex items-center justify-center bg-blue-300">
      

        <div className="bg-white rounded-md p-4 w-[24rem] my-[2rem] ">
          <h1 className='text-2xl font-bold my-4 text-center'>Registration Form</h1>
          <form action="" className='flex flex-col gap-2'>
            <label>FirstName:</label>
            <input className='border-2 rounded-md h-[2rem]' type="text" />
            <label>LastName:</label>
            <input className='border-2 rounded-md h-[2rem]' type="text" />
            <label>Semester:</label>
            <input className='border-2 rounded-md h-[2rem]' type="text" />
            <label>Registration ID:</label>
            <input className='border-2 rounded-md h-[2rem]' type="text" />
            <label>Vehicle Model:</label>
            <input className='border-2 rounded-md h-[2rem]' type="text" />
            <label>Owner CNIC:</label>
            <input className='border-2 rounded-md h-[2rem]' type="text" />
            <label>License Number:</label>
            <input className='border-2 rounded-md h-[2rem]' type="text" />
            <label>Vehicle Registration Number:</label>
            <input className='border-2 rounded-md h-[2rem]' type="text" />
            <button type='submit' className='rounded-md h-[3rem] font-bold text-white  bg-gradient-to-r from-blue-800 to-blue-750 to-blue-600  hover:bg-blue-900 ' >Submit</button> 
            <button  className="mt-4 rounded-md h-[3rem] font-bold text-white bg-red-600 hover:bg-red-700" onClick={() => navigate(-1)}> Back </button>
            
            <img src= "/images/form_bg.png" className="absolute bottom-0 right-0 h-200 w-200 z=1"/> 
              
             
            
            
          </form>
        </div>
        
        
      </div>
      
        {
          /*const time = Timestamp.fromDate(new Date()); 
          timestamp: time.seconds*/
        }
    </>
  )
}

export default RegForm