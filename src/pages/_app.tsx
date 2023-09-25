import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { ChakraUiThemeProvider } from "@/styles/ChakraUiThemeProvider";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "@/services/query-client";
import Layout from "@/components/Layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress
        options={{
          showSpinner: false,
        }}
        color="white"
      />
      <QueryClientProvider client={queryClient}>
        <ChakraUiThemeProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraUiThemeProvider>
      </QueryClientProvider>
    </>
  );
}
