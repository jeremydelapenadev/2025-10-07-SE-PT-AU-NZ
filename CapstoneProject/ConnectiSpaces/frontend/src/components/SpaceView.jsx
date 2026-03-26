import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { userContext } from "../context/UserProvider";
import {
  Box,
  Typography,
  Chip,
  Button,
  Card,
  CardMedia,
  CircularProgress,
  TextField,
  IconButton,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function SpaceView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useContext(userContext);

  const [space, setSpace] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [reviews, setReviews] = useState([]);
  const [reviewTitle, setReviewTitle] = useState("");
  const [reviewDescription, setReviewDescription] = useState("");
  const [submittingReview, setSubmittingReview] = useState(false);

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

  useEffect(() => {
    fetch(`http://localhost:8080/api/reviews/space/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.result === 200) {
          setReviews(data.data || []);
        }
      })
      .catch((err) => console.error("Error fetching reviews:", err));
  }, [id]);

  const handleSubmitReview = async () => {
    if (!currentUser) {
      alert("Please log in first to submit a review.");
      return;
    }

    if (!reviewTitle.trim() || !reviewDescription.trim()) {
      alert("Please complete both the title and description.");
      return;
    }

    try {
      setSubmittingReview(true);

      const response = await fetch("http://localhost:8080/api/reviews/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          space_id: id,
          author_id: currentUser._id,
          title: reviewTitle,
          content: reviewDescription,
        }),
      });

      const data = await response.json();

      if (data.result === 200) {
        setReviewTitle("");
        setReviewDescription("");

        const reviewsResponse = await fetch(
          `http://localhost:8080/api/reviews/space/${id}`,
        );
        const reviewsData = await reviewsResponse.json();

        if (reviewsData.result === 200) {
          setReviews(reviewsData.data || []);
        }
      } else {
        alert("Failed to submit review.");
      }
    } catch (err) {
      console.error("Error creating review:", err);
      alert("Something went wrong while submitting the review.");
    } finally {
      setSubmittingReview(false);
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error || !space) {
    return (
      <Box
        sx={{
          maxWidth: "1000px",
          margin: "0 auto",
          p: 3,
          display: "flex",
          justifyContent: "flex-start", // Aligns children to the left
          width: "100vw", // Full viewport width
          p: 2,
        }}
      >
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
    <Box sx={{ maxWidth: "1400px", margin: "0 auto", p: 3 }}>
      <Button
        variant="outlined"
        sx={{ mb: 3 }}
        onClick={() => navigate("/spaces")}
      >
        Back to Spaces
      </Button>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          alignItems: "flex-start",
        }}
      >
        {/* LEFT SIDE */}
        <Box sx={{ flex: 1.1 }}>
          <Card sx={{ borderRadius: 3, overflow: "hidden", mb: 4 }}>
            <CardMedia
              component="img"
              image={space.image_url}
              alt={space.name}
              sx={{
                width: "100%",
                height: { xs: "250px", md: "450px" },
                objectFit: "cover",
              }}
            />
          </Card>

          <Typography variant="h3" sx={{ fontWeight: 700, mb: 3 }}>
            {space.name}
          </Typography>

          <Box sx={{ display: "grid", gap: 2, justifyItems: "center" }}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1,
                justifyContent: "center",
              }}
            >
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
            <div sx={{ display: "flex", justifyContent: "flex-start", flexDirection: "column", gap: 1, width: "100%" }}>
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
                <strong>Age Suitability:</strong>{" "}
                {space.age_suitability || "N/A"}
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
            </div>
          </Box>
        </Box>

        {/* RIGHT SIDE */}
        <Box
          sx={{
            flex: 0.9,
            width: "100%",
            position: { md: "sticky" },
            top: { md: 20 },
            alignSelf: "flex-start",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
            User Reviews on {space.name}:
          </Typography>

          <Card sx={{ p: 3, mb: 4, borderRadius: 3 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Leave a Review
            </Typography>

            <TextField
              fullWidth
              label="Title"
              value={reviewTitle}
              onChange={(e) => setReviewTitle(e.target.value)}
              sx={{ mb: 2 }}
            />

            <TextField
              fullWidth
              label="Description"
              multiline
              rows={4}
              value={reviewDescription}
              onChange={(e) => setReviewDescription(e.target.value)}
              sx={{ mb: 2 }}
            />

            <Button
              variant="contained"
              onClick={handleSubmitReview}
              disabled={submittingReview}
            >
              {submittingReview ? "Submitting..." : "Submit"}
            </Button>
          </Card>

          <Box sx={{ display: "grid", gap: 2 }}>
            {!currentUser ? (
              <Card sx={{ p: 3, borderRadius: 3, textAlign: "center" }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                  You must be logged in to view other users' reviews.
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  Log in to read reviews from other families and community
                  members.
                </Typography>
              </Card>
            ) : reviews.length === 0 ? (
              <Typography>No reviews yet.</Typography>
            ) : (
              reviews.map((review) => (
                <Card key={review._id} sx={{ p: 3, borderRadius: 3 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                    {review.author_id?.username || "Unknown User"}
                  </Typography>

                  <Typography variant="h6" sx={{ mt: 1 }}>
                    {review.title}
                  </Typography>

                  <Typography variant="body1" sx={{ mt: 1, mb: 2 }}>
                    {review.content}
                  </Typography>

                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <IconButton>
                      <FavoriteBorderIcon />
                    </IconButton>

                    <Button variant="outlined" size="small">
                      COMMENT
                    </Button>
                  </Box>
                </Card>
              ))
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default SpaceView;
