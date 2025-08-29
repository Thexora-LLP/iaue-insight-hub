type VolumeProps = {
  number: number;
  icon?: React.ReactNode;
  content: string;
};

const Volume = ({ number, icon, content }: VolumeProps) => {
  const style: React.CSSProperties = {
    padding: "12px",
    borderRadius: "6px",
    border:"1px solid grey",
    boxShadow:"0px 5px 10px grey",
    maxWidth:"250px",
    margin:"30px 10px 15px 15px",
    textAlign:"center",
    display: "flex",
    flexDirection:"column",
    alignItems:"center"
  };

  return (
    <div style={style}>
      {icon && <div style={{ marginBottom: "10px" }}>{icon}</div>}
      <strong>Volume {number}</strong>
      <p>{content}</p>
    </div>
  );
};

export default Volume;
