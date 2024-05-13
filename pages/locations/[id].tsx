import CharacterCard from "@/components/character-card";
import Layout from "@/components/layout";
import { locationListState } from "@/lib/atoms";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";

export default function LocationDetail() {
  const router = useRouter();
  const { id } = router.query as { id: string };

  const [locationList] = useRecoilState(locationListState);

  const location = locationList.filter((loc) => loc.uId === id);

  // if no location, redirect to 404 page
  if (location.length === 0) {
    return (
      <div>
        <p>No location found with the id of {id}.</p>
        <Link href="/locations">Go back to locations</Link>
      </div>
    );
  }

  return (
    <Layout>
      <h1 className="fw-bold lh-1">Location: {location[0].location}</h1>
      <div className="my-2">Characters:</div>
      <div className="row row-cols-1 row-cols-sm-2 g-2">
        {location.map((loc) => (
          <CharacterCard
            key={loc.id}
            name={loc.name}
            link={`/characters/${loc.id}`}
          />
        ))}
      </div>
    </Layout>
  );
}
