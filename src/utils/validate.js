export const checkValidData = (email, password,myname) => {
   
 const isEmailvalid =  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
 const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
 const isnamevalid =  /^[a-zA-Z0-9]+$/.test(myname);


  
  if(!isPasswordValid) return "PASSWORD IS NOT VALID";
  if(!isEmailvalid) return "EMAIL ID IS NOT VALID";
  if(!isnamevalid) return "NAME IS NOT VALID";
  
  
   return null
}
