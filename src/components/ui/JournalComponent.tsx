//from here
type CardProps = {
  icon?:React.ReactNode;
  title:string;
  content: string;
};

const Box =({icon, title, content}: CardProps) => {
  const cardStyle: React.CSSProperties ={
    borderRadius:"10px",
    boxShadow:"0px 5px 10px grey",
    padding:"15px",
    maxWidth:"250px",
    margin:"30px 0 15px 15px",
    textAlign:"center",
    display: "flex",
    flexDirection:"column",
    alignItems:"center"
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
    <div style={cardStyle}>
      {icon && <div style={{ marginBottom: "10px" }}>{icon}</div>}
      <h2 style={titleStyle}>{title}</h2>
      <p style={contentStyle}>{content}</p>
    </div>
  );
};

export default Box;
//end here