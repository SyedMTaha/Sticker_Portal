import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import db, { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useLocalContext } from "../context/context";
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

const Sticker = () => {
  const { loggedInUser, setLoggedInUser, loggedInMail } = useLocalContext();
  const [stickerData, setStickerData] = useState({});

  function handleLogout() {
    signOut(auth)
      .then(() => {
        setLoggedInUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  console.log(loggedInMail);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const stickerRef = collection(db, "stickerRequest");
        const ID = loggedInMail.split("@")[0];
        const q = query(stickerRef, where("regId", "==", `${ID}`));

        const querySnapshot = await getDocs(q);
        // console.log(querySnapshot.docs);
        const fetchedRequests = [];
        querySnapshot.forEach((doc) => {
          fetchedRequests.push({ id: doc.id, ...doc.data() });
        });

        setStickerData(fetchedRequests);
        // setStickerData(stickerData[0]);
        console.log(stickerData[0].lastName)
      } catch (error) {
        console.error("Error fetching requests:", error);
      }
    };

    fetchRequests();
  }, [loggedInMail]);

  return (
    <div className="h-full w-full flex flex-col">
      <nav className="bg-[#212529] h-[4rem] flex text-[#ffffff] justify-between items-center px-6 text-xl font-semibold">
        <div>
          <Link to="/">AU Sticker Portal</Link>
        </div>
        <div className="flex items-center gap-5">
          {loggedInUser && (
            <>
              <Link to="/sticker">My Sticker</Link>
              <span className="bg-white h-[2rem] w-[0.2rem]" />
            </>
          )}

          <button onClick={handleLogout}>Logout</button>
        </div>
      </nav>
      <h1 className="text-3xl font-bold text-center"></h1>
      {/* Add content related to stickers here */}

      {/*STICKER*/}
      <div className="flex justify-center items-center w-full h-[32rem] bg-[#4879c7]">
        <div class="w-[30rem] h-auto absolute top-[5rem] shadow-md bg-[#ffffff]  rounded-md   my-[2rem]">
          {/*<img src="path/to/your/image.jpg" alt="Vehicle Pass" class="w-full rounded-t-lg">*/}

          <div class=" flex flex-col">
            <h1 className="text-2xl font-bold  text-center bg-[#005C99] text-[white] p-4 rounded-t-md">
              Vehicle Pass
            </h1>
            <div class="mb-4 "> </div>

            <div class=" center flex flex-row   mb-2">
              <p class="w-1/3 font-bold text-black pl-4">Student-Name:</p>
              <p class="w-2/3 font-medium text-black">{stickerData[0]?.firstName}&nbsp;{stickerData[0]?.lastName}</p>
            </div>

            <div class="flex flex-row    mb-2">
              <p class="w-1/3 font-bold text-black pl-4">Student-ID:</p>
              <p class="w-2/3 font-medium text-black">{stickerData[0]?.regId||"regID"}</p>
            </div>

            <div class="flex flex-row mb-2">
              <p class="w-1/3 font-bold text-black pl-4">Vehicle-ID:</p>
              <p class="w-2/3 font-medium text-black">{stickerData[0]?.vehicleReg}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center absolute top-[34rem] w-full">
        <p className="text-white">
          © - 2024 Air University - All Rights Reserved
        </p>
      </div>
      <div className="flex justify-center items-center absolute top-[4rem] w-full">
        <Link
          to="/"
          className="bg-gradient-to-l rounded-md bg-red-600 hover:bg-red-700 text-white font-bold text-center absolute top-[15rem] p-3 mt-10"
        >
          {" "}
          Back to Home{" "}
        </Link>
      </div>

      {/*<button className="mt-2 rounded-md h-[3rem] font-bold text-white bg-red-600 hover:bg-red-700" onClick={() => navigate('/')}> Back </button> */}
    </div>
  );
};

export default Sticker;
