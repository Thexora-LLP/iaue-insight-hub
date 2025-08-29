type IssueProps = {
  issueNumber: number;
  title: string;
  date: string;
  content: string;
};

const Issue = ({ issueNumber, title, date, content }: IssueProps) => {
    const style: React.CSSProperties = {
    padding: "12px",
    boxShadow:"0px 5px 10px grey",
    borderRadius: "6px",
    border:"1px solid grey",
    maxWidth:"250px",
    margin:"30px 10px 15px 15px",
    textAlign:"center",
  };
  return (
    <div style={style}>
      <strong>Issue {issueNumber}:</strong> {title}
      <p>{content}</p>
      <div className="text-xs text-gray-500">{date}</div>

    </div>
  );
};

export default Issue;
