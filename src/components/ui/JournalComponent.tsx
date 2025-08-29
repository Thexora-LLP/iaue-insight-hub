import { useState } from "react";


//from here
type CardProps = {
  icon?:React.ReactNode;
  title:string;
  content: string;
};

const Box =({icon, title, content}: CardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle: React.CSSProperties ={
    borderRadius:"10px",
    boxShadow: isHovered ? "0px 5px 15px grey" : "0px 3px 3px grey",
    transition: "all 0.3s ease", 
    padding:"20px",
    maxWidth:"250px",
    margin:"30px 0 15px 15px",
    textAlign:"center",
    display: "flex",
    flexDirection:"column",
    alignItems:"center",
    border:"1px solid grey"
  };
  const titleStyle: React.CSSProperties = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  const contentStyle:React.CSSProperties ={
    fontSize:"15px",
    color:"grey",
  };
  return (
    <div style={cardStyle} onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      {icon && <div style={{ marginBottom: "10px" }}>{icon}</div>}
      <h2 style={titleStyle}>{title}</h2>
      <p style={contentStyle}>{content}</p>
    </div>
  );
};

export default Box;
//end here