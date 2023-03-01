import { useEffect } from "react";
import Header from "./components/Header";
import AppRoutes from "./AppRoutes";
import { Box, Container } from "@mui/material";
import { Stack } from "@mui/material";
import toast from "react-hot-toast";
import { styledError } from "./styles/styleError";
import { useAppSelector } from "./hooks/dispatchSelectorHooks";
import { selectError } from "./redux/newsSlice";

function App() {
  const error = useAppSelector(selectError);

  useEffect(() => {
    if (error) {
      toast.error(error, styledError);
    }
  }, [error]);

  return (
    <Box>
      <Header />
      <Container maxWidth="lg" sx={{ padding: 0 }}>
        <Stack
          textAlign={"center"}
          bgcolor={"#E5E5E5"}
          sx={{ minHeight: "calc(100vh - 64px)" }}
        >
          <AppRoutes />
        </Stack>
      </Container>
    </Box>
  );
}

export default App;
