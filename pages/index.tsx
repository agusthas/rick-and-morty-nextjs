import Characters from "@/components/characters";
import ClientOnly from "@/components/client-only";
import Layout from "@/components/layout";
import Head from "next/head";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>R&M's | Characters</title>
      </Head>
      <section className="py-3">
        <h1 className="fw-bold m-0 lh-1">Characters</h1>
        <ClientOnly>
          <Characters />
        </ClientOnly>
      </section>
    </Layout>
  );
}
