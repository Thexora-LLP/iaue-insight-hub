import { useState } from "react";
import { Link } from "react-router-dom";
import { BookIcon } from "lucide-react";

type VolumeProps = {
  number: number;
  icon?: React.ReactNode;
  numOfIssues: number;
  href: string; // Added href prop for routing
};

const Volume = ({ number,  numOfIssues, href }: VolumeProps) => {
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
       <div className="mb-4 text-blue-600 transform transition-transform duration-300 hover:scale-110">
          <BookIcon/>
        </div>
      <h2 className="text-lg font-semibold text-gray-800 mb-2 text-center">
        Volume {number}
      </h2>
      <p className="text-sm text-gray-600 text-center leading-relaxed">
        This volume contains <span className="font-medium text-blue-600">{numOfIssues}</span> issues
      </p>
    </Link>
  );
};

export default Volume;