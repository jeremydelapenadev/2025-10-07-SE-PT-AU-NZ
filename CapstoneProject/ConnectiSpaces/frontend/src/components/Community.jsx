import React, { useState, useContext } from 'react';
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
  Alert,
  CardMedia,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import AddIcon from '@mui/icons-material/Add';
import { spaces } from '../assets/data';
import { UserFavourites } from '../context/UserFavourites';
import { userContext } from '../context/UserProvider';

const TAGS = ['All', 'Experiences', 'Tips', 'Questions', 'Celebrations', 'Resources'];

export default function Community({ isLoggedIn = false }) {
  const { favourites, addFavourite } = useContext(UserFavourites);
  const { currentUser } = useContext(userContext);

  const [selectedTag, setSelectedTag] = useState('All');
  const [newPost, setNewPost] = useState('');
  const [newTag, setNewTag] = useState('Experiences');
  const [posts, setPosts] = useState(
    spaces.map(space => ({
      id: space.id,
      author: space.author || 'Anonymous',
      content: space.description,
      tag: space.tags[0] || 'Experiences',
      createdAt: new Date(space.createdAt || Date.now()),
      likes: 0,
    }))
  );

  const handleCreatePost = () => {
    if (!newPost.trim()) return;
    const post = {
      id: Date.now(),
      author: currentUser ? currentUser.name : 'Current User',
      content: newPost,
      tag: newTag,
      createdAt: new Date(),
      likes: 0,
    };
    setPosts([post, ...posts]);
    setNewPost('');
  };

  const filteredPosts = selectedTag === 'All' ? posts : posts.filter(post => post.tag === selectedTag);

  const getRelativeTime = (date) => {
    const now = new Date();
    const diffMs = now - new Date(date);
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    if (diffHours < 24) {
      return new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
    const diffDays = Math.floor(diffHours / 24);
    return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
  };

  return (
    <Box sx={{ p: 3, maxWidth: '1000px', margin: '0 auto' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mt: 5, mb: 1 }}>Community</Typography>
      <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
        A safe place to share, ask, and celebrate.
      </Typography>

      {/* Filter Buttons */}
      <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', mb: 3 }}>
        {TAGS.map(tag => (
          <Button key={tag} variant={selectedTag === tag ? 'contained' : 'outlined'} onClick={() => setSelectedTag(tag)}>
            {tag}
          </Button>
        ))}
      </Stack>

      {/* Create Post */}
      {isLoggedIn && (
        <Card sx={{ mb: 4, borderRadius: 3 }}>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2 }}>Share something with the community</Typography>
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
              <Select value={newTag} onChange={(e) => setNewTag(e.target.value)} size="small">
                {TAGS.filter(t => t !== 'All').map(tag => (
                  <MenuItem key={tag} value={tag}>{tag}</MenuItem>
                ))}
              </Select>
              <Button variant="contained" onClick={handleCreatePost}>Post</Button>
            </Stack>
          </CardContent>
        </Card>
      )}

      {/* Posts List */}
      <Stack spacing={2}>
        {filteredPosts.map(post => (
          <Card key={post.id} sx={{ position: 'relative', borderRadius: 3 }}>
            {post.image && <CardMedia component="img" height="200" image={post.image} alt={post.author} />}
            <Chip label={post.tag} size="small" sx={{ position: 'absolute', top: 12, right: 12, fontWeight: 'bold' }} />
            <CardContent>
              <Typography variant="subtitle2" sx={{ color: 'text.secondary', mb: 1 }}>
                {post.author} • {getRelativeTime(post.createdAt)}
              </Typography>
              <Typography variant="body1">{post.content}</Typography>
            </CardContent>
            <Divider />
            <CardActions>
              <IconButton disabled={!isLoggedIn}><FavoriteIcon /></IconButton>
              <IconButton disabled={!isLoggedIn}><CommentIcon /></IconButton>
            </CardActions>
          </Card>
        ))}
      </Stack>
    </Box>
  );
}