function FormattedDate({ date }) {
  return (
    <>
      <div className="Comment-date">
        {" "}
        {/* the comment date is another aspect */}
        {date.toLocaleString()}
      </div>
    </>
  );
}
export default FormattedDate;