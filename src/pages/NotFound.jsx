import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import notFoundAnimation from "../assets/lottie/404.json"; // Replace with your actual JSON file path

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Lottie animationData={notFoundAnimation} loop={true} className="w-72 h-72" />
      <h1 className="text-2xl font-semibold mt-4">Page Not Found</h1>
      <Link to="/" className="mt-2 text-blue-500 hover:underline">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
