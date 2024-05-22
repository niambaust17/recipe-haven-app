import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase/firebase.config";
import { useEffect, useState } from "react";

const Register = () => {
  const [passMatch, setPassMatch] = useState(true);
  const [user] = useAuthState(auth);

  const navigate = useNavigate();
  const location = useLocation();

  
  const [createUserWithEmailAndPassword] =
  useCreateUserWithEmailAndPassword(auth);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm_password = form.confirm_password.value;
    
    if (password !== confirm_password) {
      setPassMatch(false);
    }
    
    // console.log(email, password, confirm_password);
    
    if (password === confirm_password) {
      await createUserWithEmailAndPassword(email, password);
    }
  };

  const from = location?.state?.from?.pathname || "/";
  
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="confirm password"
                name="confirm_password"
                className="input input-bordered"
                required
              />
            </div>
            {passMatch || (
              <p className="text-red-500 text-sm mt-2">
                Passwords do not match. Please make sure both passwords are
                identical.
              </p>
            )}
            <p>
              Already have an account ? <Link to="/login">Login</Link>
            </p>
            <div className="form-control mt-3">
              <button className="btn btn-primary">Register</button>
            </div>
            <div className="form-control mt-3">
              <button className="btn btn-primary">Login with Google</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
