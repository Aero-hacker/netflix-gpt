import React from 'react'
import {useNavigate} from "react-router-dom";
import {auth} from "../utils/firebase";
import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';


const Header = () => {
   const navigate = useNavigate();
   const user = useSelector(store => store.user)
   const handleSignout = () => {
    signOut(auth).then(() => {
      navigate("/");
    })
    .catch((error) => {
      navigate("/error")
    });
    
  }

  return (
    <div className='absolute w-screen px-8 py-6  bg-gradient-to-b from-black z-10 flex justify-between'>
      <img 
      className='w-44'
      src='https://assets.nflxext.com/en_us/layout/ecweb/common/logo-shadow2x.png'
      alt='logo' 
     />
     {user && (
       <div>
      <img 
          className='w-12 h-12'
          alt='usericon'
          src="https://media.licdn.com/dms/image/D5635AQEx_b79m1KDHw/profile-framedphoto-shrink_400_400/0/1695033930700?e=1703246400&v=beta&t=L3JcizqYbj7E525xo0d84d4uZdqJvVuAgKZfKjwnWXA"
       />
      <button onClick={handleSignout} 
      className='font-bold text-white'>
        signOut
      </button>
     </div>
     )}
    </div>
  )
}

export default Header;
