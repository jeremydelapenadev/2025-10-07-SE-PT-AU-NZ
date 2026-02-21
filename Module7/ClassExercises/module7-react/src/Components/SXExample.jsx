import { Box } from "@mui/system";
// Customising style using sx prop
export default function SxExample() {
  return (
    <Box
      sx={{
        bgcolor: "#efefef",
        minWidth: 300,
        boxShadow: 1,
        borderRadius: 4,
        p: 2, // padding
      }}
    >
      <Box sx={{ color: "#55f", fontSize: "2em", textTransform: "uppercase" }}>
        Sessions
      </Box>
      <Box sx={{ color: "#333", fontSize: 34, fontWeight: "bold" }}>98.3 K</Box>
      <Box
        sx={{
          fontSize: 14,
          mx: 0.5, // horizontal margins
          display: "inline",
          fontWeight: "bold",
        }}
      >
        +18.77%
      </Box>
      <Box sx={{ color: "#999", display: "inline", fontSize: 14 }}>
        vs. last week
      </Box>
    </Box>
  );
}
