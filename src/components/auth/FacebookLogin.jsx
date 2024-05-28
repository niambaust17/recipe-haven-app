import { useSignInWithFacebook } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.config";

const FacebookLogin = () => {
    const [signInWithFacebook] = useSignInWithFacebook(auth);

    const handleFacebookLogin = async () => {
        await signInWithFacebook();
      };
      
      return (
        <div className="form-control mt-3">
          <button onClick={handleFacebookLogin} className="btn btn-primary">
            Login with Facebook
          </button>
        </div>
      );
}

export default FacebookLogin
