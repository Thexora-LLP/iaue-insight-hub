import { useState } from "react";

type VolumeProps = {
  number: number;
  icon?: React.ReactNode;
  content: string;
};

const Volume = ({ number, icon, content }: VolumeProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const style: React.CSSProperties = {
    padding: "20px",
    borderRadius: "6px",
    border: "1px solid grey",
    boxShadow: isHovered ? "0px 5px 15px grey" : "0px 3px 3px grey",
    maxWidth: "250px",
    margin: "30px 10px 15px 15px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transition: "all 0.3s ease",
    cursor: "pointer"
  };

  return (
    <div
      style={style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {icon && <div style={{ marginBottom: "10px" }}>{icon}</div>}
      <strong>Volume {number}</strong>
      <p>{content}</p>
    </div>
  );
};

export default Volume;
