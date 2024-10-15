import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/UserSlice";
import { netflix_logo, supported_lang, user_logo } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/ConfigSlice";

const Header = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  //AuthState
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, email, displayName, photoURL } = user;
        //ADD USER to REDUX
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );

        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);
  const GptSearchclick = ()=>{
    dispatch(toggleGptSearchView());
  }
  const handleLanguagechange = (e)=>{
  dispatch(changeLanguage(e.target.value));
  }
  return (
    <div className="absolute w-full px-4 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={netflix_logo} alt="logo" />

      {user && (
        <div className="flex p-2">
             {showGptSearch && <select className="p-2 m-2 bg-gray-900 text-white"
             onChange={handleLanguagechange}>
          {supported_lang.map((lang) => (
          <option key={lang.identifier} value={lang.identifier} >
            {lang.name}</option>
        ))}
        </select>  }
          <button className="p-4 mx-2 bg-purple-800 text-3xl text-white rounded-lg"
          onClick={GptSearchclick}
          >{ showGptSearch ?  "Home Page": "GPT Search"}</button>
          <img className="w-15 h-20" alt="usericon" src={user_logo} />
          <button onClick={handleSignOut} className="text-4xl text-white">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
