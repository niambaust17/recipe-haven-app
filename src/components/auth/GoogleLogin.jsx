import auth from "../../firebase/firebase.config";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const GoogleLogin = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const handleGoogleLogin = async () => {
    await signInWithGoogle();
  };
  
  return (
    <div className="form-control mt-3">
      <button onClick={handleGoogleLogin} className="btn btn-primary">
        Login with Google
      </button>
    </div>
  );
};

export default GoogleLogin;
