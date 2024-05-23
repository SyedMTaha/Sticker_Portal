import { signOut } from 'firebase/auth';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocalContext } from '../context/context';
import db, { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidV4 } from 'uuid';
import { Timestamp, doc, setDoc } from 'firebase/firestore';

const RegForm = () => {

  const { loggedInUser, setLoggedInUser,loggedInMail } = useLocalContext();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [semester, setSemester] = useState('');
  const [regId, setRegId] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [vehicleReg, setVehicleReg] = useState('');
  const [ownerCnic, setOwnerCnic] = useState('');
  const [licenseNo, setLicenseNo] = useState('');

  const navigate = useNavigate();
  function handleLogout() {
    signOut(auth).then(() => {
      setLoggedInUser(null);
      navigate('/');
    }).catch((error) => {
      console.log(error);
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const id=uuidV4();
    const time=Timestamp.fromDate(new Date());
    const mainDoc = doc(db, `stickerRequest/${id}`);
    // const childDoc = doc(mainDoc, `requests/${id}`);
    const docData = {
      firstName:firstName,
      lastName:lastName,
      semester:semester,
      regId:regId,
      vehicleModel:vehicleModel,
      ownerCnic:ownerCnic,
      licenseNo:licenseNo,
      status: false,
      requsetTime:time.seconds
    };
    setDoc(mainDoc, docData);
    setFirstName('');setLastName('');setSemester('');setRegId('');setVehicleModel('');setVehicleReg('');setOwnerCnic('');setLicenseNo('');
    console.log('data updated')
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
      <div className="h-[43rem] w-full flex flex-col items-center justify-center bg-[#2f5593]">
        {/* <img src="/images/form_bg1.png" className="relative mix-blend-multiply bottom-[-7.4rem] h-200 w-200 z-1" /> */}

        <div className="bg-white absolute top-16 rounded-md  w-[31rem] my-[2rem] " >
          <h1 className='text-2xl font-bold  text-center bg-black text-white p-4 rounded-t-lg'>Registration Form</h1>
          <form action="" className='flex flex-col gap-2 p-4 z-10'>
            <div className="flex gap-4 w-full">
              <div className=" flex flex-col gap-2 w-1/2">
                <label>FirstName:</label>
                <input value={firstName} onChange={(e) => setFirstName(e.target.value)} className='border-2 rounded-md h-[2rem]' type="text" />
              </div>
              <div className=" flex flex-col gap-2 w-1/2">
                <label>LastName:</label>
                <input value={lastName} onChange={(e) => setLastName(e.target.value)} className='border-2 rounded-md h-[2rem]' type="text" />
              </div>
            </div>
            <div className="flex gap-10 w-full">
              <div className=" flex flex-col gap-2 w-1/2">
                <label>Semester:</label>
                <input value={semester} onChange={(e) => setSemester(e.target.value)} className='border-2 rounded-md h-[2rem]' type="text" />
              </div>
              <div className=" flex flex-col sm:ml-[-1.3rem] gap-2 w-1/2">
                <label>Registration ID:</label>
                <input value={regId} onChange={(e) => setRegId(e.target.value)} className='border-2 rounded-md h-[2rem]' type="text" />
              </div>
            </div>
            <div className="flex gap-4 w-full">
              <div className=" flex flex-col gap-2 w-1/2">
                <label>Vehicle Model:</label>
                <input value={vehicleModel} onChange={(e) => setVehicleModel(e.target.value)} className='border-2 rounded-md h-[2rem]' type="text" />
              </div>
              <div className=" flex flex-col gap-2 w-1/2">
                <label>Vehicle Reg#</label>
                <input value={vehicleReg} onChange={(e) => setVehicleReg(e.target.value)} className='border-2 rounded-md h-[2rem]' type="text" />
              </div>
            </div>
            <label>Owner CNIC:</label>
            <input value={ownerCnic} onChange={(e) => setOwnerCnic(e.target.value)} className='border-2 rounded-md h-[2rem]' type="text" />
            <label>License Number:</label>
            <input value={licenseNo} onChange={(e) => setLicenseNo(e.target.value)} className='border-2 rounded-md h-[2rem]' type="text" />
            <button onClick={handleSubmit} type='submit' className=' mt-2 rounded-md h-[3rem] font-bold text-white  bg-[#525EE5] hover:bg-[#3f48b1]' >Submit</button>
            <button className="mt-2 rounded-md h-[3rem] font-bold text-white bg-red-600 hover:bg-red-700" onClick={() => navigate('/')}> Back </button>
          </form>
        </div>
        <div className="absolute top-[45rem]">
          <p className='text-white'>
            @CopyRights - Air University 2024
          </p>
        </div>
      </div>


      {/* const time = Timestamp.fromDate(new Date()); 
        timestamp: time.seconds */}

    </>
  )
}

export default RegForm