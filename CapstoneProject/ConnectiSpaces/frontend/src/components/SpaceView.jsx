import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Chip,
  Button,
  Card,
  CardMedia,
  CircularProgress,
} from "@mui/material";

function SpaceView() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [space, setSpace] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`http://localhost:8080/api/spaces/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.result !== 200 || !data.data) {
          setError("Space not found.");
          setLoading(false);
          return;
        }

        setSpace(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching space:", err);
        setError("Unable to load this space.");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error || !space) {
    return (
      <Box sx={{ maxWidth: "1000px", margin: "0 auto", p: 3 }}>
        <Typography variant="h5" color="error" gutterBottom>
          {error}
        </Typography>
        <Button variant="contained" onClick={() => navigate("/spaces")}>
          Back to Spaces
        </Button>
      </Box>
    );
  }

  return (
    <div className="fade-in">
      <Box sx={{ maxWidth: "1000px", margin: "0 auto", p: 3 }}>
        <Button
          variant="outlined"
          sx={{ mb: 3 }}
          onClick={() => navigate("/spaces")}
        >
          Back to Spaces
        </Button>

        <Card sx={{ borderRadius: 3, overflow: "hidden", mb: 4 }}>
          <CardMedia
            component="img"
            image={space.image_url}
            alt={space.name}
            sx={{
              width: "100%",
              height: "450px",
              objectFit: "cover",
            }}
          />
        </Card>


        <Typography variant="h3" sx={{ fontWeight: 700, mb: 3 }}>
          {space.name}
        </Typography>

<Box>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, textAlign: "center", mb: 2 }}>
            {space.tags?.length > 0 ? (
              space.tags.map((tag, index) => (
                <Chip
                  key={index}
                  label={tag}
                  variant="outlined"
                  color="primary"
                />
              ))
            ) : (
              <Typography>N/A</Typography>
            )}
          </Box>
        </Box>

        <Box sx={{ display: "grid", gap: 2 }}>
          <Typography>
            <strong>Name:</strong> {space.name || "N/A"}
          </Typography>

          <Typography>
            <strong>Type:</strong> {space.type || "N/A"}
          </Typography>

          <Typography>
            <strong>Council:</strong> {space.council || "N/A"}
          </Typography>

          <Typography>
            <strong>About:</strong> {space.about || "N/A"}
          </Typography>

          <Typography>
            <strong>Autism Friendly Features:</strong>{" "}
            {space.autism_friendly_features?.length > 0
              ? space.autism_friendly_features.join(", ")
              : "N/A"}
          </Typography>

          <Typography>
            <strong>Cost:</strong> {space.cost || "N/A"}
          </Typography>

          <Typography>
            <strong>Age Suitability:</strong> {space.age_suitability || "N/A"}
          </Typography>

          <Typography>
            <strong>Accessibility Features:</strong>{" "}
            {space.accessibility_features?.length > 0
              ? space.accessibility_features.join(", ")
              : "N/A"}
          </Typography>

          <Typography>
            <strong>Address:</strong> {space.address || "N/A"}
          </Typography>

          <Typography>
            <strong>Noise Level:</strong> {space.noise_level || "N/A"}
          </Typography>

          <Typography>
            <strong>Quiet Hours:</strong> {space.quiet_hours || "N/A"}
          </Typography>

          <Typography>
            <strong>Verified:</strong> {space.verified ? "Yes" : "No"}
          </Typography>

          <Typography>
            <strong>Author Type:</strong> {space.author_type || "N/A"}
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

export default SpaceView;
