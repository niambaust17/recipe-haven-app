import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { status, statusText } = useRouteError();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <div className="text-9xl font-bold text-red-600">{status}</div>
      <div className="text-2xl mt-4 mb-8">{statusText}</div>
      <div className="flex space-x-4">
        <Link to="/"
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 focus:outline-none"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
