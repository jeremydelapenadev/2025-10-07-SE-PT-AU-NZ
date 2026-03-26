import React, { useState, useContext, useEffect } from "react";
import {
  Box,
  Typography,
  Stack,
  Button,
  Card,
  CardContent,
  CardActions,
  TextField,
  Select,
  MenuItem,
  Chip,
  IconButton,
  Divider,
  CardMedia,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import { userContext } from "../context/UserProvider";

const TAGS = ["All", "Experiences", "Tips", "Questions", "Celebrations", "Resources"];

export default function Community() {
  const { currentUser } = useContext(userContext);
  const isLoggedIn = !!currentUser;

  const [selectedTag, setSelectedTag] = useState("All");
  const [newPost, setNewPost] = useState("");
  const [newTag, setNewTag] = useState("Experiences");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/posts");
      const data = await res.json();
      console.log("Posts from backend:", data);
      setPosts(data.data || []);
    } catch (err) {
      console.error("Error fetching posts:", err);
    }
  };

  const handleCreatePost = async () => {
    if (!isLoggedIn) {
      alert("Please log in first to create a post.");
      return;
    }

    if (!newPost.trim()) {
      alert("Please write something before posting.");
      return;
    }

    try {
      const res = await fetch("http://localhost:8080/api/posts/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: newTag,
          content: newPost,
          status: "published",
          author_id: currentUser._id,
        }),
      });

      const data = await res.json();
      console.log("Create post response:", data);

      if (data.result === 200) {
        setNewPost("");
        setNewTag("Experiences");
        fetchPosts();
      } else {
        alert("Failed to create post.");
      }
    } catch (err) {
      console.error("Error creating post:", err);
      alert("Something went wrong while creating the post.");
    }
  };

  const handleLikePost = async (postId) => {
    if (!isLoggedIn) {
      alert("Please log in first to like a post.");
      return;
    }

    try {
      const res = await fetch("http://localhost:8080/api/likes/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          post_id: postId,
          user_id: currentUser._id,
        }),
      });

      const data = await res.json();
      console.log("Like response:", data);

      fetchPosts();
    } catch (err) {
      console.error("Error liking post:", err);
    }
  };

  const filteredPosts =
    selectedTag === "All"
      ? posts
      : posts.filter((post) => post.title === selectedTag);

  const getRelativeTime = (date) => {
    const now = new Date();
    const diffMs = now - new Date(date);
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));

    if (diffHours < 24) {
      return new Date(date).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    }

    const diffDays = Math.floor(diffHours / 24);
    return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
  };

  return (
    <div className="fade-in" style={{ padding: "0px" }}>
      <Box sx={{ p: 3, maxWidth: "1000px", margin: "0 auto" }}>
        <Typography variant="h2" gutterBottom sx={{ fontWeight: 600, mt: 0 }}>
          Community
        </Typography>

        <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
          A safe place to share, ask, and celebrate.
        </Typography>

        <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", mb: 3 }}>
          {TAGS.map((tag) => (
            <Button
              key={tag}
              variant={selectedTag === tag ? "contained" : "outlined"}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </Button>
          ))}
        </Stack>

        {isLoggedIn && (
          <Card sx={{ mb: 4, borderRadius: 3 }}>
            <CardContent>

              <TextField
                multiline
                rows={3}
                fullWidth
                placeholder="Write your post here..."
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                sx={{ mb: 2 }}
              />

              <Stack direction="row" spacing={2}>
                <Select
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  size="small"
                >
                  {TAGS.filter((t) => t !== "All").map((tag) => (
                    <MenuItem key={tag} value={tag}>
                      {tag}
                    </MenuItem>
                  ))}
                </Select>

                <Button variant="contained" onClick={handleCreatePost}>
                  Post
                </Button>
              </Stack>
            </CardContent>
          </Card>
        )}

        <Stack spacing={2}>
          {filteredPosts.map((post) => (
            <Card key={post._id} sx={{ position: "relative", borderRadius: 3 }}>
              {post.image_url && (
                <CardMedia
                  component="img"
                  height="200"
                  image={post.image_url}
                  alt={post.title}
                />
              )}

              <Chip
                label={post.title || "Experiences"}
                size="small"
                sx={{
                  position: "absolute",
                  top: 12,
                  right: 12,
                  fontWeight: "bold",
                }}
              />

              <CardContent>
                <Typography variant="subtitle2" sx={{ color: "text.secondary", mb: 1 }}>
                  {post.author_id?.username || "Anonymous"} •{" "}
                  {getRelativeTime(post.created_at || post.createdAt)}
                </Typography>

                <Typography variant="body1">{post.content}</Typography>
              </CardContent>

              <Divider />

              <CardActions>
                <IconButton
                  disabled={!isLoggedIn}
                  onClick={() => handleLikePost(post._id)}
                >
                  <FavoriteIcon />
                </IconButton>

                <IconButton disabled={!isLoggedIn}>
                  <CommentIcon />
                </IconButton>
              </CardActions>
            </Card>
          ))}
        </Stack>
      </Box>
    </div>
  );
}