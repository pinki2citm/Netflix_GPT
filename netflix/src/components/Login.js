import React, { useRef, useState } from "react";
import Header from "./Header";
import { isValideForm } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/UserSlice.js";
import { bg_logo } from "../utils/constant.js";

const Login = () => {
  const [IsSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, seterrorMessage] = useState();
  const dispatch = useDispatch();
  //Redirect the link
  const toggleSignInForm = () => {
    setIsSignInForm(!IsSignInForm);
  };

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  //validate the form
  const ValidateForm = () => {
    const message = isValideForm(email.current.value, password.current.value);
    seterrorMessage(message);
    if (message === null) {
      //create user profile with email and password
      //sign in/sign up
      if (IsSignInForm) {
        //Sign in logic
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
        
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            seterrorMessage(errorCode + errorMessage);
          });
      } else {
        //sign Up Logic
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            updateProfile(user, {
              displayName: name.current.value,
              photoURL: "https://example.com/jane-q-user/profile.jpg",
            })
              .then(() => {
                // Profile updated!
                const { uid, email, displayName, photoURL } = auth.currentUser;
                //ADD USER to REDUX
                dispatch(
                  addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL,
                  })
                );
              
              })
              .catch((error) => {
                // An error occurred
                // ...
                seterrorMessage(error.message);
              });
          
          
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            seterrorMessage(errorCode + errorMessage);
          });
      }
    } else {
      return;
    }
  
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={bg_logo}
          alt="netflixgpt"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-70"
      >
        <h1 className="font-bold text-3xl py-4">
          {IsSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        {!IsSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="text-3xl">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={ValidateForm}
        >
          {IsSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4" onClick={toggleSignInForm}>
          New to Netflix?
          {IsSignInForm ? "Sign Up Now" : "already registered sign in Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
