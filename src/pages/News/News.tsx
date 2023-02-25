import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  getNewsData,
  loadingData,
  removeNewsData,
  selectNews,
} from "../../redux/newsSlice";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Loader from "../../components/Loader";
import { useTranslation } from "react-i18next";

const News = () => {
  const { t } = useTranslation();

  const loading = useAppSelector(loadingData);

  const dispatch = useAppDispatch();
  const getNews = () => {
    dispatch(getNewsData());
  };
  const removeNews = (title: string) => {
    dispatch(removeNewsData(title));
  };
  const news = useAppSelector(selectNews);
  useEffect(() => {
    getNews();
  }, []);
  console.log(news);

  const [showMore, setShowMore] = useState(false);

  const numberOfItems = showMore ? news.length : 3;

  return (
    <Stack
      direction={"column"}
      alignItems={"center"}
      spacing={2}
      sx={{ width: "80%", margin: "15px auto" }}
    >
      <Box>{loading ? <Loader /> : null}</Box>
      {news.slice(0, numberOfItems).map((post, index) => (
        <Paper key={index} sx={{ padding: 2, width: "100%" }}>
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
      ))}
      <Button
        onClick={() => {
          setShowMore((prev) => !prev);
        }}
        variant="text"
        sx={{ width: 150 }}
      >
        {showMore ? t("news_less") : t("news_more")}
      </Button>
    </Stack>
  );
};

export default News;
