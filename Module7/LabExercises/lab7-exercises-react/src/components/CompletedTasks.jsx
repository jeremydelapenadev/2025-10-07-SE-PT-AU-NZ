import { useState } from "react";
import {
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Button,
  Paper,
  Divider,
} from "@mui/material";

function CompletedTasks() {
  const [tasks, setTasks] = useState({
    ex1_1: true,
    ex1_2: true,
    ex2_1: true,
    ex2_2: false,
    ex3_1: true,
    ex3_2: true,
    ex4_1: true,
    ex4_2: true,
    ex4_3: true,
    ex5_1: true,
    ex5_2: true,
    ex5_3: false,
    ex5_4: false,
  });

  const handleChange = (event) => {
    setTasks({
      ...tasks,
      [event.target.name]: event.target.checked,
    });
  };

  const markAllComplete = () => {
    const updated = {};
    Object.keys(tasks).forEach((key) => {
      updated[key] = true;
    });
    setTasks(updated);
  };

  return (
    <Box display="flex" justifyContent="center" mt={11}>
      <Paper elevation={3} sx={{ p: 4, width: "800px" }}>
        <Typography variant="h4" gutterBottom>
          Module 7 Checklist
        </Typography>

        <FormGroup>
          {/* LAB EXERCISE 1 */}
          <Typography variant="h6" mt={2}>
            LAB EXERCISE 1
          </Typography>

          <FormControlLabel
            control={
              <Checkbox
                checked={tasks.ex1_1}
                onChange={handleChange}
                name="ex1_1"
              />
            }
            label="Complete BitcoinRates component to fetch and display BTC price."
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={tasks.ex1_2}
                onChange={handleChange}
                name="ex1_2"
              />
            }
            label="Use useEffect with cleanup and correct dependencies."
          />

          <Divider sx={{ my: 2 }} />

          {/* LAB EXERCISE 2 */}
          <Typography variant="h6">LAB EXERCISE 2</Typography>

          <FormControlLabel
            control={
              <Checkbox
                checked={tasks.ex2_1}
                onChange={handleChange}
                name="ex2_1"
              />
            }
            label="Refactor BitcoinRates to use a custom hook."
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={tasks.ex2_2}
                onChange={handleChange}
                name="ex2_2"
              />
            }
            label="Extension: Implement useReducer in custom hook."
          />

          <Divider sx={{ my: 2 }} />

          {/* LAB EXERCISE 3 */}
          <Typography variant="h6">LAB EXERCISE 3</Typography>

          <FormControlLabel
            control={
              <Checkbox
                checked={tasks.ex3_1}
                onChange={handleChange}
                name="ex3_1"
              />
            }
            label="Create emoji context for mood storage."
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={tasks.ex3_2}
                onChange={handleChange}
                name="ex3_2"
              />
            }
            label='Display emoji in BitcoinRates and update via "Change Mood".'
          />

          <Divider sx={{ my: 2 }} />

          {/* LAB EXERCISE 4 */}
          <Typography variant="h6">LAB EXERCISE 4</Typography>

          <FormControlLabel
            control={
              <Checkbox
                checked={tasks.ex4_1}
                onChange={handleChange}
                name="ex4_1"
              />
            }
            label="Create Home, Login, and Bitcoin Rates pages."
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={tasks.ex4_2}
                onChange={handleChange}
                name="ex4_2"
              />
            }
            label="Use existing components in each page."
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={tasks.ex4_3}
                onChange={handleChange}
                name="ex4_3"
              />
            }
            label="Include navbar for navigation."
          />

          <Divider sx={{ my: 2 }} />

          {/* LAB EXERCISE 5 */}
          <Typography variant="h6">LAB EXERCISE 5</Typography>

          <FormControlLabel
            control={
              <Checkbox
                checked={tasks.ex5_1}
                onChange={handleChange}
                name="ex5_1"
              />
            }
            label="Convert styling to MUI components."
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={tasks.ex5_2}
                onChange={handleChange}
                name="ex5_2"
              />
            }
            label="Use AppBar and MUI form components."
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={tasks.ex5_3}
                onChange={handleChange}
                name="ex5_3"
              />
            }
            label="Extension: Add PostList styled with MUI Cards and Grid."
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={tasks.ex5_4}
                onChange={handleChange}
                name="ex5_4"
              />
            }
            label="Extension: Create custom theme using createTheme."
          />
        </FormGroup>

        {/* <Box mt={3}>
          <Button variant="contained" fullWidth onClick={markAllComplete}>
            Mark All as Complete
          </Button>
        </Box> */}
      </Paper>
    </Box>
  );
}

export default CompletedTasks;
