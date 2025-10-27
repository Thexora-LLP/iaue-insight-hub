import { useState } from "react";
import { Link } from "react-router-dom";

type CardProps = {
  icon?: React.ReactNode;
  title: string;
  noOfVolumes: number;
  noOfIssues: number;
  href: string; // Added href prop for routing
};

const Journal = ({ icon, title, noOfVolumes, noOfIssues, href }: CardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={href}
      className={`
        relative bg-white rounded-xl p-6 max-w-sm w-full mx-4 mb-6
        shadow-md hover:shadow-xl transition-all duration-300 ease-in-out
        border border-gray-200 hover:border-blue-300
        transform ${isHovered ? "scale-105" : "scale-100"}
        flex flex-col items-center justify-center no-underline
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {icon && (
        <div className="mb-4 text-blue-600 transform transition-transform duration-300 hover:scale-110">
          {icon}
        </div>
      )}
      <h2 className="text-lg font-semibold text-gray-800 mb-2 text-center">
        {title}
      </h2>
      <p className="text-sm text-gray-600 text-center leading-relaxed">
        {title} contains <span className="font-medium text-blue-600">{noOfVolumes}</span> volumes and{" "}
        <span className="font-medium text-blue-600">{noOfIssues}</span> issues
      </p>
    </Link>
  );
};

export default Journal;