import NamePart from "./NamePart.jsx";


function FullName({ firstName, lastName, children }) {
  return (
    <>
      <div>
        Full Name: <NamePart name={firstName}></NamePart>{" "}
        <NamePart name={lastName}></NamePart>
      </div>
    </>
  );
}

export default FullName;