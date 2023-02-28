import { Button, Link, Paper, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "../../../hooks/dispatchSelectorHooks";
import { removeNewsData } from "../../../redux/newsSlice";
import { ResponseNewsType } from "../../../types/types";

interface PropsType {
  post: ResponseNewsType;
}

const NewsPost = ({ post }: PropsType) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const removeNews = (title: string) => {
    dispatch(removeNewsData(title));
  };

  return (
    <Paper sx={{ padding: 2, width: "100%" }}>
      <Stack spacing={2}>
        <Link href={post.url} color="inherit" title="Learn more">
          <Typography
            variant="h5"
            component="div"
            fontSize={{ xs: 17, sm: 22, md: 22 }}
          >
            {post.title}
          </Typography>
        </Link>
        <Typography
          variant="h6"
          component="div"
          fontSize={{ xs: 15, sm: 20, md: 20 }}
        >
          {post.description}
        </Typography>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography
            variant="h6"
            component="div"
            fontSize={{ xs: 12, md: 15, sm: 15 }}
          >
            {post.date.split(" ").slice(0, 5).join(" ")}
          </Typography>
          <Button
            onClick={() => {
              removeNews(post.title);
            }}
            variant="text"
            sx={{ width: 150 }}
          >
            {t("news_delete")}
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default NewsPost;
