import UserInfo from "./UserInfo.jsx"
import FormattedDate from "./FormattedDate.jsx";

function ComplexComment(props) {
  // complex component which displays different elements of a comment
  return (
    <div className="Comment componentBox">
      {/* cut and pasted user info here to UserInfo.jsx */}
      <UserInfo author={props.author}></UserInfo>
      <div className="Comment-text">
        {" "}
        {/* the actual comment text is another aspect */}
        {props.text}
      </div>

      {/* cut and pasted comment date here to FormattedDate.jsx */}
      <FormattedDate date={props.date}></FormattedDate>
    </div>
  );
} // save in a new file ComplexComment.jsx, then export it and import into App.jsx

export default ComplexComment;
