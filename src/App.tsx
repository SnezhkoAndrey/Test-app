import { useEffect } from "react";
import Header from "./components/Header";
import AppRoutes from "./AppRoutes";
import { Container } from "@mui/material";
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
    <Container maxWidth="lg" sx={{ padding: 0 }}>
      <Header />
      <Stack
        textAlign={"center"}
        bgcolor={"#E5E5E5"}
        sx={{ mt: 1, mb: 1, height: "content" }}
      >
        <AppRoutes />
      </Stack>
    </Container>
  );
}

export default App;
