import { useSignOut } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../firebase/firebase.config";

const DashboardLayout = () => {
  const [signOut] = useSignOut(auth);

  const handleLogout = async () => {
    const success = await signOut();
    if (success) {
      alert("You are sign out");
    }
  };

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content flex flex-col justify-between">
          {/* Sidebar content here */}
          <div>
            <li>
              <Link to="">Dashboard</Link>
            </li>
            <li>
              <Link to="profile">Profile</Link>
            </li>
            <li>
              <Link to="setting">Setting</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </div>
          <div>
            <li>
              <Link onClick={handleLogout}>Logout</Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
