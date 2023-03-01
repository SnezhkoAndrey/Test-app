import { Button, Paper, Skeleton, Stack, Typography } from "@mui/material";

const Loader = () => {
  return (
    <Paper sx={{ padding: 2, width: "100%" }}>
      <Stack spacing={2}>
        <Typography>
          <Skeleton sx={{ transform: "none", height: 50 }} />
        </Typography>
        <Typography>
          <Skeleton sx={{ transform: "none", height: 50 }} />
        </Typography>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography>
            <Skeleton width={200} />
          </Typography>
          <Button sx={{ width: 150, padding: 0 }}>
            <Skeleton width={"100%"} />
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default Loader;
