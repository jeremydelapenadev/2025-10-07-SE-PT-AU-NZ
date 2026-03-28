import { useContext, useEffect, useState } from "react";
import { UserFavourites } from "../context/UserFavourites";
import { useNavigate } from "react-router-dom";
import { userContext } from "../context/UserProvider";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

function Favourites() {
  const { currentUser } = useContext(userContext);
  const { removeFavourite } = useContext(UserFavourites);
  const navigate = useNavigate();

  const [favourites, setFavourites] = useState([]);

  const getLoggedInUserId = async () => {
    if (!currentUser?.email) return null;

    const response = await fetch("http://localhost:8080/api/users");
    const data = await response.json();

    if (!response.ok) {
      throw new Error("Unable to fetch users.");
    }

    const matchedUser = (data.data || []).find(
      (user) => user.email === currentUser.email,
    );

    return matchedUser?._id || null;
  };

  useEffect(() => {
    const fetchFavourites = async () => {
      try {
        const userId = await getLoggedInUserId();

        if (!userId) return;

        const response = await fetch(
          `http://localhost:8080/api/users/${userId}/favourites`,
        );
        const data = await response.json();

        console.log("Favourite spaces from backend:", data);
        setFavourites(data.data || []);
      } catch (err) {
        console.error("Error fetching favourites:", err);
      }
    };

    fetchFavourites();
  }, [currentUser]);

  // direct to the SpaceView.jsx when click on a space card
  const handleViewSpace = (spaceId) => {
    navigate(`/spaces/${spaceId}`);
  };

const handleRemoveFavourite = async (spaceId) => {
  try {
    const userId = await getLoggedInUserId();

    if (!userId) return;

    const response = await fetch(
      `http://localhost:8080/api/users/${userId}/favourites/${spaceId}`,
      {
        method: "DELETE",
      }
    );

    const data = await response.json();
    console.log("Favourite removed:", data);

    // remove from MongoDB-backed page state
    setFavourites((prev) => prev.filter((space) => space._id !== spaceId));

    // remove from frontend context too
    removeFavourite(spaceId);
  } catch (err) {
    console.error("Error removing favourite:", err);
  }
};

  return (
    <div
      style={{
        marginTop: "5px",
        padding: "0 50px 50px 50px",
      }}
      className="fade-in"
    >
      <Typography variant="h2" gutterBottom sx={{ fontWeight: 600 }}>
        My Favourite Spaces
      </Typography>

      <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
        Welcome, <span style={{ color: "blue" }}>{currentUser?.username}</span>!
      </Typography>

      <Button
        variant="outlined"
        onClick={() => navigate("/spaces")}
        style={{ marginBottom: "20px" }}
      >
        Go to Spaces
      </Button>

      {favourites.length === 0 ? (
        <Typography>No favourites added yet.</Typography>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
        >
          {favourites.map((space) => (
            <Card
              key={space._id}
              sx={{
                cursor: "pointer",
                transition: "0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: 6,
                },
              }}
            >
              <div className="image-container">
                <CardMedia
                  component="img"
                  height="200"
                  image={space.image_url}
                  alt={space.name}
                  className="space-image"
                  onClick={() => handleViewSpace(space._id)}
                />
              </div>

              <CardContent>
                <Typography variant="h6">{space.name}</Typography>
                <Typography variant="body2">{space.about}</Typography>

                <Button
                  color="error"
                  onClick={() => handleRemoveFavourite(space._id)}
                  style={{ marginTop: "10px" }}
                >
                  Remove
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favourites;
