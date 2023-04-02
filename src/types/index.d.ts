export type ScreenModeType = "dark" | "light";

export type LinkType = {
  name: string;
  href: string;
};

export type Page<T> = {
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
  results: Array<T>;
};

export type PageClient<T> = { page: number; results: Array<T> };
