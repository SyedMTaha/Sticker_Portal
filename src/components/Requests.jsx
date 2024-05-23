import React from 'react';
import { TiTick } from "react-icons/ti";
import db from '../firebase';
import { doc, setDoc } from 'firebase/firestore';

const Requests = ({ data }) => {
  console.log(data); 

  const approveRequest = async () => { 
    const mainDoc = doc(db, `stickerRequest/${data.id}`);
    const docData = {
      status: true
    };

    try {
      await setDoc(mainDoc, docData,{merge:true});
      console.log('Request approved!'); 
    } catch (error) {
      console.error('Error approving request:', error); 
    }
  };

  return (
    <div className='bg-[#f0f0f0] font-bold h-[5rem] flex justify-between px-6 items-center rounded-sm py-2 border-2 border-black w-[33rem]'>
      <div className="">
        <p>{data.firstName} &nbsp;{data.lastName}</p>
        <p>{data.regId}</p>
        <p>{data.licenseNo}</p>
      </div>
      <button onClick={approveRequest} className="bg-green-500 p-2 text-xl hover:bg-green-600 hover:text-2xl text-white">
        <TiTick />
      </button>
    </div>
  );
};

export default Requests;
