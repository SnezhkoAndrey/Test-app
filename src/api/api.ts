import { HTTPClientType, ResponseNewsType } from "../types/types";

const HTTPClient = (): HTTPClientType => {
  const baseURL = process.env.REACT_APP_URL as string;
  const headers = {
    "X-RapidAPI-Key": process.env.REACT_APP_API as string,
    "X-RapidAPI-Host": "crypto-news16.p.rapidapi.com",
  };

  async function fetchJSON(
    endpoint: string,
    options = {}
  ): Promise<ResponseNewsType[]> {
    const response = await fetch(baseURL + endpoint, {
      ...options,
      headers,
    });

    const data = (await response.json()) as ResponseNewsType[];

    return data;
  }

  const GET = async (endpoint: string): Promise<ResponseNewsType[]> => {
    return await fetchJSON(endpoint, {
      method: "GET",
    });
  };

  return { GET };
};

export default HTTPClient;
