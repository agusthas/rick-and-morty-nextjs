import createApolloClient from "@/lib/apollo-client";
import "@/styles/globals.scss";
import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { RecoilRoot } from "recoil";

const inter = Inter({ subsets: ["latin"] });

const client = createApolloClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <RecoilRoot>
        <div className={`${inter.className}`}>
          <Component {...pageProps} />
        </div>
      </RecoilRoot>
    </ApolloProvider>
  );
}
