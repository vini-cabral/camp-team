import type { AppProps } from "next/app";
// My Assets:
import "@/styles/config/preset.sass";
import "@/styles/globals.sass";
import AppProvider from "@/context/AppProvider";
import Layout from "@/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppProvider>
    </>
  );
}
