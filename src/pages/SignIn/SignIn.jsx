import React, { useState } from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useUser } from "../../context/userContext";

const SignIn = () => {
  const { userData, setUserData } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

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

  return (
    <div>
      {!userData && (
        <>
          <button type="button" onClick={signUpUsingGoogle}>
            Sign In with Google
          </button>
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
          <button type="button" onClick={signInWithEmailPassword}>
            Sign In with Email and Password
          </button>
          <button type="button" onClick={signUpWithEmailPassword}>
            Sign Up with Email and Password
          </button>
          {error && <p>Error: {error}</p>}
        </>
      )}
      {userData && (
        <>
          <p>User Logged In</p>
          <button type="button" onClick={Logout}>
            Logout
          </button>
        </>
      )}
    </div>
  );
};

export default SignIn;
