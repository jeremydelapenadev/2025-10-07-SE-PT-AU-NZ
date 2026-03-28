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
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          p: 3,
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
    <>
      <div className="fade-in">
        <Box sx={{ maxWidth: "1400px", margin: "0 auto", p: 3 }}>
          <Button
            variant="outlined"
            sx={{ mb: 3 }}
            onClick={() => navigate("/spaces")}
          >
            Back to Spaces
          </Button>

          {/* TITLE AT THE TOP */}
          <Typography
            variant="h3"
            sx={{ fontWeight: 700, mb: 4, textAlign: "center" }}
          >
            {space.name}
          </Typography>

          {/* TOP SECTION: LEFT COLUMN + RIGHT COLUMN */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
              alignItems: "flex-start",
              mb: 6,
            }}
          >
            {/* LEFT COLUMN */}
            <Box sx={{ flex: 1, width: "100%" }}>
              <Card sx={{ borderRadius: 3, overflow: "hidden", p: 2 }}>
                {/* IMAGE */}
                <CardMedia
                  component="img"
                  image={space.image_url}
                  alt={space.name}
                  sx={{
                    width: "100%",
                    height: { xs: "250px", md: "450px" },
                    objectFit: "cover",
                    borderRadius: 2,
                    mb: 2,
                  }}
                />

                {/* SHORT INFO UNDER PICTURE - 2x2 GRID */}
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                    gap: 2,
                  }}
                >
                  <Box>
                    <Typography
                      variant="overline"
                      sx={{
                        color: "text.secondary",
                        letterSpacing: 1,
                        fontWeight: 700,
                        display: "block",
                        mb: 0.5,
                      }}
                    >
                      Type
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      {space.type || "N/A"}
                    </Typography>
                  </Box>

                  <Box>
                    <Typography
                      variant="overline"
                      sx={{
                        color: "text.secondary",
                        letterSpacing: 1,
                        fontWeight: 700,
                        display: "block",
                        mb: 0.5,
                      }}
                    >
                      Council
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      {space.council || "N/A"}
                    </Typography>
                  </Box>

                  <Box>
                    <Typography
                      variant="overline"
                      sx={{
                        color: "text.secondary",
                        letterSpacing: 1,
                        fontWeight: 700,
                        display: "block",
                        mb: 0.5,
                      }}
                    >
                      Verified
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      {space.verified ? "Yes" : "No"}
                    </Typography>
                  </Box>

                  <Box>
                    <Typography
                      variant="overline"
                      sx={{
                        color: "text.secondary",
                        letterSpacing: 1,
                        fontWeight: 700,
                        display: "block",
                        mb: 0.5,
                      }}
                    >
                      Author Type
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      {space.author_type || "N/A"}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Box>

            {/* RIGHT COLUMN */}
            <Box sx={{ flex: 1, width: "100%" }}>
              <Card
                sx={{
                  borderRadius: 3,
                  p: 3,
                  boxShadow: 2,
                  backgroundColor: "#fff",
                }}
              >
                {/* TAGS */}
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
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
                    <Typography variant="body2" color="text.secondary">
                      No tags available
                    </Typography>
                  )}
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
                  <Box
                    sx={{
                      pb: 1.5,
                      borderBottom: "1px solid",
                      borderColor: "divider",
                    }}
                  >
                    <Typography
                      variant="overline"
                      sx={{
                        color: "text.secondary",
                        letterSpacing: 1,
                        fontWeight: 700,
                        display: "block",
                        mb: 0.5,
                      }}
                    >
                      About
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                      {space.about || "N/A"}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      pb: 1.5,
                      borderBottom: "1px solid",
                      borderColor: "divider",
                    }}
                  >
                    <Typography
                      variant="overline"
                      sx={{
                        color: "text.secondary",
                        letterSpacing: 1,
                        fontWeight: 700,
                        display: "block",
                        mb: 0.5,
                      }}
                    >
                      Autism Friendly Features
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                      {space.autism_friendly_features?.length > 0
                        ? space.autism_friendly_features.join(", ")
                        : "N/A"}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                      gap: 2,
                    }}
                  >
                    <Box>
                      <Typography
                        variant="overline"
                        sx={{
                          color: "text.secondary",
                          letterSpacing: 1,
                          fontWeight: 700,
                          display: "block",
                          mb: 0.5,
                        }}
                      >
                        Cost
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {space.cost || "N/A"}
                      </Typography>
                    </Box>

                    <Box>
                      <Typography
                        variant="overline"
                        sx={{
                          color: "text.secondary",
                          letterSpacing: 1,
                          fontWeight: 700,
                          display: "block",
                          mb: 0.5,
                        }}
                      >
                        Age Suitability
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {space.age_suitability || "N/A"}
                      </Typography>
                    </Box>

                    <Box>
                      <Typography
                        variant="overline"
                        sx={{
                          color: "text.secondary",
                          letterSpacing: 1,
                          fontWeight: 700,
                          display: "block",
                          mb: 0.5,
                        }}
                      >
                        Noise Level
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {space.noise_level || "N/A"}
                      </Typography>
                    </Box>

                    <Box>
                      <Typography
                        variant="overline"
                        sx={{
                          color: "text.secondary",
                          letterSpacing: 1,
                          fontWeight: 700,
                          display: "block",
                          mb: 0.5,
                        }}
                      >
                        Quiet Hours
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {space.quiet_hours || "N/A"}
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      pt: 1.5,
                      borderTop: "1px solid",
                      borderColor: "divider",
                    }}
                  >
                    <Typography
                      variant="overline"
                      sx={{
                        color: "text.secondary",
                        letterSpacing: 1,
                        fontWeight: 700,
                        display: "block",
                        mb: 0.5,
                      }}
                    >
                      Accessibility Features
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                      {space.accessibility_features?.length > 0
                        ? space.accessibility_features.join(", ")
                        : "N/A"}
                    </Typography>
                  </Box>

                  <Box>
                    <Typography
                      variant="overline"
                      sx={{
                        color: "text.secondary",
                        letterSpacing: 1,
                        fontWeight: 700,
                        display: "block",
                        mb: 0.5,
                      }}
                    >
                      Address
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                      {space.address || "N/A"}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Box>
          </Box>

          {/* BOTTOM SECTION - REVIEWS */}
          <Box>
            {/* REVIEW FORM - ONLY SHOW IF LOGGED IN */}
            {currentUser && (
              <Card sx={{ p: 3, mb: 4, borderRadius: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
                  User Reviews on {space.name}
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
            )}

            {/* REVIEWS LIST */}
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
      </div>
    </>
  );
}

export default SpaceView;