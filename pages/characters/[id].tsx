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
      <section className="container py-3">
        <Link href="/" className="mb-2 d-block">
          See all characters
        </Link>
        <ClientOnly>
          <CharacterDetail id={id} />
        </ClientOnly>
      </section>
    </Layout>
  );
}
