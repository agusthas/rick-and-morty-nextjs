import type { CodegenConfig } from "@graphql-codegen/cli";

const config = {
  schema: "https://rickandmortyapi.com/graphql",
  documents: ["**/*.{ts,tsx}"],
  generates: {
    "graphql/__generated__/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  ignoreNoDocuments: true,
} satisfies CodegenConfig;

export default config;
