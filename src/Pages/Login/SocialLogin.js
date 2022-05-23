import React from "react";
import {} from "firebase/auth";
import auth from "../../firebaseinit";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import Loading from "../Shared/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  let signInError;
  if (loading) {
    return <Loading></Loading>;
  }
  if (error) {
    signInError = (
      <p className="text-red-500">
        <small>{error?.message}</small>
      </p>
    );
  }
  return (
    <div>
      {signInError}
      <button
        onClick={() => {
          signInWithGoogle();
        }}
        className="btn btn-outline"
      >
        Continue with Google
      </button>
    </div>
  );
};

export default SocialLogin;
