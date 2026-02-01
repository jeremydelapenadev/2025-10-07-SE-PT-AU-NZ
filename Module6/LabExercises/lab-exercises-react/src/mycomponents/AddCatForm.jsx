/* LAB EXERCISE 5: (page 80)

[/] Create a new AddCatForm component that renders a form with controlled components to capture name,
          latinName and image details for a new Big Cat (extending Exercises 2 and 4)
[/] Submitting the form should update the parent BigCats component and re-render the list
[/] Add a Delete link next to each cat allowing it to be removed from the list. */

import { useState } from "react";

function AddCatForm({ onAddCat}) {
  const [name, setName] = useState ("");
  const [latinName, setLatinName] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCat({ name, latinName, image });
    setName("");
    setLatinName("");
    setImage("");
  };
  return (
    <>
      <div className="componentBox">
        <h3> Add New Cat </h3>
        <form onSubmit={handleSubmit}>
          <label>
            Cat Name:
            <input
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </label>
          <label>
            Latin Name:
            <input
              placeholder="Latin Name"
              value={latinName}
              onChange={(e) => setLatinName(e.target.value)}
            ></input>
          </label>
          <label>
            Image:
            <input
            placeholder="Image URL"
            value={image}
            onChange = {(e) => setImage(e.target.value)}
            ></input>
          </label>
          <button type="submit">Add Cat</button>
        </form>
      </div>
    </>
  );
}

export default AddCatForm;