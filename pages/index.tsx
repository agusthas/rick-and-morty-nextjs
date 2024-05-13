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
        <div className="row row-cols-2 row-cols-md-4 py-2 g-2">
          {Array.from({ length: 8 }).map((_, index) => (
            <div className="col" key={index}>
              <div className="card h-100">
                <img
                  src="https://via.placeholder.com/300"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <hr className="mt-0" />
                  <small className="d-block fw-block">Dr. Brunnstein</small>
                  <small className="card-text d-block mt-2">
                    Main characters
                  </small>
                  <a href="" className="stretched-link"></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
