export const checkValidData = {email,password} => {
   
 const isEmailvalid = /^[a-zA-Z0-9. _-]+@[a-zA-Z0-9. -]+\. [a-zA-Z]{2,4}$/.test(email);
 const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if(!isEmailvalid) return "EMAIL ID IS NOT VALID";
  if(!isPasswordValid) return "PASSWORD IS NOT VALID"
  
 return null;
}