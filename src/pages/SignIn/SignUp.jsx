import React, { useState, useEffect } from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useUser } from "../../context/userContext";
import "./SignIn.scss";
import { BsGoogle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { userData, setUserData } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserData(user);
      } else {
        setUserData(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const signUpUsingGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUserData(user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const signInWithEmailPassword = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUserData(user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const signUpWithEmailPassword = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUserData(user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const Logout = () => {
    signOut(auth)
      .then(() => {
        setUserData(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="sign__in__div">
        <div className="sign__in">
          <button type="button" onClick={signUpUsingGoogle}>
            <span>
              <BsGoogle />
            </span>
            Continue with Google
          </button>
          <div className="sign__in__input">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p onClick={() => navigate("/login")}>
              Already Have an account..??
            </p>
            <button type="button" onClick={signUpWithEmailPassword}>
              Sign Up
            </button>
          </div>

          {error && <p>Error: {error}</p>}
        </div>
        <div className="left__sign__in">
          <img src="./sign.png" alt="" onClick={() => navigate("/")} />
        </div>
      </div>
    </>
  );
};

export default SignUp;
