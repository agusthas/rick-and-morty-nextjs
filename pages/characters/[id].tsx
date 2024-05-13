import CharacterDetail from "@/components/character-detail";
import ClientOnly from "@/components/client-only";
import Layout from "@/components/layout";
import Link from "next/link";
import { useRouter } from "next/router";

export default function CharacterDetailPage() {
  const router = useRouter();
  const { id } = router.query as { id: string };

  return (
    <Layout>
      <section className="py-3">
        <ClientOnly>
          <CharacterDetail id={id} />
        </ClientOnly>
      </section>
    </Layout>
  );
}
