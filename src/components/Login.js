import { useState } from 'react'
import Header from './Header'




const Login = () => {
    const [issigninform, setisigninform] = useState(true);

    const togglesigninform = () => {
        setisigninform(!issigninform);
    };

  return (
    <div>
     <Header/>
     <div className='absolute'>
     <img 
     src='https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg'
     alt='logo' 
     />
     </div>
     <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>
          {issigninform? "Sign In":"Sign Up"}</h1>
        {!issigninform && (<input 
        type='text' 
        placeholder='Full Name' 
        className='p-2 my-2 w-full bg-gray-700'
        />)}
        
        <input 
        type='text' 
        placeholder='Email Address' 
        className='p-2 my-2 w-full bg-gray-700'/>
        
        <input 
        type='text' 
        placeholder='Password' 
        className='p-2 my-2 w-full bg-gray-700'/>
        <button className='p-4 my-4 bg-red-700 w-full rounded-lg'> 
        {issigninform? "Sign In":"Sign Up"}
         </button>
         <p className='py-4 cursor-pointer' onClick={togglesigninform}>
           {issigninform? "New to Netflix? Sign Up Now":"Already registered? sign in now"} 
         </p>
     </form>
      
    </div>
  )
}

export default Login
