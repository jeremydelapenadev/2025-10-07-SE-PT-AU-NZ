/* LAB EXERCISE 2: (page 47)

[/] Create a BigCats component, in its own file, which uses the cats array (below) to display a styled list of cats.
[/] Include a unique id and fix the warning about keys.
[/] Create a SingleCat component for rendering each individual cat, and add an image property for each one. */

/* LAB EXERCISE 4: (page 72)

[/] Extend your BigCats component from Exercise 2 to include buttons for alphabetically sorting and reversing the list
[/] Add another button to filter the list and display only the cats in the 'Panthera' family, and one to reset and show the full list. */

import { useState } from "react";
import SingleCat from "./SingleCat";
import AddCatForm from "./AddCatForm";

function BigCats() {
  const cats = [
    {
      id: 1,
      name: "Cheetah",
      latinName: "Acinonyx jubatus",
      image:
        "https://cdn.pixabay.com/photo/2017/10/17/05/31/cheetah-2859581_960_720.jpg",
    },
    {
      id: 2,
      name: "Cougar",
      latinName: "Puma concolor",
      image:
        "https://felidaefund.org/media/cache/autosized/images/igallery/original/501-600/puma-inaturalist-1-589-960.webp",
    },
    {
      id: 3,
      name: "Jaguar",
      latinName: "Panthera onca",
      image: "https://static.inaturalist.org/photos/51015966/medium.jpg",
    },
    {
      id: 4,
      name: "Leopard",
      latinName: "Panthera pardus",
      image:
        "https://inaturalist-open-data.s3.amazonaws.com/photos/8666580/medium.jpeg",
    },
    {
      id: 5,
      name: "Lion",
      latinName: "Panthera leo",
      image:
        "https://inaturalist-open-data.s3.amazonaws.com/photos/9218207/medium.jpg",
    },
    {
      id: 6,
      name: "Snow leopard",
      latinName: "Panthera uncia",
      image:
        "https://inaturalist-open-data.s3.amazonaws.com/photos/16308659/medium.jpg",
    },
    {
      id: 7,
      name: "Tiger",
      latinName: "Panthera tigris",
      image: "https://static.inaturalist.org/photos/286268507/medium.jpeg",
    },
  ];

  const [allCats, setAllCats] = useState(cats);
  const [displayCats, setDisplayCats] = useState(cats);

  // LAB Exercise 5 requirement - Add Cats

  const handleAddCat = (newCat) => {
    const updated = [...allCats, { ...newCat, id: Date.now() }]
    .sort ((a,b) => a.name.localeCompare(b.name));
    setAllCats(updated) 
    setDisplayCats(updated);
  };

  // LAB Exercise 5 requirement - Delete Cats

  const handleDeleteCat = (id) => {
    const updated = allCats.filter((cat) => cat.id !== id);
    setAllCats(updated);
    setDisplayCats(updated);
  };

  // LAB Exercise 4 requirement - Sort Order of Cats

  const handleSort = () => {
    const sortCats = [...displayCats].sort((a, b) => a.name.localeCompare(b.name));
    setDisplayCats(sortCats);
  };

  // LAB Exercise 4 requirement - Reverse Order of Cats

  const handleReverse = () => {
    setDisplayCats([...displayCats].reverse());
  };

  // LAB Exercise 4 requirement - Filter Cats and Reset Button

  const handleFilterPanthera = () => {
    setDisplayCats(
      displayCats.filter((cat) =>
      cat.latinName.startsWith("Panthera")
    )
    );
  };

  const handleReset = () => {
    setDisplayCats(allCats);
  }

  return (
    <>
      {/* added buttons to satisfy Lab Exercise 5 (Add) */}
      <div className="componentBox">
        <div>
          <AddCatForm onAddCat={handleAddCat} />
        </div>

        {/* added buttons to satisfy Lab Exercise 4 (Sort, Reverse, Filter, Reset) */}

        <div className= "button-group">
          <button onClick={handleSort}>Sort A-Z</button>
          <button onClick={handleReverse}>Reverse List</button>
          <button onClick={handleFilterPanthera}>Panthera only</button>
          <button onClick={handleReset}>Show All</button>
        </div>

        {/* Lab Exercise 2 basic requirements + Lab Exercise 5 (Delete) */}
        <div>
          {displayCats.map((cat) => (
            <SingleCat
              key={cat.id}
              id={cat.id}
              name={cat.name}
              latinName={cat.latinName}
              image={cat.image}
              onDelete={handleDeleteCat}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default BigCats;

{
  /* Personal Notes:
  
  - Parent owns data, children receive props.
  - Array must be in the BigCats.jsx component.

*/
}
