import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
const app = initializeApp({
  apiKey            : process.env.NEXT_PUBLIC_API,
  authDomain        : process.env.NEXT_PUBLIC_AUTHDOMAIN,
  projectId         : process.env.NEXT_PUBLIC_PROJECTID,
  storageBucket     : process.env.NEXT_PUBLIC_STORAGEBUCKET,
  messagingSenderId : process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
  appId             : process.env.NEXT_PUBLIC_APPID,
  measurementId     : process.env.NEXT_PUBLIC_MEASUREMENTID    
});
export const auth = getAuth();
export default getFirestore(app);