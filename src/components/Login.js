import { useState,useRef } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';



const Login = () => {
    const [issigninform, setisigninform] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const myname = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
      //validate the form data
      //check valid data (email,password)
      
      console.log(email.current.value);
      console.log(password.current.value);

      const message = checkValidData( email.current.value ,password.current.value);
      setErrorMessage(message);
      if(message) return;

      if(!issigninform) {
        //signup logic
        createUserWithEmailAndPassword(
          auth,  
          email.current.value ,
          password.current.value
          )
        .then((userCredential) => {
        // Signed up 
         const user = userCredential.user;
         updateProfile(user, {
          displayName: myname.current.value, 
          photoURL: "https://media.licdn.com/dms/image/D5635AQEx_b79m1KDHw/profile-framedphoto-shrink_400_400/0/1695033930700?e=1703246400&v=beta&t=L3JcizqYbj7E525xo0d84d4uZdqJvVuAgKZfKjwnWXA"
        }).then(() => {
          const {uid,email,displayname,photoURL} = auth.currentUser;
        dispatch (addUser({
          uid: uid, 
          email:email,
          displayname:displayname,
          photoURL: photoURL
        })
      );
          navigate("/browse");
        }).catch((error) => {
          setErrorMessage(error.message);
        });
           console.log(user);
           navigate("/browse")
           })
           .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode+"-"+errorMessage)
  });
      }else{
        //signin logic
         signInWithEmailAndPassword(
          auth, 
          email.current.value ,
          password.current.value)
          .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
           console.log(user)
           navigate("/browse")
         })
          .catch((error) => {
           const errorCode = error.code;
           const errorMessage = error.message;
           setErrorMessage(errorCode+"-"+errorMessage)
       });

      }
     
     }
    const togglesigninform = () => {
        setisigninform(!issigninform)
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
     <form onSubmit={(e) => e.preventDefault()}
          className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
          <h1 className='font-bold text-3xl py-4'>
          {issigninform? "Sign in":"Sign up"}</h1>
         
          {!issigninform && (
          <input 
          ref={myname}
          type='text' 
          placeholder='Full Name' 
          className='p-2 my-2 w-full bg-gray-700'
       />)}
        
        <input 
          ref={email}
          type='text' 
          placeholder='Email Address' 
          className='p-2 my-2 w-full bg-gray-700'
        />
        
        <input 
          ref={password}
          type='text' 
          placeholder='Password' 
          className='p-2 my-2 w-full bg-gray-700'
        />
        <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>

         <button 
           className='p-4 my-4 bg-red-700 w-full rounded-lg'
           onClick={handleButtonClick}
          > 
           {issigninform ? "Sign In":"Sign Up"}
         </button>
          <p className='py-4 cursor-pointer'
            onClick={togglesigninform}>
            {issigninform
            ? "New to Netflix? Sign Up Now"
            :"Already registered? sign in now"} 
         </p>
     </form>
      
    </div>
  )
}

export default Login;
