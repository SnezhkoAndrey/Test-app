import { Box, Skeleton } from "@mui/material";

const Loader = () => {
  return (
    <Box sx={{ width: "100%", margin: "10px auto" }}>
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </Box>
  );
};

export default Loader;
