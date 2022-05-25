import React from "react";
import {} from "firebase/auth";
import auth from "../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import Loading from "../Shared/Loading";
import { useLocation, useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [token] = useToken(user);
  let signInError;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  if (loading) {
    return <Loading></Loading>;
  }
  if (token) {
    navigate(from, { replace: true });
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
