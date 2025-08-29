import { useState } from "react";

type IssueProps = {
  issueNumber: number;
  title: string;
  date: string;
  content: string;
};

const Issue = ({ issueNumber, title, date, content }: IssueProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const style: React.CSSProperties = {
    padding: "20px",
    boxShadow: isHovered ? "0px 5px 15px grey" : "0px 3px 3px grey",
    borderRadius: "6px",
    border: "1px solid grey",
    maxWidth: "250px",
    margin: "30px 10px 15px 15px",
    textAlign: "center",
    transition: "all 0.3s ease", 
    cursor: "pointer",
  };

  return (
    <div
      style={style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <strong>Issue {issueNumber}:</strong> {title}
      <p>{content}</p>
      <div style={{ fontSize: "12px", color: "gray", marginTop: "5px" }}>
        {date}
      </div>
    </div>
  );
};

export default Issue;
