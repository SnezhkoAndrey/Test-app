export interface HTTPClientType {
  GET: (endpoint: string) => Promise<ResponseNewsType[]>;
}

export interface ResponseNewsType {
  date: string;
  description: string;
  title: string;
  url: string;
}

export interface SubmitType {
  username: string;
  password: string;
}
