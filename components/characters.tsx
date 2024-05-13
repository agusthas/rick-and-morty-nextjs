import { useQuery } from "@apollo/client";

import { gql } from "../graphql/__generated__/gql";

import Link from "next/link";
import CharacterCard from "@/components/character-card";

const GET_ALL_CHARACTERS = gql(`
  query GetAllCharacters($page: Int!) {
    characters(page: $page) {
      results {
        id
        name
      }
    }
  }
`);

export default function Characters() {
  const { loading, error, data, fetchMore } = useQuery(GET_ALL_CHARACTERS, {
    variables: { page: 1 },
  });

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong</p>}
      {data &&
        data.characters &&
        data.characters.results &&
        data.characters.results.length > 0 && (
          <div className="row row-cols-1 row-cols-sm-2 py-4 g-2">
            {data.characters.results.map((character) => (
              <CharacterCard
                key={character!.id}
                name={character!.name!}
                link={`/characters/${character!.id}`}
              />
            ))}
            <div className="col-12 mt-4">
              <button
                className="btn btn-black"
                onClick={() => {
                  fetchMore({
                    variables: {
                      page: data.characters?.results
                        ? data.characters.results.length / 20 + 1
                        : 1,
                    },
                    updateQuery: (prev, { fetchMoreResult }) => {
                      if (!fetchMoreResult) return prev;
                      return {
                        characters: {
                          ...prev.characters,
                          results: [
                            ...prev.characters!.results!,
                            ...fetchMoreResult.characters!.results!,
                          ],
                        },
                      };
                    },
                  });
                }}
              >
                Load More
              </button>
            </div>
          </div>
        )}
    </>
  );
}
