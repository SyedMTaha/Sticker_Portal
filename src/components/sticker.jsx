import React from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';



const Sticker = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-center"></h1>
      {/* Add content related to stickers here */}

        {/*STICKER*/}
        <div className="flex justify-center items-center w-full h-full bg-[#4879c7]">
                        <div class="w-[31rem] h-auto  shadow-md bg-[#ffffff]  rounded-md   my-[2rem]">
                            { /*<img src="path/to/your/image.jpg" alt="Vehicle Pass" class="w-full rounded-t-lg">*/}
                        
                        <div class=" flex flex-col">
                         <h1 className='text-2xl font-bold  text-center bg-[#005C99] text-[white] p-4 rounded-t-md'>Vehicle Pass</h1>
                         <div class  = "mb-2 "> </div>
                         
                         <div class=" center flex flex-row   mb-2"> 
                            <p class="w-1/3 font-bold text-black pl-4">Student-Name:</p>
                            <p class="w-2/3 font-medium text-black">TAHA</p>
                         </div>
                         
                        <div class="flex flex-row    mb-2">
                            <p class="w-1/3 font-bold text-black pl-4">Student-ID:</p>
                            <p class="w-2/3 font-medium text-black">221787</p>
                        </div>

                        <div class="flex flex-row mb-2">
                            <p class="w-1/3 font-bold text-black pl-4">Vehicle-ID:</p>
                            <p class="w-2/3 font-medium text-black">RLF-6784</p>
                        </div>
                        
                        </div>
                    </div>
                </div>

                <Link to="/" className="bg-gradient-to-l rounded-md bg-red-600 hover:bg-red-700 text-white font-bold p-2 mt-10"> Back to Home </Link>
                {/*<button className="mt-2 rounded-md h-[3rem] font-bold text-white bg-red-600 hover:bg-red-700" onClick={() => navigate('/')}> Back </button> */}
                
    </div>
  );
};

export default Sticker;
