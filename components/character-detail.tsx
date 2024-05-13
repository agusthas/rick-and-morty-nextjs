import LocationInputModal from "@/components/location-input-modal";
import { gql } from "@/graphql/__generated__";
import { locationListState } from "@/lib/atoms";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { Alert, Badge, Button, Form } from "react-bootstrap";
import { useRecoilState } from "recoil";

const GET_CHARACTER = gql(`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      gender
      episode {
        name
        episode
      }
      origin {
        name
      }
    }
  }
`);

export default function CharacterDetail({ id }: { id: string }) {
  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: { id },
  });
  const [show, setShow] = useState(false);
  const [locationList] = useRecoilState(locationListState);
  const characterLocation = locationList.find((loc) => loc.id === id);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong</p>}
      {data && data.character && (
        <div>
          <h1 className="fw-bold lh-1">{data.character.name}</h1>
          {characterLocation ? (
            <Alert variant="light">
              Location: {characterLocation.location}
              <Button className="btn-black ms-3" onClick={() => setShow(true)}>
                Change
              </Button>
            </Alert>
          ) : (
            <Button className="btn-black" onClick={() => setShow(true)}>
              Assign Location
            </Button>
          )}
          <LocationInputModal
            characterName={data.character!.name!}
            id={id}
            setShow={setShow}
            show={show}
            initialValue={characterLocation?.location}
          />
          <div className="d-flex align-items-center gap-4 mt-4">
            <div>
              <div className="text-secondary mb-0 fw-medium">Species</div>
              <span>{data.character.species}</span>
            </div>
            <div>
              <div className="text-secondary mb-0 fw-medium">Gender</div>
              <span>{data.character.gender || "-"}</span>
            </div>
            <div>
              <div className="text-secondary mb-0 fw-medium">Status</div>
              <Badge
                bg={data.character.status === "Alive" ? "success" : "danger"}
              >
                {data.character.status}
              </Badge>
            </div>
          </div>
          <div className="mt-2">
            <div className="text-secondary mb-0 fw-medium">Origin</div>
            <span className="fs-6">{data.character.origin?.name}</span>
          </div>
          <div className="mt-2">
            <div className="text-secondary mb-0 fw-medium">
              Is in Episode(s):{" "}
            </div>
            <ul>
              {data.character.episode.slice(0, 10).map((episode) => (
                <li key={episode!.name}>{episode!.name}</li>
              ))}
              {data.character.episode.length > 10 && <li>And more...</li>}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
