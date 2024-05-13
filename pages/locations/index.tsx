import ClientOnly from "@/components/client-only";
import Layout from "@/components/layout";
import { locationListState } from "@/lib/atoms";
import Link from "next/link";
import { useRecoilState } from "recoil";

export default function Locations() {
  const [locationList] = useRecoilState(locationListState);

  return (
    <Layout>
      <section className="py-3">
        <h1 className="fw-bold lh-1">Locations</h1>
        <ClientOnly>
          {locationList.length === 0 ? (
            <p>No locations added yet</p>
          ) : (
            <div className="row row-cols-1 row-cols-sm-2 py-4 g-2">
              {locationList
                .reduce(
                  (acc, location) =>
                    acc.find((l) => l.location === location.location)
                      ? acc
                      : [...acc, location],
                  [] as typeof locationList
                )
                .map((location) => (
                  <div key={location.uId} className="col">
                    <div className="card">
                      <div className="card-body">
                        <small className="d-block fw-bold">
                          {location.location}
                        </small>
                        <Link
                          className="stretched-link"
                          href={`/locations/${location.uId}`}
                        />
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </ClientOnly>
      </section>
    </Layout>
  );
}
