function SampleUncontrolledForm() {
 function handleFormData(e) {
    e.preventDefault();

    const data = new FormData(e.target);

    alert(data.get("name"));
 }
 
 
    return (
    <>
      <form>
        <div>
          <label>
            Name:
            <input type="text" name="name"></input>
          </label>
        </div>
        <div>
          <label>
            Password:
            <input type="password" name="password"></input>{" "}
            <div>
              <button>Submit</button>
            </div>
          </label>
        </div>
      </form>
    </>
  );
}

export default SampleUncontrolledForm;