import CustomCard from "./CustomCard";
import BasicGrid from "./BasicGrid";
import MUIForm from "./MUIForm";
import MUIDialog from "./MUIDialog";
import SXExample from "./SXExample";
import BasicUsage from "./StyledUtility";

function HomePage() {
  const students = [
    { firstName: "Bill", location: "Sydney", img: "https://thumbs.dreamstime.com/b/young-african-american-man-smiling-happy-young-african-american-man-smiling-happy-standing-smile-face-holding-colombian-212617335.jpg" },
    { firstName: "Bob", location: "Melbourne", img: "https://thumbs.dreamstime.com/b/smiling-old-man-holding-up-cash-card-isolated-white-background-31200876.jpg" },
    { firstName: "Alice", location: "Brisbane", img: "https://thumbs.dreamstime.com/b/person-holding-money-3602599.jpg" },
  ];

  return (
    <>
      <h1> Welcome to my home page</h1>
      <BasicUsage></BasicUsage>
      <SXExample/>
      <MUIDialog text="This is a dialog box."></MUIDialog>
      <MUIForm/>
      
      <h2> Custom Card:</h2>
      {students.map((student) => (
        <CustomCard title={student.firstName} picture={student.img}></CustomCard>
      ))}
      <BasicGrid />
    </>
  );
}

export default HomePage;
