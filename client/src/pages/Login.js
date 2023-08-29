import React from "react";
import { signInWithPopup } from "firebase/auth";
import { useSelector,useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

import {auth, provider} from "../Firebase";
import { adduser } from "../redux/Slice/user"

const Login = () => {
    const user = useSelector((state) => state.userState.user);
    const dispatch = useDispatch()

    const handleSignIn = () => {
        signInWithPopup(auth,provider).then((data) => {
            // console.log(data);
            dispatch(adduser(data.user.email))
            console.log(user)
        }).catch((error) => {
            console.log(error);
        });
    }

    return(
        <div>
            {
      !!user && !!Object.keys(user).length && <Navigate to='/home' />
      /* If there exist a user then redirect to Home Page */
    } 
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className="p-8 bg-white rounded-lg shadow-md">
                    <button className="flex items-center justify-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg focus:outline-none focus:ring focus:ring-red-300" onClick={handleSignIn}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                        </svg>&nbsp;
                        Sign In with Google
                    </button>
                </div>
            </div>
        </div>
    )
};
export default Login;