function SingleCat({ id, name, latinName, image, onDelete }) {
   const fallbackImage =
    "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg";

  
    return (
    <>
      <div className="cat componentBox">
        <h2>{name}</h2>
        <em>{latinName}</em>
        <br />

{/* added this so that if there is no image availabe, it will display the 'no image available' image from the link above. */}

        <img src={image ? image:  fallbackImage} alt={name} width="600" border="5mm"
        onError={(e) => {
            e.target.onerror = null;
            e.target.src = fallbackImage;
        }} />
        <br />
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    </>
  );
}

export default SingleCat;
