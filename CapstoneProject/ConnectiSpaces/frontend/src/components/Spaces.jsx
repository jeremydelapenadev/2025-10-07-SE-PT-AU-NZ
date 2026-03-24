import { useState, useContext, useEffect } from "react";
import { UserFavourites } from "../context/UserFavourites";
import { useNavigate } from "react-router-dom";
import { userContext } from "../context/UserProvider";
import {
  Button,
  IconButton,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Chip,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function Spaces() {
  const { favourites, addFavourite } = useContext(UserFavourites);
  const { currentUser } = useContext(userContext);
  const navigate = useNavigate();
  const [spaces, setSpaces] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/spaces")
      .then((res) => res.json())
      .then((data) => {
        console.log("Spaces from backend:", data);
        setSpaces(data.data || []);
      })
      .catch((err) => console.error("Error fetching spaces:", err));
  }, []);

  const [filters, setFilters] = useState({
    type: "",
    council: "",
    autismFriendlyFeatures: "",
    cost: "",
    ageSuitability: "",
    accessibility: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // for the dialog box
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");

  const handleAddFavourite = (space) => {
    if (!currentUser) {
      // User not logged in -> show login dialog only
      setDialogMessage("You must be logged in to add favourites.");
      setDialogOpen(true);
      return;
    }

    // Check if already added
    const alreadyAdded = favourites.some((fav) => fav._id === space._id);
    if (alreadyAdded) {
      setDialogMessage("You have already added this to your favourite spaces.");
      setDialogOpen(true);
      return;
    }

    // Normal behaviour if logged in
    addFavourite(space);
    setDialogMessage(`${space.name} has been added to your favourites.`);
    setDialogOpen(true);
  };

  const resetFilters = () => {
    setFilters({
      type: "",
      council: "",
      autismFriendlyFeatures: "",
      cost: "",
      ageSuitability: "",
      accessibility: "",
    });
  };

  const filteredSpaces = spaces.filter((space) => {
    const autismFeatures = space.autism_friendly_features || [];
    const accessibilityFeatures = space.accessibility_features || [];
    return (
      (filters.type === "" ||
        (space.type || "").toLowerCase() === filters.type.toLowerCase()) &&
      (filters.council === "" || space.council === filters.council) &&
      (filters.cost === "" || space.cost === filters.cost) &&
      (filters.ageSuitability === "" ||
        space.age_suitability
          .toLowerCase()
          .includes(filters.ageSuitability.toLowerCase())) &&
      (filters.autismFriendlyFeatures === "" ||
        autismFeatures.some((feature) =>
          feature
            .toLowerCase()
            .includes(filters.autismFriendlyFeatures.toLowerCase()),
        )) &&
      (filters.accessibility === "" ||
        accessibilityFeatures.some((feature) =>
          feature.toLowerCase().includes(filters.accessibility.toLowerCase()),
        ))
    );
  });

  return (
    <div style={{ padding: "10px" }} className="fade-in">
      <Typography variant="h2" gutterBottom sx={{ fontWeight: 600 }}>
        Community Spaces
      </Typography>

      {/* FILTER SECTION */}
      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <select name="type" value={filters.type} onChange={handleChange}>
          <option value="">Type</option>
          <option value="library">Library</option>
          <option value="leisure centre">Leisure Centre</option>
          <option value="swimming">Swimming</option>
        </select>

        <select name="council" value={filters.council} onChange={handleChange}>
          <option value="">Council</option>
          <option value="Blacktown City Council">Blacktown</option>
          <option value="Camden Council">Camden</option>
          <option value="Campbelltown City Council">Campbelltown</option>
          <option value="Canterbury-Bankstown Council">
            Canterbury-Bankstown
          </option>
          <option value="City of Sydney Council">City of Sydney</option>
          <option value="Fairfield City Council">Fairfield</option>
          <option value="Liverpool City Council">Liverpool</option>
        </select>

        <select name="cost" value={filters.cost} onChange={handleChange}>
          <option value="">Cost</option>
          <option value="Free">Free</option>
          <option value="Paid">Paid</option>
          <option value="Low-cost">Low-cost</option>
        </select>

        <select
          name="ageSuitability"
          value={filters.ageSuitability}
          onChange={handleChange}
        >
          <option value="">Age Suitability</option>
          <option value="All ages">All ages</option>
        </select>

        <select
          name="autismFriendlyFeatures"
          value={filters.autismFriendlyFeatures}
          onChange={handleChange}
        >
          <option value="">Autism Features</option>
          <option value="quiet">Quiet</option>
          <option value="structured">Structured</option>
          <option value="predictable">Predictable</option>
        </select>

        <select
          name="accessibility"
          value={filters.accessibility}
          onChange={handleChange}
        >
          <option value="">Accessibility</option>
          <option value="wheelchair">Wheelchair</option>
          <option value="lift">Lift</option>
          <option value="accessible toilets">Accessible Toilets</option>
        </select>
      </div>

      {/* ACTION BUTTONS */}
      <div style={{ marginBottom: "25px" }}>
        <Button variant="contained" color="secondary" onClick={resetFilters}>
          Reset Filters
        </Button>

        <Button
          variant="outlined"
          style={{ marginLeft: "10px" }}
          onClick={() => navigate("/favourites")}
        >
          View Favourites
        </Button>
      </div>

      {/* RESULTS GRID */}
      {filteredSpaces.length === 0 ? (
        <Typography>No spaces match your filters.</Typography>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
        >
          {filteredSpaces.map((space) => (
            <Card key={space._id}>
              <div className="image-container">
                <CardMedia
                  component="img"
                  height="200"
                  image={space.image_url}
                  alt={space.name}
                  className="space-image"
                />
              </div>
              <CardContent>
                <Typography variant="h6">
                  {space.name}
                  <IconButton
                    color="primary"
                    onClick={() => handleAddFavourite(space)}
                    style={{ float: "right" }}
                  >
                    <AddIcon />
                  </IconButton>
                </Typography>

                <Typography variant="body2">
                  <strong>Type:</strong> {space.type} <br />
                  <strong>Council:</strong> {space.council} <br />
                  <strong>Cost:</strong> {space.cost} <br />
                  <strong>Age:</strong> {space.age_suitability}
                </Typography>

                <Typography variant="body2" style={{ marginTop: "10px" }}>
                  {space.description}
                </Typography>

                {/* Box added for tags. */}
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1,
                    marginTop: 1,
                  }}
                >
                  {space.tags.map((tag, index) => (
                    <Chip
                      key={index}
                      label={tag}
                      size="small"
                      color="primary"
                      variant="outlined"
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
      {/* DIALOG BOX */}
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Notice</DialogTitle>
        <DialogContent>
          <Typography>{dialogMessage}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Spaces;
