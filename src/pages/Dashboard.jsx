import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.config";

const Dashboard = () => {
  const [user] = useAuthState(auth);

  const formatDate = (timestamp) => {
    const date = new Date(parseInt(timestamp, 10));
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  console.log(user.metadata.createdAt);
  return (
    <div className="max-w-xl mx-auto bg-white text-gray-800 shadow-lg rounded-lg overflow-hidden mt-8">
      <div className="flex flex-col items-center p-6">
        <img
          src={user.photoURL ?? "https://images.unsplash.com/photo-1716149297230-418da494f7cb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg mb-4"
        />
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">User: {user.displayName || "Not Available"}</h3>
          <p className="text-gray-700">Email: {user.email}</p>
          <p className="text-gray-700">Member since: {formatDate(user?.metadata?.createdAt)}</p>
          <p className="text-gray-700">Last login: {formatDate(user?.metadata?.lastLoginAt)}</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
