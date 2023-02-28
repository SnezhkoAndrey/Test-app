import { useEffect, useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../hooks/dispatchSelectorHooks";
import { setNewsData, loadingData, selectNews } from "../../redux/newsSlice";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Loader from "../../components/Loader";
import { useTranslation } from "react-i18next";
import NewsPost from "./components/NewsPost";

const News = () => {
  const { t } = useTranslation();

  const loading = useAppSelector(loadingData);

  const dispatch = useAppDispatch();
  const getNews = () => {
    dispatch(setNewsData());
  };

  const news = useAppSelector(selectNews);
  useEffect(() => {
    getNews();
  }, []);

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
        <NewsPost key={index} post={post} />
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
